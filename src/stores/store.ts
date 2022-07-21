import { defineStore } from "pinia";
import { Exercise } from "../models/exercise";
import { Student } from "../models/student";

let mockStudent: Student = {
  name: "Mattia",
  lastName: "Folcarelli",
  githubUsername: "lichfolky",
};

let mockExercise: Exercise = {
  name: "Small brother",
  repoName: "small-brother",
};

export const useStore = defineStore("main", {
  state: () => ({
    students: [] as Student[],
    exercises: [] as Exercise[],
    currentExerciseIndex: 0,
  }),
  getters: {
    currentExercise: (state) => state.exercises[state.currentExerciseIndex],
  },
  actions: {
    loadMock() {
      this.students.push(mockStudent);
      this.exercises.push(mockExercise);
    },
  },
});
