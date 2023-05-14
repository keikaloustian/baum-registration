import { NextResponse } from "next/server";
// import connection from "../../../utils/db";

const mysql = require("mysql2/promise");

// export const runtime = "edge";

// receive a POST request from the frontend
// save data to database
// let frontend know whether it worked or not

export async function POST(request: Request) {
  // Read request body
  const submittedData = await request.json();

  // Connect to db
  const connection = await mysql.createConnection(
    `mysql://${process.env.PLANETSCALE_DB_USERNAME}:${process.env.PLANETSCALE_DB_PASSWORD}@${process.env.PLANETSCALE_DB_HOST}/${process.env.PLANETSCALE_DB}?ssl={"rejectUnauthorized":true}`
  );

  // Query db with values from request payload
  const [rows, fields] = await connection.execute("SELECT * FROM registrants");

  console.log(rows, fields);

  return NextResponse.json(rows + fields);
}
