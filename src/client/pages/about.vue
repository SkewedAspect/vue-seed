<!----------------------------------------------------------------------------------------------------------------------
  -- About Page
  --------------------------------------------------------------------------------------------------------------------->

<template>
    <div id="about-page" class="container page">
        <h1>About this Project</h1>
        <p>
            This is a very simple seed project, intended to provide a framework for a functioning SPA style vue application,
            with all the bells and whistles added in. We have font-awesome, BootstrapVue, Vue Class components, etc.
        </p>
        <p>
            You should feel free to take this site as some sane defaults, but feel free to modify it as you see fit.
        </p>
    </div>
</template>

<!--------------------------------------------------------------------------------------------------------------------->

<style lang="scss">
    #about-page {
    }
</style>

<!--------------------------------------------------------------------------------------------------------------------->

<script lang="ts">
    //------------------------------------------------------------------------------------------------------------------

    import Vue from 'vue';

    //------------------------------------------------------------------------------------------------------------------

    export default Vue.extend({
        name: 'HomePage'
    });
</script>

<!--------------------------------------------------------------------------------------------------------------------->
