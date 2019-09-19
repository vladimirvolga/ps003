<template>

    <!---  ФОРМА ПОИСКА  --->

    <div class="search-form wrapper_lef-top wrapper_mt-10">

            <!---  ЗАГОЛОВОК ФОРМЫ   --->

        <div class="search-form__title wrapper_ml-main"></div>


            <!---   СЕКЦИЯ ПОИСКА   --->

        <form class="wrapper_row-left"
              id='formJS'
              v-on:submit.prevent="onSubmit">

            <input class="search-form__input" type="text"
                   placeholder="Введите данные для поиска"
                   required="required"
                   spellcheck="false"
                   autocomplete="off"
                   v-model="query">

            <button class="search-form__button" @click="search()" >

                <font-awesome-icon icon="search" />

            </button>

        </form>

    </div>

</template>



<script>

    // import store from

    export default {
        name: "SearchFormComponent",
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search() {
                this.$store.dispatch('search', this.query)
            }
        }
    }

</script>



<style scoped lang="sass">


    @import 'C:/OSPanel/domains/ps003/resources/sass/_vars'
    @import 'C:/OSPanel/domains/ps003/resources/sass/main'


    /*      ЗАГОЛОВОК ФОРМЫ      */


    .search-form

        background-color: $background


    /*      ЗАГОЛОВОК ФОРМЫ      */


    .search-form__title

        color: $red-200
        font-size: 16px


    /*      СЕКЦИЯ ПОИСКА      */


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

        font-size: 12px

        color: $color-button-text

        cursor: pointer


    .search-form__button:hover

        background-color: $color-button-background-hover
        color: $color-button-text-hover


</style>











