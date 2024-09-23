import dbConnect from "@/app/lib/dbconnect";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {}
}
export async function POST() {
  await dbConnect();
  
}
