<template>
    <section class="billfold section">
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

    @Options({
        components: {
            Checkbox,
            Coin
        },
        computed: {
            money() {return this.$store.state.billfold.money},
            checkbox() {return this.$store.state.billfold.checkbox},
            text() {
                if (this.money >= 5 && this.money <= 20) {
                    return 'монет';
                }
                switch (this.money % 10) {
                    case 1:
                        return 'монета';
                    case 2:
                        return 'монеты';
                    case 3:
                        return 'монеты';
                    case 4:
                        return 'монеты';
                    default:
                        return 'монет';
                }
            }
        },
        methods: {
            increaseCoin() {
                this.$store.dispatch('increaseCoin');
            },
            changeCheckbox() {
                this.$store.dispatch('changeCheckbox');
            }
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
            transition: 0.3s;
            margin-right: 2rem;

            &:hover {
                color: $primaryHoverColor;
                border-bottom-color: $primaryHoverColor;
            }
        }
    }
</style>
