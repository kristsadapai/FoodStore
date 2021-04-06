var app = angular.module('Myapp', []);

app.controller('Usercon', function ($scope, $http) {

// Simple Post request example:
var url = 'http://localhost:8000/users/'; 
// $http.get(url).then(function (response) {
//     // alert(JSON.stringify(response));
//     data = response;

// }, function (response) {
//     // alert(JSON.stringify(response));
// });
$scope.loginCheck = function(){
    var data = [];
    $http.get(url+'login/'+$scope.email).then(function (response) {
        // alert(JSON.stringify(response));
        data = response;
        var jsonfile = JSON.stringify(data.data);
        // alert(jsonfile);
        if (jsonfile != '[]'){
            var jsondata = JSON.stringify(data.data);
            // alert(jsondata);
            var jsonparse = JSON.parse(jsondata);
            // alert(jsonparse);
    
            
            alert('Login Succes: Username:'+jsonparse[0]['name']);
        
        }
        else if(jsonfile == '[]'){
            alert('Email Not Found');
        }
    
        else{
            alert('Failed to Login')
           
        }
    
    }, function (response) {
    });
 
    
    // alert('Email: '+$scope.email+' Password: '+$scope.password);
}

});