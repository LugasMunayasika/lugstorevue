<template>
  <div class="product">
    <HeaderLugstore />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Detail Product</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_utama" alt />
                </div>
                <div
                  class="product-thumbs"
                  v-if="productDetails.galleries.length > 0"
                >
                  <carousel
                    :dots="false"
                    :nav="false"
                    class="product-thumbs-track ps-slider"
                  >
                    <div
                      v-for="ss in productDetails.galleries"
                      :key="ss.id"
                      class="pt"
                      @click="changeImage(ss.photo)"
                      :class="ss.photo == gambar_utama ? 'active' : ''"
                    >
                      <img :src="ss.photo" alt />
                    </div>
                  </carousel>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>{{ productDetails.type }}</span>
                    <h3>{{ productDetails.name }}</h3>
                  </div>
                  <div class="pd-desc">
                    <p v-html="productDetails.description"></p>
                    <h4>Rp{{ productDetails.price }}</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/cart" class="primary-btn">
                      <a
                        @click="
                          saveKeranjang(
                            productDetails.id,
                            productDetails.name,
                            productDetails.price,
                            productDetails.galleries[0].photo
                          )
                        "
                        href=""
                        class="primary-btn pd-cart"
                        >Add To Cart</a
                      >
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->
    <RelatedLugstore />
    <FooterLugstore />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderLugstore from "@/components/HeaderLugstore.vue";
import FooterLugstore from "@/components/FooterLugstore.vue";
import RelatedLugstore from "@/components/RelatedLugstore.vue";
import carousel from "vue-owl-carousel";

import axios from "axios";

export default {
  name: "product",
  components: {
    HeaderLugstore,
    FooterLugstore,
    carousel,
    RelatedLugstore,
  },
  data() {
    return {
      gambar_utama: " ",
      productDetails: [],
      keranjangUser: [],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_utama = urlImage;
    },
    setDataPicture(data) {
      //replace object productDetails dengan data dari API
      this.productDetails = data;
      //replace value gambar default dengan data dari API (galleries)
      this.gambar_utama = data.galleries[0].photo;
    },
    //fungsi untuk menyimpan keranjang
    saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
      var productDisimpan = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct,
      };
      this.keranjangUser.push(productDisimpan);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
    },
  },
  mounted() {
    //validasi untuk localstorage
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }
    axios
      .get("http://127.0.0.1:8000/api/products", {
        params: {
          id: this.$route.params.id,
        },
      })
      // .then((res) => console.log(res.data.data))
      .then((res) => this.setDataPicture(res.data.data))
      //eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
.product-thumbs .pt {
  margin-right: 14px;
}
.quantity .primary-btn {
  background-color: #810000;
}
</style>
