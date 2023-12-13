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

// Merging Nested Object
let newStudentProfile = {
  ...studentScores,
  scores: {
    ...studentScores,
    thai: studentProfile.scores.thai,
  },
};

console.log(newStudentProfile);
