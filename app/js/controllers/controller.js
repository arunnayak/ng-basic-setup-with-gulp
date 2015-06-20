    demoApp.factory('simpleFactory', function(){
        
        var customers = [
            { firstname: 'john', lastname: 'smith', age: '22', city: 'bangalore' },
            { firstname: 'john', lastname: 'doe', age: '23', city: 'new york' },
            { firstname: 'james', lastname: 'cool', age: '25', city: 'california' },
            { firstname: 'hank', lastname: 'moody', age: '27', city: 'florida' },
            { firstname: 'walter', lastname: 'white', age: '42', city: 'new mexico' },
            { firstname: 'harvey', lastname: 'spector', age: '32', city: 'wall street' },
            { firstname: 'kimmi', lastname: 'lies', age: '42', city: 'bangalore' },
            { firstname: 'mike', lastname: 'ross', age: '22', city: 'sydney' },
            { firstname: 'charlie', lastname: 'sheen', age: '82', city: 'melbourne' },
            { firstname: 'arun', lastname: 'nayak', age: '62', city: 'brisbane' }
        ];

        var factory = {};

        factory.getCustomers = function(){
            return customers;
        };
        
        // factory.postCustomer = function(customer){

        // };

        return factory;
    });

    var controllers= {};

    controllers.simpleController = function($scope, simpleFactory){

        $scope.customers = [];

        init();

        function init(){
            $scope.customers = simpleFactory.getCustomers();
        }

        $scope.addCutomer = function(){
            $scope.customers.push(
                {
                    firstname: $scope.newCustomer.firstname,
                    lastname: $scope.newCustomer.lastname,
                    age: $scope.newCustomer.age,
                    city: $scope.newCustomer.city
                }
            );
        };
    };

    demoApp.controller(controllers);