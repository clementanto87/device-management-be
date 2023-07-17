# Crud App

- A simple crud app using **Node.js** and **Express.js**.

## Project Setup

```
npm init
```

- It is used to setup a new npm package.

```
npm install express body-parser
```

- **Express**: Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily.

- **Body Parser**: Express body-parser is an npm library used to process data sent through an HTTP request body.

```
npm install -D nodemon
```

- **Nodemon**: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- **-D** is shorthand for devDependencies. Dev dependencies are modules which are only required during development whereas dependencies are required at runtime.

### Package.json file

- In package.json file, write below command inside the **scripts** object. So, when you run the server using **npm start** it will run index.js file using nodemon.

```
"scripts": {
    "start": "nodemon index.js"
}
```

### Run the Server

```
npm start
```

You can read full article on [Medium](https://medium.com/@jenilgajjar/crud-operation-using-node-js-and-express-js-a0d63a2216aa)
