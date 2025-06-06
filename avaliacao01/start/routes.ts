/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/reservas_controller.listar')
router.post('/', '#controllers/reservas_controller.cadastrar')
router.delete('/:id', '#controllers/reservas_controller.remover')
router.put('/:id', '#controllers/reservas_controller.alterar')
router.patch('/:id', '#controllers/reservas_controller.alterar')
