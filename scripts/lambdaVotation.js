/*global Backbone, lambdaVotation:true, $ */

var lambdaVotation = labmdaVotation || {};

$(function () {
    'use strict';

    lambdaVotation.App.on('start', function () {
        var controller = new lambdaVotation.Controller();
        controller.router = new lambdaVotation.Router({
            controller: controller
        });

        controller.start();
        Backbone.history.start();

    });

    lambdaVotation.App.start();

});