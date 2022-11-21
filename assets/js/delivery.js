'use strict';

const firstName = document.getElementById('name');
const labelName = document.getElementById('labelname');
const errName = document.getElementById('errName');
const lastName = document.getElementById('lastname');
const labelLastName = document.getElementById('labelLastName');
const errLastName = document.getElementById('errLastName');
const date = document.getElementById('date');
const labelDate = document.getElementById('labelDate');
const errDate = document.getElementById('errDate');
const street = document.getElementById('street');
const labelStreet = document.getElementById('labelStreet');
const errStreet = document.getElementById('errStreet');
const numberHouse = document.getElementById('numberhouse');
const labelHouse = document.getElementById('labelHouse');
const errHouse = document.getElementById('errHouse');
const flatnumber = document.getElementById('flatnumber');
const labelFlatnumber = document.getElementById('labelFlatnumber');
const errFlatnumber = document.getElementById('errFlatnumber');
const errRadio = document.getElementById('errRadio');

firstName.addEventListener('change', firstNameChange);
firstName.addEventListener('input', inputString);
lastName.addEventListener('change', lastNameChange);
lastName.addEventListener('input', inputString);
date.addEventListener('change', dateChange);
street.addEventListener('change', streetChange);
numberHouse.addEventListener('input', inputNumbers);
numberHouse.addEventListener('change', numberChange);
flatnumber.addEventListener('change', flatnumberChange);
flatnumber.addEventListener('input', flatnumberInput);
firstName.addEventListener('blur', firstNameBlur);
lastName.addEventListener('blur', lastNameBlur);
date.addEventListener('blur', dateBlur);
street.addEventListener('blur', streetBlur);
numberHouse.addEventListener('blur', numberBlur);
flatnumber.addEventListener('blur', flatnumberBlur);

function inputString() {
  this.value = this.value.replace(/\s+|\d/g, '');
}
function inputNumbers() {
  if (this.value.charAt(0) === '0') {
    this.value = this.value.substring(1);
  }
  this.value = this.value.replace(/\D/g, '');
}
function flatnumberInput() {
  if (this.value.charAt(0) === '0') {
    this.value = this.value.substring(1);
  }

  if (flatnumber.value.charAt(0) === "-") {
    flatnumber.value = flatnumber.value.slice(1);
  }
  this.value = this.value.replace(/[a-zA-Zа-яА-Я]+/g, '');
}
let validFirst = 0;
function firstNameChange() {
  if (firstName.value.length <= 3) {
    firstName.classList.add('invalid');
    labelName.classList.add('invalid-text');
    labelName.classList.add('position-label');
    errName.style.display = 'block';
    validFirst = 0;
    delive();
  } else {
    firstName.classList.remove('invalid');
    labelName.classList.remove('invalid-text');
    errName.style.display = 'none';
    validFirst = 1;
    delive();
  }
}
let validLast = 0;
function lastNameChange() {
  if (lastName.value.length <= 4) {
    lastName.classList.add('invalid');
    labelLastName.classList.add('invalid-text');
    labelLastName.classList.add('position-label');
    errLastName.style.display = 'block';
    validLast = 0;
    delive();
  } else {
    lastName.classList.remove('invalid');
    labelLastName.classList.remove('invalid-text');
    errLastName.style.display = 'none';
    validLast = 1;
    delive();
  }
}
let validDate = 0;
function dateChange() {
  let ifTodayWasYourLastDay = new Date();
  let correctDeliveryDate = new Date(ifTodayWasYourLastDay.getTime() - ifTodayWasYourLastDay.getTimezoneOffset()*60000);
  let newToday = date.value;
  let correctDeliveryDateWithUTC = correctDeliveryDate.toISOString().split('T')[0];

  if (newToday <= correctDeliveryDateWithUTC) {
    date.classList.add('invalid');
    labelDate.classList.add('invalid-text');
    labelDate.classList.add('position-label');
    errDate.style.display = 'block';
    validDate = 0;
    delive();
  } else {
    date.classList.remove('invalid');
    labelDate.classList.remove('invalid-text');
    errDate.style.display = 'none';
    validDate = 1;
    delive();
  }
}
let validStreet = 0;
function streetChange() {
  if (street.value.length <= 4) {
    street.classList.add('invalid');
    labelStreet.classList.add('invalid-text');
    labelStreet.classList.add('position-label');
    errStreet.style.display = 'block';
    validStreet = 0;
    delive();
  } else {
    street.classList.remove('invalid');
    labelStreet.classList.remove('invalid-text');
    errStreet.style.display = 'none';
    validStreet = 1;
    delive();
  }
}
let validNumber = 0;
function numberChange() {
  if (numberHouse.value.length == 0) {
    numberHouse.classList.add('invalid');
    labelHouse.classList.add('invalid-text');
    labelHouse.classList.add('position-label');
    errHouse.style.display = 'block';
    validNumber = 0;
    delive();
  } else {
    numberHouse.classList.remove('invalid');
    labelHouse.classList.remove('invalid-text');
    errHouse.style.display = 'none';
    validNumber = 1;
    delive();
  }
}
let validFlat = 0;
function flatnumberChange() {
  if (flatnumber.value.length === 0) {
    flatnumber.classList.add('invalid');
    labelFlatnumber.classList.add('invalid-text');
    labelFlatnumber.classList.add('position-label');
    errFlatnumber.style.display = 'block';
    validFlat = 0;
    delive();
  } else {
    flatnumber.classList.remove('invalid');
    labelFlatnumber.classList.remove('invalid-text');
    errFlatnumber.style.display = 'none';
    validFlat = 1;
    delive();
  }
}
function firstNameBlur() {
  if (firstName.value.length <= 3) {
    firstName.classList.add('invalid');
    labelName.classList.add('invalid-text');
    labelName.classList.add('position-label');
    errName.style.display = 'block';
    validFirst = 0;
    delive();
  } else {
    firstName.classList.remove('invalid');
    labelName.classList.remove('invalid-text');
    errName.style.display = 'none';
    validFirst = 1;
    delive();
  }
}

function lastNameBlur() {
  if (lastName.value.length <= 4) {
    lastName.classList.add('invalid');
    labelLastName.classList.add('invalid-text');
    labelLastName.classList.add('position-label');
    errLastName.style.display = 'block';
    validLast = 0;
    delive();
  } else {
    lastName.classList.remove('invalid');
    labelLastName.classList.remove('invalid-text');
    errLastName.style.display = 'none';
    validLast = 1;
    delive();
  }
}

function dateBlur() {
  let ifTodayWasYourLastDay = new Date();
  let correctDeliveryDate = new Date(ifTodayWasYourLastDay.getTime() - ifTodayWasYourLastDay.getTimezoneOffset()*60000);
  let newToday = date.value;
  let correctDeliveryDateWithUTC = correctDeliveryDate.toISOString().split('T')[0];

  if (newToday <= correctDeliveryDateWithUTC) {
    date.classList.add('invalid');
    labelDate.classList.add('invalid-text');
    labelDate.classList.add('position-label');
    errDate.style.display = 'block';
    validDate = 0;
    delive();
  } else {
    date.classList.remove('invalid');
    labelDate.classList.remove('invalid-text');
    errDate.style.display = 'none';
    validDate = 1;
    delive();
  }
}

function streetBlur() {
  if (street.value.length <= 4) {
    street.classList.add('invalid');
    labelStreet.classList.add('invalid-text');
    labelStreet.classList.add('position-label');
    errStreet.style.display = 'block';
    validStreet = 0;
    delive();
  } else {
    street.classList.remove('invalid');
    labelStreet.classList.remove('invalid-text');
    errStreet.style.display = 'none';
    validStreet = 1;
    delive();
  }
}

function numberBlur() {
  if (numberHouse.value.length == 0) {
    numberHouse.classList.add('invalid');
    labelHouse.classList.add('invalid-text');
    labelHouse.classList.add('position-label');
    errHouse.style.display = 'block';
    validNumber = 0;
    delive();
  } else {
    numberHouse.classList.remove('invalid');
    labelHouse.classList.remove('invalid-text');
    errHouse.style.display = 'none';
    validNumber = 1;
    delive();
  }
}


function flatnumberBlur() {
  if (flatnumber.value.length === 0) {
    flatnumber.classList.add('invalid');
    labelFlatnumber.classList.add('invalid-text');
    labelFlatnumber.classList.add('position-label');
    errFlatnumber.style.display = 'block';
    validFlat = 0;
    delive();
  } else {
    flatnumber.classList.remove('invalid');
    labelFlatnumber.classList.remove('invalid-text');
    errFlatnumber.style.display = 'none';
    validFlat = 1;
    delive();
  }
}

let validCheck = 1;
let countR = 0;
const checkboxEl = document.querySelectorAll('input[type=checkbox');
const errCheckbox = document.getElementById('errCheckbox');
function inputCheckbox() {
  validCheck == 1;
  if (this.checked) {
    countR = countR + 1;
  } else {
    countR = countR - 1
  }
  if (countR >= 3) {
    errCheckbox.style.display = 'block';
    validCheck = 0;
    delive();
  } else {
    errCheckbox.style.display = 'none';
    validCheck = 1;
    delive();
  }
}
checkboxEl.forEach(Element => {
  Element.addEventListener('input', inputCheckbox);
})

const btn = document.querySelector('button[type=submit]');
const client = document.querySelector('.client-block__client');
const address = document.querySelector('.address-block__address');
let modalEnd = document.querySelector('.modal-end');
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');

let cash = document.getElementById('cash');
let card = document.getElementById('card');

let validCashCard = 0;
cash.addEventListener('change', cashChecked);
cash.addEventListener('blur', cashChecked);
function cashChecked() {
  if (cash.checked) {
    card.checked = false;
    validCashCard = 1;
    delive();
    errRadio.style.display = 'none';
    card.style.borderColor = 'var(--color-blacky)';
    card.parentNode.style.color = 'var(--color-black)';
    cash.parentNode.style.color = 'var(--color-black)';
    cash.style.borderColor = 'var(--color-blacky)';
  } else {
    validCashCard = 0;
    delive();
  }
}

card.addEventListener('change', cardChecked);
card.addEventListener('blur', cardCheckedBlur);
function cardChecked() {
  if (card.checked) {
    cash.checked = false;
    validCashCard = 1;
    delive();
    errRadio.style.display = 'none';
    card.style.borderColor = 'var(--color-blacky)';
    card.parentNode.style.color = 'var(--color-black)';
    cash.parentNode.style.color = 'var(--color-black)';
    cash.style.borderColor = 'var(--color-blacky)';
  } else {
    validCashCard = 0;
    delive();
  }
}

card.addEventListener('blur', cardCheckedBlur);
function cardCheckedBlur() {
  if (card.checked == false & cash.checked == false) {
    errRadio.style.display = 'block';
    card.style.borderColor = 'var(--color-red)';
    card.parentNode.style.color = 'var(--color-red)';
    cash.parentNode.style.color = 'var(--color-red)';
    cash.style.borderColor = 'var(--color-red)';
  }
  if (card.checked) {
    cash.checked = false;
    validCashCard = 1;
    delive();
    errRadio.style.display = 'none';
  } else {
    validCashCard = 0;
    delive();
  }
}

function delive() {
  if (validCheck == 1 & validFlat == 1 & validNumber == 1 & validStreet == 1 & validDate == 1 & validLast == 1 & validFirst == 1 & validCashCard == 1) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
  return false;
}

btn.addEventListener('click', () => {
  if (btn.disabled = true) {
    client.innerText = `${firstName.value}`+` `+`${lastName.value}`;
    address.innerText = `${street.value}`+` street` + ` ` + ` ${numberHouse.value} \\` + ` ${flatnumber.value}`;
    modalEnd.style.display = 'flex';
    header.style.display = 'none';
    footer.style.display = 'none';
  } else {
    modalEnd.style.display = 'none';
    header.style.display = 'block';
    footer.style.display = 'block';
  }
})
