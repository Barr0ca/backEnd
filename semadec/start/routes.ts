/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', '#controllers/equipes_controller.index')
router.get('/:id', '#controllers/equipes_controller.indexById')
router.post('/', '#controllers/equipes_controller.create')
router.put('/:id', '#controllers/equipes_controller.update')
router.delete('/:id', '#controllers/equipes_controller.delete')
