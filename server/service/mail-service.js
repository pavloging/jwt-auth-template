const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">Активировать профиль</a>
                    </div>
                `
        })
    }

    async sendResetPassword(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Сброс пароля для ' + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для сброса пароля перейдите по ссылке. Если вы не сбрасывали пароль, ничего не делайте!</h1>
                        <a href="${link}">Восстановить доступ</a>
                    </div>
                `
        })
    }
}

module.exports = new MailService();
