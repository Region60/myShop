CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    "userName" VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    "userPassword" VARCHAR(100) NOT NULL,
    roles VARCHAR(12) NOT NULL DEFAULT 'unconfirmed',
    "registerDate" TIMESTAMP DEFAULT now() NOT NULL,
    "confirmRegister" VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS product (
    id SERIAL PRIMARY KEY,
    "nameProduct" VARCHAR(100) NOT NULL,
    price  INT NOT NULL,
    quantity INT NOT NULL,
    photoProduct VARCHAR(200) NOT NULL

);

CREATE TABLE IF NOT EXISTS order (
    id SERIAL PRIMARY KEY,
    "createDate" TIMESTAMP DEFAULT now() NOT NULL,
    "creatorId" INT NOT NULL,
);


