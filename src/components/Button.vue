<template>
    <div>
        <button
                class="btn"
                @click="$emit(action, id)"
                :disabled="disabled"
                v-bind:class="{
            btn_primary: type === 'primary',
            btn_secondary: type === 'secondary',
            btn_big: type === 'big'
        }">
            <span>{{ text }}</span>
        </button>
    </div>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            type: {
                type: String,
                default: 'default'
            },
            text: {
                type: String,
                required: true
            },
            disabled: Boolean,
            id: Number,
            action: String
        }
    })
    export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
    .btn {
        display: block;
        width: 200px;
        border: none;
        border-radius: 60px;
        color: #aaa;
        transition: 0.3s;
        font-family: inherit;
        font-size: 1.6rem;
        line-height: 1.5;
        padding: 2px;
        cursor: pointer;
    }

    @mixin styleButtons(
        $type, $fw, $width,
            $font-color, $bg-color, $border-color, $filter,
            $font-color-hover, $bg-color-hover, $border-color-hover, $filter-hover,
            $font-color-active, $bg-color-active, $border-color-active, $filter-active,
            $font-color-disabled, $bg-color-disabled, $border-color-disabled, $filter-disabled
    ) {
        .#{$type} {
            width: $width;
            font-weight: $fw;
            color: $font-color;
            background: $border-color;
            filter: $filter;

            &:hover {
                color: $font-color-hover;
                background: $border-color-hover;
                filter: $filter-hover;

                span {
                    background: $bg-color-hover;
                }
            }

            &:active {
                color: $font-color-active;
                background: $border-color-active;
                filter: $filter-active;

                span {
                    background: $bg-color-active;
                }
            }

            &:disabled {
                color: $font-color-disabled;
                background: $border-color-disabled;
                filter: $filter-disabled;
                cursor: default;

                &:hover {
                    color: $font-color-disabled;
                    background: $border-color-disabled;
                    filter: $filter-disabled;
                }

                span {
                    background: $bg-color-disabled;
                }
            }

            span {
                display: block;
                padding: 1rem 0;
                background: $bg-color;
                border-radius: 60px;
                transition: 0.3s;
            }
        }
    }

    @each $type, $fw, $width,
        $font-color, $bg-color, $border-color, $filter,
        $font-color-hover, $bg-color-hover, $border-color-hover, $filter-hover,
        $font-color-active, $bg-color-active, $border-color-active, $filter-active,
        $font-color-disabled, $bg-color-disabled, $border-color-disabled, $filter-disabled in $typesButtons {

        @include styleButtons($type, $fw, $width,
                $font-color, $bg-color, $border-color, $filter,
                $font-color-hover, $bg-color-hover, $border-color-hover, $filter-hover,
                $font-color-active, $bg-color-active, $border-color-active, $filter-active,
                $font-color-disabled, $bg-color-disabled, $border-color-disabled, $filter-disabled);
    }

</style>
