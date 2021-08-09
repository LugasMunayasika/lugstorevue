<template>
  <!-- Header Section Begin -->
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <div class="mail-service">
            <i class="fa fa-envelope"></i> lugasmunaya@gmail.com
          </div>
          <div class="phone-service">
            <i class="fa fa-phone"></i> +628 1235062988
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-header">
        <div class="row">
          <div class="col-lg-2 col-md-2">
            <div class="logo">
              <a href="./">
                <img src="img/logolugstore-01.png" alt="logo lugstore" />
              </a>
            </div>
          </div>
          <div class="col-lg-7 col-md-7"></div>
          <div class="col-lg-3 text-right col-md-3">
            <ul class="nav-right">
              <li class="cart-icon">
                Shopping Cart &nbsp;
                <a href="#">
                  <i class="icon_bag_alt"></i>
                  <span>{{ keranjangUser.length }}</span>
                </a>
                <div class="cart-hover">
                  <div class="select-items">
                    <table>
                      <tbody v-if="keranjangUser.length > 0">
                        <tr
                          v-for="keranjang in keranjangUser"
                          :key="keranjang.id"
                        >
                          <td class="si-pic">
                            <img
                              class="photo-item"
                              :src="keranjang.photo"
                              alt=""
                            />
                          </td>
                          <td class="si-text">
                            <div class="product-selected">
                              <p>{{ keranjang.price }}</p>
                              <h6>{{ keranjang.name }}</h6>
                            </div>
                          </td>
                          <!-- tanda silang -->
                          <td
                            @click="removeItem(keranjangUser.index)"
                            class="si-close"
                          >
                            <i class="ti-close"></i>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td>Cart Empty</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="select-total">
                    <span>total:</span>
                    <h5>Rp{{ hargaTotal }}.00</h5>
                  </div>
                  <div class="select-button">
                    <a href="#" class="primary-btn view-card"
                      ><router-link to="/cart" style="color: #fff"
                        >VIEW CARD</router-link
                      ></a
                    >
                    <a href="#" class="checkout-btn">CHECK OUT</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header End -->
</template>
<script>
export default {
  name: "HeaderLugstore",
  data() {
    return {
      keranjangUser: [],
    };
  },
  //methods dijalankan dengan adanya even seperti onclick, onhover
  methods: {
    removeItem(index) {
      this.keranjangUser.splice(index, 1); //splice untuk menghilangkan data
      //untuk menyimpan ulang kembali data yang baru / setelah dihapus
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }
  },
  //untuk mengkalkulasi jumlah harga barang, computed bisa digunakan tanpa adanya even
  computed: {
    hargaTotal() {
      return this.keranjangUser.reduce(function (items, data) {
        return items + data.price;
      }, 0);
    },
  },
};
</script>
<style scoped>
.checkout-btn {
  background-color: #810000;
}
.si-text {
  color: #810000;
}
.photo-item {
  width: 80px;
  height: 80px;
}
.view-card {
  color: #fff !important;
}
</style>