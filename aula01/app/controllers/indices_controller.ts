import { HttpContext } from '@adonisjs/core/http'
import { send } from 'process'

const lista = []
let id = 1

export default class IndicesController {
  index() {
    return lista
  }

  criar(contexto: HttpContext) {
    let nome = contexto.request.input('nome')
    let conteudo = {
      id: id++,
      nome: nome,
    }
    lista.push(conteudo)
    return conteudo
  }

  deletar(contexto: HttpContext) {
    let idDeletar = Number(contexto.request.param('id'))
    const valor = lista.findIndex(item => item.id === idDeletar)

    if (valor === -1) {
      return contexto.response.status(404).send('Valor não encontrado')
    }

    lista.splice(valor, 1)
    return contexto.response.status(202).send('Usuário de id ' + idDeletar + ' foi deletado.')
  }
}
