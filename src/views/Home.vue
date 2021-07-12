<template>
  <div class="home">
    <HeaderLugstore />
    <HeroLugstore />
    <KatalogLugstore />
    <InstaLugstore />
    <PartnerLugstore />
    <FooterLugstore />
    <RelatedLugstore />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderLugstore from '@/components/HeaderLugstore.vue'
import HeroLugstore from '@/components/HeroLugstore';
import KatalogLugstore from '@/components/KatalogLugstore';
import InstaLugstore from '@/components/InstaLugstore';
import PartnerLugstore from '@/components/PartnerLugstore';
import FooterLugstore from '@/components/FooterLugstore';
import RelatedLugstore from '@/components/RelatedLugstore';

export default {
  name: 'home',
  components: {
    HeaderLugstore,
    HeroLugstore,
    KatalogLugstore,
    InstaLugstore,
    PartnerLugstore,
    FooterLugstore,
    RelatedLugstore
  }
}
</script>
