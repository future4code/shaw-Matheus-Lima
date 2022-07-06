/*

CREATE TABLE IF NOT EXISTS labook_users(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
)

*/


export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
}