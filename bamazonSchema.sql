CREATE DATABASE bamazon;

Use bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10, 2) default 0,
stock_quantity INT default 0,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 8.50, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Clothing", 12.50, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Television", "Electronics", 650.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone", "Electronics", 200.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tesla Coupe", "Auto", 50000.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ford Mustang", "Auto", 30000.00, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung S8", "Electronics", 250.00, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nachos", "Food", 1.50, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 2.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Food", 3.00, 30);