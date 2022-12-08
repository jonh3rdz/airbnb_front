<template>
    <header id="header" class="d-flex align-items-center">
        <div class="container-fluid d-flex align-items-center justify-content-between" id="content-header">
            <div class="img-top"><img src="../../assets/img/onbh.svg" width="150" alt=""></div>
            <nav id="navbar" class="navbar">
                <ul>
                    <li class="dropdown active"><a href="#"><img src="../../assets/img/avatar.svg" class="avatar-no-auth"
                                alt="Avatar"></a>
                        <ul>
                            <li>
                                <RouterLink class="nav-link" to="/">Cuenta</RouterLink>
                            </li>
                            <hr>
                            <li><a href="#">Volver a modo huésped</a></li>
                            <li><a href="#">Ayuda</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

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