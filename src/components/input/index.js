async function submitForm(event) {
    event.preventDefault();
    const form = event.target;
    const formBtn = document.querySelector('.butt');
    const formSendResult = document.querySelector('.form__send-result');
    formSendResult.textContent = '';

    // Получение данных из формы
    const formData = new FormData(form);
    const formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value.trim().replace(/\s+/g, ' ');
    });

    // Валидация полей на клиенте
    const validationErrors = validateForm(formDataObject);

    // Обновление интерфейса для отображения ошибок
    displayErrors(validationErrors);
    if (validationErrors.length > 0) return;

    // Отправка формы на бэк
    sendFormData(form, formBtn, formSendResult, formDataObject);
}


async function sendFormData(form, formBtn, formSendResult, formDataObject) {

    try {
        
        formBtn.disabled = true;

        const response = await fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        });

        if (response.ok) {
            formSendResult.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
            form.reset();
        } else if (response.status === 422) {
            const errors = await response.json();
            console.log(errors);
            throw new Error('Ошибка валидации данных');
        } else {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error.message);
        formSendResult.textContent = 'Письмо не отправлено! Попробуйте позже.';
        formSendResult.style.color = 'red';

    } finally {
        
        formBtn.disabled = false;
    }
}

function validateForm(formData) {
    const { name, email, phone, message } = formData;

    const phoneRegex = /^\[0-9]{5,15}$/;
    const emailRegex = /^[^\s@]$/;

    const errors = [];

    if (!name) {
        errors.push({ field: 'name', message: 'Пожалуйста, введите ваше ФИО.' });
    } else if (name.length < 5 || name.length > 20) {
        errors.push({ field: 'name', message: 'Пожалуйста, введите корректные данные. Пример: Быков Иван Петрович' });
    }

    if (!phone) {
        errors.push({ field: 'phone', message: 'Пожалуйста, введите номер телефона.' });
    } else if (!phoneRegex.test(phone)) {
        errors.push({ field: 'phone', message: 'Пожалуйста, введите корректный номер телефона. Пример: +375257851204' });
    }

    // if (!email) {
    //     errors.push({ field: 'email', message: 'Пожалуйста, введите адрес электронной почты.' });
    // } else if (!emailRegex.test(email) || (email.length < 5 || email.length > 100)) {
    //     errors.push({ field: 'email', message: 'Пожалуйста, введите корректный адрес электронной почты. Пример: frontend@gmail.com' });
    // }

    // if (!message) {
    //     errors.push({ field: 'message', message: 'Пожалуйста, введите сообщение.' });
    // } else if (message.length < 20 || message.length > 400) {
    //     errors.push({ field: 'message', message: 'В сообщении должно быть мин. 20 и не более 400 символов.' });
    // }
    
    return errors;
}

function displayErrors(errors) {
    // Скрытие всех ошибок перед отображением новых
    const errorElements = document.querySelectorAll('.form__error');
    errorElements.forEach((errorElement) => {
        errorElement.textContent = '';
    });

    if(errors.length < 1) return;

    // Отображение ошибок для соответствующих полей
    errors.forEach((error) => {
        const { field, message } = error;
        const errorElement = document.querySelector(`[data-for="${field}"]`);
        errorElement.textContent = message;
    });
}
// concurrently \"npm run start-backend\" \"npm run start-frontend\"