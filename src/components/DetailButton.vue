<template>
    <button
        class="detail-btn"
        v-html="img"
        :disabled="!status"
        v-bind:class="{active: status === 'ready'}"
        @click="$emit('transferDetail', {detail, status})"
    ></button>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            img: String,
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
        transition: 0.3s;

        &:last-child {
            margin-right: 0;
        }

        &.active {
            border-color: $primaryColor;
        }

        &:hover {
            border-color: $primaryHoverColor;
        }

        &:disabled {
            &:hover {
                border-color: transparent;
            }
        }
    }
</style>

<style lang="scss">
    .detail-btn {
        svg {
            fill: transparent;
            transition: 0.3s;

            circle {
                stroke: #fff;
            }

            path {
                fill: #fff;
            }
        }

        &.active {
            svg {

                circle {
                    stroke: $primaryColor;
                }

                path {
                    fill: $primaryColor;
                }
            }
        }

        &:disabled {
            svg {

                circle {
                    stroke: #4C5865;
                }

                path {
                    fill: #4C5865;
                }
            }

            &:hover {
                svg {

                    circle {
                        stroke: #4C5865;
                    }

                    path {
                        fill: #4C5865;
                    }
                }
            }
        }

        &:hover {
            svg {

                circle {
                    stroke: $primaryHoverColor;
                }

                path {
                    fill: $primaryHoverColor;
                }
            }
        }
    }
</style>
