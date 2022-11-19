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
const btn = document.querySelector('.button-complete');

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

function firstNameChange() {
  if (firstName.textLength <= 3) {
    firstName.classList.add('invalid');
    labelName.classList.add('invalid-text');
    labelName.classList.add('position-label');
    errName.style.display = 'block';
  } else {
    firstName.classList.remove('invalid');
    labelName.classList.remove('invalid-text');
    errName.style.display = 'none';
  }
}

function lastNameChange() {
  if (lastName.textLength <= 4) {
    lastName.classList.add('invalid');
    labelLastName.classList.add('invalid-text');
    labelLastName.classList.add('position-label');
    errLastName.style.display = 'block';
  } else {
    lastName.classList.remove('invalid');
    labelLastName.classList.remove('invalid-text');
    errLastName.style.display = 'none';
  }
}

function dateChange() {
  let ifTodayWasYourLastDay = new Date().toISOString().split('T')[0];
  let correctDeliveryDate = ifTodayWasYourLastDay;
  let newToday = date.value;

  if (newToday <= correctDeliveryDate) {
    date.classList.add('invalid');
    labelDate.classList.add('invalid-text');
    labelDate.classList.add('position-label');
    errDate.style.display = 'block';
  } else {
    date.classList.remove('invalid');
    labelDate.classList.remove('invalid-text');
    errDate.style.display = 'none';
  }
}

function streetChange() {
  if (street.textLength <= 4) {
    street.classList.add('invalid');
    labelStreet.classList.add('invalid-text');
    labelStreet.classList.add('position-label');
    errStreet.style.display = 'block';
  } else {
    street.classList.remove('invalid');
    labelStreet.classList.remove('invalid-text');
    errStreet.style.display = 'none';
  }
}

function numberChange() {
  if (numberHouse.textLength == 0) {
    numberHouse.classList.add('invalid');
    labelHouse.classList.add('invalid-text');
    labelHouse.classList.add('position-label');
    errHouse.style.display = 'block';
  } else {
    numberHouse.classList.remove('invalid');
    labelHouse.classList.remove('invalid-text');
    errHouse.style.display = 'none';
  }
}

function flatnumberChange() {
  if (flatnumber.textLength === 0) {
    flatnumber.classList.add('invalid');
    labelFlatnumber.classList.add('invalid-text');
    labelFlatnumber.classList.add('position-label');
    errFlatnumber.style.display = 'block';
  } else {
    flatnumber.classList.remove('invalid');
    labelFlatnumber.classList.remove('invalid-text');
    errFlatnumber.style.display = 'none';
  }
}


