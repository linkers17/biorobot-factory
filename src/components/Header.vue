<template>
    <header class="header">
        <div class="header__top">
            <router-link
                :to="{name: 'home'}"
                class="header__logo-link"
            >
                <svg width="78" height="48" viewBox="0 0 78 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C29.8512 0 35.2134 2.0939 39.378 5.57326L21 23.9513L39.431 42.3823C35.2589 45.8883 29.8761 48 24 48Z" fill="#FF7F22"/>
                    <circle r="4.5" transform="matrix(-1 0 0 1 43.5 23.5)" fill="#FF7F22"/>
                    <circle r="4.5" transform="matrix(-1 0 0 1 58.5 23.5)" fill="#FF7F22"/>
                    <circle r="4.5" transform="matrix(-1 0 0 1 73.5 23.5)" fill="#FF7F22"/>
                </svg>
            </router-link>
            <router-link to="/#production" class="header__link-navigate"> <!-- TODO - потом заменить адрес на объект -->
                <Button
                    v-bind:text="'Произвести биоробота'"
                    v-bind:type="'big'"
                    v-bind:disabled="false"
                ></Button>
            </router-link>
        </div>
        <div class="header__body">
            <div class="header__title">
                <h1 class="title">Фабрика по производству биороботов</h1>
                <span class="header__subtitle">класса «монитор-кресло»</span>
            </div>
            <img src="../../public/images/header-image.png" alt="header-logo" class="header__image">
        </div>
    </header>
</template>

<script>
    import { Options, Vue } from 'vue-class-component';
    import Button from '@/components/Button';

    @Options({
        components: {
            Button
        }
    })
    export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
    .header {
        padding: 4.8rem 0;

        &__top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 9.6rem;
        }

        &__logo {
            &-link {
                display: block;
                text-decoration: none;
            }
        }

        &__link-navigate {
            display: block;
            text-decoration: none;
        }

        &__body {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        &__title {
            max-width: 470px;

            .title {
                margin-bottom: 2.3rem;
            }
        }

        &__subtitle {
            color: $darkTextColor;
            font-size: 2.4rem;
            line-height: 1.25;
            font-weight: 600;
        }
    }
</style>
