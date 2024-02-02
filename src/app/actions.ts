"use server";

import { connectionPool } from "./db";

export async function someDBAction() {
  return new Promise((res, rej) => {
    connectionPool.use(async (connection) => {
      connection.execute({
        sqlText: "SELECT 1 + 1",
        complete(err, stmt, rows) {
          if (err) {
            rej(err);
            return;
          }
          if (rows === undefined) {
            rej(new Error("Rows undefined"));
            return;
          }
          res(rows);
        },
      });
    });
  });
}
