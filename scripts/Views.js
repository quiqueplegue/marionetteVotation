/*global lambdaVotation:true, Backbone */

var lambdaVotation = lambdaVotation || {};

(function () {
    'use strict';

    lambdaVotation.PollItemView = Mn.View.extend({
        template: '#template-pollItemView',

        modelEvents: {
            change: 'render'
        },

        deleteModel: function () {
            this.model.destroy();
        }

    });

    lambdaVotation.ListViewBody = Mn.CollectionView.extend({
        id: 'poll-list',

        childView: lambdaVotation.CreatePollView
    });


    lambdaVotation.ListView = Mn.View.extend({


        template: '#template-pollListView',

        regions: {
            listBody: {
                el: 'ul',
                replaceElement: true
            }
        }

    });




})();