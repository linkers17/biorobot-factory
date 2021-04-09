<template>
  <div class="home">
    <Header></Header>
    <Billfold></Billfold>
    <Market></Market>
    <Stock></Stock>
    <Production></Production>
    <Modal
      v-if="errorBillfold"
      v-bind:title="'Количество монет ограничено'"
      v-bind:text="errorBillfold"
      v-bind:img="'./img/modal_coin.png'"
      v-bind:action="'closeModal'"
      @closeModal="closeModal"
    ></Modal>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Billfold from "@/components/Billfold.vue";
import Market from "@/components/Market.vue";
import Stock from "@/components/Stock.vue";
import Production from "@/components/Production.vue";
import Modal from "@/components/Modal.vue";

@Options({
  components: {
    Button,
    Header,
    Billfold,
    Market,
    Stock,
    Production,
    Modal
  },
  computed: {
    errorBillfold() {return this.$store.state.billfold.error},
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeError');
    }
  }
})
export default class HomePage extends Vue {}
</script>
