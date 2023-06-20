import nodemailer from 'nodemailer';
import { EmailRepository } from '../EmailRepository';
import { EMAIL_CONFIG } from '../../utils/enviroments';

export class EmailSender implements EmailRepository {

  createTransporter() {
    const transporter = nodemailer.createTransport({
      host: EMAIL_CONFIG.HOST,
      port: 587,
      secure: false,
      auth: {
        user: EMAIL_CONFIG.AUTH_EMAIL,
        pass: EMAIL_CONFIG.AUTH_PASS
      }
    })

    return transporter
  }

  async verifyTransporter() {
    const transporter = this.createTransporter();

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        return
      }

      console.log("Servidor funcionando para o envio de e-mails");
    });
  }

  async sendCodeEmail(email: string, cod: string, subject: string, html: string, text: string) {
    try {
      const transporter = this.createTransporter();

      const mailOptions: nodemailer.SendMailOptions = {
        from: `${EMAIL_CONFIG.AUTH_USERNAME} <${EMAIL_CONFIG.AUTH_EMAIL}>`,
        to: email,
        subject: subject,
        html: html,
        text: text
      }

      await transporter.sendMail(mailOptions);
      return true
    } catch (error) {
      console.log('Ocorreu um erro ao enviar e-mail:', error)
      return false
    }
  }
}