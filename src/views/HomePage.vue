<template>
  <div class="home">
    <Header></Header>
    <Billfold></Billfold>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Billfold from "@/components/Billfold.vue";

@Options({
  components: {
    Button,
    Header,
    Billfold
  }
})
export default class HomePage extends Vue {}
</script>
