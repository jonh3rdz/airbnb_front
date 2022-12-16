<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import TheHeaderComponent from '../../components/TheHeaderComponent.vue';
import TheFooterComponent from '../../components/TheFooterComponent.vue';

const route = useRoute()
//const { id } = route.params
console.log(route.params)
</script>

<template>
    <div>
        <div v-if="userdetalle">
            <TheHeaderComponent />
            <div>
            <!--Inicia sección del título del Airbnb-->
            <div class="container border-bottom mt-4">
                <h3 class="">
                    {{detalle.name}}
                </h3>
                <div class="icons mb-2">
                    <i class="fa fa-star" id="head-icon"></i><span id="titulos-heading">4 reseñas</span>
                    <i class="fa fa-location" id="head-icon"></i><span id="titulos-heading">{{detalle.location}}</span>
                </div>
            </div>
            <!--Finaliza sección del título del Airbnb-->
            <!--Inicia sección de imagenes de Airbnb-->
            <div class="container mt-3 mb-3 p-4" id="image-container">
                <div class="row">
                    <div class="col-lg-6 col-md-3 p-0 m-0">
                        <div class="card-image">
                            <img :src="'http://127.0.0.1:8000/storage/cover/'+detalle.cover" alt="cover" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 p-0 m-0">
                        <div v-for="(imagenes) in imagenes" :key="imagenes.id">
                            <div class="row d-flex">
                                <img :src="'http://127.0.0.1:8000/storage/property_images/'+imagenes.property_image"
                                    class="rounded" alt="arreglo_img" id="imagenes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Finaliza sección de imagenes de Airbnb-->
            <div class="container">
                <!--Inicia sección de detalle de Airbnb-->
                <div class="row">
                    <div class="col-md-7">
                        <div class="row">
                            <h4>{{detalle.category}} - Anfitrión: {{detalle.author}}</h4>
                            <div class="icons">
                                <i class="fa-solid fa-person" id="head-icon"></i><span id="titulos-heading">{{detalle.accommodate_count}} huéspedes</span>
                                <i class="fa fa-bed" id="head-icon"></i><span id="titulos-heading">{{detalle.bed_count}} camas</span>
                                <i class="fa fa-bath" id="head-icon"></i><span id="titulos-heading">{{detalle.bathroom_count}} baños</span>
                            </div>
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <h5>Dirección</h5>
                        </div>
                        <div class="row mt-1 mb-1" id="contenido-detalle">
                            {{detalle.address}}
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <h5>Descripción breve</h5>
                        </div>
                        <div class="row mt-1 mb-1" id="contenido-detalle">
                            {{detalle.description}}
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <h5>El espacio</h5>
                        </div>
                        <div class="row mt-1 mb-1" id="contenido-detalle">
                            Imagenes o las referencias de donde dormirá el huésped en construcción.
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <h5>Servicios</h5>
                        </div>
                        <div class="col-lg-6 col-md-6 p-0 m-0">
                        <div class="row d-flex">
                            <div class="row mt-1 mb-1" id="contenido-detalle">
                                -Wifi
                            </div>
                            <div class="row mt-1 mb-1" id="contenido-detalle">
                                -Cocina
                            </div>
                            <div class="row mt-1 mb-1" id="contenido-detalle">
                                -Lavadora
                            </div>
                            <div class="row mt-1 mb-1" id="contenido-detalle">
                                -Televisor de alta definición
                            </div>
                        </div>
                    </div>
                        <hr>
                        <div class="row mt-4">
                            <h5>Ellos te pueden convencer</h5>
                        </div>
                        <div class="row mt-1 mb-1" id="contenido-detalle">
                            <!--Espacio para las reseñas-->
                            <div class="col-md-3 col-lg-6">
                                <div class="card p-3 text-center">
                                    <div class="user-image">
                                        <img src="../../assets/img/testing.svg" class="rounded-circle" width="80">
                                    </div>
                                    <div class="user-content">
                                        <h5 class="mt-2">Bruce Hardy</h5>
                                        <p class="mb-0">¡Es uno de los mejores alojamientos en los que nos hemos alojado! 
                                            Impresionantes vistas de ambos lados y increíbles puestas de sol: no nos cansamos de ellas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <h5>Debes tener en cuenta que:</h5>
                        </div>
                        <div class="row mt-1 mb-1" id="contenido-detalle">
                            Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, 
                            de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, 
                            como problemas al momento de hacer el check-in.
                        </div>
                        <hr>
                    </div>
                    <!--Finaliza sección de detalle de Airbnb-->

                    <!--Inicia sección de reserva de Airbnb-->
                    <div class="test2"  style="padding: 35px;">
                        <div class="card sticky-top" id="reserva-card" style="top:8rem">
                            <div >
                                <div style="padding: 6px;">
                                    <div class="card" >
                                        <div class="card-header" id="header-footer-card">
                                            <form action="#" class="row justify-content-center">
                                                <div class="col-md-7">
                                                    <!-- <div class="form-group"> -->
                                                        <h4><span>${{ formattedPerNightPrice }} USD</span> noche</h4>
                                                    <!-- </div> -->
                                                </div>
                                                <div class="col-md-5">
                                                    <span class="_1y9gwt75">
                                                        <span class="_9qqdp4" style="font-size: 12px;">
                                                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                        <span class="_12si43g">
                                                            4.5 .
                                                        </span>
                                                        <span class="_1qx9l5ba">
                                                            1 reseña
                                                        </span>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <!-- <div class="card-header" id="header-footer-card">
                                            <li class="fa-solid fa-dollar"></li> <strong>{{detalle.price}}</strong> por noche
                                        </div> -->
                                        <div class="card-body p-3">
                                            <form action="#" class="row justify-content-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="input_from">Llegada</label>
                                                        <input type="date" class="form-control mt-2 mb-2" v-model="detalle.dateini" id="input_from" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="input_to">Salida</label>
                                                        <input type="date" class="form-control mt-2 mb-2" v-model="detalle.datefini" id="input_to" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="btn mt-3 p-2" id="btn-reserva" @click="user_reserva()"><strong>Reserva</strong></div>
                                                <!-- <RouterLink class="btn mt-3 p-2" id="btn-reserva" to="/pagos"> Reserva </RouterLink> -->
                                                <!-- <a @click="this.$router.push('/pagos')" class="btn mt-3 p-2" id="btn-reserva">Consultar disponibilidad</a> -->
                                            </form>
                                        </div>
                                        <div class="card-footers">
                                            <small>No se hará ningún cargo por el momento.</small>
                                        </div>
                                        <section>
                                            <div class="card-body p-3">
                                                <form action="#" class="row justify-content-center card-bt">
                                                    <div class="col-md-8">
                                                        <div class="form-group ">
                                                            <label for="input_from">${{ formattedPerNightPrice }} USD x {{ getTotalDays }} noches</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="input_to">{{ formattedTotalNightsPrice }} USD</label>
                                                        </div>
                                                    </div>
                                                </form>
                                                <form action="#" class="row justify-content-center card-bt">
                                                    <div class="col-md-8">
                                                        <div class="form-group ">
                                                            <label for="input_from">Tarifa de limpieza</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="input_to">{{ formattedCleaningFee }} USD</label>
                                                        </div>
                                                    </div>
                                                </form>
                                                <form action="#" class="row justify-content-center card-bt-footer">
                                                    <div class="col-md-8">
                                                        <div class="form-group">
                                                            <label for="input_from">Tarifa por servicio</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="input_to">{{ formattedServiceFee }} USD</label>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </section>
                                        <hr>
                                        <div class="card-bodys">
                                            <form action="#" class="row justify-content-center">
                                                <div class="col-md-8">
                                                    <div class="form-group">
                                                        <label for="input_from">Total sin incluir impuestos</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label for="input_to">{{ formattedTotal }} USD</label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!--Finaliza sección de reserva de Airbnb-->
            </div>
            </div>
            <TheFooterComponent />
        </div>



        <div v-if="userreserva">
            <TheHeaderComponent/>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="row mt-4 mb-4">
                        <h3><strong>Confirmar y pagar</strong></h3>
                    </div>
                    <!-- Left -->
                    <div class="col-lg-7">
                        <hr>
                        <div class="row mt-4">
                            <h5><strong>Tu estadía</strong></h5>
                        </div>
                        <div class="row mt-2" id="contenido-detalle">
                            <h5 id="title"><strong>Fecha</strong></h5>
                            <p class="fecha mb-0">Del 13 al 23 de Enero de 2023</p>
                        </div>
                        <hr>
                        <div class="row mt-4 mb-3">
                            <h5><strong>Puedes pagar con</strong></h5>
                        </div>
                        <div class="row mt-1" id="contenido-detalle">
                            <div class="accordion" id="accordionPayment">
                                <!-- Credit card -->
                                <div class="accordion-item mb-3">
                                    <h4 class="mt-2 p-2 accordion-header d-flex justify-content-between align-items-center">
                                        <div class="form-check w-100 collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#collapseCC" aria-expanded="false">
                                            <input class="form-check-input" type="radio" name="payment" id="payment1">
                                            <label class="form-check-label pt-1" for="payment1" id="title">
                                                Débito o Crédito
                                            </label>
                                        </div>
                                    </h4>
                                    <div id="collapseCC" class="accordion-collapse collapse show"
                                        data-bs-parent="#accordionPayment" style="">
                                        <div class="accordion-body">
                                            <div class="mb-3">
                                                <label class="form-label">Número</label>
                                                <input type="text" class="form-control" placeholder="">
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Nombre del titular</label>
                                                        <input type="text" class="form-control" placeholder="">
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">Fecha de expirado</label>
                                                        <input type="text" class="form-control" placeholder="MM/YY">
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="mb-3">
                                                        <label class="form-label">CVV</label>
                                                        <input type="password" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- PayPal -->
                                <div class="accordion-item mb-3 border">
                                    <h4 class="mt-2 p-2 accordion-header d-flex justify-content-between align-items-center">
                                        <div class="form-check w-100 collapsed" data-bs-toggle="collapse"
                                            data-bs-target="#collapsePP" aria-expanded="false">
                                            <input class="form-check-input" type="radio" name="payment" id="payment2">
                                            <label class="form-check-label pt-1" for="payment2" id="title">
                                                PayPal
                                            </label>
                                        </div>
                                    </h4>
                                    <div id="collapsePP" class="accordion-collapse collapse" data-bs-parent="#accordionPayment"
                                        style="">
                                        <div class="accordion-body">
                                            <div class="px-2 col-lg-6 mb-3">
                                                <label class="form-label">Correo electrónico</label>
                                                <input type="email" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <h5><strong>Política de cancelación</strong></h5>
                        </div>
                        <div class="row mt-2" id="contenido-detalle">
                            <h5 id="title"><strong>Política 1</strong></h5>
                            <p class="fecha mb-0">Puedes cancelar 12 horas antes de la fecha de inicio</p>
                        </div>
                        <!-- <hr>
                        <div class="row mt-4">
                            <h5><strong>Penalizaciones</strong></h5>
                        </div>
                        <div class="row mt-2" id="contenido-detalle">
                            <p class="fecha mb-0">Aquí las penalizaciones</p>
                        </div> -->
                        <hr>
                        <button class="btn btn-primary w-100 mt-2">Confirmar reserva</button>
                        <div class="btn btn-primary w-100 mt-2" @click="user_detalle()">Cancelar</div>
                    </div>
                    <!-- Right -->
                    <div class="col-lg-5">
                        <div class="card" style="top:8rem; position: sticky;">
                            <div class="row d-flex align-items-center p-4">
                                <div class="col-md-4">
                                    <img class="card-img border" :src="'http://127.0.0.1:8000/storage/cover/'+detalle.cover">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{{detalle.name}}</h5>
                                        <p class="card-text">{{detalle.category}} </p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 bg-light bg-opacity-10">
                                <hr>
                                <h5 class="card-title mb-3"><strong>Resumen de costo</strong></h5>
                                <div class="d-flex justify-content-between mb-1">
                                    <span>${{ formattedPerNightPrice }} USD por {{ getTotalDays }} noches</span> <span>{{ formattedTotalNightsPrice }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-1">
                                    <span>Tarifa de limpieza</span> <span>{{ formattedCleaningFee }}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-1">
                                    <span>Tarifa por servicios</span> <span>{{ formattedServiceFee }}</span>
                                </div>
                                <!-- <div class="d-flex justify-content-between mb-1">
                                    <span>Cupón (Code: NEWYEAR)</span> <span class="text-danger">-$10.00</span>
                                </div> -->
                                <hr>
                                <div class="d-flex justify-content-between">
                                    <span>Total.(USD)</span> <strong class="text-dark">{{ formattedTotal }}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TheFooterComponen />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                userdetalle: true,
                userreserva: false,
                detalleId: null,
                detalle: {
                    "id" : null,
                    "name": "",
                    "location": "",
                    "address": "",
                    "category": "",
                    "author": "",
                    "accommodate_count": "",
                    "bed_count": "",
                    "bathroom_count": "",
                    "description": "",
                    "cover": "",
                    "price": "",
                    dateini: null,
                    datefini: null,
                    "tarifaServicio": 14,
                    "tarifaLimpieza": 25,
                    "images" : [],
                },
                imagenes: [],
            }
        },
        async mounted() {
            this.home = this.$route.params.id;
            axios.get('/v1/home/'+ this.home)
            .then(response => {
                this.detalle.id = response.data.data.id;
                this.detalle.name = response.data.data.name;
                this.detalle.location = response.data.data.location.country + ', '+ response.data.data.location.state + ', '+ response.data.data.location.city;
                this.detalle.address = response.data.data.location.address;
                this.detalle.category = response.data.data.category.title + ', ' + response.data.data.subcategory.title;
                this.detalle.author = response.data.data.author.user;
                this.detalle.accommodate_count = response.data.data.accommodate_count;
                this.detalle.bed_count = response.data.data.bed_count;
                this.detalle.bathroom_count = response.data.data.bathroom_count;
                this.detalle.description = response.data.data.description;
                this.detalle.cover = response.data.data.cover;
                this.detalle.price = response.data.data.price;
                this.detalle.images = response.data.data.images;
                this.imagenes = response.data.images;
                console.log(this.detalle);
                console.log(this.fotos);
            })
        },
        methods: {
            //user login button click event
            user_detalle() {
                this.userdetalle = true,
                    this.userreserva = false
            },
            //user register button click event
            user_reserva() {
                this.userdetalle = false,
                    this.userreserva = true
            },
            totalDays() {
                const date1 = new Date(this.detalle.dateini);
                const date2 = new Date(this.detalle.datefini);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays
            },
            format(num) {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });
                return formatter.format(num)
            },

        },
        computed: {
            formattedPerNightPrice() {
                return this.detalle.price
            },
            formattedTotalNightsPrice() {
                return this.format(this.totalDays() * this.detalle.price)
            },
            getTotalDays() {
                return this.totalDays()
            },
            formattedCleaningFee() {
                return this.format(this.detalle.tarifaLimpieza)
            },
            formattedServiceFee() {
                return this.format((this.detalle.tarifaServicio / 100) * (this.totalDays() * this.detalle.price))
            },
            formattedTotal() {
                return this.format(((this.detalle.tarifaServicio / 100) * (this.totalDays() * this.detalle.price)) + this.detalle.tarifaLimpieza + (this.totalDays() * this.detalle.price))
            }
        },
    }
</script>

<style scoped>

._1qx9l5ba {
    color: rgb(113, 113, 113) !important;
    padding-left: 4px !important;
    font-weight: 600 !important;
    text-decoration: underline !important;
}

._12si43g {
    color: rgb(34, 34, 34) !important;
    padding-left: 4px !important;
    font-weight: 600 !important;
}

._1y9gwt75 {
    -webkit-box-align: baseline !important;
    align-items: baseline !important;
    display: flex !important;
    font-size: 14px !important;
    line-height: 18px !important;
}

._r1nvod {
    white-space: nowrap !important;
    font-weight: 400 !important;
    font-size: var(--pricing-guest-primary-line-qualifier-font-size, 14px) !important;
    line-height: var(--pricing-guest-primary-line-qualifier-line-height, 18px) !important;
    min-width: var(--pricing-guest-primary-line-qualifier-min-width, initial) !important;
    overflow: var(--pricing-guest-primary-line-qualifier-overflow, initial) !important;
    text-overflow: var(--pricing-guest-primary-line-qualifier-text-overflow, initial) !important;
}

._tyxjp1 {
    font-weight: var(--pricing-guest-primary-line-unit-price-font-weight, 800) !important;
}

.card-bodys {
    flex: 1 1 auto;
    padding-top: 1px;
    padding-right: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    color: var(--bs-card-color);
}

.card-bt {
    flex: 1 1 auto;
    padding-top: 1px;
    padding-bottom: 10px;
    color: var(--bs-card-color);
}

.card-bt-footer {
    flex: 1 1 auto;
    padding-top: 1px;
    padding-bottom: 0px;
    color: var(--bs-card-color);
}

._m6lwl6 {
    color: rgb(34, 34, 34) !important;
    text-align: left !important;
}

._18x3iiu {
    order: 1 !important;
}

._m6lwl6 {
    color: rgb(34, 34, 34) !important;
    text-align: left !important;
}

._10d7v0r {
    display: inline-flex !important;
    position: relative !important;
}

._1k4xcdh {
    order: 2 !important;
    white-space: nowrap !important;
}

._18x0pkv:first-child {
    padding-top: 0px !important;
}

._1emnh212 {
    font-size: 14px !important;
    line-height: 18px !important;
    color: rgb(113, 113, 113) !important;
    font-weight: 400 !important;
    border-top: 1px solid rgb(221, 221, 221) !important;
    margin-top: 24px !important;
    padding-top: 24px !important;
}

._1fpuhdl:first-child {
    padding-top: 0px !important;
}

.test1 {
    position: relative !important;
    width: 58.333333333333336% !important;
    margin-left: 0% !important;
    margin-right: 0% !important;
}

.test2 {
    position: relative !important;
    width: 33.33333333333333% !important;
    margin-left: 8.333333333333332% !important;
    margin-right: 0% !important;
}

.test3 {
    -webkit-box-align: baseline !important;
    -webkit-box-pack: justify !important;
    -webkit-box-direction: normal !important;
    -webkit-box-orient: horizontal !important;
    display: flex !important;
    flex-flow: row wrap !important;
    justify-content: space-between !important;
    align-items: baseline !important;
    margin-bottom: 24px !important;
}

.test4 {
    -webkit-box-direction: normal !important;
    -webkit-box-orient: vertical !important;
    display: flex !important;
    flex-direction: column !important;
}

#image-container {
    width: 100%;
    height: 70%;
}

.card-image img {
    height: 400px;
    width: 98%;
    margin-right: 0.2rem;
    border-radius: 15px;
}

.card-sl {
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#head-icon {
    margin-right: 0.5rem;
    font-size: 12px;
    color: #5B5452;
}

#titulos-heading {
    margin-right: 0.5rem;
    font-size: 12px;
    color: #5B5452;
}

#cover-image {
    height: 100%;
    width: 98%;
    margin-right: 0.2rem;
    border-radius: 15px;
}

#imagenes {
    width: 48.2%;
    height: 196px;
    padding: 0%;
    margin: 0.2rem;
    transition: 0.2s all;
}

#imagenes:hover {
    transform: scale(1.02);
}

#contenido-detalle {
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    font-size: 15px;
}

.card {
    border: none;
}

#reserva-card {
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.user-content p {
    margin-top: 1rem;
    font-size: 12px;
}

.form-control {
    border: 1px solid;
}

.form-control:focus {
    box-shadow: none !important;
    border: 1px solid;
}

#header-footer-card {
    /* text-align: center; */
    background: #fff;
    color: #222;
    padding: 1rem;
}

.card-footers {
    text-align: center;
}

#btn-reserva {
    width: 95%;
    background: #e31c5f;
    color: #fff;
}




#contenido-detalle {
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    font-size: 15px;
}

.card {
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 5%);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0, 0, 0, .125);
    border-radius: 1rem;
}

.fecha {
    font-weight: 400;
    color: #000;
}

#payment1 {
    font-size: 16px;
    margin-top: 8px;
}

#payment2 {
    font-size: 16px;
    margin-top: 8px;
}

#payment1:checked {
    background-color: #8e2530;
    border-color: #8e2530;
}

#payment1:focus {
    box-shadow: none;
}

#payment2:checked {
    background-color: #8e2530;
    border-color: #8e2530;
}

#payment2:focus {
    box-shadow: none;
}

.form-control:focus {
    box-shadow: none;
    border: 1px solid #5B5452;
}

#title {
    font-size: 18px;
    font-weight: 400;
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
</style>