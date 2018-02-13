jQuery(document).ready(function () {
    var txt_verdad = jQuery("#tu-menu-verdad"),
        txt_mentira = jQuery("#tu-menu-mentira"),
        nav_verdad = jQuery("#tu-nav-contenedor-verdad"),
        nav_mentira = jQuery("#tu-nav-contenedor-mentira"),
        btn_verdad = jQuery("#btn-verdad"),
        btn_mentira = jQuery("#btn-mentira"),
        cerrar_verdad = jQuery("#tu-menu-txt-verdad"),
        cerrar_mentira = jQuery("#tu-menu-txt-mentira"),
        btn_nodisponible = jQuery("a[href='#no-disponible']"),
        bloque_verdad1 = jQuery("#text-4"),
        bloque_verdad2 = jQuery("#text-8"),
        bloque_mentira1 = jQuery("#text-5"),
        bloque_mentira2 = jQuery("#text-7"),
        btn_prologo = jQuery("#sidebar #custom_html-2 a"),
        ocultar_prologo = jQuery("#header-outer, #header-secondary-outer,#tu-nav-contenedor-mentira, #tu-nav-contenedor-verdad"),
        prologos = jQuery("#sidebar #custom_html-3, #sidebar #custom_html-4, #sidebar #custom_html-5"),
        fondo_prologo = jQuery("#tu-fondo-prologo");

    //Funciones
    function colabore() {
        bloque_verdad2.fadeOut(500, function () {
            bloque_verdad1.fadeIn(500);
        });
        bloque_mentira2.fadeOut(500, function () {
            bloque_mentira1.fadeIn(500);
        });
    }
    function activarVerdad(e) {
        e.preventDefault();
        nav_verdad.addClass('activo');
        nav_mentira.addClass('bajar-z');
        txt_verdad.fadeIn(600);
    }
    function activarMentira(e) {
        e.preventDefault();
        nav_mentira.addClass('activo');
        nav_verdad.addClass('bajar-z');
        txt_mentira.fadeIn(600);
    }
    function prologo(e) {
        e.preventDefault();
        var target = jQuery(this).data('enlace');
        ocultar_prologo.addClass('z-bajar');
        fondo_prologo.fadeIn(600, function(){
            jQuery('' + target + '').addClass('activo');
        });
    }
    fondo_prologo.on('click', function() {
        prologos.removeClass('activo');
        fondo_prologo.fadeOut(600, function(){
            ocultar_prologo.removeClass('z-bajar');
        });
    })
    btn_prologo.on('click', prologo);
    btn_verdad.on('click', activarVerdad);
    jQuery('.home .tu-verdad').on('click', activarVerdad);
    btn_mentira.on('click', activarMentira);
    jQuery('.home .tu-mentira').on('click', activarMentira);
    cerrar_verdad.on('click', function (e) {
        e.preventDefault();
        nav_verdad.removeClass('activo');
        nav_mentira.removeClass('bajar-z');
        txt_verdad.fadeOut(600);
        colabore();
    });
    cerrar_mentira.on('click', function (e) {
        e.preventDefault();
        nav_mentira.removeClass('activo');
        nav_verdad.removeClass('bajar-z');
        txt_mentira.fadeOut(600);
        colabore();
    });
    btn_nodisponible.on('click', function (e) {
        e.preventDefault();
        bloque_verdad1.fadeOut(500, function () {
            bloque_verdad2.fadeIn(500);
        });
        bloque_mentira1.fadeOut(500, function () {
            bloque_mentira2.fadeIn(500);
        });
    });
});//Final