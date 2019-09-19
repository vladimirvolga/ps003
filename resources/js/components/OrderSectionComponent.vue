<template>




    <!-----------------------------------------------------------------
     *
     *   Это шаблон нового компонента. Не забыть в экспорте указать
     *   наименование компонента, который будет из этого шаблона.
     *
     ------------------------------------------------------------------>



        <!--   ГЛАВНЫЙ DIV ВСЕ ОСТАЛЬНЫЕ РАЗМЕЩАЮТСЯ В НЕМ   -->


    <div class=" modal_order-section
                wrapper_row-x-center-y-center
                hidden-block">


            <div class="order-section">



                <div class="wrapper_row-x-left-y-center ">

                    <div class="order-section__header">ЗАКАЗ ДОКУМЕНТОВ</div>

                        <div class="wr ">

                            <div class="order-section__btn-container"
                                 @click="hideOrderSection">

                                <icon-base width="15"
                                           height="15"
                                           icon-name="cross_29_20px_v01">
                                    <icon-cross_29_20px_v01/>
                                </icon-base>

                            </div>

                        </div>

                </div>



                <div class="dividing-line_inner"></div>



                <div class="order-section__items-container">


                    <div class="order-section__item order-section__item_disabled ">
                            ВЫПИСКА ИЗ ЕГРН
                    </div>


                    <div class="order-section__item ">
                            ВЫПИСКА ИЗ ЕГРН О ПЕРЕХОДЕ ПРАВ НА ОБЪЕКТ
                    </div>


                    <div class="order-section__btn-order">ЗАКАЗАТЬ</div>


                </div>






            </div>




    </div>



</template>





<script>



    import IconBase from '../icons/IconBase.'
    import IconCross_29_20px_v01 from '../icons/IconCross_29_20px_v01.vue'



    export default {


        name: "OrderSectionComponent",

        components: {
            IconBase,
            IconCross_29_20px_v01,
        },

        methods: {

            hideOrderSection () {
                    this.$store.dispatch('hideOrderSection')
                // console.log('hideOrderSection')
            }

        },


    }




</script>





<style scoped lang="sass">




    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'



    .modal_order-section

        position: fixed
        top: 0
        left: 0
        background-color: rgba(0,0,0,0.1)
        width: 100%
        height: 100%

    .dividing-line_inner

        width: 100%
        height: 0
        margin-top: 0
        border-bottom: 1px solid #f1f1f1


    .order-section

        width: 100%
        max-width: 576px
        /*height: 50px*/

        margin-left: 16px
        margin-right: 16px

        margin-bottom: 16px

        border: 1px solid #dedede
        border-radius: 6px

        background-color: #fff


    .order-section__header

        height: 55px

        margin-left: 16px


        color: #c11013

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 15px

        display: flex
        justify-content: flex-start
        align-items: center



    .order-section__btn-container

        width: 55px
        height: 55px

        display: flex
        justify-content: center
        align-items: center


    .wr

        flex: auto

        display: flex
        flex-direction: row
        align-items: center

        justify-content: flex-end



    .order-section__items-container

        display: flex
        flex-direction: column
        margin-left: 16px
        margin-right: 16px




    .order-section__item

        height: 55px

        color: #1d1d1d

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 12px

        /*   Выравнивание текста
        /*   по центру блока!      */

        display: flex
        align-items: center

        cursor: pointer

    .order-section__item:hover

        color: #A51A2F
        font-weight: 500



    .order-section__item_active

        font-weight: 500
        border-bottom: 1px solid #A51A2F


    .order-section__item_disabled

        font-weight: 300
        color: #a5a5a5


    .order-section__item_disabled:hover

        font-weight: 300
        color: #a5a5a5

        cursor: default



    .order-section__btn-order

        width: 100px
        height: 34px

        margin-top: 16px
        margin-bottom: 16px

        border: 1px solid #A51A2F
        border-radius: 16px

        color: #A51A2F

        /*   Выравнивание текста
        /*   по центру блока!      */

        display: flex
        justify-content: center
        align-items: center

        align-self: flex-end

        cursor: pointer

        font-family: "Roboto", sans-serif
        font-weight: 400
        font-size: 12px
        

    .order-section__btn-order:hover

        border: 1px solid #A51A2F
        background-color: #A51A2F
        color: #fff
        

    .order-section__btn-order_disabled

        /*border: 1px solid #a5a5a5*/
        border: 1px solid #dedede
        color: #a5a5a5


    .order-section__btn-order_disabled:hover

        border: 1px solid #dedede
        background-color: #fff
        color: #a5a5a5
        cursor: default







    .test-square_100px-pink

        width: 100px
        height: 100px

        margin-top: 10px
        margin-left: 10px

        background-color: #c11013

        border: 1px solid #c11013



        .s

            width: 100%




</style>