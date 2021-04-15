<template>
    <button
        class="detail-btn"
        :disabled="!status"
        v-bind:class="{active: status === 'ready'}"
        @click="$emit('transferDetail', {detail, status})"
    >
        <svg :class="`detail-btn__icon-${detail}`">
            <use :xlink:href="`${svgSprite}#${detail}-${status}`"></use>
        </svg>
    </button>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import svgSprite from '@/assets/img/sprite.svg';

    @Options({
        data() {
            return {
                svgSprite
            }
        },
        props: {
            status: Boolean | String,
            detail: String,
            id: Number
        }
    })
    export default class DetailButton extends Vue {}
</script>

<style lang="scss" scoped>
    .detail-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid transparent;
        height: 48px;
        width: 48px;
        background-color: #333940;
        margin-right: 1rem;
        border-radius: 4px;
        transition: $trs;

        &:last-child {
            margin-right: 0;
        }

        &.active {
            border-color: $primaryColor;
        }
    }
</style>

<style lang="scss">
    .detail-btn {
        svg {
            fill: transparent;
            transition: $trs;
        }

        &__icon {
            &-biomechanism {
                height: 24px;
                width: 36px;
            }

            &-processor {
                height: 24px;
                width: 24px;
            }

            &-heart {
                height: 32px;
                width: 32px;
            }
        }
    }
</style>
