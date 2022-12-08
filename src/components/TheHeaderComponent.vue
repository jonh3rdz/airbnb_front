<template>
    <header id="header" class="d-flex align-items-center">
        <div class="container-fluid d-flex align-items-center justify-content-between" id="content-header">
            <div class="img-top"><img src="../assets/img/onbh.svg" width="150" alt=""></div>
            <nav id="navbar" class="navbar">
                <ul>
                    <li>
                        <RouterLink class="nav-link" v-if="$store.state.isAuthenticated" to="/panel">Hazte anfitrión</RouterLink>
                    </li>
                    <!-- <div class="dropdown active">
                        <button type="button" class="c1grjlav crawnjq dir dir-ltr" aria-expanded="false" aria-label="Menú de navegación principal" data-testid="cypress-headernav-profile">
                            <div class=" dir dir-ltr">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                                    <g fill="none" fill-rule="nonzero">
                                        <path d="m2 16h28"></path>
                                        <path d="m2 24h28"></path>
                                        <path d="m2 8h28"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="fp36fst dir dir-ltr">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 100%; width: 100%; fill: currentcolor;">
                                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                                </svg>
                            </div>
                        </button>
                    </div> -->
                    <li class="dropdown active">
                        <button type="button" class="c1grjlav crawnjq dir dir-ltr" aria-expanded="false" aria-label="Menú de navegación principal" data-testid="cypress-headernav-profile">
                            <div class=" dir dir-ltr">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                                    <g fill="none" fill-rule="nonzero">
                                        <path d="m2 16h28"></path>
                                        <path d="m2 24h28"></path>
                                        <path d="m2 8h28"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="fp36fst dir dir-ltr">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 100%; width: 100%; fill: currentcolor;">
                                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                                </svg>
                            </div>
                        </button>
                        <ul>
                            <li>
                                <RouterLink class="nav-link" v-if="$store.state.isAuthenticated" to="/panel">{{$store.state.name}}</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="nav-link" v-if="!$store.state.isAuthenticated" to="/acceder">Acceder</RouterLink>
                            </li>
                            <hr>
                            <li><a href="#">Viajes</a></li>
                            <li><a href="#">Experiencias</a></li>
                            <hr v-if="$store.state.isAuthenticated">
                            <li>
                                <RouterLink class="nav-link" v-if="$store.state.isAuthenticated" to="/">Ayuda</RouterLink>
                            </li>
                            <li>
                                <!-- <a v-if="$store.state.isAuthenticated" @click="cerrar_sesion()">Cerrar Sesion</a> -->
                                <RouterLink class="nav-link" to="/" v-if="$store.state.isAuthenticated" @click="cerrar_sesion()">Cerrar Sesion</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <!-- <li class="dropdown active"><a href="#"><img src="../assets/img/avatar.svg" class="avatar-no-auth"
                                alt="Avatar"></a>
                        <ul>
                            <li>
                                <RouterLink class="nav-link" v-if="$store.state.isAuthenticated" to="/panel">{{$store.state.name}}</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="nav-link" v-if="!$store.state.isAuthenticated" to="/acceder">Acceder</RouterLink>
                            </li>
                            <hr>
                            <li><a href="#">Viajes</a></li>
                            <li><a href="#">Experiencias</a></li>
                            <hr v-if="$store.state.isAuthenticated">
                            <li>
                                <RouterLink class="nav-link" v-if="$store.state.isAuthenticated" to="/">Ayuda</RouterLink>
                            </li>
                            <li>
                                <a v-if="$store.state.isAuthenticated" @click="cerrar_sesion()">Cerrar Sesion</a>
                                <RouterLink class="nav-link" to="/" v-if="$store.state.isAuthenticated" @click="cerrar_sesion()">Cerrar Sesion</RouterLink>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
//importing bootstrap 5 Modules
export default {
    methods: {
        //cerrar sesion
        async cerrar_sesion()
        {
            await this.axios.post('/v1/cerrarsesion')
            .then(response => {
                this.$store.commit('setAuthenticated', false);
                this.$store.commit('setUserdata','');
                localStorage.removeItem('token');
                //this.$router.push('/');
            })
            .catch(error => {
                var data = error.response.data;
            });
        },
    },
}
</script>

<style data-aphrodite="true">

:root{--h-l-f-om-o:4px;--go-h-jh-l:8px;--i-g-gvoq:12px;--g-ki-r-rq:16px;--j-mdfu-h:20px;--jx-b-v-zt:0 8px 28px rgba(0,0,0,0.28);--g-r-n-ycy:1px solid rgba(0,0,0,0.04);--ih-jiz-p:0 6px 20px rgba(0,0,0,0.2);--cglwe-y:1px solid rgba(0,0,0,0.04);--cizosd:0 6px 16px rgba(0,0,0,0.12);--cb-k-zk-c:1px solid rgba(0,0,0,0.04);--e-swdx-p:0 2px 4px rgba(0,0,0,0.18);--g-fi-y-r-e:1px solid rgba(0,0,0,0.08);--f-ya-ggj:cubic-bezier(1,0,0.86,1);--bd-d-m-c-q:cubic-bezier(0,0,0.1,1);---bz-mmq:cubic-bezier(0.35,0,0.65,1);--bgxgx:#000000;--f-k-smk-x:#222222;--fo-jk-r-s:#717171;--iw-ihca:#B0B0B0;--j-qkgmf:#DDDDDD;--d-nc-lt-s:#EBEBEB;---pc-g-v-g:#F7F7F7;--f-mkcy-f:#FFFFFF;--k-va-tnc:#C13515;--cnr-vp-o:#B32505;--f-p-k-v-lb:#FFF8F6;--fhi-qn-u:#E07912;--k-ff-my-a:#008A05;--ldbkp-d:#428BFF;--ihf-tp-q:#FF385C;--cl-yygv:#E00B41;--kd-lqtg:#92174D;--d-u-w-o-m-k:#460479;--dc-gy-f-v:linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%);--d-e-vybb:radial-gradient(circle at center,#FF385C 0%,#E61E4D 27.5%,#E31C5F 40%,#D70466 57.5%,#BD1E59 75%,#BD1E59 100%);--gj-z-dpd:linear-gradient(to right,#BD1E59 0%,#92174D 50%,#861453 100%);--i-n-t-h-mj:radial-gradient(circle at center,#D70466 0%,#BD1E59 30%,#92174D 55%,#861453 72.5%,#6C0D63 90%,#6C0D63 100%);--iqds-nv:linear-gradient(to right,#59086E 0%,#460479 50%,#440589 100%);--j-m-v-dtd:radial-gradient(circle at center,#6C0D63 0%,#59086E 30%,#460479 55%,#440589 72.5%,#3B07BB 90%,#3B07BB 100%);--jhzm-v-t:16px;--ikx-k-pe:24px;--kksqe-v:32px;--f-fw-z-a-i:40px;--cw-a-a-u-a:48px;--fvsvry:64px;--cy-o-aco:80px;--d-b-mrdy:2px;--h-x-sf-jw:4px;--fgg-f-l-a:8px;--b-y-unon:12px;--jaa-ni-h:16px;--ic-zlb-s:24px;--kc-t-qr-j:32px;--e-ls-qkw:'Circular',-apple-system,'BlinkMacSystemFont','Roboto','Helvetica Neue',sans-serif;--fy-rs-ca:18px;--d-ar-t-o-n:22px;--lhy-d-yl:22px;--fme-bf-w:26px;--g-zgv-nj:26px;--b-x-z-q-l-e:30px;--cv-p-u-ui:32px;--hu-t-o-g-n:36px;--hr-k-udr:10px;--dpgw-ac:12px;--f-cv-j-j-p:12px;--f-l-h-bac:16px;--c-zdwk-p:14px;--j-p-z-kco:18px;--i-nh-zme:14px;--gvarj-f:20px;--iw-ehf-f:16px;---s-l-myu:20px;--y-g-ar-y:16px;--cb-pewj:24px;--ll-l-ys-f:18px;--f-xgviq:24px;--kmwb-ss:18px;--j-n-c-d-l-h:28px;--jlvl-j-l:12px;--j-l-x-t-kw:16px;--e-y-j-d-v-j:400;--jx-zk-pv:600;--h-oqhch:800;--g-lm-u-p:normal;--mq-yk-l:0.04em;}

.c1grjlav[class][class]{-webkit-appearance:none;appearance:none;border:0;color:inherit;display:inline-block;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;outline:0;overflow:visible;padding:0;-webkit-text-decoration:none;text-decoration:none;-webkit-user-select:auto;user-select:auto;outline:none;align-items:center;color:var(--f-k-smk-x);display:inline-flex;height:42px;position:relative;vertical-align:middle;z-index:1;}

.dir.c1grjlav[class][class]{background:transparent;cursor:pointer;margin:0;text-align:inherit;background-color:var(--f-mkcy-f);border:1px solid var(--j-qkgmf);border-radius:21px;transition:box-shadow 0.2s ease;}

.dir-ltr.c1grjlav[class][class]{padding:5px 5px 5px 12px;}

.fp36fst[class][class]{color:var(--fo-jk-r-s);flex:0 0 30px;height:30px;overflow:hidden;position:relative;width:30px;z-index:1;}

.dir-ltr.fp36fst[class][class]{margin-left:12px;}

</style>

<style scoped>

#header {
    background: #fff;
    border-bottom: 2px solid #d4d4d4;
    transition: all 0.5s;
    z-index: 997;
    height: 80px;
    top: 0;
    position: sticky;
}

#content-header{
    width: 94%;
}

.navbar {
    padding: 0;
}

.navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
}

.navbar li {
    position: relative;
}

.navbar>ul>li {
    position: relative;
    white-space: nowrap;
    padding: 10px 0 10px 24px;
}

.navbar a,
.navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-size: 15px;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
}

.navbar a i,
.navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
}

.navbar>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #8e2530;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover>a:before,
.navbar .active:before {
    visibility: visible;
    width: 100%;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
    color: #5B5452;
}

.navbar .dropdown ul {
    display: block;
    position: absolute;
    right: 0px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0.1;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 8px;
}

.navbar .dropdown ul li {
    min-width: 200px;
}

.navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    text-decoration: none;
}

.navbar .dropdown ul a i {
    font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
    color: #5B5452;
    background: #d6d6d6;
}

.navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}

.navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
}

.avatar-no-auth {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    align-self: center;
}
</style>