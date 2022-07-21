<script setup lang="ts">
import { ref } from "vue";
import { Exercise } from "../models/exercise";
import { Student } from "../models/student";

defineProps<{ student: Student; esercise: Exercise }>();
</script>

<template>
  <a :href="`https://github.com/${student.githubUsername}/${esercise.repoName}`"
    >link</a
  >
</template>

<style scoped></style>
