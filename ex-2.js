let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
// const {scores}= studentProfile
// const newStudentProfile = {...studentProfile,scores:{...scores,...studentScores}};
// const newStudentProfile={...studentProfile,scores:{...studentProfile.scores,...studentScores}}
const newStudentProfile={...studentProfile,scores:{...studentScores,...studentProfile.scores}}

// ใน {}เป็น object
console.log(newStudentProfile)

