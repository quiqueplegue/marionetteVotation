/**
 * Created by quique on 02/07/17.
 */

var lambdaVotation = lambdaVotation || {};

(function (){
    'use strict';

    var VotationApp = Mn.Application.extend({
        setRootLayout: function () {
            this.root = new lambdaVotation.RootLayout();
        }
    });

    lambdaVotation.App = new VotationApp();

    lambdaVotation.App.on('before:start', function () {
        lambdaVotation.App.setRootLayout();
    });

})();