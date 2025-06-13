import router from '@adonisjs/core/services/router'

router.resource('/curso', '#controllers/cursos_controller').except(['edit', 'create'])