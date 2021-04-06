<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Button,
    Header
  }
})
export default class HomePage extends Vue {}
</script>
