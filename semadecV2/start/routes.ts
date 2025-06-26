import router from '@adonisjs/core/services/router'

router.resource('/curso', '#controllers/cursos_controller').except(['edit', 'create'])
router.resource('/equipe', '#controllers/equipes_controller').except(['edit', 'create'])

router.post('/equipe/:id/associar-atletas', '#controllers/equipes_controller.associarAtleta')

router.resource('/atleta', '#controllers/atletas_controller').except(['edit', 'create'])
