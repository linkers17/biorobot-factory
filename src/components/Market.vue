<template>
    <section class="market section">
        <span class="section__number">03</span>
        <h2 class="section__title">Рынок комплектующих</h2>
        <div class="market__body">
            <div class="market__card" v-for="item in goods">
                <div class="market__card__image">
                    <svg :class="`market__card__image-${item.name}`">
                        <use :xlink:href="`${svgSprite}#${item.name}-ready`"></use>
                    </svg>
                </div>
                <h3 class="market__card__title">{{ item.title }}</h3>
                <span class="market__card__amount">
                    Стоимость: <strong>{{ item.amountSale }} монет</strong>
                </span>
                <Button
                        class="market__card__btn"
                        v-bind:text="'Установить'"
                        v-bind:type="'primary'"
                        v-bind:disabled="item.amountSale > money"
                        v-bind:id="item.id"
                        v-bind:action="'buy'"
                        @buy="buy"
                ></Button>
            </div>
        </div>
    </section>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import Button from '@/components/Button';
    import {mapActions, mapState} from "vuex";
    import svgSprite from '@/assets/img/sprite.svg';

    @Options({
        data() {
          return {
              svgSprite
          }
        },
        computed: {
            ...mapState({
                money: state => state.billfold.money,
                goods: state => state.stock
            })
        },
        components: {
            Button
        },
        methods: {
            ...mapActions('stock', {
                buy: 'buy'
            })
        }
    })
    export default class Market extends Vue {}
</script>

<style lang="scss" scoped>
    .market {
        &__body {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        &__card {
            max-width: 236px;
            text-align: center;

            &__image {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 128px;
                margin-bottom: 2.5rem;
            }

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
                margin-bottom: 2.4rem;
                display: inline-block;

                strong {
                    font-weight: 600;
                }
            }

            &__btn {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>

<style lang="scss">
    .market__card__image {
        svg {
            fill: transparent;
            filter: drop-shadow(0px 8px 20px $primaryColor);
        }

        &-biomechanism {
            height: 67px;
            width: 101px;
        }

        &-processor {
            height: 80px;
            width: 80px;
        }

        &-heart {
            height: 88px;
            width: 88px;
        }
    }
</style>
