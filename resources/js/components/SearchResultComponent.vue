<template>

        <!--          БЛОК РЕЗУЛЬТАТОВ ПОИСКА          -->


    <div class="wrapper_left-top wrapper_mt-10">

        <div class="search-result-title wrapper_row-left wrapper_ml-main">

            <div class="search-result-title__message">{{ messageResult }}</div>
            <div class="search-result-title__count wrapper_ml-16">{{ totalRowsCount }}</div>

        </div>



        <!--          БЛОК ЗАПИСЕЙ РЕЗУЛЬТАТОВ ПОИСКА          -->



        <template v-for="dataRow in dataRows">


            <div class="item wrapper_lef-top wrapper_mt-10">

                <div class="item__title wrapper_ml-main"> {{ dataRow.FIO }} </div>

                <div class="item-info wrapper_row-left">
                    <div class="item-info__label">Год рождения: </div>
                    <div class="item-info__value wrapper_ml-16"> {{ dataRow.BIRTHDAY }} </div>

                </div>

                <div class="item-info wrapper_row-left">
                    <div class="item-info__label">Адрес:</div>
                    <div class="item-info__value wrapper_ml-16"> {{ dataRow.ADDRESS }} </div>
                </div>

            </div>


        </template>


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


    .search-result-title

        background-color: $background


    .search-result-title__message

        color: $red-200
        font-size: 16px
        font-weight: 400


    .search-result-title__count

        color: $red-200
        font-size: 16px
        font-weight: 400


    .item__title

        text-transform: uppercase
        color: $blue-153
        font-size: 13px
        font-weight: 400


    .item

        background-color: $background

        transition-property: all
        transition-duration: 0.4s
        transition-timing-function: linear


    .item-info

        line-height: 1.2


    .item-info__label

        font-size: 13px
        font-weight: 300

        color: $color-info-key


    .item-info__value

        font-size: 13px
        font-weight: 300

        color: $color-info-value


    .invisible

        opacity: 0

        transition-property: all
        transition-duration: 0.4s
        transition-timing-function: linear
        /*transition-delay: 0.5s*/



</style>


