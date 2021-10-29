import asyncHandler from 'express-async-handler'
import { sendEmail as send } from '../utilities/sendEmail'
import { Request, Response } from 'express'

// @desc    Send Contact Form email
// @route   POST /api/contact/email
// @access  Public
export const sendEmail = asyncHandler(async (req: Request, res: Response) => {
  const {
    name,
    subject,
    message,
  }: {
    name: string
    subject: string
    message: string
  } = req.body

  try {
    await send(name, subject, message)
    res.status(201).json({ emailSent: true })
  } catch {
    res.status(400)
    throw new Error('Could not send email. Please try again.')
  }
})
