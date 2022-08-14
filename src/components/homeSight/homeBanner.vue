<template>
  <section>
    <header class="mainBanner">
<!--      <aside class="topFlexy dFlex"></aside>-->
      <header class="textCenter mAuto">
        <h1>
          KT <span>Group &nbsp;</span>
          <br>
          <span>&nbsp; Online</span> Training
        </h1>
      </header>
      <article class="desc textCenter mAuto">
        <p>
          {{ state.mainHeading }}
        </p>
      </article>
      <footer class="textCenter">
        <a href="#contact">
          <button class="btn">Let's talk</button>
        </a>
      </footer>
    </header>
    <article class="aboutKt dFlex" id="about-us">
      <figure class="aboutImg">
        <img src="/src/assets/svg/learning.svg" alt="eLearning">
      </figure>
      <section class="aboutContent">
        <article class="contentCard textCenter">
          <h2>Who are we</h2>
          <p>
            KT Group is a pioneering online tutoring organization. KT Group provides
            quality online tutoring to students across the world at a very affordable
            price. KT Group has a diverse and highly educated tutor base and with its
            personalized teaching methods, ensures that students not only master
            basic to advanced level concepts but also meet their short-term and
            long-term academic goals.
            <br>
            <br>
            Their motive is to provide world-class tutoring and high-quality content
            to students around the world. KT Group is the premier online destination
            for affordable education and tutoring services-anytime and anywhere. Learners
            can use their comprehensive and thorough sessions to enhance their programming
            skills and have access to a live tutor around the clock.
          </p>
        </article>
      </section>
    </article>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  mainHeading: "Make an impact through dynamic and targeted online trainings."
});
</script>

<style scoped>
h1, p, button {
  color: #2A272A;
}
/*.topFlexy {*/
/*  background-color: #FFF3F3;*/
/*  position: absolute;*/
/*  top: 48px;*/
/*  left: 4%;*/
/*  right: 4%;*/
/*  width: 92%;*/
/*  padding: 12px 0;*/
/*}*/
.dFlex {
  display: flex;
}
.textCenter {
  text-align: center;
}
.mAuto {
  margin: auto;
}
.mainBanner {
  padding: 80px 0 120px;
  background-color: #FFC3C3;
}
.mainBanner h1 {
  font-size: 100px;
  font-family: serif;
  margin: 0;
}
.mainBanner h1 span {
  position: relative;
}
.mainBanner h1 span:after {
  content: attr(data-content);
  position: absolute;
  top: 58%;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: rgba(82, 37, 39, 0.5);
}
.mainBanner .desc {
  padding: 36px 16px;
  max-width: 520px;
}
.mainBanner .desc p {
  margin: 0;
  font-size: 20px;
}
.mainBanner button.btn {
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #2A272A;
  padding: 10px 32px;
  border-radius: 4px;
  font-size: 16px;
  color: #2A272A;
  transition: all 200ms ease;
}
.mainBanner button.btn:hover {
  background-color: #2A272A;
  color: #FFC3C3;
}
.aboutKt {
  background-color: rgba(0, 87, 174, 1);
  flex-direction: row;
  justify-content: space-between;
}
.aboutKt .aboutImg, .aboutKt .aboutContent {
  width: 49%;
}
.aboutKt .aboutContent {
  position: relative;
}
.aboutKt .aboutContent .contentCard {
  background-color: #006B67;
  position: absolute;
  width: 80%;
  right: 0;
  top: -100px;
  color: white;
  padding: 24px 16px 56px;
}
.aboutKt .aboutContent .contentCard h2 {
  font-family: serif;
  font-size: 32px;
}
.aboutKt .aboutContent .contentCard p {
  margin: 0 auto;
  color: white;
  max-width: 520px;
  padding: 0 16px;
  font-size: 16px;
}
@media (max-width: 768px) {
  .mainBanner h1 {
    font-size: 54px;
  }
  .aboutKt {
    flex-direction: column-reverse;
  }
  .aboutKt .aboutImg, .aboutKt .aboutContent {
    width: 100%;
  }
  .aboutKt .aboutContent {
    position: static;
  }
  .aboutKt .aboutContent .contentCard {
    position: static;
    box-sizing: border-box;
    width: 100%;
    right: unset;
    top: unset;
  }
}
@media (max-width: 400px) {
  .mainBanner h1 {
    font-size: 48px;
  }
}
</style>