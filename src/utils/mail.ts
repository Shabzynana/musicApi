
import nodemailer from "nodemailer";
import config from "../config";
import { ServerError } from "../middlewares";
import log from "./logger";

const Sendmail = async (emailcontent: unknown) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: config.SMTP_USER,
      pass: config.SMTP_PASSWORD,
    },
  });
  try {
    await transporter.sendMail(emailcontent);
    return "Email sent successfully.";
  } catch (error) {
    log.error(error);
    throw new ServerError(error);
  }
};

export { Sendmail };

