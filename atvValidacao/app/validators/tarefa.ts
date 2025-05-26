import vine from '@vinejs/vine'

export const createTarefaValidator = vine.compile(
  vine.object({
    tarefa: vine.string().minLength(3),
  })
)

export const updateTarefaValidator = vine.compile(
  vine.object({
    tarefa: vine.string().minLength(3),
  })
)