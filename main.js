var bmiApp = angular.module('bmiApp', []);

    bmiApp.controller('bmiApp', function($scope) {

        var height;
        var bmi;

        $scope.weight = 0;
        $scope.feet = 0;
        $scope.inch = 0;

        $scope.convertHeight = (feet, inch) => {
            var convertHeight = (feet * 12) + inch;
            $scope.height = convertHeight;
            return convertHeight;
        };

        $scope.calcBMI = (weight, height) => {
            var calcBMI = (weight / (height**2) * 703);
            $scope.bmi = calcBMI;
            return calcBMI.toFixed(2);
        };

        $scope.category = (weight, height) => {

            var calcBMI = (weight / (height**2) * 703);

            if (calcBMI > 30) {
                category = 'obese';
            } else if (calcBMI > 25 && calcBMI < 29.99) {
                category = 'overweight';
            } else if (calcBMI >18.5 && calcBMI < 24.99) {
                category = 'healthy';
            } else if (calcBMI < 18.5) {
                category = 'underweight';
            };
            return category;
        };



    });
