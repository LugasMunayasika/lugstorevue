<template>
  <div class="shopping">
    <headerLugstore />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more text-left">
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->
    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <div class="cart-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th class="p-name text-center">Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="keranjang in keranjangUser"
                        :key="keranjang.id"
                      >
                        <td class="cart-pic first-row">
                          <img class="pic-cart" :src="keranjang.photo" alt="" />
                        </td>
                        <td class="cart-title first-row text-center">
                          <h5>{{ keranjang.name }}</h5>
                        </td>
                        <td class="p-price first-row">{{ keranjang.price }}</td>
                        <td
                          @click="removeItem(keranjangUser.index)"
                          class="delete-item"
                        >
                          <a href="#"><i class="material-icons"> close </i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-lg-8">
                <h4 class="mb-4 text-left">Informasi Pembeli:</h4>
                <div class="user-checkout text-left">
                  <form>
                    <div class="form-group">
                      <label for="namaLengkap">Nama lengkap</label>
                      <input
                        type="text"
                        class="form-control"
                        id="namaLengkap"
                        aria-describedby="namaHelp"
                        placeholder="Masukan Nama"
                        v-model="custInfo.name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">Email Address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailAddress"
                        aria-describedby="emailHelp"
                        placeholder="Masukan Email"
                        v-model="custInfo.email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaLengkap">No. HP</label>
                      <input
                        type="text"
                        class="form-control"
                        id="noHP"
                        aria-describedby="noHPHelp"
                        placeholder="Masukan No. HP"
                        v-model="custInfo.number"
                      />
                    </div>
                    <div class="form-group">
                      <label for="alamatLengkap">Alamat Lengkap</label>
                      <textarea
                        class="form-control"
                        id="alamatLengkap"
                        rows="3"
                        v-model="custInfo.address"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12">
                <div class="proceed-checkout text-left">
                  <ul>
                    <li class="subtotal">
                      ID Transaction <span>#LS12001</span>
                    </li>
                    <li class="subtotal mt-3">
                      Subtotal <span>Rp{{ hargaTotal }}.00</span>
                    </li>
                    <li class="subtotal mt-3">
                      Pajak <span>10% Rp{{ (hargaTotal * 10) / 100 }}.00</span>
                    </li>
                    <li class="subtotal mt-3">
                      Total Biaya
                      <span> Rp {{ totalBayar }}</span>
                    </li>
                    <li class="subtotal mt-3">
                      Bank Transfer <span>BNI</span>
                    </li>
                    <li class="subtotal mt-3">
                      No. Rekening <span>0829654714</span>
                    </li>
                    <li class="subtotal mt-3">
                      Nama Penerima <span>Lugas Munayasika</span>
                    </li>
                  </ul>
                  <!-- <router-link to="/success"> -->
                  <a @click="checkout()" href="#" class="proceed-btn"
                    >I ALREADY PAID</a
                  >
                  <!-- </router-link> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Shopping Cart Section End -->
  </div>
</template>
<script>
import HeaderLugstore from "@/components/HeaderLugstore.vue";
import axios from "axios";
export default {
  name: "cart",
  components: {
    HeaderLugstore,
  },
  data() {
    return {
      keranjangUser: [],
      custInfo: {
        name: "",
        email: "",
        number: "",
        address: "",
      },
    };
  },
  methods: {
    removeItem(index) {
      this.keranjangUser.splice(index, 1); //splice untuk menghilangkan data
      //untuk menyimpan ulang kembali data yang baru / setelah dihapus
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
    },
    //fungsi untuk mengirim data ke API
    checkout() {
      let productIds = this.keranjangUser.map(function (product) {
        return product.id;
      });
      let checkoutData = {
        name: this.custInfo.name,
        email: this.custInfo.email,
        number: this.custInfo.number,
        address: this.custInfo.address,
        transaction_total: this.totalBayar,
        transaction_status: "PENDING",
        transaction_details: productIds,
      };
      axios
        .post("https://lugstore-back.herokuapp.com/api/checkout", checkoutData)
        .then(() => this.$router.push("success"))
        //eslint-disable-next-line no-console
        .catch((err) => console.log(err));
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
    biayaPajak() {
      return (this.hargaTotal * 10) / 100;
    },
    totalBayar() {
      return this.hargaTotal + this.biayaPajak;
    },
  },
};
</script>
<style scoped>
.proceed-btn {
  background-color: #810000;
}
.pic-cart {
  width: 110px;
  height: 110px;
}
</style>