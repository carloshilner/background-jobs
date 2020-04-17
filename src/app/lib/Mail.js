import nodemailer from 'nodemailer'
import emailConf from '../../config/mail'

export default nodemailer.createTransport(emailConf)
