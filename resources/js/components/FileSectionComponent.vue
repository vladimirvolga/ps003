<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <!--<div>-->


        <div class="file-section wrapper_row-x-right">

            <div class="file-section-container wrapper_row-x-right">

                <div class="file-section__item">XML</div>
                <div class="file-section__item file-section__item_disabled">SIG</div>
                <div class="file-section__item">PDF</div>

            </div>

        </div>


    <!--</div>-->



</template>





<script>




    export default {


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        name: "FileSectionComponent",

        methods: {

            // showOrderSection (e) {
            //     // this.$store.dispatch('showOrderSection')
            //     // console.log(e.target)
            //     console.log('111')
            // }

        },

        // mounted: function () {
        //     console.log('Закомментировать функцию в разделе *** MOUNTED ***')
        // },
        //
        // created: function () {
        //
        //     console.log('Закомментировать функцию в разделе *** CREATED ***')
        //
        // },


    }




</script>





<style scoped lang="sass">




    /**   РАСКОММЕНТИРОВАТЬ ИМПОРТЫ   */

    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'


    .file-section

        margin-top: 12px
        margin-left: 16px
        margin-right: 16px


    .file-section__item

        margin-left: 12px

        color: #c11013

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 13px

        line-height: 120%

        cursor: pointer


    .file-section__item_disabled

        @extend .file-section__item

        color: #a5a5a5

        cursor: default



    .test-square_100px-pink

        width: 100px
        height: 100px

        margin-top: 10px
        margin-left: 10px

        background-color: #FFC8C8

        border: 1px solid #f11417



        .s

            width: 100%




</style>