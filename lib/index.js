export function getFormDataFromIds(formEls) {
  return Array.from(formEls)
    .filter(element => element.id)
    .map(({ id, value }) => ({ [id]: value }))
    .reduce((accumulator, data) => ({ ...accumulator, ...data }));
}
const lowStress30 = [
  "Count your breaths! Close your eyes, get rid of all electronics, and count each breath on the exhale up to then number 10",
  "DIY Aromatherapy- if you can, light a candle, take a bath, or if you're short on time rub lavender essential oils on your pressure points to relieve stress",
  "Stress reducing supplements- Ashwagandha is an Asian herbal supplement used in traditional medicine to treat anxiety and help people adapt to stress.A study of 98 adults taking an ashwagandha supplement or a placebo for 60 days showed that taking 125 mg of ashwagandha once or twice daily reduced cortisol levels (79).Another study of 64 adults with chronic stress showed that those who took 300-mg supplements experienced reduced cortisol over 60 days, compared to those who took a placebo."
];
const lowStress45 = [
  "Do this guided meditation",
  "Make a list of all you've accomplished so far in the day",
  "Consider lowering your caffeine intake"
];
const lowStress60 = [
  "Get Outside and leave the Technology Behind. Go outside for a walk, run, or even to sit on a bench and think as long as your phone isn't with you!",
  "Do this chair yoga routine for stress reduction",
  "Journal about what you're feeling"
];

const midStress30 = [
  "Do this quick 30 minute feel good yoga sequence to help lower stress levels",
  "Watch this Ted Talk on stress management",
  "Check Your Gratitude! When things feel crazy and overwhelming it's important to get back to your center. Make a gratitute list of 10 things you're grateful for in this moment!"
];

const midStress45 = [
  "TALK IT OUT! Call a friend of family member who you can be open and honest with about your stress",
  "LISTEN TO CALMING MUSIC If you can't get away from where you are, put on calming music to reduce cortisol levels",
  "WORK IT OUT: Moving our bodies is one of the proven most effective ways to lower stress. Get your gear on and go for a run or do this quick HIIT workout!"
];

const midStress60 = [
  "Get in Nature! Put your phone down, get outside and go for a walk or hike!",
  "Get Stretchy! Since you have them time, why not go to an in person yoga class! Research has consistently shown that Yoga is associated with lower cortisol levels (a key component in stress) so why not give it a try!",
  "Turn off ALL screens and read a book!"
];

const highStress30 = [
  "Talk it out! Call someone who deeply understands you and will listen to whatever is going on in your life with no judgement. Take a walk and talk it out with them to relieve some stress!",
  "Get Zen for 10. Meditation, similar to Yoga, is an effective tool in combatting stress and anxiety. Since you're short on time try a meditation app and do a guided meditation for at least 10 minutes! There are a ton out there but to get you started try Calm or Headspace",
  "Laughter as Medicine- Sometimes all we need is to get out of our heads and laugh a little bit. Watch funny Youtube videos to bring the joy back!"
];
const highStress45 = [
  "Develop a new Hobby! Research has shown that finding new hobbies promote feelings of well-being, which translate to lower cortisol. Do whatever hobby you feel drawn to but some examples might be gardening, yoga, dance, knitting, etc.",
  "Get a Massage! With all the stress we have in modern day self care is of the utmost importance. If we're not taking care of ourselves how can we expect to care for others. Treat yoself to a 60 minute massage- no excuses there's so many options on Groupon!",
  "Get Creative! Whether you're a born artist or a mere beginner, diving into creativity has been known to lower cortisol levels. If you don't know where to start try a beginner class in drawing, painting, ceramics or photography. Alternatively, adult coloring books are another great option to let your creativity flow!"
];
const highStress60 = [
  "Expand your Social Circle! When you're stress you can feel isolated and like you're the only one feeling this way when in reality it. Put yourself out there and attend a meet up to expand your social circle and get out of your head! **Always do what feels right and if the stress is too much to bear please seek professional help**",
  "Give Back! One of the best ways to help relieve stress is by putting your efforts towards a good cause. Not only will you get out of your own head but it may help you feel better knowing that you're putting some good back in the world!",
  "Meet with Therapist. Sometimes life is overwhelming and we need outside help. That's 100% normal and ok. Set up an appointment with a professional to help  you navigate stressful times and give an outsider perspective."
];

const lowRandom30 = lowStress30[Math.floor(Math.random() * lowStress30.length)];

const lowRandom45 = lowStress45[Math.floor(Math.random() * lowStress45.length)];

const lowRandom60 = lowStress60[Math.floor(Math.random() * lowStress60.length)];

const midRandom30 = midStress30[Math.floor(Math.random() * midStress30.length)];

const midRandom45 = midStress45[Math.floor(Math.random() * midStress45.length)];

const midRandom60 = midStress60[Math.floor(Math.random() * midStress60.length)];

const highRandom30 =
  highStress30[Math.floor(Math.random() * highStress30.length)];

const highRandom45 =
  highStress45[Math.floor(Math.random() * highStress45.length)];

const highRandom60 =
  highStress60[Math.floor(Math.random() * highStress60.length)];

export function stressIdeas(stress, time) {
  if (stress <= 3 && time === "30") {
    return lowRandom30;
  } else if (stress <= 3 && time === "45") {
    return lowRandom45;
  } else if (stress <= 3 && time === "60") {
    return lowRandom60;
  } else if (stress > 3 && stress <= 6 && time === "30") {
    return midRandom30;
  } else if (stress > 3 && stress <= 6 && time === "45") {
    return midRandom45;
  } else if (stress > 3 && stress <= 6 && time === "60") {
    return midRandom60;
  } else if (stress > 6 && stress <= 10 && time === "30") {
    return highRandom30;
  } else if (stress > 6 && stress <= 10 && time === "45") {
    return highRandom45;
  } else if (stress > 6 && stress <= 10 && time === "60") {
    return highRandom60;
  }
}
