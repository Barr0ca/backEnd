import router from '@adonisjs/core/services/router'

router.get('/salas', '#controllers/salas_controller.index')
router.post('/salas', '#controllers/salas_controller.store')
router.delete('/salas/:id', '#controllers/salas_controller.delete')
router.put('/salas/:id', '#controllers/salas_controller.update')

router.get('/horarios', '#controllers/horarios_controller.index')
router.post('/horarios', '#controllers/horarios_controller.store')
router.delete('/horarios/:id', '#controllers/horarios_controller.delete')
router.put('/horarios/:id', '#controllers/horarios_controller.update')
