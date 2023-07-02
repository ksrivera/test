
import FAQ from "@/models/FAQ";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    //fetch 
     try {
        await connect();
        const faqs = await FAQ.find();
        return new NextResponse(JSON.stringify(faqs), { status: 200 });
    } catch (error) {
        return new NextResponse("Database error", error.message);
    } 

    //return new NextResponse('It works!', {status: 200})   
}

export const POST = async (request) => {
    try {
        await connect();
        
    } catch (error) {
        
    }
}