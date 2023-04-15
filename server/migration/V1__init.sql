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
    price  INT NOT NULL,
    quantity INT NOT NULL,
);

CREATE TABLE IF NOT EXISTS order (
    id SERIAL PRIMARY KEY,
    "createDate" TIMESTAMP DEFAULT now() NOT NULL,
    "orderStatus" VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS photo (
    id SERIAL PRIMARY KEY,
    "namePhoto" VARCHAR(50) NOT NULL,
);

CREATE TABLE IF NOT EXISTS product-photo (
    "productId" INT NOT NULL,
    "photoId" INT NOT NULL,
    FOREIGN KEY ("productId") REFERENCES product (id) ON DELETE CASCADE,
    FOREIGN KEY ("photoId") REFERENCES photo (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS order_product (
    "orderId" INT NOT NULL,
    "productId" INT NOT NULL,
    FOREIGN KEY ("orderId") REFERENCES order (id) ON DELETE CASCADE,
    FOREIGN KEY ("productId") REFERENCES product (id) ON DELETE CASCADE
);

INSERT INTO Products  (nameProduct, descriptionProduct, price, quantity)
VALUES
('iPhone 6', 'Apple', 312, 3),
('Galaxy S8', 'Samsung', 2343, 4),
('Galaxy S8 Plus', 'Samsung', 134, 5);


