"use strict";

// подключение библиотеки
const nodemailer = require('nodemailer');

// описание логина и пароля почты отправителя
const userContent = 't3stert3ster@yandex.ru';
const passContent = 'myPwd123pwd123';

// объект с информацией об отправителе
const transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
        user: userContent,
        pass: passContent,
    }
});

// почта получателя
const mailToSendMessage = 'maxim.kolotovkin@yandex.ru';

// тема сообщения
const subjectContent = 'Тестовое сообщение';

// код html сообщения
let htmlContent = "<h2>Это тестовое сообщение</h2>";
htmlContent += "<p style = 'color: red'>Строка 1 - красный</p>";
htmlContent += "<p style = 'color: green'>Строка 2 - зелёный</p>";
htmlContent += "<p style = 'color: blue'>Строка 3 - синий</p>";

// объект с опциями сообщения
const mailOptions = {
    from: userContent,
    to: mailToSendMessage,
    subject: subjectContent,
    html: htmlContent,
};

// отправляем сообщение
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        // ошибка отправки
        console.log("Ошибка отправки  сообщения");
    } else {
        // успешная отправка
        console.log("Сообщение успешно отправлено");
    }
});
