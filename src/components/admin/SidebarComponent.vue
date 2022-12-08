<template>
    <aside :class="`${expandido ? 'expandido' : ''}`">

        <img src="../assets/admin.png" alt="">

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="desplegarMenu()">
                <span class="material-icons">
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            </button>
        </div>

        <div class="menu">
            <Router-Link class="button" to="/">
                <span class="material-icons">
                    <i class="fa-solid fa-house"></i>
                </span>
                <span class="text">
                    Home
                </span>
            </Router-Link>
            
            <Router-Link class="button" to="/categorias">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Categorías
                </span>
            </Router-Link>
            <Router-Link class="button" to="/paises">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Paises
                </span>
            </Router-Link>
            <Router-Link class="button" to="/Departamentos">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Departamentos
                </span>
            </Router-Link>
            <Router-Link class="button" to="/ciudades">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Ciudades
                </span>
            </Router-Link>
            <Router-Link class="button" to="/subcategoria">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Subcategorias
                </span>
            </Router-Link>
            <Router-Link class="button" to="/propiedades">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Propiedades
                </span>
            </Router-Link>
            <Router-Link class="button" to="/comodidades">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    Comodidades
                </span>
            </Router-Link>
            <Router-Link class="button" to="/nosotros">
                <span class="material-icons">
                    <i class="fa-solid fa-circle-info"></i>
                </span>
                <span class="text">
                    About
                </span>
            </Router-Link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';

const expandido = ref(localStorage.getItem("expandido") === "true")

const desplegarMenu = () => {
    expandido.value = !expandido.value

    localStorage.setItem("expandido", expandido.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    border: 1px solid var(--dark-alt);

    background: var(--light);
    color: var(--dark);

    transition: 0.2s ease-out;

    img {
        width: 10rem;
        margin: 2.5rem;
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;
        }

        .material-icons {
            font-size: 1.5rem;
            color: var(--grey);
            transition: 0.2s ease-out;
        }

        &:hover {
            .material-icons {
                color: var(--primary);
                transform: translateX(0.5rem);
            }
        }
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 1.5rem;
                color: var(--grey);
                margin-right: 1rem;
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--grey);
                transition: 0.2s ease-out;
            }

            &:hover,
            &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-icons,
                .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }

    &.expandido {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            transform: rotate(-180deg);
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>