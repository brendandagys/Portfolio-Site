import { Router } from 'express'
const router = Router()

import { sendEmail } from '../controllers/contactFormController'

router.route('/').post(sendEmail)

export default router
