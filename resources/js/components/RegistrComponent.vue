<template>


    <div class=" block-registr  wrapper_center-top">


        <div class="wrapper_self-left">
            <div class="form__title">Регистрация</div>
        </div>


        <form class="wrapper_lef-top" v-on:submit.prevent>


            <label for="email_field" class="form__field-lable wrapper_mt-20">
                E-mail</label>

                <input class="form__field-input wrapper_mt-10"
                    id="email_field"
                    name="email"
                    type="email"
                    autocomplete="off"
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


            <label for="login_field" class="form__field-lable wrapper_mt-20">
                Логин</label>

                <input class="form__field-input wrapper_mt-10"
                           id="login_field"
                           name="login"
                           type="text"
                           autocomplete="off"
                               @blur="checkLoginBlur"
                               @input="checkLoginInput"
                           v-model="login"
                           v-validate.initial="'required|min:3'"
                           :class="{ error: errors.has('login') &&
                                showLoginErrors}">

                <div class="error-message "
                     v-if="errors.has('login') && showLoginErrors ">
                    {{ errors.first('login') }}
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


            <label for="repassword_field"
                   class="form__field-lable wrapper_mt-20">Пароль еще раз</label>

                <input class="form__field-input wrapper_mt-10"
                       id="repassword_field"
                       name="repassword"
                       type="password"
                       data-type="password"
                       autocomplete="off"
                           @blur="checkRepasswordBlur"
                           @input="checkRepasswordInput"
                       v-model="repassword"
                       v-validate.initial="'required|confirmed:password'"
                       :class="{ error: errors.has('repassword') &&
                                showRepasswordErrors}">

                <div class="error-message "
                     v-if="errors.has('repassword') && showRepasswordErrors ">
                    {{ errors.first('repassword') }}
                </div>


            <button class="button wrapper_mt-50" @click = 'registration'>
                Зарегистрироваться</button>


        </form>


        <div class="wrapper_mt-50 form-additional-message">Зарегистрированы?
            <a class="form-additional-message__link">
                <router-link :to="{ name: 'auth' }">Войдите</router-link>
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


    import axios from 'axios';

    export default {


        name: "RegistrComponent",

        data() {

            return {

                email: '',
                login: '',
                password: '',
                repassword: '',

                showEmailErrors: '',
                showLoginErrors: '',
                showPasswordErrors: '',
                showRepasswordErrors: ''

            }
        },


        methods: {

            checkEmailBlur() {
                this.showEmailErrors = true
            },

            checkEmailInput() {
                this.showEmailErrors = false
            },

            checkLoginBlur() {
                this.showLoginErrors = true
            },

            checkLoginInput() {
                this.showLoginErrors = false
            },

            checkPasswordBlur() {
                this.showPasswordErrors = true
            },

            checkPasswordInput() {
                this.showPasswordErrors = false
            },

            checkRepasswordBlur() {
                this.showRepasswordErrors = true
            },

            checkRepasswordInput() {
                this.showRepasswordErrors = false
            },


            reg() {
                const email = this.email
                const login = this.login
                const password = this.password

                const regdata = {
                    'email': email,
                    'login': login,
                    'password': password,
                }
                this.$store.dispatch('auth', regdata)
            },

            registration () {

                const email = this.email
                const login = this.login
                const password = this.password

                const regdata = {
                    'email': email,
                    'login': login,
                    'password': password,
                };

                // axios
                //     .post('/api/user/register', regdata )
                    // .post('/api/auth/register', regdata )
                // axios({ url: '/api/auth/register', data: regdata, method: 'POST' })

                this.$store
                    .dispatch('registerAction', regdata)
                    .then(() => this.$router.push({path: '/search'}))
                    .catch(err => console.log(err));

            }

        },


        mounted:

            function () {
                // console.log('mounted 1')

            }

    }


</script>



<style scoped lang="sass">


    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'


    .block-registr

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




