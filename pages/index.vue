<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <br /><br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out</h1>
      <br />
      <ProductSlider :products="products" />
      <br /><br /><br />
      <Newsletter />
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    this.sale_items = await this.$content('product').where({ onSale: true }).fetch()
    this.products = await this.$content('product').fetch()
  },
  data() {
    return {
      products: null,
      sale_items: null,
    }
  },
};
</script>
