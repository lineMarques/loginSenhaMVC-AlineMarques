import { buscarUserPorId, buscarIndexUserPorId, getUsers } from "../database/conexao.js";

class LoginController {
  index(req, res) {
    res.status(200).send(getUsers());
  }

  show(req, res) {
    let user = buscarUserPorId(req.params.id);
    c;
    res.status(200).json(user);
  }

  store(req, res) {
    getUsers().push(req.body);
    res.status(201).send("User cadastrado com sucesso");
  }

  update(req, res) {
    let indexUser = buscarIndexUserPorId(req.params.id);
    let users = getAutors();
    users[indexUser].nome = req.body.nome;
    users[indexUser].login = req.body.login;
    res.status(200).json(users[indexUser]);
  }

  delete(req, res) {
    let indexUser = buscarIndexUserPorId(req.params.id);
    getUsers().splice(indexUser, 1);
    res.status(200).send(`User ${req.params.id} excluído com sucesso!`);
  }
}

export default new LoginController();
