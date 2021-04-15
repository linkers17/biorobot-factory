<template>
  <div class="home">
    <Header></Header>
    <Billfold></Billfold>
    <Market></Market>
    <Stock></Stock>
    <Production></Production>
    <Modal
        v-if="errorBillfold"
        title="Количество монет ограничено"
        text="Вы не можете нацыганить более 100 монет biorobo"
        v-bind:img="'./img/modal_coin.png'"
        v-bind:action="'closeError'"
        @closeError="closeError"
    ></Modal>
    <Modal
        v-if="messageProduction"
        title="Биоробот произведен"
        text="Поздравляем! Вы произвели биоробота"
        v-bind:action="'closeMessage'"
        @closeMessage="closeMessage"
    ></Modal>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Billfold from "@/components/Billfold.vue";
import Market from "@/components/Market.vue";
import Stock from "@/components/Stock.vue";
import Production from "@/components/Production.vue";
import Modal from "@/components/Modal.vue";
import {mapActions, mapState} from "vuex";

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
    ...mapState({
      errorBillfold: state => state.billfold.error,
      messageProduction: state => state.production.message
    })
  },
  methods: {
    ...mapActions({
      closeError: 'billfold/closeError',
      closeMessage: 'production/closeMessage'
    })
  }
})
export default class HomePage extends Vue {}
</script>
