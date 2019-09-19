<template>



    <!--<div class="wrapper_center-top">-->
    <div class="wrap_x-center-y-top">


        <top-menu-component></top-menu-component>

        <sidebar-component></sidebar-component>

        <searchbar-component></searchbar-component>

        <search-results-component></search-results-component>

        <object-card-component></object-card-component>


    </div>



</template>




<script>


    export default {

        name: "SearchEGRNPage",

        mounted() {
            this.$store.dispatch('setPageCodeEGRN')
            this.$store.dispatch('afterGoingToPage')
        }

    }


</script>




<style lang="sass">


    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'


</style>