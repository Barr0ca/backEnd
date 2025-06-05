import vine from '@vinejs/vine'


export const createPostValidator = vine.compile(
  vine.object({
    nome: vine.string().minLength(3),
    descricao: vine.string().minLength(10),
  })
)

export const updatePostValidator = vine.compile(
  vine.object({
    nome: vine.string().minLength(3),
    descricao: vine.string().minLength(10),
  })
)