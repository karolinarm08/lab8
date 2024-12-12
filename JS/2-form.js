const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = "feedback-form-state";

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    formData.email = savedData.email || "";
    formData.message = savedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim(); 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form data:", formData);

  form.reset();
  formData.email = "";
  formData.message = "";
  localStorage.removeItem(STORAGE_KEY);
});
