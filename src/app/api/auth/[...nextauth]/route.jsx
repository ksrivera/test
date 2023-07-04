import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";

import Email from "next-auth/providers/email"
import bcrypt from 'bcryptjs'

//Prisma
import client from "@/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOptions = {
    adapter: PrismaAdapter(client),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        Email({
            server: {
              host: process.env.SMTP_HOST,
              port: Number(process.env.SMTP_PORT),
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
              },
            },
            from: process.env.EMAIL_FROM,
          }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'text', placeholder: 'jsmith'},
                password: {label: 'Password', type: 'password'},
                username: {label: 'Username', type: 'text', placeholder: 'John Smith'},
            },
            async authorize(credentials, req) {
                //check to see if email and password are there
                if (!credentials.email || !credentials.password){
                    throw new Error('Please enter a valid email and password!');
                }

                const user = await client.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                //if no user was found
                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found');
                }

                //check to see if the password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

                //if the password does not match
                if (!passwordMatch){
                    throw new Error('Incorrect password');
                }

                return user;
            },
        }),
    ],

    secret: process.env.SECRET,
    session: {
        strategy: 'jwt',
    },

    debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

/* const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({email: credentials.email});

                    if(user) {
                        //check password
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if(isPasswordCorrect) {
                            return user
                        } else {
                            throw new Error('Incorrect password or email');
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    
                }
            }

        })
    ],
    pages: {
        error: '/dashboard/login',
    }
}) */

