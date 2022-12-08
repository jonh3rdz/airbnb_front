<script setup>
import TheHeaderComponent from '../../components/TheHeaderComponent.vue';
import TheContentComponent from '../../components/TheContentComponent.vue'
import TheFooterComponen from '../../components/TheFooterComponent.vue';
</script>

<template>
    <TheHeaderComponent />
    <main class="container-fluid">
        <div class="bg-light rounded">
            <TheContentComponent />
        </div>
    </main>
    <TheFooterComponen />
</template>

<style scoped>
.rounded{
padding-top: 2%;
padding-left: 3.6%;
padding-right: 3.6%;
padding-bottom: 2%;
}
</style>