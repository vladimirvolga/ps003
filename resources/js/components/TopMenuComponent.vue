<template>




            <!--  v1  -->
    <div class="top-menu wrap_x-center-y-top ">




                    <!--   ВЕРХНЯЯ СЕКЦИЯ   -->



        <div class="top-menu__top-section wrapper_row-x-left-y-center">


            <div class="logo wrapper_row-x-left-y-center" @click = 'showSidebar'>

                <icon-base width="26" height="26" icon-name="burger">
                    <icon-burger />
                </icon-base>

            </div>


            <div class="logo wrapper_row-x-left-y-center">

                <icon-base width="68" height="68" icon-name="logo">
                    <icon-logo />
                </icon-base>

            </div>


        </div>


        <div class="dividing-line_inner"></div>




                    <!--   НИЖНЯЯ СЕКЦИЯ   -->



        <div class="top-menu__bottom-section
                    wrapper_row-x-left-y-center
                    d-none
                    d-sm-flex">

            <div class="navigation wrapper_row-x-left-y-center">


                <div class="navigation__item">
                    <router-link to="/egrn" class="navigation__item_link">
                        ЕГРН
                    </router-link>
                </div>


                <div class="navigation__item">
                    <router-link to="/mydocuments" class="navigation__item_link">
                        МОИ ДОКУМЕНТЫ
                    </router-link>
                </div>


                <div class="navigation__item">
                    <router-link to="/people" class="navigation__item_link">
                        ЛЮДИ
                    </router-link>
                </div>


                <div class="navigation__item">ВЫХОД</div>

            </div>

        </div>




                    <!--   НИЖНЯЯ СЕКЦИЯ SM   -->



        <div class="top-menu__bottom-section
                    wrapper_row-x-left-y-center
                    d-flex
                    d-sm-none">

            <div class="navigation wrap_x-center-y-top">

                <!--<div class="navigation__item-->
                <!--navigation__item_active_sm">ЕГРН</div>-->


                <div class="navigation__item navigation__item_sm
                            hidden-block">ЕГРН</div>

                <div class="navigation__item navigation__item_sm
                            hidden-block">МОИ ДОКУМЕНТЫ</div>

                <div class="navigation__item navigation__item_sm
                            hidden-block">ЛЮДИ</div>


                <!--<div class="navigation__item">ВЫХОД</div>-->

            </div>

        </div>


        <div class="dividing-line_outer"></div>




            <!--   ПОСЛЕДНИЙ ТЭГ   -->



    </div>




</template>




<script>



    import IconBase from '../icons/IconBase.'
    import IconLogo from '../icons/IconLogo.vue'
    import IconBurger from '../icons/IconBurger.vue'
    import IconClose from '../icons/IconClose.vue'

    export default {
        name: "TopMenuComponent",

        components: {
            IconBase,
            IconLogo,
            IconBurger,
            IconClose
        },

        methods: {

            showSidebar () {
                this.$store.dispatch('showSidebar')
            }

        }
    }



</script>




<style scoped lang="sass">



    @import '../../sass/reset'
    @import '../../sass/vars'
    @import '../../sass/main'



    /*         ---   ОСНОВНЫЕ БЛОКИ   ---         */


    .top-menu

        width: 100%
        box-shadow: 0 15px 25px 0px rgba(0, 0, 0, .1)


    .top-menu__top-section

        width: 100%
        max-width: 768px


    .top-menu__bottom-section

        width: 100%
        max-width: 768px
        height: 55px



    /*         ---   ЛОГОТИП И РАЗД ЛИНИИ   ---         */


    .logo

        /*width: 84px*/
        height: 63px

        margin-left: 32px

        cursor: pointer


    .dividing-line_inner

        width: 100%
        height: 0
        margin-top: 0
        border-bottom: 1px solid #f1f1f1


    .dividing-line_outer

        width: 100%
        border-bottom: 1px solid #e1e1e1



    /*         ---   ОСНОВНАЯ НАВИГАЦИЯ   ---         */


    .navigation

        width: 100%
        height: 53px

        margin-left: 32px
        margin-right: 32px
        /*border: 1px solid #A51A2F*/


    .navigation__item

        height: 55px
        flex-basis: 100%

        color: #1d1d1d

        font-family: "Roboto", sans-serif
        font-weight: 300
        font-size: 12px

        /*   Выравнивание текста
        /*   по центру блока!      */

        display: flex
        justify-content: center
        align-items: center

        cursor: pointer


    .navigation__item:hover

        color: #A51A2F
        /*border-bottom: 1px solid #A51A2F*/
        font-weight: 500


    .navigation__item_active

        border-bottom: 1.5px solid #A51A2F

        font-weight: 500


    .navigation__item_active_sm

        font-weight: 500



    /*         ---   ССЫЛКИ В БЛОКАХ НАВИГАЦИИ   ---         */


    .navigation__item_link

        all: inherit
        border-width: 0


    .navigation__item_link:hover

        color: #A51A2F
        text-decoration: none





</style>