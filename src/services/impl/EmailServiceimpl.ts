import { EmailRepository } from "../../repositories/EmailRepository"
import { EmailService } from "../EmailService";

export class EmailServiceImpl implements EmailService {
  private repository: EmailRepository;

  constructor(repository: EmailRepository) {
    this.repository = repository
  }

  // verifica se as configurações de e-mail estão corretas
  async verifyTransporter() {
    this.repository.verifyTransporter();
  }

  // recebe as informações para envio do email
  // possivelmente vai ser diminuido o tanto de argumentos quando implementar algum template html
  async sendCodeEmail(email: string, cod: string, subject: string, html: string, text: string): Promise<boolean> {
    return this.repository.sendCodeEmail(email, cod, subject, html, text);
  }
}
