<!----------------------------------------------------------------------------------------------------------------------
  -- Counter Widget
  --------------------------------------------------------------------------------------------------------------------->

<template>
    <b-card>
        <div class="d-flex">
            <b-btn variant="primary" @click="count++">
                <fa-icon icon="plus"></fa-icon>
            </b-btn>
            <b-btn variant="primary" class="ml-2" @click="count--">
                <fa-icon icon="minus"></fa-icon>
            </b-btn>
            <div class="ml-2 text-center flex-fill counter-text">
                <b>{{ count }}</b>
            </div>
        </div>
    </b-card>
</template>

<!--------------------------------------------------------------------------------------------------------------------->

<style scoped>
    .counter-text {
        font-size: 2rem;
    }
</style>

<!--------------------------------------------------------------------------------------------------------------------->

<!-- TODO: Remove once upgrading to Vue3 -->
<script lang="ts">
    export default {
        model: {
            prop: 'count',
            event: 'update:count'
        }
    };
</script>

<script lang="ts" setup>
    import { computed } from 'vue';

    //------------------------------------------------------------------------------------------------------------------
    // Component Definition
    //------------------------------------------------------------------------------------------------------------------

    interface Props
    {
        count : number;
    }

    const props = defineProps<Props>();

    interface Events
    {
        (e : 'update:count', value : number) : void;
    }

    const emit = defineEmits<Events>();

    //------------------------------------------------------------------------------------------------------------------
    // Computed
    //------------------------------------------------------------------------------------------------------------------

    const count = computed({
        get() { return props.count; },
        set(val) { emit('update:count', val); }
    });
</script>

<!--------------------------------------------------------------------------------------------------------------------->
