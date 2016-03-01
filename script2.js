 var app=angular
               .module("myApp2",[])
			   .controller("myEvent",function($scope){
				  var technologies=[
				     {name:"C#",likes: 0, dislikes:0},
					 {name:"js",likes: 0, dislikes:0},
				     {name:"c++",likes: 0, dislikes:0},
					 {name:"SQL",likes: 0, dislikes:0},
				  ]; 
				  $scope.technologies=technologies;
				  
				  $scope.incrementLikes=function(technology){
					  technology.likes++;
				  }
				  
				  $scope.incrementDislikes=function(technology){
					  technology.dislikes++;
				  }
				  
			   });