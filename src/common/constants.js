import categories from "../data/categories.csv";
import customers from "../data/customers.csv";
import employees from "../data/employees.csv";
import employeeTerriotory from "../data/employee_territories.csv";
import products from "../data/products.csv";

export const Query_MAP = {
  "select * from categories": "categories.csv",
  "select * from customers": "customers.csv",
  "select * from employee": "employees.csv",
  "select * from employeeTerritory": "employeeTerritory.csv",
  "select * from products": "products.csv",
};

export const File_MAP = {
  "categories.csv": categories,
  "customers.csv": customers,
  "employees.csv": employees,
  "employeeTerritory.csv": employeeTerriotory,
  "products.csv": products,
};
