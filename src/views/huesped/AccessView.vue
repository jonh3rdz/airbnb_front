<template>
    <main>
        <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 px-lg-4" v-if="userlogin">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="img-top text-center"><img src="../../assets/img/onbv.png" width="100"
                                        height="115" alt="thumbnail"></div>
                            </div>
                            <div class="card-body p-lg-5">
                                <h3 class="mb-4">¡Hola! Bienvenido nuevamente</h3>
                                <p class="text-muted text-sm mb-4">Debes llenar los datos que se solicitan a
                                    continuación para seguir.</p>
                                <form id="loginForm" action="index.html" @submit.prevent="iniciarsesion">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInput" type="email" v-model="email"
                                            placeholder="name@example.com" required>
                                        <label for="floatingInput">Correo electrónico</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingPassword" type="password" v-model="password"
                                            placeholder="Password" required>
                                        <label for="floatingPassword">Contraseña</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">
                                        <label class="form-check-label" for="remember">Recuerdame</label>
                                    </div>
                                    <button class="btn btn-primary" type="submit">¡Vamos!</button>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4">
                                <div class="text-sm text-muted">¿Nuevo en O'nB? <a
                                        @click="user_register()"><strong>Regístrate</strong></a>.</div>
                            </div>
                        </div>
                    </div>
                    <!-- register -->
                    <div class="col-lg-6 px-lg-4" v-if="userregister">
                        <div class="card">
                            <div class="card-header px-lg-5">
                                <div class="img-top text-center"><img src="../../assets/img/onbv.png" width="100"
                                        height="115" alt="thumbnail"></div>
                            </div>
                            <div class="card-body p-lg-5">
                                <h3 class="mb-4">O'nB te da la bienvenida</h3>
                                <p class="text-muted text-sm mb-4">Solo son un par de pasos para formar parte de nuestra
                                    familia, para continuar, llena los datos que se te solicitan a continuación:</p>
                                <form action="index.html" @submit.prevent="register">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="username" type="text" v-model="name"
                                            placeholder="name@example.com" required>
                                        <label for="username">Nombre</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="username" type="text" v-model="lastname"
                                            placeholder="name@example.com" required>
                                        <label for="username">Apellido</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInput" type="email" v-model="email"
                                            placeholder="name@example.com" required>
                                        <label for="floatingInput">Correo electrónico</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingPassword" type="password" v-model="password"
                                            placeholder="Password" required>
                                        <label for="floatingPassword">Contraseña</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" name="agree" id="agree">
                                        <label class="form-check-label" for="agree">Estoy de acuerdo con los <a
                                                href="#">Términos y condiciones</a>.</label>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-primary" id="regidter" type="submit"
                                            name="registerSubmit">Registrarme</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer px-lg-5 py-lg-4">
                                <div class="text-sm text-muted">¿Ya tienes cuenta con nosotros? <a
                                        @click="user_login()">Inicia sesión</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img
                            class="img-fluid mb-4" width="300" src="../../assets/img/auth.svg">
                        <h1 class="mb-4">O'nB.sv <br class="d-none d-lg-inline">Explorando Oriente.</h1>
                        <p class="lead text-muted">Descubre una manera más sencilla de buscar y ofrecer tus servicios de
                            estancia.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
//importing bootstrap 5 Modules
export default {
    name: 'acceder',
    data() {
        return {
            userlogin: true,
            userregister: false,
            email: '',
            password: ''
        }
    },
    methods: {
        //user login button click event
        user_login() {
            this.userlogin = true,
                this.userregister = false
        },
        //user register button click event
        user_register() {
            this.userlogin = false,
                this.userregister = true
        },
        //login
        async iniciarsesion()
        {
            var payload = {
                email: this.email,
                password: this.password
            };
            await this.axios.post('/v1/login', payload)
            .then(response => {
                this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                localStorage.setItem('token', response.data.token);
                this.$store.commit('setAuthenticated', true);
                this.$store.commit('setUserdata', response.data.usuario.name + ' ' + response.data.usuario.lastname);
                this.$router.push('/');
            })
            .catch(error => {
                var data = error.response.data;
            });
        },
        //register
        async register()
        {
            var payload = {
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            };
            await this.axios.post('/v1/register', payload)
            .then(response => {
                localStorage.setItem('name', response.data.user.name);
                localStorage.setItem('email', response.data.user.email);
                this.$router.push('/');
            })
            .catch(error => {
                var data = error.response.data;
            });
        }
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

body {
    font-family: 'Poppins' !important;
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

.form-check-input:checked {
    background-color: #8E2530;
    border-color: #5B5452;
    outline: none !important;
}

.form-check-input:focus {
    box-shadow: none;
}

.form-check-input {
    border: 1px solid #5B5452;
}

.form-control {
    border: 1px solid #5B5452;
}

.form-control:focus {
    box-shadow: none;
    border: 1px solid #5B5452;
}
</style>