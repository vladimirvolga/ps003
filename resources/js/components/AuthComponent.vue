<template>


        <div class=" block-auth  wrapper_center-top">


            <div class="wrapper_self-left">
                <div class="form__title">Авторизация</div>
            </div>


            <form class="wrapper_lef-top" v-on:submit.prevent>


                <label for="email_field" class="form__field-lable wrapper_mt-20">
                    E-mail</label>

                <input class="form__field-input wrapper_mt-10"
                       id="email_field"
                       name="email"
                       type="email"
                       autocomplete="offddd"
                       autofocus
                       @blur="checkEmailBlur"
                       @input="checkEmailInput"
                       v-model="email"
                       v-validate.initial="'required|email'"
                       :class="{ error: errors.has('email') &&
                    showEmailErrors} ">

                <div class="error-message "
                     v-if="errors.has('email') && showEmailErrors ">
                    {{ errors.first('email') }}
                </div>


                <label for="password_field"
                       class="form__field-lable wrapper_mt-20">Пароль</label>

                <input class="form__field-input wrapper_mt-10"
                       id="password_field"
                       name="password"
                       type="password"
                       ref="password"
                       data-type="password"
                       autocomplete="off"
                       @blur="checkPasswordBlur"
                       @input="checkPasswordInput"
                       v-model="password"
                       v-validate.initial="'required|min:4'"
                       :class="{ error: errors.has('password') &&
                            showPasswordErrors}">

                <div class="error-message "
                     v-if="errors.has('password') && showPasswordErrors ">
                    {{ errors.first('password') }}
                </div>


                <button class="button wrapper_mt-50" @click = 'loginFunction'>
                    Войти</button>


            </form>


            <div class="wrapper_mt-50 form-additional-message">Еще не
                зарегистрированы?
                <a class="form-additional-message__link">
                    <router-link :to="{ name: 'registr' }">
                        Зарегистрируйтесь</router-link>
                </a>
            </div>


            <!--Тестовая ссылка на  страницу поиска-->

            <div class="wrapper_mt-10">
                <a class="form-additional-message__link">
                    <router-link :to="{ name: 'search' }">Переход на страницу
                        поиска</router-link>
                </a>
            </div>

        </div>


</template>



<script>


    import store from "../store";

    export default {

        name: "AuthComponent",

        data() {

            return {

                email: '',
                password: '',

                showEmailErrors: '',
                showPasswordErrors: '',

                form: {
                    email: '',
                    password: '',
                },

                error: null,

            }
        },

        methods: {

            checkEmailBlur() {
                this.showEmailErrors = true
            },

            checkEmailInput() {
                this.showEmailErrors = false
            },

            checkPasswordBlur() {
                this.showPasswordErrors = true
            },

            checkPasswordInput() {
                this.showPasswordErrors = false
            },


            loginFunction () {

                const email = this.email
                const password = this.password

                const authdata = {
                    'email': email,
                    'password': password,
                };

                this.$store
                    .dispatch('loginAction', authdata)
                    .then(() => this.$router.push({path: '/search'}))
                    .catch(err => console.log(err));

            }

        }

    }


</script>



<style scoped lang="sass">


    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'


    .block-auth

        background-color: $background


    .form__title

        color: $red-200

        font-family: $font-family-main
        font-weight: 400
        font-size: 22px


    .form__field-lable

        font-family: $font-family-main
        font-weight: 400
        font-size: 14px

        color: $blue-153


    .form__field-input

        width: 385px
        height: 38px

        padding: 0 8px 0 8px

        border: 1px solid $color-input-border

        color: $color-input-text

        -webkit-box-shadow: inset 0 0 0 50px #fff



    .button

        width: 403px
        height: 40px

        padding: 0

        border: 1px solid $color-button-border

        background: $background

        font-family: $font-family-main
        font-weight: 400
        font-size: 14px

        color: $blue-153
        /*text-transform: uppercase*/

        cursor: pointer


    .button:hover

        border: 1px solid $color-button-border

        background-color: $blue-153
        color: $background


    .form-additional-message

        font-family: $font-family-main
        font-weight: 400
        font-size: 14px

        color: $blue-153


    .form-additional-message__link

        font-family: $font-family-main
        font-weight: 400
        font-size: 14px

        color: $blue-153


    .form-item
        .error-message

            display: none

        &.input-error
            .error-message

                display: block


    .error-message

        font-family: $font-family-main
        font-weight: 400
        font-size: 12px

        color: $color-error

    input
        &.error

            border-color: $color-error


</style>