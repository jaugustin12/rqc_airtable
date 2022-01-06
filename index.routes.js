const express = require('express');
const router = express.Router();
var Airtable = require('airtable');

router.get('', (req, res) => res.send('Airtable Backend'));
router.post('', function(req, res) {
    var base = new Airtable({apiKey: 'keyWJDQ0laam2RO4a'}).base('appuge0dBHqEli0CV');
    base('Basic Info').create([
        {
            "fields": {
            "Name": req.body.nameValue,
            "Phone": req.body.phoneValue,
            "Form Started": "Rental",
            "pid": req.body.pidValue
            }
        }
        ], function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
});

module.exports = router;