import asyncHandler from 'express-async-handler'
import sendEmail from '../utilities/sendEmail'
import { Request, Response } from 'express'

// @desc    Send Contact Form email
// @route   POST /api/contact/email
// @access  Public
export const sendContactEmail = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      email,
      subject,
      message,
    }: {
      name: string
      email: string
      subject: string
      message: string
    } = req.body

    try {
      await sendEmail(name, email, subject, message)
      res.status(201).json({ emailSent: true })
    } catch {
      res.status(400)
      throw new Error('Could not send email. Please try again.')
    }
  }
)
