import { NextResponse } from "next/server";

import mysql from "mysql2/promise";

// Configuration to use edge runtime (Causing Module not found errors in mysql2)
// export const runtime = "edge";

export async function POST(request: Request) {
  // Read request body
  const submittedData = await request.json();
  // console.log("payload:" + Object.values(submittedData));

  try {
    // Connect to db
    const connection = await mysql.createConnection(
      `mysql://${process.env.PLANETSCALE_DB_USERNAME}:${process.env.PLANETSCALE_DB_PASSWORD}@${process.env.PLANETSCALE_DB_HOST}/${process.env.PLANETSCALE_DB}?ssl={"rejectUnauthorized":true}`
    );

    // const [rows, fields] = await connection.execute("SELECT * FROM registrants");

    // Query db with values from request payload
    const [rows, fields] = await connection.execute(
      "INSERT INTO registrants (nombre, celular, email, opcion, respuestasCorrectas) VALUES (?, ?, ?, ?, ?);",
      Object.values(submittedData)
    );

    // End connection
    connection.end();

    // Report success
    // console.log("Database query successful\n" + JSON.stringify(rows));
    return NextResponse.json({ message: "Success", status: 200 });
  } catch (error) {
    // Report failure
    // console.log("Database error\n" + error);
    return NextResponse.json({ message: "Failure", status: 500 });
  }

  // console.log(process.env);
}
