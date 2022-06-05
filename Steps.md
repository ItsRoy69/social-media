Social Media Webapp


Through this website we'll learn about 
```
. ReactJS
. CSS
. Controlled Input Forms
. Redux
. React router v6
. MongoDB
. ExpressJs
. NodeJs
. JWT Authentication
```

```
- npx create-react-app client
- mkdir server
- cd server
- npm init
- npm i express
- npm i mongoose
- npm i body-parser
- npm i nodemon
```

Changing "package.json"

```
  {
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", 
  "scripts": {
      "teststart": "echo \"Error: no test specified\" && exit 1"
   },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mongoose": "^6.3.5",
    "nodemon": "^2.0.16"
  }
}


```
to

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",  
  "type": "module",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.0",
    "express": "^4.18.1",
    "mongoose": "^6.3.5",
    "nodemon": "^2.0.16"
  }
}

```