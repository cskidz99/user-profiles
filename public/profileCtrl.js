angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo) {
  $scope.currentUser = userInfo.data.currentUser;
  $scope.friends = userInfo.data.friends;
  // console.log(userInfo);
	// FIX ME - assign values to $scope.currentUser and $scope.friends
});
