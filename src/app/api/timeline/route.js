import Timeline from "@/models/Timeline";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    //fetch 
     try {
        await connect();
        const timeline = await Timeline.find();
        return new NextResponse(JSON.stringify(timeline), { status: 200 });
    } catch (error) {
        return new NextResponse("Database error: ", error.message);
    } 

    //return new NextResponse('It works!', {status: 200})   
}