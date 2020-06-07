// function jumlahkan() {
//   let array = Array.from(arguments);
//   let total = 0;
//   //   menggunakan teknik for
//   //   for (let i = 0; i < array.length; i++) {
//   //     total += array[i];
//   //   }
//   //   menggunakan teknik forEach
//   //   array.forEach((i) => (total += i));
//   //   menggunakan teknik for of
//   //   for (const arr of array) {
//   //     total += arr;
//   //   }
//   //   menggunakan higher order function reduce
//   return array.reduce((tot, init) => tot + init);
//   //   return total;
// }

// without rest parameter

// function filterType() {
//   let newArray = [];
//   let [...arr] = arguments;
//   let arrOne = arr[0];
//   arr.shift();

//   arr.forEach((arg) => {
//     if (typeof arg === arrOne) {
//       newArray.push(arg);
//     }
//   });
//   return newArray;
//   //   for (let i = 0; i < arr.length; i++) {
//   //     if (typeof arr[i] === arrOne) {
//   //       newArray.push(arr[i]);
//   //     }
//   //   }
//   //   return newArray;
// }

// with rest parameter
function filterType(type, ...values) {
  return values.filter((value) => typeof value === type);
}

console.log(filterType("string", 1, "Abdurahman", 3, true, false, "oke"));
