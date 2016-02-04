<template>
    <div id="home" class="container">
        <div>
            <h4 class="text-center">VueSeed Project</h4>
            <p>
                This is a basic page.
            </p>
            <p>
                <small class="text-muted">As per government requirements, the rest of this page is left blank, except for
                this excessively long comment explaining it's own existence, and lamenting the same. We do hope you
                enjoy our mandatorily repetitively recursive statement, previously stated. It is there for your
                information.</small>
            </p>
        </div>
    </div>
</template>

<style lang="sass" src="./home.scss"></style>

<script type="text/babel">
    import _ from 'lodash';
    import $http from 'axios';
    import stateSvc from '../../components/state/stateService.js';

    export default {
        data: function()
        {
            return {
                state: stateSvc.state
            };
        }
    }
</script>