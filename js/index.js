"use strict";

//Button
const buttonSubmit = document.getElementById("submit");

//Name
const inputName = document.getElementById("name");
const iconErrorName = document.querySelector("#list-name .image-error");
const iconSuccessName = document.querySelector("#list-name .image-success");
const messageName = document.querySelector("#list-name .paragraph");

//Email
const inputEmail = document.getElementById("email");
const iconErrorEmail = document.querySelector("#list-email .image-error");
const iconSuccessEmail = document.querySelector("#list-email .image-success");
const messageEmail = document.querySelector("#list-email .paragraph");

//Code
const inputCode = document.getElementById("code");
const iconErrorCode = document.querySelector("#list-code .image-error");
const iconSuccessCode = document.querySelector("#list-code .image-success");
const messageCode = document.querySelector("#list-code .paragraph");

//Confitmation Code
const inputConfirmationCode = document.getElementById("confirmation-code");
const iconErrorConfirmationCode = document.querySelector(
  "#list-confirmation-code .image-error"
);
const iconSuccessConfirmationCode = document.querySelector(
  "#list-confirmation-code .image-success"
);
const messageConfirmationCode = document.querySelector(
  "#list-confirmation-code .paragraph"
);

//Event Handler Function
const handleButtonSubmit = (event) => {
  event.preventDefault();
  const inputValueName = inputName.value;
  const inputValueEmail = inputEmail.value;
  const inputValueCode = inputCode.value;
  const inputValueConfirmationCode = inputConfirmationCode.value;
  let isError = false;

  //Validate Name
  if (!inputValueName) {
    messageName.innerHTML = "Rellene este campo";
    iconErrorName.classList.remove("d-none");
    inputName.classList.add("b-red");
    isError = true;
  } else if (inputValueName.length < 5 || inputValueName.length > 30) {
    messageName.innerHTML = "El nombre debe contener entre 5 y 30 caracteres";
    iconErrorName.classList.remove("d-none");
    inputName.classList.add("b-red");
    isError = true;
  } else if (isValidString(inputValueName) === false) {
    messageName.innerHTML = "Este campo solo admite letras";
    iconErrorName.classList.remove("d-none");
    inputName.classList.add("b-red");
    isError = true;
  } else {
    messageName.innerHTML = "";
    iconErrorName.classList.add("d-none")
    iconSuccessName.classList.remove("d-none");
    inputName.classList.add("b-green");
  }

  //Validate Email
  if (!inputValueEmail) {
    messageEmail.innerHTML = "Rellene este campo";
    iconErrorEmail.classList.remove("d-none");
    inputEmail.classList.add("b-red");
    isError = true;
  } else if (isValidEmail(inputValueEmail) === false) {
    messageEmail.innerHTML = "Email inválido";
    iconErrorEmail.classList.remove("d-none");
    inputEmail.classList.add("b-red");
    isError = true;
  } else {
    messageEmail.innerHTML = "";
    iconErrorEmail.classList.add("d-none")
    iconSuccessEmail.classList.remove("d-none");
    inputEmail.classList.add("b-green");
  }

  //Validate Code
  if (!inputValueCode) {
    messageCode.innerHTML = "Rellene este campo";
    iconErrorCode.classList.remove("d-none");
    inputCode.classList.add("b-red");
    isError = true;
  } else if (inputValueCode.length < 8) {
    messageCode.innerHTML = "La clave debe tener al menos 8 caracteres";
    iconErrorCode.classList.remove("d-none");
    inputCode.classList.add("b-red");
    isError = true;
  } else {
    messageCode.innerHTML = "";
    iconErrorCode.classList.add("d-none")
    iconSuccessCode.classList.remove("d-none");
    inputCode.classList.add("b-green");
  }

  //Validate Confirmation Code
  if (!inputValueConfirmationCode) {
    messageConfirmationCode.innerHTML = "Rellene este campo";
    iconErrorConfirmationCode.classList.remove("d-none");
    inputConfirmationCode.classList.add("b-red");
    isError = true;
  } else if (inputValueCode != inputValueConfirmationCode) {
    messageConfirmationCode.innerHTML = "Las claves no coinciden";
    iconErrorConfirmationCode.classList.remove("d-none");
    inputConfirmationCode.classList.add("b-red");
    isError = true;
  } else {
    messageConfirmationCode.innerHTML = "";
    iconErrorConfirmationCode.classList.add("d-none")
    iconSuccessConfirmationCode.classList.remove("d-none");
    inputConfirmationCode.classList.add("b-green");
  }

  //Alert
  if (isError === false) {
    setTimeout(() => {
      window.alert("La inscripción se ha realizado con éxito");
      inputName.value = "";
      inputEmail.value = "";
      inputCode.value = "";
      inputConfirmationCode.value = "";
      iconSuccessName.classList.add("d-none");
      inputName.classList.remove("b-green");
      inputName.classList.remove("b-red");
      iconSuccessEmail.classList.add("d-none");
      inputEmail.classList.remove("b-green");
      inputEmail.classList.remove("b-red");
      iconSuccessCode.classList.add("d-none");
      inputCode.classList.remove("b-green");
      inputCode.classList.remove("b-red");
      iconSuccessConfirmationCode.classList.add("d-none");
      inputConfirmationCode.classList.remove("b-green");
      inputConfirmationCode.classList.remove("b-red");
    }, 1000);
  }
};

// regExp Name
const isValidString = (value) => {
  const regExp = /^([a-zA-Z\s\u00f1\u00d1\u00E0-\u00FC]+)$/;
  const isValid = regExp.test(value);
  return isValid;
};

// regExp Email
const isValidEmail = (value) => {
  const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const isValid = regExp.test(value);
  return isValid;
};

//Event Button Submit
buttonSubmit.addEventListener("click", handleButtonSubmit);
