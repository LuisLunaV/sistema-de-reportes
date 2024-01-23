import express, { Application } from "express";
import cors from "cors";
import hbs from "hbs";
import path from 'path';

import { loginRouter,registerRouter, homeRouter } from '../routers/render/index.routes';

import usersRouter from "../routers/users";

class Server {
  private app: Application;
  private port: string;
  private pages = {
    login: "/login",
    register: "/register",
    home: "/home"
  }

  private apiPaths = {
    users: "/api/v1/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.middlewares();
    this.router();
    this.render();

    this.handlebars();
  }

  handlebars(){
    this.app.set('view engine', 'hbs');
     //Establecemos la ubicacion de los archivos de partials
     const filePath = path.resolve(__dirname, '../views/partials');
     hbs.registerPartials( filePath )
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura y paseo del body
    this.app.use(express.json());

     //Directorios publicos para servir archivos estáticos
     this.app.use( express.static('public'));
     this.app.use( express.static('src'));
  }

  render(){
    this.app.use( this.pages.login, loginRouter);
    this.app.use( this.pages.register, registerRouter );
    this.app.use( this.pages.home, homeRouter);
  }

  router() {
    this.app.use(this.apiPaths.users, usersRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado:${this.port}`);
    });
  }
}

export default Server;
