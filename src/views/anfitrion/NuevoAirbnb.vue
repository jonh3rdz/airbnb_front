<script setup>
import AnfitrionHeaderComponent from '../../components/ainfitrion/AnfitrionHeaderComponent.vue';
</script>

<template>
    <AnfitrionHeaderComponent />
    <main>
        <!--Contenedor general-->
        <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
            <!--Sección principal-->
            <div class="container">
                <!--Primera sección-->
                <div class="row align-items-center" style="margin-bottom: 8rem;" id="generalidades">
                    <!--Formulario para registro de Generalidades-->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="text-center">
                                    <h4>Datos generales</h4>
                                </div>
                            </div>
                            <div class="card-body p-lg-5">
                                <form id="loginForm" action="">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.name" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">Idea un título llamativo</label>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <textarea class="form-control selecciones" placeholder=""
                                                    id="floatingTextarea" v-model="form.description" style="height:100px;"></textarea>
                                                <label for="floatingTextarea">Agrega una breve descripción</label>
                                            </div>
                                            <div class="form-floating">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.price" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">¿Cuánto costará tu alojamiento?</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example" v-model="form.category_id">
                                                    <option selected class="options">Elegir</option>
                                                    <option v-for="categoria in categorias" v-bind:key="categoria" v-bind:value="categoria.id">{{ categoria.title }}</option>
                                                </select>
                                                <label for="floatingSelect">¿A qué categoría pertenece?</label>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example" v-model="form.subcategory_id">
                                                    <option selected class="options">Elige</option>
                                                    <option v-for="subcategoria in subcategorias" v-bind:key="subcategoria" v-bind:value="subcategoria.id">{{ subcategoria.title }}</option>
                                                </select>
                                                <label for="floatingSelect">¿Qué sub-categoría lo describe?</label>
                                            </div>
                                            <div class="form-floating">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example" v-model="form.room_type_id">
                                                    <option selected class="options">Elige</option>
                                                    <option v-for="tipohabitacion in tiposhabitaciones" v-bind:key="tipohabitacion" v-bind:value="tipohabitacion.id">{{ tipohabitacion.title }}</option>
                                                </select>
                                                <label for="floatingSelect">¿Qué tipo de alojamiento ofreces?</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4 d-flex justify-content-end">
                                <a href="#ubicacion" class="scrollto"><button class="btn btn-primary"
                                        type="button">Siguiente paso</button></a>
                            </div>
                        </div>
                    </div>
                    <!--Formulario para registro de Generalidades-->

                    <!--Imagen de referencia-->
                    <div class="col-lg-4 col-xl-4 ms-xl-auto px-lg-4 text-center text-primary">
                        <img class="img-fluid mb-4" width="300" src="../../assets/img/generalidad.svg">
                        <h1 class="mb-4"><br class="d-none d-lg-inline">Generalidades</h1>
                        <p class="lead text-muted">Este es el primer paso donde dejarás volar tu mente asignando los
                            detalles primarios del servicio de alojamiento quieres brindar.</p>
                    </div>
                    <!--Imagen de referencia-->

                </div>
                <!--Primera sección-->

                <!--Segunda sección-->
                <div class="row align-items-center" style="margin-bottom: 8rem;" id="ubicacion">
                    <!--Imagen de referencia 2-->
                    <div class="col-lg-4 col-xl-4 ms-xl-auto px-lg-4 text-center text-primary"><img
                            class="img-fluid mb-4" width="300" src="../../assets/img/location.svg">
                        <h1 class="mb-4"><br class="d-none d-lg-inline">¿Dónde se encuentra tu alojamiento?</h1>
                        <p class="lead text-muted">Describe a dónde se dirigirán tus huéspedes cuándo tu anuncio los
                            atrape.</p>
                    </div>
                    <!--Imagen de referencia 2-->

                    <!--Formulario para registro de Ubicación-->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="text-center">
                                    <h4>Datos de ubicación</h4>
                                </div>
                            </div>
                            <div class="card-body p-lg-5">
                                <form id="loginForm" action="">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example" v-model="form.country_id">
                                                    <option selected class="options">Elige</option>
                                                    <option v-for="pais in paises" v-bind:key="pais" v-bind:value="pais.id">{{ pais.name }}</option>
                                                </select>
                                                <label for="floatingSelect">País</label>
                                            </div>
                                            <div class="form-floating">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example" v-model="form.state_id">
                                                    <option selected class="options">Elige</option>
                                                    <option v-for="estado in estados" v-bind:key="estado" v-bind:value="estado.id">{{ estado.name }}</option>
                                                </select>
                                                <label for="floatingSelect">Departamento</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example" v-model="form.city_id">
                                                    <option selected class="options">Elige</option>
                                                    <option v-for="ciudad in ciudades" v-bind:key="ciudad" v-bind:value="ciudad.id">{{ ciudad.name }}</option>
                                                </select>
                                                <label for="floatingSelect">Ciudades</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mt-4">
                                            <div class="form-floating">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.address" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">Escribe la dirección exacta de tu
                                                    alojamiento</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4 d-flex">
                                <div class="col-lg-6">
                                    <a href="#generalidades" class="scrollto"><button class="btn btn-primary"
                                            type="button">Anterior</button></a>
                                </div>
                                <div class="col-lg-6 d-flex justify-content-end">
                                    <a href="#admisiones" class="scrollto"><button class="btn btn-primary"
                                            type="button">Siguiente paso</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Formulario para registro de Ubicación-->

                </div>
                <!--Segunda sección-->

                <!--Tercera sección-->
                <div class="row align-items-center" style="margin-bottom: 8rem;" id="admisiones">

                    <!--Formulario para registro de Admisiones-->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="text-center">
                                    <h4>Datos de admisión</h4>
                                </div>
                            </div>
                            <div class="card-body p-lg-5">
                                <form id="loginForm" action="">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.accommodate_count" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">¿Para cuántos huéspedes dipone?</label>
                                            </div>
                                            <div class="form-floating">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.bedroom_count" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">¿Cuántas habitaciones?</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.bed_count" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">¿Cuántas camas?</label>
                                            </div>
                                            <div class="form-floating">
                                                <input class="form-control selecciones" id="floatingInput" v-model="form.bathroom_count" type="text"
                                                    placeholder="" required>
                                                <label for="floatingInput">¿Cuántos baños?</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4 d-flex">
                                <div class="col-lg-6">
                                    <a href="#ubicacion" class="scrollto"><button class="btn btn-primary"
                                            type="button">Anterior</button></a>
                                </div>
                                <div class="col-lg-6 d-flex justify-content-end">
                                    <a href="#comodidades" class="scrollto"><button class="btn btn-primary"
                                            type="button">Siguiente paso</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Formulario para registro de Cantidades-->

                    <!--Imagen de referencia 3-->
                    <div class="col-lg-4 col-xl-4 ms-xl-auto px-lg-4 text-center text-primary"><img
                            class="img-fluid mb-4" width="300" src="../../assets/img/cantidad.svg">
                        <h1 class="mb-4"><br class="d-none d-lg-inline">¿Cuál es la disposición de tu alojamiento?</h1>
                        <p class="lead text-muted">Describe aquellos detalles que harán saber a tus futuros huéspedes
                            los límites del lugar al que se dirigirán.</p>
                    </div>
                    <!--Imagen de referencia 3-->

                </div>
                <!--Tercera sección-->

                <!--Cuarta sección-->
                <div class="row align-items-center" style="margin-bottom: 8rem;" id="comodidades">

                    <!--Imagen de referencia 4-->
                    <div class="col-lg-4 col-xl-4 ms-xl-auto px-lg-4 text-center text-primary"><img
                            class="img-fluid mb-4" width="300" src="../../assets/img/comodidad.svg">
                        <h1 class="mb-4"><br class="d-none d-lg-inline">¿Qué ofrece tu alojamiento?</h1>
                        <p class="lead text-muted">Selecciona aquellos servicios de comodidad con los que contará tu
                            alojamiento sin dejar por alto ninguno.</p>
                    </div>
                    <!--Imagen de referencia 4-->

                    <!--Formulario para registro de Comodidades-->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="text-center">
                                    <h4>Datos de servicios y comodidades</h4>
                                </div>
                            </div>
                            <div class="card-body p-lg-5">
                                <form id="loginForm" action="">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                    <option selected class="options">Elige</option>
                                                    <option value="1" class="options">Si</option>
                                                    <option value="2" class="options">No</option>
                                                </select>
                                                <label for="floatingSelect">¿Tiene Wi-Fi?</label>
                                            </div>
                                            <div class="form-floating">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                    <option selected class="options">Elige</option>
                                                    <option value="1" class="options">Si</option>
                                                    <option value="2" class="options">No</option>
                                                </select>
                                                <label for="floatingSelect">¿Tiene aire acondicionado?</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-floating mb-4">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                    <option selected class="options">Elige</option>
                                                    <option value="1" class="options">Si</option>
                                                    <option value="2" class="options">No</option>
                                                </select>
                                                <label for="floatingSelect">¿Tiene piscina?</label>
                                            </div>
                                            <div class="form-floating">
                                                <select class="form-select selecciones" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                    <option selected class="options">Elige</option>
                                                    <option value="1" class="options">Si</option>
                                                    <option value="2" class="options">No</option>
                                                </select>
                                                <label for="floatingSelect">¿Tiene tina de baño?</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4 d-flex">
                                <div class="col-lg-6">
                                    <a href="#admisiones" class="scrollto"><button class="btn btn-primary"
                                            type="button">Anterior</button></a>
                                </div>
                                <div class="col-lg-6 d-flex justify-content-end">
                                    <a href="#imagenes" class="scrollto"><button class="btn btn-primary"
                                            type="button">Siguiente paso</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Formulario para registro de Comomdidades-->

                </div>
                <!--Cuarta sección-->

                <!--Quinta sección-->
                <div class="row align-items-center" id="imagenes">

                    <!--Formulario para registro de Imágenes-->
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="text-center">
                                    <h4>Visualizaciones de tu alojamiento</h4>
                                </div>
                            </div>
                            <div class="card-body p-lg-5">
                                <form id="loginForm" action="" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-lg-12 mx-auto">
                                            <p>Elige una imagen que se mostrará en la portada de tu anuncio, asegúrate
                                                que sea una imagen que capte la atención de los usuarios.</p>
                                            <div class="input-group px-2 py-2 rounded-pill bg-white shadow-sm">
                                                <input id="upload" type="file" @change="AddFile" onchange="readURL(this);"
                                                    class="form-control border-0">
                                                <label id="upload-label" for="upload"
                                                    class="font-weight-light text-muted">Subir portada</label>
                                                <div class="input-group-append">
                                                    <label for="upload" class="btn btn-light m-0 rounded-pill px-4">
                                                        <i class="fa fa-cloud-upload mr-2 text-muted"></i><small
                                                            class="font-weight-bold text-muted mx-2">Elegir</small></label>
                                                </div>
                                            </div>
                                            <div class="row d-flex justify-content-center">
                                                <div class="image-area"><img id="imageResult" src="#" alt=""
                                                        class="img-fluid rounded shadow-sm mx-auto d-block">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <p>Asegúrate de subir máximo 4 imágenes, elige las mejores.</p>
                                            <div class="input-group px-2 py-2 rounded-pill bg-white shadow-sm">
                                                <input type="file" id="photo" accept=".png, .jpg, .jpeg"
                                                    onchange="readFile(this);" multiple
                                                    class="form-control border-0 upload">
                                                <label id="upload-label" for=""
                                                    class="font-weight-light text-muted">Subir</label>
                                                <div class="input-group-append">
                                                    <label for="photo" class="btn btn-light m-0 rounded-pill px-4">
                                                        <i class="fa fa-cloud-upload mr-2 text-muted"></i><small
                                                            class="font-weight-bold text-muted mx-2">Elegir</small></label>
                                                </div>
                                            </div>
                                            <div id="status"></div>
                                            <div id="photos" class="row mt-5"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4">
                                <div class="col-lg-6">
                                    <a href="#comodidades" class="scrollto"><button class="btn btn-primary"
                                            type="button">Anterior</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Formulario para registro de Imágenes-->

                    <!--Imagen de referencia 5-->
                    <div class="col-lg-4 col-xl-4 ms-xl-auto px-lg-4 text-center text-primary"><img
                            class="img-fluid mb-4" width="300" src="../../assets/img/imagenes.svg">
                        <h1 class="mb-4"><br class="d-none d-lg-inline">¡Vuélve locos a tus huéspedes!</h1>
                        <p class="lead text-muted">Establece las mejores imágenes de las secciones en las que se divide
                            tu alojamiento para que tus huéspedes vean a donde disfrutarán su estancia.</p>
                    </div>
                    <!--Imagen de referencia 5-->
                </div>
                <!--Quinta sección-->

                <div class="row mt-5 mb-3">
                    <!-- <button class="btn btn-primary" type="button" id="guardar-nuevo" v-on:click="guardar()">Test</button> -->
                    <RouterLink to="/panel">
                        <button class="btn btn-primary" type="button" id="guardar-nuevo" v-on:click="guardar()">GUARDAR</button>
                    </RouterLink>
                    
                </div>
            </div>
            <!--Sección principal-->
        </div>
        <!--Contenedor general-->
    </main>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                propiedadId: null,
                form: {
                    "name": "",
                    "description": "",
                    "price": "",
                    "category_id": "",
                    "subcategory_id": "",
                    "room_type_id": "",
                    "country_id": "",
                    "state_id": "",
                    "city_id": "",
                    "address": "",
                    "accommodate_count": "",
                    "bedroom_count": "",
                    "bed_count": "",
                    "bathroom_count": "",
                    "cover": null,
                    "images": "",
                    
                },
                categorias: [],
                subcategorias: [],
                paises: [],
                estados: [],
                ciudades: [],
                tiposhabitaciones: [],
            }
        },
        async mounted() {
            axios.get('/v1/categories')
            .then(response => {
                this.categorias = response.data.data;
                //console.log(response);
            }),
            axios.get('/v1/subcategories')
            .then(response => {
                this.subcategorias = response.data.data;
                //console.log(response);
            }),
            axios.get('/v1/countries')
            .then(response => {
                this.paises = response.data.data;
                //console.log(response);
            }),
            axios.get('/v1/states')
            .then(response => {
                this.estados = response.data.data;
                //console.log(response);
            }),
            axios.get('/v1/cities')
            .then(response => {
                this.ciudades = response.data.data;
                //console.log(response);
            }),
            axios.get('/v1/roomstypes')
            .then(response => {
                this.tiposhabitaciones = response.data.data;
                //console.log(response);
            })
        },
        methods:{
            AddFile(e) {
                this.form.cover = e.target.files[0];
            },
            guardar(){
                let form = new FormData();
                for (let key in this.form){
                    form.append(key, this.form[key])
                }
                //axios.post('/v1/properties/',this.form)
                axios.post('/v1/properties/', form)
                .then(response => {
                    console.log(response);
                })
                console.log(this.form)
            },
        },
    }
</script>

<style scoped>
.card-header:first-child {
    border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}

.card-header {
    position: relative;
    padding: 2rem 2rem;
    border-bottom: none;
    background-color: white;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    z-index: 2;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: none;
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 1rem;
}

.bg-gray-100 {
    background-color: #f8f9fa !important;
}

.text-primary {
    color: #5B5452 !important;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
    font-family: Poppins;
    font-weight: 700;
    line-height: 1.2;
}

.text-muted {
    color: #6c757d !important;
}

.lead {
    font-size: 1.125rem;
    font-weight: 300;
}

.text-sm {
    font-size: .7875rem !important;
}

h3,
.h3 {
    font-size: 1.575rem;
}

.page-holder {
    display: flex;
    overflow-x: hidden;
    width: 100%;
    min-height: calc(100vh - 72px);
    flex-wrap: wrap;
}

a {
    color: #5B5452 !important;
    text-decoration: underline !important;
    cursor: pointer;
}

.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #8E2530;
    --bs-btn-border-color: #5B5452;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #a13a44;
    --bs-btn-hover-border-color: #5b5452;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #d64554;
    --bs-btn-active-border-color: #d64554;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #d64554;
    --bs-btn-disabled-border-color: #d64554;
}

.form-control {
    border: 1px solid #5B5452;
}

.form-control:focus {
    box-shadow: none;
    border: 1px solid #5B5452;
}

.selecciones {
    height: 4rem;
    border: 1px solid #5B5452;
}

.selecciones:focus {
    box-shadow: none;
    border: 1px solid #5B5452;
}

.options {
    font-family: Poppins, sans-serif;
    font-weight: bold;
    font-size: 15px;
}

#upload {
    opacity: 0;
}

#upload-label {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
}

.image-area {
    border: 2px dashed rgba(255, 255, 255, 0.7);
    padding: 1rem;
    position: relative;
    width: 55%;
    height: 75%;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.image-area img {
    z-index: 2;
    position: relative;
    width: 100%;
    height: 100%;
}

.upload {
    opacity: 0;
}

#guardar-nuevo {
    width: 12%;
    padding: 0.5rem;
    font-size: 20px;
    font-weight: bold;
}
</style>