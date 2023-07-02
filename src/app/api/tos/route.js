import ToS from "@/models/ToS";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    //fetch 
     try {
        await connect();
        const termsServices = await ToS.find();
        return new NextResponse(JSON.stringify(termsServices), { status: 200 });
    } catch (error) {
        return new NextResponse("Database error: ", error.message);
    } 

    //return new NextResponse('It works!', {status: 200})   
}