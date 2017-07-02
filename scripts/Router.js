/*global lambdaVotation:true, Backbone, $ */

var lambdaVotation = labmdaVotation || {};

(function () {
    'use strict';

    // var filterChannel = Backbone.Radio.channel('filter');

    lambdaVotation.Router = Mn.AppRouter.extend({
       appRoutes: {
           '': 'pollListView',
           '/new-poll': 'pollListView'

       }
    });

    lambdaVotation.Controller = Mn.Object.extend({
        initialize: function () {
            this.pollList = new lambdaVotation.PollList();
        },

        start: function () {
            this.showHeader();
            this.showFooter(this.pollList);
            this.showList(this.pollList);
        },

        showHeader: function () {
            var header = new lambdaVotation.HeaderLayout({
            });
            lambdaVotation.App.root.showChildView('header', header);
        },

        showFooter: function (pollList) {
            var footer = new lambdaVotation.FooterLayout({
                collection: pollList
            });
            lambdaVotation.App.root.showChildView('footer', footer);
        },

        showList: function (pollList) {
            var listAll = new lambdaVotation.ListLayout({
                collection: pollList
            });
            lambdaVotation.App.root.showChildView('list', listAll);
        }

    });

})();