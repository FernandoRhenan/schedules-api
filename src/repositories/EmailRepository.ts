import { Transporter } from 'nodemailer';

export interface EmailRepository {
  createTransporter(): Transporter;
  verifyTransporter(): void;
  sendCodeEmail(email: string, cod: string, subject: string, html: string, text: string): Promise<boolean>;
}



