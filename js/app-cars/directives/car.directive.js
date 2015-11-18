let carItem = function($state, CarService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '=pizza'
    },
    template: `
      <div class="panel">
        <h5>{{ car.name }}</h5>
        <p>{{ car.year }} {{ car.make }} {{ car.model }}</p>
      </div>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function () {
        CarService.destroy(scope.car.name);
        //$state.go('root.singleCar', { id: scope.car.objectId });
      });
    }
  };

};

carItem.$inject = ['$state', 'CarService'];

export default carItem;