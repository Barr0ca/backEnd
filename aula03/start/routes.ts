/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/todos_controller.index')
router.post('/', '#controllers/todos_controller.create')
router.delete('/:id', '#controllers/todos_controller.delete')
router.get('/:id', '#controllers/todos_controller.indexById')
router.put('/:id', '#controllers/todos_controller.update')
router.put('/:id/alterar', '#controllers/todos_controller.updateFlag')

