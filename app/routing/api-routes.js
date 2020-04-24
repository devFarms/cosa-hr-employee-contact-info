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
        // console.log('This is from the API:\n' + JSON.stringify(empInfo));
        // fs.appendFile('employees.csv', JSON.stringify(empInfo) + '\n', e => e ? console.log(e) : console.log('CSV Successfully updated!\n'));
        // console.log(empInfo);
        //     let empInfoDot = '';

        //     for (var i = 0; i < empInfo.length; i++) { // Loop through object

        //         empInfoDot +=  empInfo[i].employeeID +  ', ' + empInfo[i].employeeLastName +  ', ' + empInfo[i].employeeFirstName +  ', ' + empInfo[i].employeePersonalEmail +  ', ' + empInfo[i].employeeHomePhone +  ', ' + empInfo[i].employeeCellPhone +  ', ' + empInfo[i].employeeRecText +  ', ' + empInfo[i].eConFirstName +  ', ' + empInfo[i].eConLastName +  ', ' + empInfo[i].eConRelationship +  ', ' + empInfo[i].eConPhone +  ', ' + empInfo[i].eConEmail + '\n';
        //       }
        //   console.log(empInfoDot);
        //   fs.appendFile('employees.csv', empInfoDot, e => e ? console.log(e) : console.log('CSV Successfully updated!\n'));

        let mostRecentEmp = empInfo[empInfo.length - 1];

        let CSVmostRecentEmp = '';
        CSVmostRecentEmp += mostRecentEmp.employeeID + ', ' + mostRecentEmp.employeeLastName + ', ' + mostRecentEmp.employeeFirstName + ', ' + mostRecentEmp.employeePersonalEmail + ', ' + mostRecentEmp.employeeHomePhone + ', ' + mostRecentEmp.employeeCellPhone + ', ' + mostRecentEmp.employeeCellCarrier + ', ' + mostRecentEmp.employeeRecText + ', ' + mostRecentEmp.eConFirstName + ', ' + mostRecentEmp.eConLastName + ', ' + mostRecentEmp.eConRelationship + ', ' + mostRecentEmp.eConPhone + ', ' + mostRecentEmp.eConEmail + '\n';

        console.log(CSVmostRecentEmp);
        fs.appendFile('employees.csv', CSVmostRecentEmp, e => e ? console.log(e) : console.log('CSV Successfully updated!\n'));
        

        setTimeout(function afterTwoSeconds() {
            // console.log('2')
            fs.copyFile('employees.csv', 'app\\public\\employees.csv', callback);
          }, 250)
          
        
        

        //   var my_array = /* some array here */;
        //   var last_element = my_array[my_array.length - 1];


    })
};