<template>
    <div class="checkbox">
        <label :for="id" class="checkbox__layout" v-bind:style="{cursor: disabled ? 'default' : ''}">
            <span class="checkbox__container" v-bind:style="{borderColor: disabled ? '#333940' : ''}">
                <input
                    :id="id"
                    :disabled="disabled"
                    :checked="checkbox ? checkbox : false"
                    type="checkbox"
                    class="checkbox__input"
                    @change="$emit('changeCheckbox')"
                >
                <span class="checkbox__checked">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L6 10L13 1" stroke="#FF7F22" stroke-width="2"/>
                    </svg>
                </span>
            </span>
            <span class="checkbox__label">{{ text }}</span>
        </label>
    </div>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            id: {
                type: String,
                unique: true
            },
            text: {
                type: String,
                required: true
            },
            disabled: Boolean,
            checkbox: Boolean
        }
    })
    export default class Checkbox extends Vue {}
</script>

<style lang="scss" scoped>
    .checkbox {
        &__layout {
            display: flex;
            align-items: center;

            &:hover {
                cursor: pointer;

                .checkbox__container {
                    border-color: #4c5865;
                }
            }
        }

        &__container {
            position: relative;
            margin-right: 1.2rem;
            display: inline-block;
            line-height: 0;
            height: 24px;
            width: 24px;
            border: 2px solid $darkTextColor;
            transition: $trs;
        }

        &__input {
            border: none;
            height: 1px;
            width: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            bottom: 0;
            left: 50%;

            &:checked {
                & + .checkbox__checked {
                    opacity: 1;
                }
            }
        }

        &__checked {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            opacity: 0;
            transition: $trs;
        }
    }
</style>
