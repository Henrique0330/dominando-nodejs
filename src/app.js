import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

// camada que se adiciona entre a requisição e a resposta, ou seja, é um código que é executado antes de chegar na rota, ou seja, antes de chegar no controller. Exemplo: autenticação, validação, etc.
