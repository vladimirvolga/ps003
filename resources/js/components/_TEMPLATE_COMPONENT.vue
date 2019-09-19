<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



                <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->

    <div>


        <div class="test-square_20px">

            <!--   ...   -->

        </div>


    </div>



</template>





<script>




    export default {


        /**   РАСКОММЕНТИРОВАТЬ "NAME", УКАЗАТЬ НАИМЕНОВАНИЕ КОМПОНЕНТА   */

        // name: "SomeInterestingComponent",

        methods: {

            // showOrderSection (e) {
            //     // this.$store.dispatch('showOrderSection')
            //     // console.log(e.target)
            //     console.log('111')
            // }

        },

        mounted: function () {
            console.log('Закомментировать функцию в разделе *** MOUNTED ***')
        },

        created: function () {

            console.log('Закомментировать функцию в разделе *** CREATED ***')

        },


    }




</script>





<style scoped lang="sass">




    /**   РАСКОММЕНТИРОВАТЬ ИМПОРТЫ   */

    /*@import '../../sass/reset'*/
    /*@import '../../sass/vars'*/
    /*@import '../../sass/main'*/



    /*   ---   СЛУЖЕБНЫЕ КЛАССЫ   ----   */


    .test-square_20px

        width: 20px
        height: 20px

        margin: 10px

        background-color: #FFC8C8

        border: 1px solid #f11417



    .some-class-01

        margin-left: 24px


    .some-class-01_extended

        @extend .some-class

        margin-left: 12px



    .some-class-02

        margin-left: 24px


    @media (max-width: 576px)

        .some-class-02

            margin-left: 12px




</style>