<template>

        <!--          БЛОК РЕЗУЛЬТАТОВ ПОИСКА          -->



    <div class="search-result-container wrapper_column-x-center-y-top ">



        <div class="search-result-section">

            <div class="wrapper_left-top wrapper_mt-10">

                <div class="search-result-title wrapper_row-left">


                    <div class="search-result-title__message wrapper_mr-4">
                        {{ messageResult }}
                        <div class="search-result-title__count">{{ totalRowsCount }}</div>
                    </div>



                </div>



                <!--          БЛОК ЗАПИСЕЙ РЕЗУЛЬТАТОВ ПОИСКА          -->



                <div class="item  wrapper_mt-10">

                    <div class="item_info-block">


                        <div class="item__title">
                            Иванов Андрей Констанинович </div>


                            <div class="wrapper_mt-5">

                                <div class="item-info wrapper_row-left">

                                    <div class="item-info__label wrapper_mr-16">Год рождения:</div>
                                    <div class="item-info__value">05.03.1968</div>

                                </div>


                                <div class="item-info wrapper_row-left">

                                    <div class="item-info__label wrapper_mr-16">Адрес:</div>
                                    <div class="item-info__value">
                                        г. Ульяновск, ул. станкостроителей, д. 10, кв. 16</div>

                                </div>

                            </div>

                    </div>

                </div>





                <template v-for="dataRow in dataRows">




                    <div class="item  wrapper_mt-10">

                        <div class="item_info-block">


                            <div class="item__title"> {{ dataRow.FIO }} </div>


                            <div class="wrapper_mt-5">

                                <div class="item-info wrapper_row-left">

                                    <div class="item-info__label wrapper_mr-16">Год рождения:</div>
                                    <div class="item-info__value"> {{ dataRow.BIRTHDAY }} </div>

                                </div>


                                <div class="item-info wrapper_row-left">

                                    <div class="item-info__label wrapper_mr-16">Адрес:</div>
                                    <div class="item-info__value">
                                        {{ dataRow.ADDRESS }}</div>

                                </div>

                            </div>

                        </div>

                    </div>





                </template>


            </div>

        </div>


    </div>


</template>



<script>


    export default {


        name: "SearchResultComponent",


        data() {

            return {

                isShowElement: true,
                visible: 'test_1_green',
                visibleNot: 'invisible',

            }
        },


        created: function(){

            this.$nextTick(function () {

                this.checkElementPositionOnScroll()
                this.checkScrollPosition()

            })
        },


        mounted: function () {

            // this.$nextTick(function () {
            //     // Code that will run only after the
            //     // entire view has been rendered
            // })

        },


        updated: function () {

            // this.$nextTick(function () {
            //     // Code that will run only after the
            //     // entire view has been re-rendered
            // })

        },


        ready: function () {

            // console.log('тест после mounted')

        },


        computed: {

            totalRowsCount() {
                return this.$store.getters.get_totalRowsCount
            },

            messageResult() {
                return this.$store.getters.get_messageResult
            },

            userEmail() {
                return this.$store.getters.get_userEmail
            },

            dataRows() {
                return this.$store.getters.get_dataRows
            },

            startRequest () {
                return this.$store.getters.get_startRequest
            }

        },


        watch: {

            startRequest: {

                handler(newVal, oldVal) {

                    if (newVal===true) {

                        this.$store
                            .dispatch('setVariablesRequestNext')
                            .catch(err => console.log(err));

                        this.$store
                            .dispatch('request')
                            .catch(err => console.log(err));

                    }
                },

                deep: true,

            },
        },


        methods: {


            requestNext() {

                this.$store
                    .dispatch('setVariablesRequestNext')
                    .catch(err => console.log(err));

                this.$store
                    .dispatch('request')
                    .catch(err => console.log(err));

            },


            checkElementPositionOnScroll() {

                this.$store
                    .dispatch('checkElementPositionOnScroll')
                    .catch(err => console.log(err));

            },


                //    ПОЛУЧЕНИЕ КОНТЕНТА ПРИ СКРОЛЛЕ СТРАНИЦЫ


            checkScrollPosition() {

                this.$store
                    .dispatch('checkScrollPosition')
                    .catch(err => console.log(err))

            },

        }

    }



</script>



<style scoped lang="sass">



    @import 'C:/OSPanel/domains/ps003/resources/sass/_vars'
    @import 'C:/OSPanel/domains/ps003/resources/sass/main'



    .search-result-container

        width: 100%

        /*border: 0.5px solid #d0211c*/

    .search-result-section

        width: 100%
        max-width: 768px

        margin-top: 16px

        /*border: 0.5px solid #d0211c*/

    .search-result-title

        margin-left: 32px
        margin-right: 32px

        padding-left: 16px
        padding-right: 16px



        background-color: $background


    .search-result-title__message

        color: $red-200

        font-family: "Roboto", sans-serif
        font-size: 16px
        font-weight: 300
        line-height: 1.2


    .search-result-title__count

        display: inline-block

        color: $red-200

        font-family: "Roboto", sans-serif
        font-size: 17px
        font-weight: 300
        line-height: 1.2



    .item

        /*flex-direction: row*/
        /*align-content: stretch*/

        margin-left: 32px
        margin-right: 32px

        padding: 16px

        border: 1px solid #dedede
        border-radius: 6px

        background-color: $background

        transition-property: all
        transition-duration: 0.4s
        transition-timing-function: linear


    .item_info-block

        width: 100%

        /*border: 0.5px solid #d0211c*/

        /*cursor: pointer*/


    .item__title

        /*margin-top: 14px*/

        color: #c11013

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 16px
        line-height: 1.2


        text-transform: uppercase


    .item-info

        /*flex-wrap: wrap*/
        display: block
        width: 100%

        margin-top: 2px

        line-height: 1.2

        /*align-items: flex-end*/


    .item-info__label

        padding-top: 2.7px

        float: left

        font-family: "Roboto", sans-serif
        font-weight: 500
        font-size: 12px
        color: #5A5A5A

        line-height: 120%



    .item-info__value

        color: #5A5A5A

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 15px

        line-height: 120%


    .invisible

        opacity: 0

        transition-property: all
        transition-duration: 0.4s
        transition-timing-function: linear
        /*transition-delay: 0.5s*/



</style>


