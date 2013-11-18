// <copyright file="app.js">
// Copyright (c) All Right Reserved, techdatadigest.blogspot.com
//
// This source is subject to the The MIT License (MIT)
// Please see the License.txt file for more information.
// All other rights reserved.
//
// THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY 
// KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// </copyright>
// <author>Data Fok</author>
// <email>datafok@gmail.com</email>
// <date>2013-11-18</date>
// <summary>The main class for Message Processor Application develop using AngularJS, UI Bootstrap (for Augular) and Jasmine</summary>

var mpApp = angular.module('mpApp', ['ngRoute', 'ui.bootstrap']);

mpApp.loggedIn = false;

mpApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/new/birthday/:messageId', {
          templateUrl: 'partials/master-birthday.html',
        controller: 'BirthdayCtrl'
      }).
      when('/new/newborn/:messageId', {
          templateUrl: 'partials/master-newborn.html',
        controller: 'NewBornCtrl'
      }).
      when('/welcome', {
        templateUrl: 'partials/master-welcome.html',
        controller: 'WelcomeCtrl'
      }).
      when('/', {
        templateUrl: 'partials/master-login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

mpApp.inBoxMsgs = [
      {
          messageId: 3,
          messageType: "birthday",
          messageTypeDesc: "Birthday",
          data: {
              name: "",
              gift: ""
          }
      },
      {
          messageId: 4,
          messageType: "newborn",
          messageTypeDesc: "New born",
          data: {
              name: "",
              babyname: "",
              dob: ""
          }
      },
      {
          messageId: 5,
          messageType: "birthday",
          messageTypeDesc: "Birthday",
          data: {
              name: "",
              gift: ""
          }
      },
      {
          messageId: 6,
          messageType: "newborn",
          messageTypeDesc: "New born",
          data: {
              name: "",
              babyname: "",
              dob: ""
          }
      },
      {
          messageId: 7,
          messageType: "birthday",
          messageTypeDesc: "Birthday",
          data: {
              name: "",
              gift: ""
          }
      },
      {
          messageId: 8,
          messageType: "newborn",
          messageTypeDesc: "New born",
          data: {
              name: "",
              babyname: "",
              dob: ""
          }
      }
];

mpApp.outBoxMsgs = [
      {
          messageId: 1,
          messageType: "birthday",
          messageTypeDesc: "Birthday",
          data: {
              name: "Alan",
              gift: "Apple"
          }
      },
      {
          messageId: 2,
          messageType: "newborn",
          messageTypeDesc: "New born",
          data: {
              name: "Brad",
              babyname: "Brandon",
              dob: "2012-04-01"
          }
      }
];

mpApp.giftList = [
  {
    giftId : 1,
    name: "apple"
  },
  {
    giftId : 2,
    name: "banana"
  },
  {
    giftId : 3,
    name: "orange"
  },
  {
    giftId : 4,
    name: "mango"
  },
  {
    giftId : 5,
    name: "lychee"
  },
  {
    giftId : 6,
    name: "durian"
  },
  {
    giftId : 7,
    name: "watermelon"
  },
  {
    giftId : 8,
    name: "pineapple"
  },
  {
    giftId : 9,
    name: "lemon"
  },
  {
    giftId : 10,
    name: "strawberry"
  }
];

mpApp.babyNameList = ["Aaron","Alex","Alan","Alfred","Albert","Barett","Bosco","Charles","Chris","David","Evan","Fred","Galileo","Henry","Ian","Jacob","Keith","Leon","Matthew","Neo","Oliver","Peter","Quincy","Reeve","Stephen","Travis","Usher","Victor","William","Xavior","Zion"
];

InBoxCtrl = function ($scope, $http) {
    //$http.get('data/inboxmsgs.json').success(function (data) {
    //    $scope.inBoxMsgs = data;
    //});

    $scope.inBoxMsgs = mpApp.inBoxMsgs;
};

OutBoxCtrl = function ($scope, $http) {
    $scope.outBoxMsgs = mpApp.outBoxMsgs;
};

SecurityCheck = function ($location) {
    if (!mpApp.loggedIn) {
        console.log('Failed SecurityCheck');
        $location.path('/');
    }
}

WelcomeCtrl = function ($scope, $location) {
    SecurityCheck($location);
}

BirthdayCtrl = function ($scope, $routeParams, $location) {
   SecurityCheck($location);

   $scope.giftList = mpApp.giftList;

    //use this viewModel to retrieve view in using parital views
   $scope.viewModel = { name: "", gift: "" };

  $scope.createBirthdayMsg = function() {
    var currectMsg;

    //loop thru the inBoxMsgs
    angular.forEach(mpApp.inBoxMsgs, function(item){
      if ( item.messageId == $routeParams.messageId ){
      
        //remove the msg from the inBoxMsgs
        mpApp.inBoxMsgs.splice(mpApp.inBoxMsgs.indexOf(item),1);

        currectMsg = item;
        currectMsg.data.name = $scope.viewModel.name;
        currectMsg.data.gift = $scope.viewModel.gift.name;

        //save msg to outBoxMsgs
        mpApp.outBoxMsgs.push(currectMsg);
      }
    });

    //redirect back to root
    $location.path('/welcome');
  }
}

NewBornCtrl = function ($scope, $routeParams, $location, $timeout, $filter) {
    SecurityCheck($location);

    $scope.babyNameList = mpApp.babyNameList;

    //use this viewModel to retrieve view in using parital views
    $scope.viewModel = { name: "", babyname: "", dob:"" };

  $scope.openDatePicker = function() {
      $timeout(function() {
        $scope.opened = true;
      });
  };

  $scope.dateOptions = {
    'year-format': "'yyyy'",
    'starting-day': 1
  };

  $scope.createNewBornMsg = function () {
    var currectMsg = {} ;

    //loop thru the inBoxMsgs
    angular.forEach(mpApp.inBoxMsgs, function(item){
      if ( item.messageId == $routeParams.messageId ){
      
        //remove the msg from the inBoxMsgs
        mpApp.inBoxMsgs.splice(mpApp.inBoxMsgs.indexOf(item),1);

        currectMsg = item;
        currectMsg.data.name = $scope.viewModel.name;
        currectMsg.data.babyname = $scope.viewModel.babyname;
        currectMsg.data.dob = $filter('date')($scope.viewModel.dob, 'yyyy-MM-dd');

        //save msg to outBoxMsgs
        mpApp.outBoxMsgs.push(currectMsg);
      }
    });

    //redirect back to root
    $location.path('/welcome');
  }
}

LoginCtrl = function ($scope,$location){
  $scope.login = function(){
    if ($scope.name == "birthday" && $scope.pw == "newborn" ){
      $scope.errorMsg = "";
      mpApp.loggedIn = true;

      $location.path('/welcome');
    } else {
      $scope.errorMsg = "wrong name or password";
      mpApp.loggedIn = false;
    }
  }
}