angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.famousMusicians', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/famousMusicians.html',
        controller: 'famousMusiciansCtrl'
      }
    }
  })

  .state('menu.instruments', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instruments.html',
        controller: 'instrumentsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.swarSaptak', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/swarSaptak.html',
        controller: 'swarSaptakCtrl'
      }
    }
  })

  .state('menu.raagsAndThaats', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagsAndThaats.html',
        controller: 'raagsAndThaatsCtrl'
      }
    }
  })

  .state('menu.amirKhusro', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/amirKhusro.html',
        controller: 'amirKhusroCtrl'
      }
    }
  })

  .state('menu.shivkumarSharma', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shivkumarSharma.html',
        controller: 'shivkumarSharmaCtrl'
      }
    }
  })

  .state('menu.tansen', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tansen.html',
        controller: 'tansenCtrl'
      }
    }
  })

  .state('menu.raviShankar', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raviShankar.html',
        controller: 'raviShankarCtrl'
      }
    }
  })

  .state('menu.zakirHussain', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zakirHussain.html',
        controller: 'zakirHussainCtrl'
      }
    }
  })

  .state('menu.bansuri', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bansuri.html',
        controller: 'bansuriCtrl'
      }
    }
  })

  .state('menu.harmonium', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/harmonium.html',
        controller: 'harmoniumCtrl'
      }
    }
  })

  .state('menu.pakhawaj', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pakhawaj.html',
        controller: 'pakhawajCtrl'
      }
    }
  })

  .state('menu.sarangi', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sarangi.html',
        controller: 'sarangiCtrl'
      }
    }
  })

  .state('menu.sitar', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sitar.html',
        controller: 'sitarCtrl'
      }
    }
  })

  .state('menu.tabla', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tabla.html',
        controller: 'tablaCtrl'
      }
    }
  })

  .state('menu.tanpura', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tanpura.html',
        controller: 'tanpuraCtrl'
      }
    }
  })

  .state('menu.veena', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/veena.html',
        controller: 'veenaCtrl'
      }
    }
  })

  .state('menu.raagAsavari', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagAsavari.html',
        controller: 'raagAsavariCtrl'
      }
    }
  })

  .state('menu.raagBhairav', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagBhairav.html',
        controller: 'raagBhairavCtrl'
      }
    }
  })

  .state('menu.raagRamkali', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagRamkali.html',
        controller: 'raagRamkaliCtrl'
      }
    }
  })

  .state('menu.raagBhairavi', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagBhairavi.html',
        controller: 'raagBhairaviCtrl'
      }
    }
  })

  .state('raagMalkauns', {
    url: '/page38',
    templateUrl: 'templates/raagMalkauns.html',
    controller: 'raagMalkaunsCtrl'
  })

  .state('menu.raagAlhaiyaBilawal', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagAlhaiyaBilawal.html',
        controller: 'raagAlhaiyaBilawalCtrl'
      }
    }
  })

  .state('menu.raagBihag', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagBihag.html',
        controller: 'raagBihagCtrl'
      }
    }
  })

  .state('menu.raagBageshri', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagBageshri.html',
        controller: 'raagBageshriCtrl'
      }
    }
  })

  .state('menu.raagBhimpalasi', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagBhimpalasi.html',
        controller: 'raagBhimpalasiCtrl'
      }
    }
  })

  .state('menu.raagDarbariKandra', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagDarbariKandra.html',
        controller: 'raagDarbariKandraCtrl'
      }
    }
  })

  .state('menu.raagYaman', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagYaman.html',
        controller: 'raagYamanCtrl'
      }
    }
  })

  .state('menu.raagKedar', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagKedar.html',
        controller: 'raagKedarCtrl'
      }
    }
  })

  .state('menu.raagBasant', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagBasant.html',
        controller: 'raagBasantCtrl'
      }
    }
  })

  .state('menu.raagPuriyaDhanashree', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagPuriyaDhanashree.html',
        controller: 'raagPuriyaDhanashreeCtrl'
      }
    }
  })

  .state('raagDesh', {
    url: '/page45',
    templateUrl: 'templates/raagDesh.html',
    controller: 'raagDeshCtrl'
  })

  .state('menu.raagTilakKamod', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagTilakKamod.html',
        controller: 'raagTilakKamodCtrl'
      }
    }
  })

  .state('menu.raagPuriya', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagPuriya.html',
        controller: 'raagPuriyaCtrl'
      }
    }
  })

  .state('menu.raagMultani', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagMultani.html',
        controller: 'raagMultaniCtrl'
      }
    }
  })

  .state('menu.raagGujriTodi', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagGujriTodi.html',
        controller: 'raagGujriTodiCtrl'
      }
    }
  })

  .state('menu.raagMarwa', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/raagMarwa.html',
        controller: 'raagMarwaCtrl'
      }
    }
  })

  .state('whatIsAThaat', {
    url: '/page22',
    templateUrl: 'templates/whatIsAThaat.html',
    controller: 'whatIsAThaatCtrl'
  })

  .state('menu.asavari', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/asavari.html',
        controller: 'asavariCtrl'
      }
    }
  })

  .state('menu.bhairav', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bhairav.html',
        controller: 'bhairavCtrl'
      }
    }
  })

  .state('menu.bhairavi', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bhairavi.html',
        controller: 'bhairaviCtrl'
      }
    }
  })

  .state('menu.bilawal', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bilawal.html',
        controller: 'bilawalCtrl'
      }
    }
  })

  .state('menu.kafi', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kafi.html',
        controller: 'kafiCtrl'
      }
    }
  })

  .state('menu.kalyan', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kalyan.html',
        controller: 'kalyanCtrl'
      }
    }
  })

  .state('menu.khamaj', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/khamaj.html',
        controller: 'khamajCtrl'
      }
    }
  })

  .state('menu.purvi', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/purvi.html',
        controller: 'purviCtrl'
      }
    }
  })

  .state('menu.todi', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/todi.html',
        controller: 'todiCtrl'
      }
    }
  })

  .state('menu.marwa', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/marwa.html',
        controller: 'marwaCtrl'
      }
    }
  })

  .state('menu.vishwaMohanBhatt', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vishwaMohanBhatt.html',
        controller: 'vishwaMohanBhattCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});