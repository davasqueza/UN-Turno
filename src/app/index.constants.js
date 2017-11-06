(function () {
  'use strict';

  angular
    .module('unTurno')
    .constant('backend_url', "http://alaorden-rest.herokuapp.com")
    .constant('firebase_config', {
      apiKey: "AIzaSyA4GEcHV6HuBKMGAF3CAf1UGiLEDiHjd6o",
      authDomain: "un-turno.firebaseapp.com",
      databaseURL: "https://un-turno.firebaseio.com",
      projectId: "un-turno",
      storageBucket: "un-turno.appspot.com",
      messagingSenderId: "907096757550"
    })
    .constant('app_menu', [
      {
        name: "Página principal",
        img: "home",
        url: "/home"
      },
      {
        name: "Mi perfil",
        img: "account_box",
        url: "/viewUser"
      },
      {
        name: "Registrar",
        img: "create",
        url: "/register"
      },
      {
        name: "Turnos",
        img: "move_to_inbox",
        url: "/turn"
      },
      {
        name: "Iniciar sesión",
        img: "person_add",
        url: "/login"
      },
      {
        name: "Cerrar sesión",
        img: "person_outline",
        url: "/logout"
      }
    ]);

})();
