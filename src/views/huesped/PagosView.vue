<script setup>
import TheHeaderComponent from '../../components/TheHeaderComponent.vue';
import TheFooterComponen from '../../components/TheFooterComponent.vue';
</script>
<template>
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
                <hr>
                <div class="row mt-4">
                    <h5><strong>Penalizaciones</strong></h5>
                </div>
                <div class="row mt-2" id="contenido-detalle">
                    <p class="fecha mb-0">Aquí las penalizaciones</p>
                </div>
                <hr>
                <button class="btn btn-primary w-100 mt-2">Confirmar reserva</button>
            </div>
            <!-- Right -->
            <div class="col-lg-5">
                <div class="card" style="top:8rem; position: sticky;">
                    <div class="row d-flex align-items-center p-4">
                        <div class="col-md-4">
                            <img class="card-img border" src="../../assets/img/onbh.svg">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Nombre del Airbnb</h5>
                                <p class="card-text">Categoría del Airbnb</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-light bg-opacity-10">
                        <hr>
                        <h5 class="card-title mb-3"><strong>Resumen de costo</strong></h5>
                        <div class="d-flex justify-content-between mb-1">
                            <span>$Precio inicial por 3 noches</span> <span>$20.00</span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Tarifa por servicios</span> <span>$20.00</span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Tarifa por equis cosa</span> <span>$20.00</span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Cupón (Code: NEWYEAR)</span> <span class="text-danger">-$10.00</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between">
                            <span>Total</span> <strong class="text-dark">$224.50</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TheFooterComponen />
</template>
<style scoped>
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