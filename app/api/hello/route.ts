import { NextResponse } from "next/server";

export async function GET() {
    // Read APP_ENV at runtime - defaults to "development" if not set
    const environment = process.env.APP_ENV || "development";

    return NextResponse.json({
        message: `Hello from ${environment}`,
        timestamp: new Date().toISOString(),
    });
}