import mysql from "mysql"

export const db = mysql.createConnection({
    host:"database-2.cpbzieautzph.us-east-1.rds.amazonaws.com",
    user:"admin",
    password:"CleverHealth1",
    database:"health"
})