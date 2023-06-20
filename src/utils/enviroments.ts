import dotenv from "dotenv";
dotenv.config();

export const PORT_API = process.env.PORT || 3000;

export const EMAIL_CONFIG = {
  // SMTP utilizado da outlook
  HOST: process.env.HOST_EMAIL || 'smtp.office365.com',
  // Email para autenticação
  AUTH_EMAIL: process.env.AUTH_EMAIL,
  // Senha para autenticação
  AUTH_PASS: process.env.AUTH_PASS_EMAIL,
  // Username para o envio
  AUTH_USERNAME: process.env.AUTH_USERNAME_EMAIL
}
