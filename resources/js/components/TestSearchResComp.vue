<template>

    <!--          БЛОК РЕЗУЛЬТАТОВ ПОИСКА          -->


    <div class="wrapper_left-top wrapper_mt-10">


        <!--          БЛОК ЗАПИСЕЙ РЕЗУЛЬТАТОВ ПОИСКА          -->


        <div class="item wrapper_center-top wrapper_mt-10">

            <div v-for="item in results">
                <a :href="item.url">  {{ item.title }} </a>
                <div> {{ item.url }} </div>
                <div v-html='item.snippet'></div>
            </div>


            <p class="wrapper_mt-5 search-result-title__count testres">
                {{ countednumber }}</p>
            <button class="wrapper_mt-5 search-form__button_test"
                    @click = 'increment'>+</button>
            <button class="wrapper_mt-5 search-form__button_test"
                    @click = 'decrement'>-</button>


            <div class="wrapper_center-top wrapper_mt-20">

                <p class="wrapper_mt-5 search-result-title__count testres">
                    {{ setedtext }}
                </p>

                <div class="wrapper_row-left wrapper_mt-5">

                    <input class="search-form__input" type="text"
                           placeholder="Тестовые данные"
                           required="required"
                           spellcheck="false"
                           autocomplete="off"
                           v-model="someText">

                    <button class="search-form__button"
                            @click ='setsometext'>Кнопка</button>

                </div>

            </div>


        </div>


    </div>


</template>



<script>

    // import store from "../store";

    export default {
        name: "SearchResultComponent",

        data() {
            return {
                someText: ''
            }
        },

        computed: {
            results () {
                return this.$store.getters.results
            },
            countednumber () {
                return this.$store.getters.gCountedNumber
            },
            setedtext () {
                return this.$store.getters.GET_SOME_TEXT
            }
        },

        methods: {
            increment () {
                this.$store.dispatch('increment')
            },
            decrement () {
                this.$store.dispatch('decrement')
            },
            setsometext () {
                const someText = this.someText
                const pd = { 'textvalue': someText }
                this.$store.dispatch('SET_SOME_TEXT', pd)
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


    .search-form__button_test

        width: 64px
        height: 38px

        padding: 0

        border-style: solid
        border-width: 1px
        /*border-left: none*/

        border-color: $color-button-border

        background-color: $background

        font-size: 12px

        color: $color-button-text

        cursor: pointer


    .testres

        margin-bottom: 0


    .search-form__input

        width: 360px
        height: 36px

        padding: 0 0 0 8px

        border-style: solid
        border-width: 1px
        border-color: $color-input-border

        color: $color-input-text


    .search-form__button

        width: 64px
        height: 38px

        padding: 0

        border-style: solid
        border-width: 1px
        border-left: none

        border-color: $color-button-border

        background-color: $background

        font-family: 'Open Sans', sans-serif
        font-size: 13px


        color: $color-button-text

        cursor: pointer


    .search-form__button:hover

        background-color: $color-button-background-hover
        color: $color-button-text-hover






</style>