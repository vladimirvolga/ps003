<template>



    <div class="">


        <!--<div class="main-navbar ">-->


            <!--<div class="main-navbar__section">-->

                <!--<div class="main-navbar__section_left wrapper_width-70prc ">-->
                    <!--<search-form-component></search-form-component>-->
                <!--</div>-->

                <!--<div class="main-navbar__section_right">-->
                    <!--<user-block-component></user-block-component>-->
                <!--</div>-->

            <!--</div>-->


        <!--</div>-->



        <div class="wrapper_row-left">


            <div class="wrapper_center-top wrapper_width-70prc">

                <search-form-component></search-form-component>

            </div>

            <div class="wrapper_row-right wrapper_width-30prc">

                <user-block-component></user-block-component>

            </div>


        </div>




        <div class="wrapper_center-top wrapper_width-70prc ">

                <div class="content">
                    <search-result-component></search-result-component>
                </div>

        </div>




        <button-up-component></button-up-component>



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


    .main-navbar

        width: 100%
        display: flex
        flex-direction: row
        justify-content: center


    .main-navbar__section

        width: 100%
        display: flex
        flex-direction: row
        justify-content: center


    .main-navbar__section_left

        /*width: 100%*/
        /*width: available*/
        display: flex
        flex-direction: row
        justify-content: center


    .main-navbar__section_right

        display: flex
        flex-direction: row
        justify-content: flex-end


</style>