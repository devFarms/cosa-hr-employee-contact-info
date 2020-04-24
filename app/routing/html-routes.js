const path = require('path');

module.exports = function(app){

    app.get('/employees.csv', function(req, res){
        res.sendFile(path.join(__dirname + '../../public/employees.csv'))
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '../../public/form.html'))
    });
}