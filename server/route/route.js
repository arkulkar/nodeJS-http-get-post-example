/**
 * Created by arkulkar on 3/21/2016.
 */
var cntrl = require('../controller/mainController');
module.exports = function(app){
    app.route('/web/:name/:sex')
        .post(cntrl.postCall)
        .get(cntrl.getCall);
};