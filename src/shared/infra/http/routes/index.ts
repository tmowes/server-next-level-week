import { Router } from 'express'

import usersRoutes from '@modules/users/infra/http/routes/user.route'

const routes = Router()

routes.use('/users', usersRoutes)

export default routes
