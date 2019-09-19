<template>


    <div class="wrapper_center-top">

        <div class="wrapper_lef-top">

            <testsearchformcomp></testsearchformcomp>

            <testsearchrescomp></testsearchrescomp>

        </div>

        <div>

            <a>
                <router-link :to="{ name: 'egrn' }"> egrn </router-link>
            </a>


        </div>


        <top-menu-component></top-menu-component>

        <div class="ts1">Some text for test Roboto fonts.</div>
        <div class="ts1">Какой-то текст для тестирования Roboto шрифта.</div>

        <div class="ts2">Some text for test Roboto fonts.</div>
        <div class="ts2">Какой-то текст для тестирования Roboto шрифта.</div>

        <div class="ts3">Some text for test Roboto fonts.</div>
        <div class="ts3">Какой-то текст для тестирования Roboto шрифта.</div>

        <div class="ts4">Some text for test Roboto fonts.</div>
        <div class="ts4">Какой-то текст для тестирования Roboto шрифта.</div>

        <div class="ts5">Some text for test Roboto fonts.</div>
        <div class="ts5">Какой-то текст для тестирования Roboto шрифта.</div>

        <div class="ts6">Some text for test Roboto fonts.</div>
        <div class="ts6">Какой-то текст для тестирования Roboto шрифта.</div>

        <div class="container ">

            <div class="row justify-content-center">
                <div class="test-container_400-400">
                    <div class="test-block_30-30"></div>
                    <div class="test-block_30-30"></div>
                </div>
            </div>
        </div>



    </div>






</template>




<script>

    export default {
        name: "SearchPage"
    }

</script>




<style lang="sass">


    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'



    .ts1

        margin-top: 40px

        font-family: "Roboto", sans-serif
        font-size: 18px
        font-weight: 100

    .ts2

        margin-top: 40px

        font-family: "Roboto", sans-serif
        font-size: 18px
        font-weight: 300

    .ts3

        margin-top: 40px

        font-family: "Roboto", sans-serif
        font-size: 18px
        font-weight: 400

    .ts4

        margin-top: 40px

        font-family: "Roboto", sans-serif
        font-size: 18px
        font-weight: 500

    .ts5

        margin-top: 40px

        font-family: "Roboto", sans-serif
        font-size: 18px
        font-weight: 700

    .ts6

        margin-top: 40px

        font-family: "Roboto", sans-serif
        font-size: 18px
        font-weight: 900


    .test-block

        width: 200px
        height: 200px

        border: 1px solid #A51A2F
        margin-top: 40px

    .test-container_400-400

        margin-top: 40px
        margin-bottom: 40px

        width: 400px
        height: 400px

        border: 1px solid #A51A2F

    .test-block_30-30

        margin-top: 20px
        margin-bottom: 20px

        width: 100%
        height: 30px

        border: 1px solid #A51A2F



</style>