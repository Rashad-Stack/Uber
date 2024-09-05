// @ DATABASE CREDENTIALS
// ? fikefineaw.kyp.889.2@googlemail.com
// ? Rashad8924

import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function POST(req: Request) {
  try {
    const { name, email, clerkId } = await req.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const response = await sql`
    INSERT INTO users (name, email, clerk_id)
    VALUES (${name}, ${email}, ${clerkId})
    `;

    return new Response(JSON.stringify({ data: response }), { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(error, { status: 500 });
  }
}
