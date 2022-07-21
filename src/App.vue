<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "./stores/store";
import StudentExerciseStatus from "./components/StudentExerciseStatus.vue";

const store = useStore();
onMounted(() => store.loadMock());
</script>

<template>
  <div class="wrapper">
    <StudentExerciseStatus
      v-for="student in store.students"
      :student="student"
      :esercise="store.currentExercise"
    ></StudentExerciseStatus>
  </div>
</template>

<style scoped></style>
