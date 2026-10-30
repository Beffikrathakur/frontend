import { NextResponse } from "next/server";  
export async function GET() {  
  const samplePosts = [{ id: 1, title: "Hello World", author: "Admin" }];  
  return NextResponse.json(samplePosts);  
} 
