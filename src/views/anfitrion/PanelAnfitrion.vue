<script setup>
import AnfitrionHeaderComponent from '../../components/ainfitrion/AnfitrionHeaderComponent.vue';
</script>


<template>
    <AnfitrionHeaderComponent />
    <!--Contenedor principal-->
    <div class="container-fluid p-5">

        <!--Iconos de navegación-->
        <div class="container-fluid d-flex justify-content-end mb-3">
            <i class="fa-solid fa-clock-rotate-left d-flex" id="section-icons" data-bs-toggle="modal"
                data-bs-target="#recientes">
                <h6 class="iconos-bandejas"><a style="cursor:pointer;">Recientes</a></h6>
            </i>
            <i class="fa-solid fa-calendar-days d-flex" id="section-icons" data-bs-toggle="modal"
                data-bs-target="#proximos">
                <h6 class="iconos-bandejas"><a style="cursor:pointer;">Próximos</a></h6>
            </i>
            <i class="fa-solid fa-envelope d-flex" id="section-icons" data-bs-toggle="modal" data-bs-target="#mensajes">
                <h6 class="iconos-bandejas"><a style="cursor:pointer;">Mensajes</a></h6>
            </i>
            <i class="fa-solid fa-bell d-flex" id="section-icons" data-bs-toggle="modal"
                data-bs-target="#notificaciones">
                <h6 class="iconos-bandejas"><a style="cursor:pointer;">Notificaciones</a></h6>
            </i>
        </div>

        <!--Título de contador de Airbnbs y botón para añadir uno nuevo-->
        <div class="row mt-4 mb-4 px-3">
            <div class="col-lg-4">
                <span id="contador-airbnb"><strong>38</strong> Airbnbs publicados a tu nombre</span>
            </div>
            <div class="col-lg-8 d-flex justify-content-end">
                <button class="btn nuevo-airbnb d-flex justify-content-center">
                    <RouterLink to="/agregar" class="nav-link">
                        <h6 id="nuevo-airbnb-titulo">Nuevo Airbnb</h6>
                    </RouterLink>
                </button>
            </div>
        </div>

        <!--Contenedor de los filtros y busqueda para la tabla-->
        <div class="container-fluid">
            <div class="row mb-4 d-flex align-items-center">
                <div class="col-lg-3">
                    <div class="form">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control form-input" placeholder="Buscar por..">
                    </div>
                </div>
                <div class="col-lg-8 d-flex">
                    <select name="" id="filtros-airbnb" class="form-select mx-3">
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
            </div>
            <table class="table border-top">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Airbnb</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Habitaciones</th>
                        <th scope="col">Ubicación</th>
                        <th scope="col">Precio</th>
                        <th scope="col" class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(properties, index) in propertiesList" :key="properties.id">
                        <td>{{ index + 1}}</td>
                        <td>
                            <div class="row">
                                <div class="col-4">
                                    <img :src="'http://127.0.0.1:8000/storage/cover/'+properties.cover" alt="cover-airbnb" id="cover-table-airbnb">
                                </div>
                                <div class="col-6 d-flex align-items-center">
                                    <h6 class="titulo-airbnb-cover">{{ properties.name }}</h6>
                                </div>
                            </div>
                        </td>
                        <td>{{ properties.category.title }}</td>
                        <td>{{ properties.bedroom_count }}</td>
                        <td>{{ properties.location.country }}</td>
                        <td>{{ properties.price }}</td>
                        <td class="td-actions text-center">
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons">
                                <i class="fa-solid fa-circle-info"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons" v-on:click="editar(properties.id)">
                                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-just-icon btn-sm" id="action-buttons" to="/panel" v-on:click="eliminar(properties.id)">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modales para sección de encabezados -->
        <div class="modal fade" id="recientes" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tus reservaciones</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal"><strong>Cerrar</strong></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="proximos" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Próximos</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal"><strong>Cerrar</strong></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="mensajes" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tus mensajes</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal"><strong>Cerrar</strong></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="notificaciones" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tus notificaciones</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal"><strong>Cerrar</strong></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                propertiesList: null,
            }
        },
        async mounted() {
            axios.get('/v1/homeusers')
            .then(response => {
                this.propertiesList = response.data.data;
                console.log(response);
            })
        },
        methods:{
            editar(id){
                this.$router.push('/editar/'+id);
                console.log(id);
            },
            eliminar(id){
                axios.delete('/v1/properties/'+id)
                .then(response => {
                    // this.$router.push('/panel');
                    console.log(response);
                })
                console.log(id);
            }
        },
    }
</script>

<style scoped>
#section-icons {
    font-size: 20px;
    color: #8E2530;
    margin: 1rem;
}

.iconos-bandejas {
    margin-left: 0.5rem;
    color: #5B5452;
    font-size: 16px;
    font-weight: bold;
}

#contador-airbnb {
    font-size: 20px;
}

.nuevo-airbnb {
    width: 15%;
    height: 40px;
    background: #8E2530;
}

#nuevo-airbnb-titulo {
    padding: 3px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    font-family: Poppins !important;
}

.form {
    position: relative;
}

.form .fa-search {
    position: absolute;
    top: 30%;
    left: 12px;
    color: #5B5452;
}

.form-input {
    width: 100%;
    height: 12%;
    text-indent: 22px;
    border-radius: 10px;
}

.form-input:focus {
    box-shadow: none;
    border: 1px solid #5B5452;
}

#filtros-airbnb {
    width: 16%;
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

tbody {
    vertical-align: middle;
}

#cover-table-airbnb {
    width: 90px;
    height: 80px;
    border: 1px solid #5B5452;
    border-radius: 10px;
}

.titulo-airbnb-cover {
    font-family: Poppins;
    font-size: 14px;
    font-weight: bold;
}

#action-buttons {
    color: #8E2530;
    font-size: 18px;
}

.btn-close {
    color: #5B5452;
    font-weight: bolder;
}

.btn-secondary {
    background: #8E2530 !important;
}

.modal-title {
    font-weight: bold;
    font-family: Poppins;
}

.modal-header {
    border-bottom: 2px solid #d4d4d4;
}

.modal-footer {
    border-top: 2px solid #d4d4d4;
}
</style>