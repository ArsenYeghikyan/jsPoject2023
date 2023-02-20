/* eslint-disable indent */
"use strict";

// function getCoupeNumber(number) {
//   if (typeof number !== "number" || number < 0 || !Number.isInteger(number)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   } else if (number === 0 || number > 36) {
//     return "Таких мест в вагоне не существует";
//   }

//   if (number == 1 || number <= 4) {
//     return 1;
//   } else if (number == 5 || number <= 7) {
//     return 2;
//   } else if (number == 9 || number <= 12) {
//     return 3;
//   } else if (number == 13 || number <= 16) {
//     return 4;
//   } else if (number == 17 || number <= 20) {
//     return 5;
//   } else if (number == 21 || number <= 24) {
//     return 6;
//   } else if (number == 25 || number <= 28) {
//     return 7;
//   } else if (number == 29 || number <= 32) {
//     return 8;
//   } else if (number == 33 || number <= 36) {
//     return 9;
//   }
// }

// console.log(getCoupeNumber(1));

function getTimeFromMinutes(min) {
  if (
    min < 0 ||
    isNaN(min) ||
    typeof min === "string" ||
    !Number.isInteger(min)
  ) {
    return "Ошибка, проверьте данные";
  }

  if (min <= 600) {
    let hours = Math.floor(min / 60);
    let minut = min % 60;

    let hoursName = "";

    if (hours === 1) {
      hoursName = "час";
    } else if (hours >= 2 && hours <= 4) {
      hoursName = "часа";
    } else if (hours === 0 || (hours >= 5 && hours <= 10)) {
      hoursName = "часов";
    }

    return `Это ${hours} ${hoursName} и ${minut} минут`;
  }
}

console.log(getTimeFromMinutes(50));
