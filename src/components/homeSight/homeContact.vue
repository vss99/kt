<template>
  <section class="ktContact" id="contact">
    <figure class="contactImg">
      <h2>{{ state.contactHeading }}</h2>
      <img src="/src/assets/svg/contact.svg" alt="Contact">
    </figure>
    <article class="contactLinks">
      <section class="linksGroup">
        <article class="linkItem">
          <img src="/src/assets/svg/email.svg" alt="email">
          <a href="mailto:info@ktgrouptraining.com">info@ktgrouptraining.com</a>
        </article>
        <article class="linkItem">
          <img src="/src/assets/svg/call.svg" alt="call">
          <a href="tel:+917893847799"> +91 78938 47799 </a>
        </article>
      </section>
    </article>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  contactHeading: "Let's Talk"
});
</script>

<style scoped>
figure {
  margin: 0;
}
.ktContact {
  display: flex;
  justify-content: space-between;
  background-color: #ECEAE1;
  flex-direction: row;
}
.ktContact .contactImg {
  width: 36%;
  background-color: #006B67;
}
.ktContact .contactImg h2 {
  font-family: serif;
  font-size: 64px;
  color: white;
  margin: 36px auto 32px;
  text-align: center;
}
.ktContact .contactImg img {
  max-width: 100%;
  padding: 36px 60px 60px;
  display: block;
  box-sizing: border-box;
}
.ktContact .contactLinks {
  width: 63%;
  display: flex;
}
.ktContact .contactLinks .linksGroup {
  margin: auto;
}
.ktContact .contactLinks .linkItem {
  margin: 0 auto 60px;
  max-width: 520px;
  text-align: left;
  display: flex;
  align-items: center;
}
.ktContact .contactLinks .linkItem img {
  max-width: 36px;
  display: inline-block;
  margin-right: 20px;
}
.ktContact .contactLinks .linkItem a {
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  transition: all 200ms ease;
  font-weight: 500;
  font-size: 24px;
  display: inline-block;
}
.ktContact .contactLinks .linkItem a:hover {
  color: rgba(0, 0, 0, 0.6);
}
@media (max-width: 768px) {
  .ktContact {
    flex-direction: column;
  }
  .ktContact .contactImg, .ktContact .contactLinks {
    width: 100%;
  }
  .ktContact .contactLinks .linkItem {
    margin: 80px auto;
  }
  .ktContact .contactImg h2 {
    font-size: 36px;
    margin: 32px auto 12px;
  }
  .ktContact .contactImg img {
    max-width: 100%;
    padding: 20px 40px 60px;
    display: block;
    box-sizing: border-box;
  }
}
</style>