<template>


    <div class=" user-block  wrapper_mt-10">

        <div class="user-block__email ">{{ userEmail }}</div>

        <button class="user-block__logout-button wrapper_ml-16 wrapper_mr-16"
             @click = 'logoutFunction'>Выйти</button>

        <!--<button class="button wrapper_ml-16">Выйти</button>-->

    </div>



</template>



<script>

    // import store from "../store";

    export default {

        name: "UserBlockComponent",

        computed: {

            userEmail () {
                return this.$store.getters.get_userEmail
            }

        },

        methods: {

            logoutFunction () {

                this.$store
                    .dispatch('logoutAction')
                    .then(() => this.$router.push({path: '/'}))
                    // .catch(err => console.log(err));

            }

        }

    }


</script>



<style scoped lang="sass">

    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'

    .user-block

        display: flex
        flex-direction: row
        justify-content: center
        align-items: center

        white-space: nowrap

        /*position: absolute*/
        /*right: 0px*/

    .user-block__email

        display: flex
        /*flex-direction: row*/
        /*justify-content: center*/
        align-items: center

        color: $blue-153
        font-size: 13px
        font-weight: 400


    .user-block__logout-button

        display: flex
        /*flex-direction: row*/
        /*justify-content: center*/
        align-items: center

        height: 40px

        border-width: 0

        padding-right: 16px
        padding-left: 16px

        background: $background

        font-family: $font-family-main
        font-weight: 400
        font-size: 13px

        color: $blue-153

        cursor: pointer


    .user-block__logout-button:hover

        //border: 1px solid $color-button-border

        background-color: $blue-153
        color: $background


</style>