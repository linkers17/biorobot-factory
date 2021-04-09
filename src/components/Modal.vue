<template>
    <div class="modal">
        <div class="modal__overlay" @click="$emit(action)"></div>
        <div class="modal__dialog">
            <button class="modal__close-btn" @click="$emit(action)">
                <svg class="modal__close-icon" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05048 0.636039L0.636271 2.05025L5.58602 7L0.636271 11.9497L2.05048 13.364L7.00023 8.41421L11.95 13.364L13.3642 11.9497L8.41445 7L13.3642 2.05025L11.95 0.636039L7.00023 5.58579L2.05048 0.636039Z"/>
                </svg>
            </button>
            <h2 class="modal__title">{{ title }}</h2>
            <p class="modal__text">{{ text }}</p>
            <img
                :src="img"
                :alt="title"
                class="modal__img"
                v-if="img"
            >
        </div>
    </div>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            img: String,
            action: String
        }
    })
    export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;

        &__overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(#1a1a1a, 0.67);
            z-index: 100;
        }
        
        &__dialog {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 1rem;
            max-width: 496px;
            padding: 3.3rem 7rem 4rem 10.6rem;
            z-index: 1000;
        }

        &__close {
            &-btn {
                position: absolute;
                top: 16px;
                right: 16px;
                border: none;
                background-color: transparent;

                &:hover {
                    .modal__close-icon {
                        fill: $primaryHoverColor;
                    }
                }
            }

            &-icon {
                fill: $primaryColor;
                transition: 0.3s;
            }
        }

        &__title {
            color: #212529;
            font-size: 3.2rem;
            line-height: 1.25;
            max-width: 320px;
            font-weight: 600;
            margin-bottom: 2.3rem;
        }

        &__text {
            color: #4C5865;
            font-size: 20px;
            line-height: 1.6;
            font-weight: 600;
        }

        &__img {
            position: absolute;
            top: 48px;
            left: 34px;
        }
    }
</style>
