import Mail from '../lib/Mail'

export default{
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({data}){
        const { user } = data
        
        await Mail.sendMail({
            from: 'Renlih <contato@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuário',
            html: `Olá, ${user.name}, Bem vindo a Renlih-Acme.`
        })
    }
}
