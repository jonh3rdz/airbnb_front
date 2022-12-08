<script setup>

</script>

<template>
    <div class="col-lg-8 d-flex">
        <select name="" id="filtros-airbnb" class="form-select">
            <option value="" class="opcion-select-airbnb">Seleccionar</option>
        </select>
        <select name="" id="filtros-airbnb" class="form-select mx-3">
            <option value="" class="opcion-select-airbnb">Seleccionar</option>
        </select>
        <select name="" id="filtros-airbnb" class="form-select mx-3">
            <option value="" class="opcion-select-airbnb">Seleccionar</option>
        </select>
        <select name="" id="filtros-airbnb" class="form-select mx-3">
            <option value="" class="opcion-select-airbnb">Seleccionar</option>
        </select>
    </div>
</template>

<style scoped>
#filtros-airbnb {
    width: 16%;
    outline: none;
    border: 2px solid #5B5452;
}

#filtros-airbnb:focus {
    border: 1px solid #5B5452;
    box-shadow: none;
}

.opcion-select-airbnb {
    font-family: Poppins, sans-serif !important;
    font-size: 16px;
    font-weight: 600;
}
</style>