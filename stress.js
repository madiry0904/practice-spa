const lowStress30 = [
  "Count your breaths!",
  "DIY Aromatherapy",
  "Stress reducing supplements"
];
const lowStress45 = [
  "Do this guided meditation",
  "Make a list of all you've accomplished so far in the day",
  "Consider lowering your caffeine intake"
];
const lowStress60 = [
  "Make a gratitute list of 10 things you're grateful for in this moment",
  "Do this chair yoga routine for stress reduction",
  "Journal about what you're feeling"
];

const lowRandom30 = lowStress30[Math.floor(Math.random() * lowStress30.length)];

const lowRandom45 = lowStress45[Math.floor(Math.random() * lowStress45.length)];

const lowRandom60 = lowStress60[Math.floor(Math.random() * lowStress60.length)];

export function lowStress(number, time) {
  if (number <= 3 && time === 30) {
    return lowRandom30;
  } else if (number <= 3 && time === 45) {
    return lowRandom45;
  } else if (number <= 3 && time === 60) {
    return lowRandom60;
  }
}
// console.log(lowStress(3, 30));
