<template>
    <section class="stock section">
        <span class="section__number">04</span>
        <h2 class="section__title">Склад</h2>
        <div class="stock__body">
            <div class="stock__card" v-for="item in stock">
                <h3 class="stock__card__title">{{ item.title }}</h3>
                <span class="stock__card__amount">
                    Стоимость: <strong>{{ item.amountPurchase }} монет</strong>
                </span>
                <span class="stock__card__count">{{ item.count }} шт</span>
                <Button
                        class="stock__card__btn"
                        v-bind:text="'Продать'"
                        v-bind:type="'secondary'"
                        v-bind:disabled="item.count <= 0"
                        v-bind:id="item.id"
                        v-bind:action="'sell'"
                        @sell="sell({id: item.id, money})"
                ></Button>
            </div>
        </div>
    </section>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import Button from '@/components/Button';
    import {mapActions, mapState} from "vuex";

    @Options({
        computed: {
            ...mapState({
                money: state => state.billfold.money,
                stock: state => state.stock
            })
        },
        components: {
            Button
        },
        methods: {
            ...mapActions('stock', {
                sell: 'sell'
            })
        }
    })
    export default class Stock extends Vue {}
</script>

<style lang="scss" scoped>
    .stock {
        &__body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        &__card {
            max-width: 236px;
            text-align: center;

            &__title {
                font-size: 2rem;
                font-weight: 600;
                line-height: 1.6;
                margin-bottom: 0.5rem;
            }

            &__amount {
                color: $darkTextColor;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 1.5rem;
                display: inline-block;

                strong {
                    font-weight: 600;
                }
            }

            &__count {
                display: block;
                font-size: 2rem;
                line-height: 1.2;
                font-weight: 600;
                margin-bottom: 2.4rem;
            }

            &__btn {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>
