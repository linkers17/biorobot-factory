<template>
    <section class="production section" id="production">
        <h2 class="section__title">Производство</h2>
        <div class="production__body">
            <div class="production__create">
                <div class="production__create__select">
                    <div class="production__create__type">
                        <h4 class="production__create__title">Тип биоробота:</h4>
                        <div class="production__create__radio">
                            <Radio
                                    v-bind:id="'frontend'"
                                    v-bind:text="'FrontEnd'"
                                    v-bind:disabled="false"
                                    v-bind:checked="production.type === 'frontend'"
                                    v-bind:value="'frontend'"
                                    v-bind:name="'type'"
                                    @type="changeType"
                            >
                            </Radio>
                            <Radio
                                    v-bind:id="'design'"
                                    v-bind:text="'Design'"
                                    v-bind:disabled="false"
                                    v-bind:checked="production.type === 'design'"
                                    v-bind:value="'design'"
                                    v-bind:name="'type'"
                                    @type="changeType"
                            >
                            </Radio>
                        </div>
                    </div>
                    <div class="production__create__gender">
                        <h4 class="production__create__title">Стабилизатор:</h4>
                        <div class="production__create__radio">
                            <Radio
                                    v-bind:id="'male'"
                                    v-bind:text="'Male'"
                                    v-bind:disabled="false"
                                    v-bind:checked="production.gender === 'male'"
                                    v-bind:value="'male'"
                                    v-bind:name="'gender'"
                                    @gender="changeGender"
                            >
                            </Radio>
                            <Radio
                                    v-bind:id="'famale'"
                                    v-bind:text="'Famale'"
                                    v-bind:disabled="false"
                                    v-bind:checked="production.gender === 'famale'"
                                    v-bind:value="'famale'"
                                    v-bind:name="'gender'"
                                    @gender="changeGender"
                            >
                            </Radio>
                        </div>
                    </div>
                    <Button
                            v-bind:text="`Произвести за ${production.amount} монет`"
                            v-bind:type="'big'"
                            v-bind:action="'createRobot'"
                            v-bind:disabled="money < production.amount || production.stage !== true"
                            @createRobot="createRobot"
                    ></Button>
                </div>
                <div class="production__create__details">
                    <div
                        class="production__create__details-row"
                        v-for="item in stock"
                    >
                        <DetailButton
                            v-for="status in production[item.name]"
                            v-bind:img="item.img"
                            v-bind:status="status"
                            v-bind:detail="item.name"
                            @transferDetail="transferDetail"
                        ></DetailButton>
                    </div>
                    <span class="production__create__state">
                        {{ message }}
                    </span>
                </div>
            </div>
            <div class="production__image">
                <img
                    :src="`img/robots/${production.type}-${production.gender}-${production.stage}.png`"
                    alt="biorobo"
                >
            </div>
        </div>
    </section>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import Radio from '@/components/Radio';
    import Button from '@/components/Button';
    import DetailButton from '@/components/DetailButton';

    @Options({
        components: {
            Radio,
            Button,
            DetailButton
        },
        computed: {
            stock() {return this.$store.state.stock},
            production() {return this.$store.state.production},
            money() {return this.$store.state.billfold.money},
            message() {
                const money = this.money;
                const amount = this.production.amount;
                const biomechanism = this.production.biomechanism;
                const processor = this.production.processor;
                const heart = this.production.heart;
                const biomechanismCount = biomechanism.filter(t => t === 'ready').length;
                const processorCount = processor.filter(t => t === 'ready').length;
                const heartCount = heart.filter(t => t === 'ready').length;
                let message = 'Не хватает';
                let flag = false;

                // Если не хватает денег
                if (money < amount) {
                    // и ничего не добавлено
                    if (!biomechanismCount && !processorCount && !heartCount) {
                        return message + ' биомеханизмов, процессоров, души и денег';
                    }
                }
                return message;
            }
        },
        methods: {
            changeType(value) {
                this.$store.dispatch('production/changeType', value);
            },

            changeGender(value) {
                this.$store.dispatch('production/changeGender', value);
            },

            transferDetail({detail, status}) {
                this.$store.dispatch('production/transferDetail', {detail, status});
            },

            createRobot() {
                this.$store.dispatch('production/createRobot');
            }
        }
    })
    export default class Production extends Vue {}
</script>

<style lang="scss" scoped>
    .production {
        &__body {
            display: flex;
            justify-content: space-between;
        }

        &__create {
            display: flex;
            align-items: flex-start;
            margin-top: 1rem;
            flex-grow: 1;
            justify-content: space-between;

            &__select {
                max-width: 236px;
            }

            &__type {
                margin-bottom: 3.6rem;
            }

            &__gender {
                margin-bottom: 8rem;
            }

            &__title {
                font-size: 1.4rem;
                line-height: 1.4;
                font-weight: 500;
                margin-bottom: 1.6rem;
            }

            &__radio {
                display: flex;
                justify-content: space-between;

                & > * {
                    width: 105px;
                }
            }

            &__details {
                &-row {
                    display: flex;
                    margin-bottom: 1.6rem;

                    &:last-of-type {
                        margin-bottom: 6rem;
                    }
                }
            }

            &__state {
                display: inline-block;
                color: $darkTextColor;
                font-size: 1.2rem;
                line-height: 1.4;
                font-weight: 500;
                max-width: 200px;
            }
        }

        &__image {
            margin-left: 3.8rem;
        }
    }
</style>
