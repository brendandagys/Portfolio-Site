import { Router } from 'express'
const router = Router()

import { sendContactEmail } from '../controllers/contactFormController'

router.route('/').post(sendContactEmail)

export default router
