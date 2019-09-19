<template>





    <div class="sidebar wrap_x-center-y-top hidden-block">




                    <!--   ВЕРХНЯЯ СЕКЦИЯ   -->



        <div class="sidebar__top-section wrapper_row-x-left-y-center">

            <div class="logo wrapper_row-x-left-y-center"  @click = 'hideSidebar'>

                <!--<div class="test-square_20px-pink"></div>-->

                <icon-base width="19" height="19" icon-name="close">
                    <icon-close />
                </icon-base>

            </div>

        </div>


        <div class="dividing-line_outer"></div>




                    <!--   ЦЕНТРАЛЬНАЯ СЕКЦИЯ   -->



        <div class="sidebar__central-section wrap_x-center-y-top d-sm-none">


            <div class="sidebar-navigation">


                <div class="sidebar-navigation__item">
                    <router-link to="/egrn"
                                 class="sidebar-navigation__item_link">
                        ЕГРН
                    </router-link>
                </div>


                <div class="sidebar-navigation__item">
                    <router-link to="/mydocuments"
                                 class="sidebar-navigation__item_link">
                        МОИ ДОКУМЕНТЫ
                    </router-link>
                </div>


                <div class="sidebar-navigation__item">
                    <router-link to="/people"
                                 class="sidebar-navigation__item_link">
                        ЛЮДИ
                    </router-link>
                </div>


            </div>


        </div>



                    <!--   НИЖНЯЯ СЕКЦИЯ   -->



        <div class="sidebar__bottom-section wrap_x-center-y-top">


            <div class="sidebar-navigation ">

                <div class="sidebar-navigation__item"> ВЫХОД </div>

            </div>


        </div>




    </div>





</template>




<script>



    import IconBase from '../icons/IconBase.'
    import IconClose from '../icons/IconClose.vue'

    export default {

        name: "SidebarComponent",

        components: {
            IconBase,
            IconClose
        },

        methods: {

            hideSidebar () {
                this.$store.dispatch('hideSidebar')
            }

        }

    }



</script>




<style scoped lang="sass">



    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'



    .sidebar

        width: 100%
        height: 100%

        position: absolute
        left: 0
        top: 0

        background-color: #ffffff

        /*display: none*/

    .sidebar__top-section

        width: 100%
        max-width: 768px



    .logo

        /*width: 84px*/
        height: 63px

        margin-left: 32px


    .dividing-line_inner

        width: 100%
        height: 0
        margin-top: 0
        border-bottom: 1px solid #f1f1f1


    .dividing-line_outer

        width: 100%
        border-bottom: 1px solid #e1e1e1


    .sidebar__central-section

        width: 100%
        max-width: 768px


    .sidebar__bottom-section

        width: 100%
        max-width: 768px




    .sidebar-navigation

        width: 100%


    .sidebar-navigation__item

        height: 55px
        flex-basis: 100%

        padding-left: 32px

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 12px
        color: #333

        /*   Выравнивание текста
        /*   по центру блока       */

        display: flex
        align-items: center

        cursor: pointer


    .sidebar-navigation__item_active

        border-bottom: 1.5px solid #A51A2F

        font-weight: 500


    .sidebar-navigation__item:hover

        color: #A51A2F
        font-weight: 500



    .sidebar-navigation__item_link

        all: inherit
        border-width: 0
        padding-left: 0


    .sidebar-navigation__item_link:hover

        color: #A51A2F
        text-decoration: none




</style>