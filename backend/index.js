import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import { body, validationResult } from 'express-validator'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cors());


// Настройка транспортера для отправки электронной почты
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});


function trimReplace(value) {
  if (typeof value === 'string') {
    return value.trim().replace(/\s+/g, ' ');
  }
  return value;
}


// Валидация данных при обработке POST-запроса от клиента
const validateData = [
  body('name'),
  body('phone'),
  body('phon')
];


// Обработчик POST-запроса от клиента с JSON-данными
app.post('/send-email', validateData, async (req, res) => {

  try {
    // Проверяем наличие ошибок валидации
    const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }

    const { name, phone} = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL, // Адрес отправителя
      to: process.env.EMAIL,   // Адрес получателя
      subject: `Заявка от ${name}`,
      html: `<p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Имя:</strong> ${name} оставил заявку</p>`,
    });

    res.send('Сообщение отправлено!');

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});




app.post('/send-tel', validateData, async (req, res) => {

  try {
    // Проверяем наличие ошибок валидации
    const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ errors: errors.array() });
    // }

    const {phon} = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL, // Адрес отправителя
      to: process.env.EMAIL,   // Адрес получателя
      subject: `Номер телефона`,
      html: `<p><strong>Телефон:</strong> ${phon}</p>`,
    });

    res.send('Сообщение отправлено!');

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});


app.listen(PORT, (err) => {
  if (err) {
      return console.log(err);
  }
  console.log(`Сервер запущен на порту ${PORT}`);
})