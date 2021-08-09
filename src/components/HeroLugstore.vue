<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <carousel class="hero-items" :items="1" :nav="false">
      <div
        class="single-hero-items set-bg"
        style="background-image: url('/img/hero-1.png')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>KECAP</span>
              <h1>Kecap Bango</h1>
              <p>
                Kecap Bango hanya terbuat dari 4 bahan pilihan yang berkualitas
                tinggi: kacang kedelai hitam “Mallika”, gula kelapa, garam dan
                air yang dicampur dengan baik dalam suatu proses khusus,
                memberikan rasa terbaik yang membuat kecap Bango berbeda dari
                produk lain.
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="single-hero-items set-bg"
        style="background-image: url('/img/hero-3.png')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>BUMBU INSTAN</span>
              <h1>Sajiku</h1>
              <p>
                Bumbu Praktis Siap Pakai adalah perpaduan bumbu dan rempah
                pilihan yang dikeringkan untuk membuat Menu Masakan Favorit
                Keluarga Ibu menjadi lezat dengan cara praktis. Mudah digunakan
                untuk masakan sehari-hari dengan berbagai jenis varian.
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="single-hero-items set-bg"
        style="background-image: url('/img/hero-2.png')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>KALDU BUBUK</span>
              <h1>Royco</h1>
              <p>
                Bumbu penyedap khas Indonesia. Terbuat dari daging ayam pilihan
                & rempah-rempah alami khas Indonesia untuk hasilkan masakan
                dengan citarasa gurih & rasa daging yang mantap dengan cepat!
                Mudah terserap sehingga cocok untuk beragam hidangan berkuah,
                aneka tumisan, dan lain-lain.
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </section>
  <!-- Hero Section End -->
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "HeroLugstore",
  components: {
    // eslint-disable-next-line no-undef
    carousel,
  },
};
</script>
<style scoped>
.primary-btn {
  background-color: #810000;
}
</style>