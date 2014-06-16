var module = angular.module('curso2Angular',[]);

module.controller('sumaMultiplicacionController',function($scope,operacionesFactory){
  $scope.primerValor = 0;
  $scope.segundoValor = 0;
  $scope.resultadoOperacion = 0;
  $scope.sumarValores = function(){
    $scope.resultadoOperacion = operacionesFactory
      .suma($scope.primerValor,$scope.segundoValor);
  };
  $scope.multiplicarValores = function(){
    $scope.resultadoOperacion = operacionesFactory
      .multiplicar($scope.primerValor,$scope.segundoValor);
  };
});

module.controller('twoWayDataBindController',function($scope,usuarioFactory){

  $scope.usuario = {};
  $scope.variableBind = "Mundo";
  //Primer Ejercicio
  $scope.variableDos = "Dos";

  //Tercer Ejercicio
  $scope.guardarContacto = function(){
    usuarioFactory.guardarContacto($scope.usuario);
    $scope.usuario = {};
  };

  $scope.listaContactos = [];
  $scope.actualizarListaContactos = function(){
    $scope.listaContactos = usuarioFactory.listarContactos();
  };

  $scope.eliminarContacto = function(usuarioLista){
    usuarioFactory.eliminarContacto(usuarioLista);
  };

});

module.factory('operacionesFactory',function(){
  return {
    suma:function(operando1,operando2){
      return operando1+operando2;
    },
    multiplicar:function(operando1,operando2){
      return operando1*operando2;
    }
  };
})

module.factory('usuarioFactory',function(){
  var usuariosList = [];

  var funcionPseudoPrivada = function(){
    alert(JSON.stringify(usuariosList));
  };

  return {
    guardarContacto:function(usuario){
      usuariosList.push(usuario);
      funcionPseudoPrivada();
    },
    listarContactos:function(){
      return usuariosList;
    },
    eliminarContacto: function(usuarioLista){
      var indiceUsuario = usuariosList.indexOf(usuarioLista);
      usuariosList.splice(indiceUsuario,1);
    }
  }
});

/*
*  My Skype es alberto.cole
*
* 1. Crear una variable en el objeto de $scope, y hacer que
 * se imprima en un DIV
*
* 2. Crear un Formulario en el html y llenarlo con los siguientes campos:
 *  - Numero de Cedula
 *  - Nombre
 *  - Apellidos
 *  - Direccion
 *
 *  Todos estos campos deberian estar contenidos en un solo JSON.
 *
 *  3. Hacer un boton que imprima el JSON con JSON.stringify();
 *
 *
 *  4. Utilice la funcion listarContactos para imprimir cada uno de los
 *  Usuarios que hemos guardado. use la directiva de ng-repeat para iterar
 *  sobre los usuarios y crear html basado en la informacion del JSON
 *
 *  5. En la lista que acaba de crear en el punto 4, haga un ng-click
 *  por cada Usuario impreso, con un link||boton para eliminarlo. Esto implica
 *  crear una nueva funcion en el $scope, y una nueva funcion en el factory,
 *  pueden usar LoDash o Underscore,
 *  o usando las funciones array.indexOf y array.splice
 *
 *  6. Haga un nuevo servicio que tenga funciones
 *  para sumar y multiplicar dos valores, agregue Un nuevo controlador
 *  para manejar la funcionalidad de este servicio.
 *
 *  Currency Filter
 *
 *  Filtrar el ng-repeat
 *
 *
 * */