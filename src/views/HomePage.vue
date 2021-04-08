<template>
  <div class="home">
    <Header></Header>
    <Billfold></Billfold>
    <Market></Market>
    <Stock></Stock>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Billfold from "@/components/Billfold.vue";
import Market from "@/components/Market.vue";
import Stock from "@/components/Stock.vue";

@Options({
  components: {
    Button,
    Header,
    Billfold,
    Market,
    Stock
  }
})
export default class HomePage extends Vue {}
</script>
