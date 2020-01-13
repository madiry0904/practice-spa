// const stress30 = [
//   "Count your breaths!",
//   "DIY Aromatherapy",
//   "Stress reducing supplements"
// ];

// const random30 = stress30[Math.floor(Math.random() * (stress30.length +1))];

// function lowStress(number, time) {
//   if (number <= 3 && time === 30) {
//     return random30;
//   }
// }
// console.log(lowStress(2, 30));

const stress45 = [
  "Do this guided meditation",
  "Make a list of all you've accomplished so far in the day",
  "Consider lowering your caffeine intake"
];

const random45 = stress45[Math.floor(Math.random() * (stress45.length + 1))];

function mediumStress(number, time) {
  if (number > 3 && number <= 6 && time === 45) {
    return random45;
  }
}

console.log(mediumStress(4, 45));

// const stress60 = [
//   "Make a gratitute list of 10 things you're grateful for in this moment",
//   "Do this chair yoga routine for stress reduction",
//   "Journal about what you're feeling"
// ];
