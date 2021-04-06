<template>
  <div class="home">
    HomePage

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from "@/components/Button.vue";

@Options({
  components: {
    Button
  }
})
export default class HomePage extends Vue {}
</script>
