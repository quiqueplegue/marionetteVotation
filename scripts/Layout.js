/*global lambdaVotation:true, Backbone */

var lambdaVotation = lambdaVotation || {};

(function () {
    'use strict';

    lambdaVotation.RootLayout = Mn.View.extend({

        el: '#votationapp',

        regions: {
            header: '#header',
            main: '#main',
            footer: '#footer'
        }
    });

    lambdaVotation.HeaderLayout = Mn.View.extend({
        template: '#template-header',

        ui: {
            addNew: '#add-question'
        },

        events: {

        }

    });

    lambdaVotation.PollLayout = Mn.View.extend({
        template: '#template-client-poll',

        ui: {
            markChoice: '.mark-choice'
        },

        events: {
            'click @ui.markChoice': 'markPollChoice'


        }

    });

    lambdaVotation.ListLayout = Mn.View.extend({
        template: '#template-list',

        ui: {
        },

        events: {

        }

    });
    lambdaVotation.FooterLayout = Mn.View.extend({
        template: '#template-footer',

        ui: {
            addPoll: '#add-poll'
        },

        events: {

        }

    });

})();