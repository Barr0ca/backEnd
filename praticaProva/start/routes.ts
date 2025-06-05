import router from '@adonisjs/core/services/router'

router.get('/produtos/', '#controllers/produtos_controller.index')
router.get('/produtos/:id', '#controllers/produtos_controller.show')
router.post('/produtos/', '#controllers/produtos_controller.store')
router.put('/produtos/:id', '#controllers/produtos_controller.update')
router.delete('/produtos/:id', '#controllers/produtos_controller.destroy')

router.get('/categorias/', '#controllers/categorias_controller.index')
router.get('/categorias/:id', '#controllers/categorias_controller.show')
router.post('/categorias/', '#controllers/categorias_controller.store')
router.put('/categorias/:id', '#controllers/categorias_controller.update')
router.delete('/categorias/:id', '#controllers/categorias_controller.destroy')
