CREATE TABLE Users (
id VARCHAR(255) PRIMARY KEY  ,
name VARCHAR(255) NOT  NULL,
nickname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT  NULL
);


SELECT * FROM TodoListTask;
DROP TABLE to_do_users_task;

CREATE TABLE TodoListTask (
	id INT PRIMARY KEY auto_increment, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id varchar(255) NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES Users(id)
);

CREATE TABLE to_do_assigness(
task_id VARCHAR(255),
assignee_id VARCHAR(255),
PRIMARY KEY (task_id, assignee_id),
FOREIGN KEY (task_id) REFERENCES to_do_users_task(id),
FOREIGN KEY (assignee_id) REFERENCES Users(id)
);