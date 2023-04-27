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
    "descriptionProduct" VARCHAR(1000) NOT NULL,
    "photoProduct" VARCHAR(100) NOT NULL,
    price  INT NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    "createDate" TIMESTAMP DEFAULT now() NOT NULL,
    "orderStatus" VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS photo (
    id SERIAL PRIMARY KEY,
    "namePhoto" VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS productPhoto (
    "productId" INT NOT NULL,
    "photoId" INT NOT NULL,
    FOREIGN KEY ("productId") REFERENCES product (id) ON DELETE CASCADE,
    FOREIGN KEY ("photoId") REFERENCES photo (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS orderProduct (
    "orderId" INT NOT NULL,
    "productId" INT NOT NULL,
    FOREIGN KEY ("orderId") REFERENCES orders (id) ON DELETE CASCADE,
    FOREIGN KEY ("productId") REFERENCES product (id) ON DELETE CASCADE
);

INSERT INTO product  ("nameProduct", "descriptionProduct", "photoProduct", price, quantity)
VALUES
('iPhone 6', 'Apple', 'http:\\photo.jpeg', 312, 3),
('Galaxy S8', 'Samsung', 'http:\\photo.jpeg', 2343, 4),
('Galaxy S8 Plus', 'Samsung', 'http:\\photo.jpeg', 134, 5);


