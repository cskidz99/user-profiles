angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      console.log(user);
      return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/login',
      data: user
    }).then(function(response){
      console.log(response);
      return response;
    })
    };

    this.getFriends = function() {
    	/* FIX ME */
      return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/profiles'
      })
    };

});
