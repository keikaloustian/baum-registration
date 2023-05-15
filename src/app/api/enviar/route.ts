import { NextResponse } from "next/server";

import mysql from "mysql2/promise";

// Configuration to use edge runtime (Causing Module not found errors in mysql2)
// export const runtime = "edge";

export async function POST(request: Request) {
  // Read request body
  const submittedData = await request.json();
  console.log("payload:" + Object.values(submittedData));

  // Connect to db
  const connection = await mysql.createConnection(
    `mysql://${process.env.PLANETSCALE_DB_USERNAME}:${process.env.PLANETSCALE_DB_PASSWORD}@${process.env.PLANETSCALE_DB_HOST}/${process.env.PLANETSCALE_DB}?ssl={"rejectUnauthorized":true}`
  );

  // const [rows, fields] = await connection.execute("SELECT * FROM registrants");

  // Query db with values from request payload
  const [rows, fields] = await connection.query(
    "INSERT INTO registrants (nombre, celular, email, opcion, respuestasCorrectas) VALUES (?, ?, ?, ?, ?);",
    Object.values(submittedData)
  );

  // End connection
  connection.end();

  // How to let frontend know whether it worked or not?

  // console.log(process.env);

  console.log(rows, fields);
  return NextResponse.json(rows);
}
