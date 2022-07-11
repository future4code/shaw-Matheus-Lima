import Knex from "knex"
import dotenv from "dotenv"
dotenv.config()

export class BaseDatabase {
    private static connection = Knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_SCHEMA,
            password: process.env.DB_PASSWORD,
            port: 3306,
            multipleStatements: true
        }
    })
    protected getConnection() {
        return BaseDatabase.connection
    }
}