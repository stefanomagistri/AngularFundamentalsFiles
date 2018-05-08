'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: "Bob Smith",
                    level: "Advanced",
                    abstract: "In this session you will learn the ins and outs of directives!"
                },
                {
                    name: 'Scopes for run and profit',
                    creatorName: "John Doe",
                    level: "Introductory",
                    abstract: "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you."
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: "Jane Doe",
                    level: "Intermediate",
                    abstract: "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors."
                },
            ]
        }
    }
);