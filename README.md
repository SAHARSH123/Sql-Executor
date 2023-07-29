# SQL Executor

## About

- Its a sql executor which can execute predefined sql listed at bottom as it doesn't have any backend.

## Features
- We have a predefined set of sql to run on the editor.
- Once run we can see the results of each query.
- On Click of accordian we can see the table corresponding to that query.
- We have download button through which we can download CSV of that table.

## Predefine SQLS

- select \* from categories
- select \* from customers
- select \* from employee
- select \* from employeeTerritory
- select \* from products

## Tech

Dillinger uses a number of open source projects to work properly:

- [ReactJs](https://react.dev/) - Web application Library
- [Ace Editor](https://www.npmjs.com/package/react-ace) - awesome web-based text editor
- [Papa-Parse](https://www.npmjs.com/package/papaparse) - Papa Parse is the fastest in-browser CSV (or delimited text) parser for JavaScript.
- [react-accessible-accordion](https://www.npmjs.com/package/react-accessible-accordion) - Accordian component for react
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) - For showing loader
- [react-table](https://www.npmjs.com/package/react-table) - Used for table pagination features
- [react-json-to-csv](https://www.npmjs.com/package/react-json-to-csv) - A react button component to easily generate csv downloads of your json data.



## Installation

SQL Executor requires [Node.js](https://nodejs.org/)

Install the dependencies and devDependencies and start the server.

```sh
cd sql-executor
npm i
npm start

You can access webiste on http://localhost:3000/
```
