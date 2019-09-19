<template>


    <div class="button-up invisible" @click ='backToTop'>
        <font-awesome-icon icon="arrow-up" />
    </div>


</template>



<script>


    export default {


        name: "ButtonUpComponent",


        created: function(){

            this.$nextTick(function () {
                this.checkScrollForButtonUp()
            })

        },


        computed: {

            //   ...

        },


        methods: {

            checkScrollForButtonUp() {

                this.$store
                    .dispatch('checkScrollForButtonUp')
                    .catch(err => console.log(err))

            },

            backToTop() {

                this.$store
                    .dispatch('backToTop')
                    .catch(err => console.log(err))

            },

        },
    }


</script>



<style scoped lang="sass">


    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'

    .button-up-service

        width: 0
        height: 0


    .button-up

        display: flex
        justify-content: center
        align-items: center

        font-size: 14px
        color: $red-200

        width: 30px
        height: 30px

        border-radius: 15px
        border: 1px solid $red-200

        background-color: $background

        position: fixed
        bottom: 50%
        left: 40px
        z-index: 99
        cursor: pointer

        transition-property: all
        transition-duration: 0.4s
        transition-timing-function: linear


    .invisible

        display: none

        cursor: text

        transition-property: all
        transition-duration: 0.4s
        transition-timing-function: linear


</style>