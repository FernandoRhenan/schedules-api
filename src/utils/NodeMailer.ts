import 'dotenv/config'
import nodemailer from 'nodemailer'

export class NodeMailer {

    private transportData = {
        host: process.env.MAILER_HOST,
        port: Number(process.env.MAILER_PORT),
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS
        }
    }
    private emailSender = process.env.EMAIL_SENDER

    private create_transport() {
        return nodemailer.createTransport(this.transportData)
    }

    async send_email(to: string, subject: string, text: string, html: string) {
        let info = await this.create_transport().sendMail({
            from: this.emailSender,
            to,
            subject,
            text,
            html
        });
        return info
    }


}
