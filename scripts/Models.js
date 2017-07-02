/*global Backbone, lambdaVotation:true, $ */

var lambdaVotation = lambdaVotation || {};

(function () {
    'use strict';

    lambdaVotation.Poll = Backbone.Model.extend({
        defaults: {
            question: '',
            choices: [{ text: '' },{ text: '' },{ text: '' }],
            created: 0
        },

        initialize: function () {
            if (this.isNew()) {
                this.set('created', Date.now());
            }
        },

        addChoice: function () {
            this.choices.push({ text: '' });
        }

        // ,
        // savePoll: function () {
        //
        // }

    });

    lambdaVotation.PollList = Backbone.Collection.extend({
        model: lambdaVotation.Poll,

        localStorage: new Backbone.LocalStorage('lambda-votation-storage'),

        comparator: 'created'


    });




})();