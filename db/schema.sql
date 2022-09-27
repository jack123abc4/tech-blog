DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    date_created DATETIME NOT NULL,
    user_id INT,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE SET NULL

);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    body TEXT NOT NULL,
    date_created DATETIME NOT NULL,
    post_id INT,
    user_id INT,

    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE SET NULL,

    FOREIGN KEY(post_id)
    REFERENCES posts(id)
    ON DELETE SET NULL

);