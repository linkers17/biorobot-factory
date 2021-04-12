<template>
    <div class="radio">
        <label :for="id" class="radio__layout">
            <span class="radio__container">
                <input
                        :id="id"
                        type="radio"
                        class="radio__input"
                        :name="name"
                        :value="value"
                        :checked="checked"
                        @change="$emit(name, value)"
                >
                <span class="radio__checked"></span>
            </span>
            <span class="radio__label">{{ text }}</span>
        </label>
    </div>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            id: {
                type: String,
                unique: true,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            disabled: Boolean,
            checked: Boolean,
            value: String,
            name: String
        }
    })
    export default class Radio extends Vue {}
</script>

<style lang="scss" scoped>
    .radio {
        &__layout {
            display: flex;
            align-items: center;

            &:hover {
                cursor: pointer;

                .radio__container {
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
            border-radius: 50%;
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
                & + .radio__checked {
                    opacity: 1;
                }
            }
        }

        &__checked {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
            background-color: $primaryColor;
            border-radius: 50%;
            opacity: 0;
            transition: $trs;
        }

        &__label {
            font-size: 1.2rem;
            line-height: 1.33;
        }
    }
</style>
