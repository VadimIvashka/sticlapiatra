import './input.css'
import { useTranslation } from 'react-i18next';


const Input = () => {
  const { t } = useTranslation();
//   const [phoneNumber, setPhoneNumber] = useState('');
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   message: '',
//   // });

  const submitForm = async (event) => {
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
  };
  const sendFormData = async (form, formBtn, formSendResult, formDataObject) => {
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
          formSendResult.textContent = 'Vă mulțumim pentru mesajul dumneavoastră! Vă vom răspunde cât mai curând posibil.';
          form.reset();
      } else if (response.status === 422) {
          const errors = await response.json();
          console.log(errors);
          throw new Error('Eroare de validare a datelor');
      } else {
          throw new Error(response.statusText);
      }

  } catch (error) {
      console.error(error.message);
      formSendResult.textContent = 'Email nu a fost trimis! Încearcă din nou mai târziu.';
      formSendResult.style.color = 'red';

  } finally {
      
      formBtn.disabled = false;
  }
  };

  const validateForm = (formData) => {
    const { name, phone} = formData;

    const phoneRegex = /[0-9]{5,15}/;
    

    const errors = [];

    if (!name) {
        errors.push({ field: 'name', message: 'Vă rugăm să introduceți numele dvs.' });
    } else if (name.length < 5 || name.length > 20) {
        errors.push({ field: 'name', message: 'Vă rugăm să introduceți datele corecte.' });
        errors.push({ field: 'name2', message: 'De la 5 caractere' });
    }

    if (!phone) {
        errors.push({ field: 'phone', message: 'Vă rugăm să introduceți numărul dvs. de telefon.' });
    } else if (!phoneRegex.test(phone)) {
        errors.push({ field: 'phone', message: 'Vă rugăm să introduceți numărul de telefon corect.' });
        errors.push({ field: 'phone2', message: 'Exemplu: +375257851204' });
      }
    return errors;
  };
  

  const displayErrors = (errors) => {
    // Скрытие всех ошибок перед отображением новых
    const errorElements = document.querySelectorAll('.form__error');
    errorElements.forEach((errorElement) => {
        errorElement.textContent = '';
    });

    if(errors.length < 1) return;

    // // Отображение ошибок для соответствующих полей
    errors.forEach((error) => {
        const { field, message } = error;
        const errorElement = document.querySelector(`[data-for="${field}"]`);
        errorElement.textContent = message;
    });
  };

  
    return (
    <section className="head">
        <div className="container">
        {/* <form form id="form" onsubmit='submitForm(event)'> */}
            
            <div className='main_item'>
                <div className='main_title'>{t('input1')}<br/> {t('input2')}</div>
                <div className='main_text2'>{t('input3')} <br/>
                {t('input4')} <br/>{t('input5')}</div>
                </div>
                <form id="form" onSubmit={(event) => submitForm(event)}>
                      <div className='inputs'>
                        <div className='input'>
                        <div className='input_text'>{t('input6')}</div>
                          <div className='over'>
                          <input className='inputer' type="text" name="name" placeholder={t('input8')}/>
                          <span class="form__error" data-for="name"></span>
                          <span class="form__error" data-for="name2"></span>
                          </div>
                         </div>
                            <div className='input'>
                            <div className='input_text'>{t('input7')}</div>
                      <div className='inputes'>
                           <div className='over'>
                           <input className='inputer' type="tel" name="phone" placeholder={t('input8')}/>
                           <span class="form__error" data-for="phone"></span>
                           <span class="form__error" data-for="phone2"></span></div>
                           <div className='over'>
                          <div className='butt_div'><button type="submit" href="#!" className="butt">{t('input9')}</button></div>
                          <div className="form__send-result"></div>
                          </div>
                </div>
                </div>
            </div>
            </form>
            
            {/* <script src="./index.js"></script> */}
            {/* </form> */}
        </div>
    </section>);}


export default Input;