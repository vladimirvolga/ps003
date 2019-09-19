<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента.
     *   НЕ ЗАБЫТЬ: в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



    <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <div class="log-section wrapper_column-x-lef-y-top">



        <div class="log-section__info-block">



            <div class="wrapper_row-x-left">

                <div class="log-section__item_date">22.05.2019 10.07</div>
                <div class="log-section__item_action">Выписка из ЕГРН. Запрос отправлен.</div>

            </div>


            <div class="wrapper_row-x-left">

                <div class="log-section__item_date">27.05.2019 08.12</div>
                <div class="log-section__item_action">
                    Выписка из ЕГРН о переходе прав. Запрос отправлен.</div>

            </div>



        </div>


    </div>



</template>





<script>




    export default {


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        name: "LogSectionComponent",

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




    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'




    .t1

        border: 1px solid #dedede

    .log-section

        max-width: 450px

        margin-top: 16px
        margin-left: 16px
        margin-right: 16px

        padding-bottom: 12px

        background-color: #FCFCFC

        border: 1px solid #dedede
        border-radius: 6px


    .log-section__info-block

        display: flex
        flex-direction: column

        margin-left: 16px
        margin-right: 16px
        margin-top: 6px



    .log-section__item

        margin-top: 6px

        color: #9E9E9E

        font-family: "Roboto", sans-serif
        font-weight: 400
        font-size: 12px

        line-height: 120%



    .log-section__item_date

        @extend .log-section__item

        min-width: 100px


    .log-section__item_action

        @extend .log-section__item

        margin-left: 12px


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