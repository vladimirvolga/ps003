<template>

                <!---  ФОРМА ПОИСКА  --->

    <div class="search-form wrapper_lef-top wrapper_mt-10">

                <!---  ЗАГОЛОВОК ФОРМЫ   --->

        <div class="search-form__title wrapper_ml-main">

        </div>

                <!---   СЕКЦИЯ ПОИСКА   --->

        <form class="wrapper_row-left" id='formJS'v-on:submit.prevent>

            <input class="search-form__input"
                   type="text"
                   name="formQuery"
                   value=""
                   id="formQuery"
                   placeholder="Введите данные для поиска"
                   required="required"
                   spellcheck="false"
                   autocomplete="off"
                   v-model="searchQuery">

            <button class="search-form__button" @click = 'requestFirst'>

                <font-awesome-icon icon="search" />

            </button>

        </form>

    </div>

</template>




<script>


    export default {


        name: "SearchFormComponent",


        data() {

            return {

                searchQuery: '',

            }
        },


        methods: {

            requestFirst () {

                const searchQuery = this.searchQuery
                        // console.log('searchQuery:   ' + searchQuery)

                this.$store
                    .dispatch('setVariablesRequestFirst', searchQuery)
                    .catch(err => console.log(err));

                this.$store
                    .dispatch('request')
                    .catch(err => console.log(err));

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

        width: 385px
        height: 38px

        padding: 0 8px 0 8px

        border: 1px solid $color-input-border

        color: $color-input-text


    .form__field-input

        width: 385px
        height: 38px

        padding: 0 8px 0 8px

        border: 1px solid $color-input-border

        color: $color-input-text


    .search-form__button

        width: 64px
        height: 40px

        padding: 0

        border: 1px solid $color-button-border
        border-left-style: none

        background-color: $background

        font-size: 12px

        color: $color-button-text

        cursor: pointer


    .search-form__button:hover

        border: 1px solid $color-button-border
        background-color: $blue-153
        color: $background





</style>











