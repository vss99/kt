<template>
  <footer class="footNote">
    <!-- Links within site  -->
    <nav class="dFlex">
      <section class="listLink" v-for="link in state.links" :key="link.name">
        <a :href="'#' + link.path">
          {{ link.name }}
        </a>
        <!--
        <RouterLink :to="'/' + link.path">
          {{ link.name }}
        </RouterLink>
        -->
      </section>
    </nav>
    <!-- Separator -->
    <section class="separator">
      <hr />
    </section>
    <!-- Description -->
    <article class="description mAuto">
      <p>
        {{ state.orgDescription }}
      </p>
    </article>
    <footer class="baseFooter">
      <!-- Social Links -->
      <aside class="socialLinks dFlex">
        <section v-for="link in state.socialLinks" :key="link.name" class="mediaLink">
          <a :href="link.hrefPath" target="_blank">
            <img :src="getAssetsUrl(link.name)" :alt="link.name">
          </a>
        </section>
      </aside>
      <!-- Copyright -->
      <section class="description mAuto">
        <p>
          &#169; 2020 Copyright: KT Group Online Training
        </p>
      </section>
    </footer>
  </footer>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// import { RouterLink } from "vue-router";
const state = reactive({
  orgDescription: "KT Group online training's are the perfect destination for online " +
      "learning and we connect people through knowledge. Our Mission is to empower the " +
      "learners to be professionals with the help our tutorials.",
  links: [
    {
      path: "about-us",
      name: "About Us"
    },
    {
      path: "courses",
      name: "Courses"
    },
    {
      path: "contact",
      name: "Contact Us"
    }
  ],
  socialLinks: [
    {
      hrefPath: "https://www.linkedin.com/",
      name: "linkedin"
    }, {
      hrefPath: "https://www.twitter.com/",
      name: "twitter"
    }, {
      hrefPath: "https://www.facebook.com/",
      name: "facebook"
    }, {
      hrefPath: "https://www.instagram.com/",
      name: "instagram"
    }, {
      hrefPath: "https://api.whatsapp.com/send?phone=917893847799",
      name: "whatsapp"
    }
  ]
});
function getAssetsUrl(uri: string) {
  return new URL('../../assets/svg/' + uri + '.svg', import.meta.url).href;
}
</script>

<style scoped>
.dFlex {
  display: flex;
}
.mAuto {
  margin: auto;
}
.footNote {
  background-color: rgba(0, 87, 174, 1);
}
.footNote nav {
  flex-direction: row;
  justify-content: space-evenly;
  padding: 36px 16px;
}
.footNote nav section a {
  text-decoration: none;
  text-transform: capitalize;
  color: rgba(255, 255, 255, 1);
  transition: all 200ms ease;
  font-weight: 500;
}
.footNote nav section a:hover {
  color: rgba(255, 255, 255, 0.8);
}
.separator {
  padding: 0 20px;
}
.separator hr {
  border-top: none;
  border-bottom: 1px solid white;
}
.description {
  padding: 36px 16px;
  max-width: 768px;
  text-align: center;
  color: white;
}
.description p {
  margin: 0;
}
.baseFooter {
  padding: 48px 0 0;
  background-image: linear-gradient(to bottom, #0057ae, #0050a6, #00499e, #004396, #003c8e);
}
.baseFooter .socialLinks {
  justify-content: center;
}
.baseFooter .socialLinks .mediaLink {
  width: 20px;
  height: 20px;
  padding: 0 16px;
}
@media (max-width: 768px) {
  .footNote nav {
    flex-direction: column;
  }
  .footNote nav section {
    text-align: center;
    padding: 16px 0;
  }
}
</style>