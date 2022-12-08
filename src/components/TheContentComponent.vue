<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import TheFilterComponent from './TheFilterComponent.vue';

const router = useRouter()
</script>
<template>
    <div class="row">
        <TheFilterComponent/>
    </div>
    <div class="row">
        <div class="col-md-3 col-lg-3 mt-2" v-for="(properties) in properties" :key="properties.id">
            <div class="card-sl">
                <router-link :to="'detalle/'+properties.id" target="_blank">
                    <div class="card-image" v-if="properties.cover !=null">
                        <img :src="'http://127.0.0.1:8000/storage/cover/'+properties.cover" :alt="properties.cover">
                    </div>
                    <div class="card-image airbnb" v-else>
                        <img :src="'http://127.0.0.1:8000/storage/cover/1669429688.jpg'" :alt="properties.cover" />
                    </div>
                    <!-- Imagen carousel inicio -->
                    <!-- <div class="card-image">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" v-if="properties.cover !=null">
                                    <img :src="'http://127.0.0.1:8000/storage/cover/'+properties.cover" :alt="properties.cover">
                                </div>
                                <div class="card-image airbnb" v-else>
                                    <img :src="'http://127.0.0.1:8000/storage/cover/1669429688.jpg'" :alt="properties.cover" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> -->
                    <!-- Imagen carousel final -->
                    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                    <div class="card-ubication">
                        <i class="fa-solid fa-location-dot"></i> {{properties.location.city+', '+properties.location.state}}
                    </div>
                    <div class="card-fecha">
                        {{properties.created_at}}
                    </div>
                    <div class="card-text">
                        <i class="fa-solid fa-dollar-sign"></i> {{properties.price+' noche'}}
                    </div>
                    <!-- <button @click="router.push(`/detalle/${properties.id}`)" class="card-button" to="/detalle" target="_blank">Visitar</button> -->
                    <!-- <RouterLink class="card-button" to="/detalle" target="_blank" v-on:click="detalle(home.id)">Visitar</RouterLink> -->
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-sl {
    margin-top: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-image img {
    height: 200px;
    width: 100%;
    border-radius: 8px 8px 0px 0;
}

.airbnb {
  display: block;
  width: auto;
  height: auto;
}

.card-action {
    position: relative;
    float: right;
    margin-top: -25px;
    margin-right: 20px;
    z-index: 2;
    color: #8E2530;
    background: #fff;
    border-radius: 100%;
    padding: 15px;
    font-size: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
}

.card-action:hover {
    color: #fff;
    background: #8E2530;
    animation: pulse 1.5s infinite;
}

.card-heading {
    font-size: 18px;
    font-weight: bold;
    background: #fff;
    padding: 10px 15px;
}

.card-text {
    padding: 3px 15px;
    background: #fff;
    font-size: 14px;
    color: #000000;
    border-radius: 8px;
}

.card-ubication {
    padding: 3px 15px;
    background: #fff;
    font-size: 14px;
    color: #000000;
}

.card-fecha {
    padding: 1px 15px;
    background: #fff;
    font-size: 14px;
    color: #636262;
}

.card-button {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    width: 100%;
    background-color: #5B5452;
    color: #fff;
    border-radius: 0 0 8px 8px;
}

a {
    text-decoration: none;
}

.card-button:hover {
    text-decoration: none;
    background-color: #8E2530;
    color: #fff;
    transition: 0.5s all;
}

@keyframes pulse {
    0% {
        -moz-transform: scale(0.9);
        -ms-transform: scale(0.9);
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    70% {
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -webkit-transform: scale(1);
        transform: scale(1);
        box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
    }

    100% {
        -moz-transform: scale(0.9);
        -ms-transform: scale(0.9);
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
    }
}
</style>

<script>
import axios from 'axios';
import router from '../router';
    export default {
        data() {
            return {
                properties: [],
            }
        },
        async mounted() {
            console.log('Component mounted.')
            this.getData();
        },
        methods: {
            getData() {
                axios.get('/v1/home')
                .then(response => {
                    this.properties = response.data.data;
                    console.log(response)
                })
                .catch(e => {
                    console.log(e);
                    this.$Progress.fail()
                })
            },
            detalle() {
                console.log(id)
            },
        },
    }
</script>