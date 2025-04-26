import type { HttpContext } from '@adonisjs/core/http'

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
    let idDeletar = contexto.request.param('id')
  }
}
