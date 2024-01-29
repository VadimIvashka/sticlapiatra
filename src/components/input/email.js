const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/sendEmail', async (req, res) => {
  const { name, message } = req.body;

  // Настройки транспорта для отправки электронной почты (пример для Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sticlapiatrawebsite@gmail.com',
      pass: 'OUrtAfOrcAnMed9',
    },
  });

  // Настройка письма
  const mailOptions = {
    from: 'sticlapiatrawebsite@gmail.com',
    to: 'axeloritan@yandex.ru',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: Message: ${message}`,
  };

  try {
    // Отправка письма
    await transporter.sendMail(mailOptions);

    // Успешный ответ клиенту
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // Обработка ошибки
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// concurrently \"npm run start-backend\" \"npm run start-frontend\"