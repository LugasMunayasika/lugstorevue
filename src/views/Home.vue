<template>
  <div class="home">
    <HeaderLugstore />
    <HeroLugstore />
    <KatalogLugstore />
    <InstaLugstore />
    <PartnerLugstore />
    <FooterLugstore />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderLugstore from "@/components/HeaderLugstore.vue";
import HeroLugstore from "@/components/HeroLugstore";
import KatalogLugstore from "@/components/KatalogLugstore";
import InstaLugstore from "@/components/InstaLugstore";
import PartnerLugstore from "@/components/PartnerLugstore";
import FooterLugstore from "@/components/FooterLugstore";

export default {
  name: "home",
  components: {
    HeaderLugstore,
    HeroLugstore,
    KatalogLugstore,
    InstaLugstore,
    PartnerLugstore,
    FooterLugstore,
  },
};
</script>
