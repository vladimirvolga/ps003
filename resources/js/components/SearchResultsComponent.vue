<template>

<!---->


    <!-----------------------------------------------------------------
     *
     *   Это компонент, который предлагает различные варианты
     *   результата поиска после ответа на запрос,
     *   который происходит при  вводе символа в инпуте сечбара
     *
     ------------------------------------------------------------------>




    <div class="searchResults-container wrapper_row-x-center hidden-block">

        <div class="searchResults">

            <div class="searchResults__result ">
                ул. Станкостроителей, дом 10
            </div>

            <div class="searchResults__result ">
               г. Ульяновск, район Засвияжский,
                ул. Станкостроителей, Станкостроителей, дом 10, квартира 16
            </div>

            <div class="searchResults__result ">
                г. Ульяновск,     ул. Станкостроителей, дом 10, квартира 16
            </div>

            <div class="searchResults__result ">
                г. Ульяновск, ул. Станкостр, дом 10, квартира 16
            </div>

            <div class="searchResults__result ">
                г. Ульяновск, ул. Станкостроителей, дом 10, квартира 16
            </div>

            <div class="searchResults__result ">
                г. Ульяновск, ул. Станкостроителей, дом 10, квартира 16
            </div>

        </div>

    </div>




</template>





<script>




    export default {


        name: "SearchResultsComponent"


    }




</script>





<style scoped lang="sass">




    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'




    .test-div

        width: 60px
        height: 60px


    .searchResults-container

        width: 100%


    .searchResults

        max-width: 360px

        margin-top: 20px
        margin-left: 20px
        margin-right: 20px



    .searchResults__result

        width: 100%
        min-height: 55px

        margin-left: 12px
        margin-right: 12px

        padding-top: 9px
        padding-bottom: 8px


        color: #a5a5a5

        font-family: "Roboto", sans-serif
        font-weight: 300
        line-height: 120%

        text-overflow: ellipsis

        display: flex
        justify-content: flex-start
        align-items: center


    .searchResults__result:hover

        color: #1d1d1d

        cursor: pointer




    .s

        width: 100%




</style>