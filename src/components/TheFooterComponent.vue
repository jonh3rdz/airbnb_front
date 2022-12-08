<template>
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Asistencia</h4>
                        <ul>
                            <li>
                                <a class="px-2" href="#">Centro de ayuda</a>
                            </li>
                            <li><a class="px-2" href="#">AirCover</a>
                            </li>
                            <li><a class="px-2" href="#">Apoyo a las personas con discapacidad</a>
                            </li>
                            <li>
                                <a class="px-2" href="#">Opciones de cancelación</a>
                            </li>
                            <li><a class="px-2" href="#">Denunciar un problema en el vecindario</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Comunidad</h4>
                        <ul>
                            <li>
                                <a class="px-2" href="#">Airbnb.org: alojamiento de ayuda en caso de catástrofe</a>
                            </li>
                            <li>
                                <a class="px-2" href="#">Luchamos contra la discriminación</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-contact">
                        <h4>Alojamiento</h4>
                        <p>
                            San Miguel<br>
                            Usulután<br>
                            Morazán<br>
                            La Unión<br><br>
                            <strong>Teléfono:</strong> (+503) 2987 - 1234<br>
                            <strong>Correo electrónico:</strong> info@onb.com<br>
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 footer-info">
                        <h3>Sobre O'nB</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum iure alias blanditiis
                            assumenda minus, ut sed quaerat laboriosam rem quas quae! Illum corrupti ullam magni hic ea
                            doloremque nobis..</p>
                        <div class="social-links mt-3">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                &copy; <strong><span>O'nB El Salvador</span></strong>.
            </div>
            <div class="credits">
                <a href="">Términos y condiciones</a> - <a href="">Políticas de
                    privacidad</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
#footer {
    width: 100%;
    background: #5B5452;
    padding: 0 0 30px 0;
    color: #fff;
    font-size: 14px;
    position: absolute;
}

#footer .footer-top {
    background: #8e2530;
    padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
    margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
    font-size: 18px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px 0;
    line-height: 1;
    font-weight: 700;
}

#footer .footer-top .footer-info p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    color: #fff;
}

#footer .footer-top .social-links a {
    font-size: 16px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    line-height: 1;
    padding: 10px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
    background: #5B5452;
    color: #fff;
    text-decoration: none;
    transform: scale(1.1);
}

#footer .footer-top h4 {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    position: relative;
    padding-bottom: 12px;
}

#footer .footer-top .footer-links {
    margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

#footer .footer-top .footer-links ul i {
    padding-right: 2px;
    color: #5db1f9;
    font-size: 18px;
    line-height: 1;
}

#footer .footer-top .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
    padding-top: 0;
}

#footer .footer-top .footer-links ul a {
    color: rgba(255, 255, 255, 0.75);
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
    text-decoration: none;
}

#footer .footer-top .footer-links ul a:hover {
    color: #fff;
    transform: scale(1.1);
}

#footer .footer-top .footer-contact {
    margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
    line-height: 26px;
}

#footer .copyright {
    text-align: center;
    padding-top: 30px;
}

#footer .credits {
    padding-top: 5px;
    text-align: center;
    font-size: 13px;
    color: #fff;
}

#footer .credits a {
    color: #fff;
    text-decoration: none;
}

#footer .credits a:hover {
    color: #fff;
    text-decoration: underline;
}
</style>