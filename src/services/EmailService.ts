export interface EmailService {
  verifyTransporter(): void;
  sendCodeEmail(email: string, cod: string, subject: string, html: string, text: string): Promise<boolean>;
}