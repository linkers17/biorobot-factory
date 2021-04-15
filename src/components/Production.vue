<template>
    <section class="production section" id="production">
        <span class="section__number">05</span>
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
    import {mapActions, mapState} from "vuex";

    @Options({
        components: {
            Radio,
            Button,
            DetailButton
        },
        computed: {
            ...mapState({
                stock: state => state.stock,
                production: state => state.production,
                money: state => state.billfold.money
            }),
            message() {
                const money = this.money;
                const { amount, biomechanism, processor, heart } = this.production;
                const biomechanismCount = biomechanism.filter(t => t === 'ready').length;
                const processorCount = processor.filter(t => t === 'ready').length;
                const heartCount = heart.filter(t => t === 'ready').length;
                const biomechanismNeedCount = biomechanism.length - biomechanismCount;
                const processorNeedCount = processor.length - processorCount;
                const heartNeedCount = heart.length - heartCount;

                let message = 'Не хватает';

                let biomechanismText = '';
                let processorText = '';
                let heartText = '';

                function  declOfNum(count, titles) {
                    const cases = [2, 0, 1, 1, 1, 2];
                    return `${count > 1 ? `${count} ` : ''}${titles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]]}`;
                }

                if (biomechanismNeedCount) {
                    biomechanismText = declOfNum(biomechanismNeedCount, ['биомеханизма', 'биомеханизмов', 'биомеханизмов']);
                }

                if (processorNeedCount) {
                    processorText = declOfNum(processorNeedCount, ['процессора', 'процессоров', 'процессоров']);
                }

                if (heartNeedCount) {
                    heartText = declOfNum(heartNeedCount, ['души', 'душ', 'душ']);
                }

                // Если не хватает денег
                if (money < amount) {
                    // и ничего не добавлено
                    if (!biomechanismCount && !processorCount && !heartCount) {
                        return message + ' биомеханизмов, процессоров, души и денег';
                    }
                    // но всё добавлено
                    if (!biomechanismNeedCount && !processorNeedCount && !heartNeedCount) {
                        return message + ' денег';
                    }
                    // но какой-либо детали не хватает
                    return `${message} ${biomechanismText}${biomechanismText ? ',' : ''} ${processorText}${processorText ? ',' : ''} ${heartText} и денег`.replace(/,\s+и\s/, ' и ');
                } else {
                    // Если есть деньги, но ничего не добавлено
                    if (!biomechanismCount && !processorCount && !heartCount) {
                        return message + ' биомеханизмов, процессоров и души'
                    }
                    // Если хватает и деталей и денег
                    if (!biomechanismNeedCount && !processorNeedCount && !heartNeedCount) {
                        return 'Можно приступать к производству биоробота';
                    }
                    // Если есть деньги, но какой-либо детали не хватает
                    return `${message} ${biomechanismText}${processorText && biomechanismText ? !heartText ? ' и' : ',' : biomechanismText && heartText ? ' и' : ''} ${processorText}${heartText && processorText ? ' и' : ''} ${heartText}`;
                }
            }
        },
        methods: {
            changeType(value) {
                this.changeTypeAction(value);
                this.resetAction();
            },

            changeGender(value) {
                this.changeGenderAction(value);
                this.resetAction();
            },

            ...mapActions('production', {
                changeTypeAction: 'changeType',
                changeGenderAction: 'changeGender',
                resetAction: 'reset',
                transferDetail: 'transferDetail',
                createRobot: 'createRobot'
            })
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
