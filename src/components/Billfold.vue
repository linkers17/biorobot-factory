<template>
    <section class="billfold section">
        <span class="section__number">02</span>
        <h2 class="section__title">Кошелёк криптовалют</h2>
        <div class="money billfold__money">
            <Coin v-if="money"></Coin>
        </div>
        <p class="billfold__count"><strong>{{ money }}</strong> biorobo {{ text }}</p>
        <div class="billfold__increase-block">
            <button class="billfold__add" @click="increaseCoin">Нацыганить</button>
            <Checkbox
                v-bind:id="'coin'"
                v-bind:text="'Цыганить по 5 монет'"
                v-bind:disabled="false"
                v-bind:checkbox="checkbox"
                @changeCheckbox="changeCheckbox"
            >
            </Checkbox>
        </div>
    </section>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import Checkbox from "@/components/Checkbox.vue";
    import Coin from "@/components/Coin.vue";
    import {mapActions, mapState} from "vuex";

    @Options({
        components: {
            Checkbox,
            Coin
        },
        computed: {
            ...mapState('billfold', {
                money: state => state.money,
                checkbox: state => state.checkbox
            }),
            text() {
                function declOfNum(count, titles) {
                    const cases = [2, 0, 1, 1, 1, 2];
                    return titles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[count % 10 < 5 ? count % 10 : 5]];
                }
                return declOfNum(this.money, ['монета', 'монеты', 'монет']);
            }
        },
        methods: {
            ...mapActions('billfold', [
                'increaseCoin',
                'changeCheckbox'
            ])
        }
    })
    export default class Billfold extends Vue {}
</script>

<style lang="scss" scoped>
    .billfold {
        &__money {
            height: 2rem;
            margin-bottom: 2.3rem;
        }

        &__count {
            color: $darkTextColor;
            font-size: 2.4rem;
            margin-bottom: 4rem;

            strong {
                font-weight: 700;
            }
        }

        &__increase-block {
            display: flex;
            align-items: center;
        }

        &__add {
            background-color: transparent;
            font-family: inherit;
            font-weight: 500;
            line-height: 1.5;
            color: $primaryColor;
            padding: 0;
            border: none;
            border-bottom: 1px solid $primaryColor;
            transition: $trs;
            margin-right: 2rem;

            &:hover {
                color: $primaryHoverColor;
                border-bottom-color: $primaryHoverColor;
            }
        }
    }
</style>
