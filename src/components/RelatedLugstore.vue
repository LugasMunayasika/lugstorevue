<template>
  <!-- Related Products Section End -->
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mt-5 md-3" v-if="products.length > 0">
          <carousel
            class="product-slider"
            :items="4"
            :dots="false"
            :autoplay="false"
            :nav="false"
          >
            <!-- mengambil data katalog berdasarkan id pada API -->
            <div
              class="product-item"
              v-for="itemProduct in products"
              v-bind:key="itemProduct.id"
            >
              <div class="pi-pic">
                <img v-bind:src="itemProduct.galleries[0].photo" alt="" />
                <ul>
                  <li
                    @click="
                      saveKeranjang(
                        itemProduct.id,
                        itemProduct.name,
                        itemProduct.price,
                        itemProduct.galleries[0].photo
                      )
                    "
                    class="w-icon active"
                  >
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view">
                    <router-link v-bind:to="'/product/' + itemProduct.id"
                      >+ Quick View</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">{{ itemProduct.type }}</div>
                <router-link to="/product"
                  ><a href="#">
                    <h5>{{ itemProduct.name }}</h5>
                  </a></router-link
                >
                <div class="product-price">
                  Rp{{ itemProduct.price }}
                  <!-- <span>$35.00</span> -->
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>

  <!-- Related Products Section End -->
</template>
<script>
import carousel from "vue-owl-carousel";
import axios from "axios";
export default {
  name: "RelatedLugstore",
  components: {
    carousel,
  },
  data() {
    return {
      products: [],
      keranjangUser: [],
    };
  },
  //syntax dari dokumentasi vue
  mounted() {
    axios
      .get("http://lugstore-back.herokuapp.com/api/products")
      .then((res) => (this.products = res.data.data.data))
      //eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  },
  methods: {
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
};
</script>