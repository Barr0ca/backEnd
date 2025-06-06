/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/salas', '#controllers/salas_controller.index')
router.post('/salas', '#controllers/salas_controller.store')
router.delete('/salas/:id', '#controllers/salas_controller.delete')
router.put('/salas/:id', '#controllers/salas_controller.update')

router.get('/disponibilidades', '#controllers/disponibilidades_controller.index')
router.post('/disponibilidades', '#controllers/disponibilidades_controller.store')
router.delete('/disponibilidades/:id', '#controllers/disponibilidades_controller.delete')
router.put('/disponibilidades/:id', '#controllers/disponibilidades_controller.update')
