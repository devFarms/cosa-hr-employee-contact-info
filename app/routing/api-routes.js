let empInfo = require('../data/emp-data.js');

const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

module.exports = function (app) {

    app.get('/api/haney/', function (req, res) {
        res.json(empInfo);
    })

    app.post('/api/haney', function (req, res) {
        empInfo.push(req.body);
        res.json(true);

        let mostRecentEmp = empInfo[empInfo.length - 1];

        let CSVmostRecentEmp = '';
        CSVmostRecentEmp += mostRecentEmp.employeeID + ', ' + mostRecentEmp.employeeLastName + ', ' + mostRecentEmp.employeeFirstName + ', ' + mostRecentEmp.employeePersonalEmail + ', ' + mostRecentEmp.employeeHomePhone + ', ' + mostRecentEmp.employeeCellPhone + ', ' + mostRecentEmp.employeeRecText + ', ' + mostRecentEmp.eConFirstName + ', ' + mostRecentEmp.eConLastName + ', ' + mostRecentEmp.eConRelationship + ', ' + mostRecentEmp.eConPhone + ', ' + mostRecentEmp.eConEmail + '\n';

        console.log(CSVmostRecentEmp);
        fs.appendFile('employees.csv', CSVmostRecentEmp, e => e ? console.log(e) : console.log('CSV Successfully updated!\n'));
        

        setTimeout(function afterTwoSeconds() {
            fs.copyFile('employees.csv', 'app\\public\\employees.csv', callback);
          }, 250);
    });
};