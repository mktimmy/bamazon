DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE inventory(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO inventory(item_name, department, price, stock_quantity)
VALUES("shampoo", "beauty", 10, 3),
    ("cereal", "groceries", 100, 5)
    ("computer", "electronics", 1000, 5)