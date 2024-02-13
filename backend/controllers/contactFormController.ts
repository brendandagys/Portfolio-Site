import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { PublishCommand, SNSClient } from '@aws-sdk/client-sns';

const snsClient = new SNSClient();

const publishToSnsTopic = async (message: string, topicArn: string) => {
  console.log(await snsClient.config.region());
  console.log(await snsClient.config.credentials());
  const response = await snsClient.send(
    new PublishCommand({ TopicArn: topicArn, Message: message })
  );

  return response;
};

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
      name: string;
      email: string;
      subject: string;
      message: string;
    } = req.body;

    try {
      // await sendEmail(name, email, subject, message);
      await publishToSnsTopic(JSON.stringify({ name, email, subject, message }), process.env.MY_SITE_SNS_TOPIC_ARN || '');
      res.status(201).json({ emailSent: true });
    } catch (e) {
      console.log("Error sending message:", e);
      res.status(400);
    }
  }
);
