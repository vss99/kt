<template>
  <section class="ktCourses" id="courses">
    <header class="textCenter">
      <h2>{{ state.heading }}</h2>
    </header>
    <article>
      <p>{{ state.courseContent }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  heading: "What we offer?",
  courseContent: "We offer wide range of courses where you can learn at your own pace with hands-on exercises and " +
      "quizzes. Our courses are frequently updated so you’ll always be working from the latest information. Our " +
      "training's will help you to become a professional developer."
});
</script>

<style scoped>
.textCenter {
  text-align: center;
}
.ktCourses {
  background-color: #FFC3C3;
  padding: 70px 16px 70px;
}
.ktCourses > header h2 {
  font-family: serif;
  font-size: 48px;
  color: #2A272A;
  margin: 0 auto 16px;
}
.ktCourses > article p {
  text-align: center;
  max-width: 991px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .ktCourses > header h2 {
    font-size: 36px;
  }
}
</style>