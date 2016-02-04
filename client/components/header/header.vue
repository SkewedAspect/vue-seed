<template>
    <nav id="site-header" class="navbar navbar-fixed-top navbar-dark bg-inverse">
        <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
        </button>
        <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a class="navbar-brand" v-link="{ path: '/' }">
                <i class="fa fa-globe text-primary"></i>
                VueSeed
            </a>
            <ul class="nav navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" v-link="{ name: 'example' }">
                        <i class="fa fa-ge"></i> Example
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="sass" src="./header.scss"></style>

<script type="text/babel">
    import _ from 'lodash';
    import stateSvc from '../state/stateService.js';

    export default {
        data: function()
        {
            return {
                state: stateSvc.state
            };
        }
    }
</script>