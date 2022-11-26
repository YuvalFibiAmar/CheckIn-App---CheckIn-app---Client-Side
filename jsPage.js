'use strict';

// 1. ----------------------------------------------------------initialization -----> Objects , btns-------------------------------------------------------------
let flag = false;

//1.a modal btns :
const modal1 = document.querySelector('.modal1');
const overlay = document.querySelector('overlay');
const btnopen1 = document.querySelector('.show-modal1');
const btnclos1 = document.querySelector('.close-modal1');

// 1.b  ----- > checkIn btns
const btnCheckIn = document.querySelector('.btn');
const fullName = document.querySelector('.login__input--user');
const fullPassport = document.querySelector('.login__input--passport');

// 1. 3 ---- > Passenger object
const Passenger = {
  firstName: 'null',
  passportNum: 0,

  setName: function (passengerName) {
    this.firstName = passengerName;
  },
  setPassport: function (passportNumber) {
    this.passportNum = passportNumber;
  },

  getName: function () {
    return this.firstName;
  },

  getPassport: function () {
    return this.getPassport;
  },
};

// 1.4 -----> List of Passengers who did checkIn

const PassengerList = {
  names: ['Daniel', 'David', 'Yael', 'Naomi', 'Shai'],
  passNumbers: ['318620721', '8315609', '123456789', '052808097', '0524613558'],
};

//2 . 1 ----------------------------------------------------------------------- >  main --------------------------------------------------------------- :
if (
  btnopen1.addEventListener('click', function () {
    console.log('button clicked');
    modal1.classList.remove('hidden');
    overlay.classList.remove('hidden');
    modal1.style.display = 'block';
  })
);

if (
  btnclos1.addEventListener('click', function () {
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
  })
);

if (
  btnCheckIn.addEventListener('click', function () {
    if (fullName.value === '' || fullPassport.value === '') {
      //-------> if one value is missing
      alert('Please enter full details');
    } else {
      if (checkIsExist(fullPassport.value)) {
        //-------> if Passenger is already checked in
        alert('You are already checked in');
        console.log(PassengerList);
      } else {
        // -------> if passenger doesnt checkIn
        updatePassengersList(fullName.value, fullPassport.value);

        alert(Passenger.getName() + ' CheckIn complited');
        console.log(PassengerList);
      }
    }
  })
);

function checkIsExist(passportnumber) {
  for (let i = 0; i < PassengerList.passNumbers.length; i++) {
    if (passportnumber === PassengerList.passNumbers[i]) {
      flag = true;
      break;
    }
  }

  return flag;
}

function updatePassengersList(nameValue, passportValue) {
  Passenger.setName(nameValue);
  Passenger.setPassport(passportValue);
  PassengerList.names.push(nameValue);
  PassengerList.passNumbers.push(passportValue);
}
