# Fastify-React-E-Menu
It is an Editable menu in which you can create, modify and delete items. In more technical terms it is a Fullstack CRUD application made using React, Redux, Fastify and MongoDB 

<p align="center">
  <img src="https://github.com/AwesomeChap/Fastify-React-E-Menu/blob/master/src/finalx3.gif" width="800" />
</p>

## Usage

* Create a Project on MongoAtlas and thereafter create a clusture. Now, click on connect and create a user, then add your ip address next step. Now just click on connect your application and use the generated key of mongo database in file where you are connecting to MongoDB. 

* Open `.env` file present at root directory and replace `<USER_PASSWORD>` with your password that you created while creating cluster.

```javascript
  NODE_ENV=development
  MONGO_ATLAS_PW=<USER_PASSWORD>
```

* now you just need to do `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Builds and Hot reloads the react app in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.


### `npm start`

Starts the react app hosted on node server in production environment.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tutorial on Medium
* [Part 1](https://medium.com/@jatin15011999/fullstack-crud-application-using-fastify-react-redux-mongodb-part-1-9e8df39c6fff) - Static implementation of app using React and Redux.
* [Part 2](https://medium.com/@jatin15011999/fullstack-crud-application-using-fastify-react-redux-mongodb-part-2-cc37ea4187ff) - Making changes persistant using Fastify and MongoDB.

