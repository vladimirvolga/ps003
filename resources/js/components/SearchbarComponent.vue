<template>




    <div class="searchbar-container wrapper_row-x-center">


        <form class="searchbar wrapper_row-x-left-y-center"
              @submit.prevent = 'onSubmit'>


            <!--   блок обертка для svg иконки поиска   -->


            <!--<div class="searchbar__logo" @click = "testRequest2">-->
            <div class="searchbar__logo" @click = "checkSimbols">

                <icon-base width="14" height="14" icon-name="search">
                    <icon-search />
                </icon-base>

            </div>


                <!--   ИНПУТ   -->

            <input  class="searchbar__input"
                    id="id"
                    name="name"
                    type="text"
                    placeholder="..."
                    autocomplete="off"
                    spellcheck="false"
                    v-model="inputValue"
                    @input="processingInputValue"
            >



                <!--   БЛОК ОБЕРТКА ДЛЯ ИКОНКИ   -->


            <div class="searchbar__btn-container">

                <div class="searchbar__btn-clean-input hidden-block "
                     @click ="cleanInputField">

                    <icon-base width="14" height="14" icon-name="cross">
                        <icon-cross />
                    </icon-base>

                </div>

            </div>

        </form>



    </div>




</template>





<script>


    import IconBase from '../icons/IconBase.'
    import IconSearch from '../icons/IconSearch.vue'
    import IconCross from '../icons/IconCross.vue'

    export default {

        name: "SearchbarComponent",


        data() {

            return {

                inputValue: ''

            }
        },


        components: {
            IconBase,
            IconSearch,
            IconCross
        },


        methods: {


            processingInputValue () {

                const iv = this.inputValue;
                this.$store.dispatch('SET_INPUT_VALUE', iv)
                this.$store.dispatch('toggleCloseButton')

            },

            cleanInputField() {

                this.$store.dispatch('cleanInputField')
                this.inputValue = ''
                this.$store.dispatch('CLEAN_INPUT_VALUE')
                this.$store.dispatch('toggleCloseButton')

            },

            onSubmit() {
                this.$store.dispatch('onSubmit')
                // console.log('onSubmit')
            },

            //Тестовый запрос для отладки. Удалить после отладки запроса.

            testRequest() {
                // this.$store.dispatch('requestObjectData')
                this.$store.dispatch('testFunction')
            },

            //Тестовый запрос для отладки. Удалить после отладки запроса.

            testRequest2() {
                // this.$store.dispatch('requestObjectData')
                this.$store.dispatch('testFunction2')
            },

            checkSimbols() {
                this.$store.dispatch('checkSimbols')
            },


        },





        // watch: {
        //     inputValue(val) {
        //         console.log('watch   ' + val);
        //     },
        // },

    }



</script>





<style scoped lang="sass">



    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'




    .searchbar-container

        width: 100%

        /*display: flex*/
        /*flex-direction: row*/
        /*justify-content: center*/
        /*flex-direction: column*/



    .t001

        width: 100%
        max-width: 360px
        height: 40px
        margin-left: 20px
        margin-right: 20px


    .searchbar

        width: 100%
        max-width: 360px
        height: 42px

        margin-top: 40px
        margin-left: 20px
        margin-right: 20px

        border-radius: 21px
        border: 1px solid #dedede

        background-color: #fff

        /*display: flex*/
        /*justify-content: center*/
        /*align-items: center*/


    .searchbar__logo

        width: 48px!important
        height: 100%

        display: flex
        justify-content: center
        align-items: center


    .searchbar__btn-container

        width: 48px
        height: 100%

        display: flex
        justify-content: center
        align-items: center

        align-self: flex-end

    .searchbar__btn-clean-input

        /*width: 48px*/
        width: 100%
        height: 100%

        display: flex
        justify-content: center
        align-items: center


    .searchbar__input

        flex: auto
        height: 100%

        /*padding-right: 24px*/

        border: 0

        background-color: transparent


        font-family: "Roboto", sans-serif
        font-weight: 300

        color: #1d1d1d

        display: flex

        text-overflow: ellipsis











</style>