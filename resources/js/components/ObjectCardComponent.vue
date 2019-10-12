
<template>





    <div class="object-card-container wrapper_column-x-center-y-top ">




        <!--<div class="object-card-section ">-->

            <!--<div class="object-card">-->

                <!--<div class=" object-card__info-block-->
                                    <!--wrapper_ml-16-->
                                    <!--wrapper_mr-16">-->


                    <!--<div class="description-item__value_cad-number">-->
                        <!--73:24:456765:2343</div>-->


                    <!--<div class="description-item__value_address">-->
                        <!--Г. Ульяновск, ул. Отрадная , д.56-->
                    <!--</div>-->


                    <!--<div class="wrapper_row-x-left wrapper_mt-5">-->


                        <!--<div class="description-item__value_obj-type">-->
                            <!--Земельный участок-->
                        <!--</div>-->

                        <!--<div class="description-item__value_area">-->
                            <!--456-->
                        <!--</div>-->

                        <!--<div class="description-item__value_area-unit">-->
                            <!--кв. м.-->
                        <!--</div>-->


                    <!--</div>-->


                <!--</div>-->



            <!--</div>-->

        <!--</div>-->



        <template v-for="objectDataRow in objectDataRows">



            <div class="object-card-section ">



                    <!--   КАРТОЧКА. РАЗМЕРА ЭКРАНА ОТ SM   -->


                <div class="object-card">



                    <div class=" object-card__info-block
                                wrapper_ml-16
                                wrapper_mr-16">


                        <div class="description-item__value_cad-number">
                            {{ objectDataRows.OBJECTS.OBJECT.CADASTRALNUMBER }} </div>


                        <div class="description-item__value_address">
                            {{ objectDataRows.OBJECTS.OBJECT.ADDRESS }}
                        </div>


                        <div class="wrapper_row-x-left wrapper_mt-5">


                            <div class="description-item__value_obj-type">
                                {{ objectDataRows.OBJECTS.OBJECT.OBJECTNAME }}
                            </div>

                            <div class="description-item__value_area">
                                {{ objectDataRows.OBJECTS.OBJECT.AREAVALUE }}
                            </div>

                            <div class="description-item__value_area-unit">
                                {{ objectDataRows.OBJECTS.OBJECT.AREAUNIT }}
                            </div>


                        </div>


                    </div>


                    <!--         НЕ УДАЛЯТЬ!!!!         -->

                    <!--<div class="additional-block wrapper_row-x-left">-->


                        <!--&lt;!&ndash;   БЛОК ЗАГРУЗКИ ФАЙЛОВ   &ndash;&gt;-->


                        <!--<file-section-component></file-section-component>-->


                        <!--&lt;!&ndash;   БЛОК ЛОГОВ   &ndash;&gt;-->


                        <!--<log-section-component></log-section-component>-->



                    <!--</div>-->





                </div>



            </div>



        </template>







                    <!--   БЛОК ЗАКАЗА   -->


        <order-section-component></order-section-component>










    </div>




</template>





<script>




    export default {


        name: "ObjectCardComponent",

        methods: {

            // showOrderSection (e) {
            //     // this.$store.dispatch('showOrderSection')
            //     // console.log(e.target)
            //     console.log('111')
            // }

        },

        mounted: function () {
            this.$store.dispatch('showOrderSection')
            this.$store.dispatch('checkClickOutOfModalWindow')
        },

        // created: function(){
        //
        //     this.$nextTick(function () {
        //         this.checkScrollForButtonUp()
        //     })
        //
        // },


        computed: {

            objectDataRows() {
                return this.$store.getters.GET_OBJECT_DATA_ROWS
            },

        },

    }




</script>





<style scoped lang="sass">



    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'



    .object-card-container

        width: 100%


    .object-card-section

        width: 100%
        max-width: 768px
        /*height: 100%*/

        margin-top: 16px


    .object-card

        flex-direction: column

        margin-left: 32px
        margin-right: 32px

        padding-bottom: 16px

        border: 1px solid #dedede
        border-radius: 6px


    @media (max-width: 576px)

        /*   SMALL            */
        /*   Размер экрана:   */
        /*   От 576 и выше    */

        .object-card

            margin-left: 16px
            margin-right: 16px





    .object-card__info-block

        cursor: pointer


    .object-card_test

        flex-direction: column

        margin-left: 32px
        margin-right: 32px

        border: 1px solid #dedede
        border-radius: 6px

        cursor: pointer


    @media (max-width: 767px)

        .object-card_test

            margin-left: 16px
            margin-right: 16px





    .description-item__value_cad-number

        /*display: flex*/
        /*flex-direction: row*/
        /*align-items: center*/

        margin-top: 14px

        color: #c11013

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 18px


    .description-item__value_address

        margin-top: 2px

        color: #5A5A5A

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 15px

        line-height: 120%


    .description-item__value_obj-type

        /*margin-top: 5px*/

        color: #5A5A5A

        font-family: "Roboto", sans-serif
        font-weight: 500
        font-size: 12px


    .description-item__value_area

        margin-left: 20px

        color: #5A5A5A

        font-family: "Roboto", sans-serif
        font-weight: 500
        font-size: 12px


    .description-item__value_area-unit

        margin-left: 4px

        color: #5A5A5A

        font-family: "Roboto", sans-serif
        font-weight: 500
        font-size: 12px


    .additional-block

        display: flex
        flex-direction: row-reverse
        justify-content: space-between


    @media (max-width: 576px)

        .additional-block

            flex-direction: column


    .test-square_100px-pink

        width: 100px
        height: 100px

        margin-top: 10px
        margin-left: 10px

        background-color: #FFC8C8

        border: 1px solid #f11417


    @media (max-width: 767px)

        .test-square_100px-pink

            background-color: #7aa1bd


    .s

        width: 100%




</style>