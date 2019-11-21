'use strict';

angular.
  module('mascota').
  component('mascotaComponent', {
    templateUrl: 'mascota/mascota.template.html',
    controller: ['CoreService', 'CoreFactory',
     
      function MascotaController(CoreService, CoreFactory) {
        this.nombre = 'Cahorro';


        CoreFactory.usuarios().then(function (success) {
          console.log(success);
        },
          function (error) {
            console.log(error)
          });

        // CoreFactory.service.then(
        //   function(scope){
        //     console.log(scope);
        //   }
        // )

        this.mascotaDesc = {
          nombre: 'coqui',
          raza: 'caniche toy',
          edad: 2
        }
        console.log(CoreService);
        console.log(this);
        this.mascota = function (val) {
          val.mascotaurl = 'http://25.media.tumblr.com/aa32b7113c782e6094392ce78f808d54/tumblr_mhwm1tNW8l1s3zwuso1_400.gif';
        }
      }]
  });