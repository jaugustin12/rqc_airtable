const express = require('express');
const router = express.Router();
var Airtable = require('airtable');

router.get('', (req, res) => res.send('Airtable Backend'));
router.post('', function(req, res) {
    var base = new Airtable({apiKey: 'keyWJDQ0laam2RO4a'}).base('appuge0dBHqEli0CV');
    console.log('req.body', req.body)
    base('Basic Info').create([
        {
            "fields": {
            "Name": req.body.name,
            "Phone": req.body.phone,
            "Form Started": req.body.formType,
            "pid": req.body.pid
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