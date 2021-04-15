<template>
    <div class="money__coin">
        <img
            src="@/assets/img/coin.png"
            alt="coin"
            class="money__coin-img"
            v-for="i in money"
        >
    </div>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import {mapState} from "vuex";

    @Options({
        computed: {
            ...mapState('billfold', {
                money: state => state.money
            })
        }
    })
    export default class Coin extends Vue {}
</script>

<style lang="scss" scoped>
    .money {
        &__coin {
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;

            &-img {

                &:last-child {
                    margin: 0;
                }

                display: inline-block;
                margin-left: -8px;
            }
        }
    }
</style>
