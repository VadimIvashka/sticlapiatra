import { useTranslation } from 'react-i18next';
import './print.css';

const Promoinput = () => {
    const { t } = useTranslation();
    const submitForm = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formBtn = document.querySelector('.promo__btn');
        const formSendResult = document.querySelector('.form__send-result2');
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
    
          const response = await fetch('http://localhost:3001/send-tel', {
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
        const {phon} = formData;
    
        const phoneRegex = /[0-9]{5,15}/;
        
    
        const errors = [];
    
       
        if (!phon) {
            errors.push({ field: 'phon', message: 'Vă rugăm să introduceți numărul dvs. de telefon.' });
        } else if (!phoneRegex.test(phon)) {
            errors.push({ field: 'phon', message: 'Vă rugăm să introduceți numărul de telefon corect.' });
            errors.push({ field: 'phon2', message: 'Exemplu: +375257851204' });
          }
        return errors;
      };
      
    
      const displayErrors = (errors) => {
        // Скрытие всех ошибок перед отображением новых
        const errorElements = document.querySelectorAll('.form__error2');
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
        <div className="container">
            
             <form id="form" onSubmit={(event) => submitForm(event)}>
             <div className='inter'>
                <div className='over'>
                <input className='inputer' type="tel" name="phon" placeholder={t('promp12')}/>
                <span class="form__error2" data-for="phon"></span>
                <span class="form__error2" data-for="phon2"></span>
                </div>
                <div className='over'>
							<button href="#!" type="submit" className="promo__btn">
							{t('promp11')}
							</button>
                            <div className="form__send-result2"></div>
                </div>
			</div>
            </form>
            </div>
      
    );
}
 
export default Promoinput;