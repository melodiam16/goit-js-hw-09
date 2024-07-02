const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
loadFormData();

form.addEventListener('input', handlerWatch);
form.addEventListener('submit', handlerSubmit);

function handlerWatch(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handlerSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    updateFormFields();
  }
}

function updateFormFields() {
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
