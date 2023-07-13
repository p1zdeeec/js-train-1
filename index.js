// let name, age;

// let name;
// let age;

// let age = 33;
// let name = "Marian";

// console.log("Log:", age, name);

// const a = 1 - 2 - 2 - 2 - 2 + 2;
// const b = `Test Hello World`;
// const c = 1 - "10";
// const d = "10" ** 1;
// const e = 10 / "10";
// let f = "5" ** "4";
// let g = 6 % 7;

// f *= 5;
// console.log(f)

// --------------------Логічні оператори ---------------------

// const userRole = 1;
// const adminRole = 2;
// const productPrice = 100;

// const ivanRole = userRole;
// const ivanBalance = 300;

// const isAdmin = ivanRole === adminRole;
// const canBuy = ivanBalance >= productPrice;

// constresult = isAdmin === canBuy;

// const isResultTrue = result === true;

// const result = ivanRole === adminRole || ivanBalance >= productPrice;

// console.log(result);

//-----------------------FUNCTION--------------------//

// function calcSpace(amount, unit) {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5, "sm"));

// 1 Варіант-------------------------------------------ЯКЩО НЕ МАЄ ДРУГОГО ЗНАЧЕННЯ (ПУСТЕ.0.null...)- друге значення це unit !!!

// Приклад з Error------------

// function calcSpace(amount, unit) {
//   if (unit !== undefined) {
//     return `${amount * 4}${unit}`;
//   } else {
//     return "Error";
//   }
// }

// console.log(calcSpace(5));

//                               1 Варіант-----------------------

// function calcSpace(amount, unit) {
//   if (unit !== undefined) {
//     return `${amount * 4}${unit}`;
//   } else {
//     return "Error";
//   }
// }

// console.log(calcSpace(5, "px"));

//                               1.1 Варіант ---------------------------

// function calcSpace(amount, unit) {
//   if (unit === undefined) {
//     unit = "px";
//   }
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5));

//                               1.2 Варіант ---------------------------

// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5));

//                               1.3 Варіант ---------------------------(можемо писати будь який вираз після  unit = ---)

// function calcSpace(amount, unit = console.log("unit is not set") || "px") {
//   return `${amount * 4}${unit}`;
// }

// console.log(calcSpace(5));

// ---------------------------ФУНКЦІОНАЛЬНЕ ПРОГРАМУВАННЯ---------------------------

// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

// function playTrackById(trackId) {
//   /// зробимо код щоб отримати файл пісні і її запустити
// }

// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`);

//   playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//   console.log(`Завершили грати ${oldTrackName}`);
//   console.log(`Наступний трек ${newTrackName}`);
// }

// function pause(currentTrackName) {
//   console.log(`Трек ${currentTrackName} на паузі`);
// }

// ----------------------------------------------------  !!  КОНЦЕПТ !! ФУНКЦІОНАЛЬНОГО ПРОГРАМУВАННЯ-------------------------------------------------

//                                                       --------(РЕКУРСІЯ)--------

function playTrackById(trackId) {
  /// зробимо код щоб отримати файл пісні і її запустити
}

function play(trackName, trackId) {
  console.log(`Запускаємо ${trackName}`);

  playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
  console.log(`Завершили грати ${oldTrackName}`);
  console.log(`Наступний трек ${newTrackName}`);
}

function pauseStop(currentTrackName) {
  console.log(`Трек ${currentTrackName} на паузі`);
}

function pausePlay(currentTrackName) {
  console.log(`Трек ${currentTrackName} на паузі`);

  reloadDataTrack();

  play();
}

function reloadDataTrack(amount) {
  if (amount <= 0) {
    console.log("Дані уновленно вказану кількість разів");
  } else {
    console.log("Повторне оновлення");
    // Можна написати певний код для оновлення(х) даних
    reloadDataTrack(amount - 1);
  }
}

reloadDataTrack(5);
