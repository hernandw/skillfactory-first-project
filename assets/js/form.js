
const sendForm = () =>{
  let nameValue = document.getElementById("name").value;
  let phoneValue = document.getElementById("phone").value;
  let emailValue = document.getElementById("email").value;
  let messageValue = document.getElementById("message").value;
  let selectedContact = document.querySelector('input[name="contact"]:checked');

  if(!selectedContact){
        alert('Por favor seleccione una opcion de contacto');
    };

  console.log(`Message sent by: "${nameValue}"`);
  console.log(`Phone: " ${phoneValue} "`);
  console.log(`Email: " ${emailValue} "`);
  console.log(`Message: " ${messageValue} "`);
  console.log(`They want to be contacted through: "${selectedContact.value}"`)
  form.reset();

  let body = ``;
  body += `
    <img class="img-title" src="../assets/icons/message.png" alt="Mensaje">
    <div class="background-mssg">
      <h3 class="text-dimension"> From: Dimensión C-137</h3>
      <div id="text-form">
        <p class = "label-message">Message sent by:</p>
        <p class = "text-message">${nameValue}</p>

        <p class = "label-message">Phone:</p>
        <p class = "text-message">${phoneValue}</p>

        <p class = "label-message">Email:</p>
        <p class = "text-message">${emailValue}</p>

        <p class = "label-message">Message:</p>
        <p class = "text-message">${messageValue}</p>

        <p class = "label-message">Contact through:
        <p class = "text-message">${selectedContact.value}</p>
    </div>
  `;
  document.getElementById("received-message").innerHTML = body;
};

