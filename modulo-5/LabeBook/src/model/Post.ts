// id VARCHAR(255) PRIMARY KEY,
// photo VARCHAR(255) NOT NULL,
// description VARCHAR(255) NOT NULL,
// type ENUM ("normal", "event") DEFAULT "normal",
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// author_id VARCHAR(255),
// FOREIGN KEY (author_id) REFERENCES labook_users(id)

import { POST_ROLES } from "../types/createDTO";


export default class Post{
    constructor(
        private id:string,
        private photo:string,
        private description:string,
        private type:POST_ROLES,
        private author_id:string
        ){}

}