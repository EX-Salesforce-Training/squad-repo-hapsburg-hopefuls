// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression')
const helmet = require('helmet')
const express = require('express')
const jsforce = require('jsforce')
const fetch = require('node-fetch')
const cors = require('cors')

require('dotenv').config()
const { SF_USERNAME, SF_PASSWORD, SF_TOKEN, SF_LOGIN_URL, SF_BEARER } = process.env;
if (!(SF_USERNAME && SF_PASSWORD && SF_TOKEN && SF_LOGIN_URL && SF_BEARER)) {
    console.error(
        'Cannot start app: missing mandatory configuration. Check your .env file.'
    );
    process.exit(-1);
}
const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
});
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
});

const app = express()
app.use(helmet())
app.use(compression())
app.use(express.json())


const HOST = process.env.API_HOST || 'localhost'
const PORT = process.env.API_PORT || 3002
const CORS = {
    origin: 'http://localhost:3001'
}

app.use(cors(CORS))

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true })
})

app.get('/test', (req, res) => {
    fetch('https://revature-ce-dev-ed.my.salesforce.com/services/data/v53.0/sobjects/Order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${SF_BEARER}`
        },
        body: JSON.stringify({
            'AccountId': '0015f00000DWXkIAAX',
            'EffectiveDate': Date.now(),
            'Status': 'Draft'
        })
    })
    .then(result => result.json())
    .then(data => res.send(data))
    .catch(error => console.log(error))
});

// app.post('/test', (req, res) => {
//     fetch('https://revature-ce-dev-ed.my.salesforce.com/services/data/v53.0/composite/tree/Order', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${SF_BEARER}`
//         },
//         body: JSON.stringify({
//         })
//     })
//     .then(result => result.json())
//     .then(data => res.send(data))
//     .catch(error => console.log(error))
// });

// app.get('/api/sessions', (req, res) => {
//     const soql = `SELECT Id, Name, toLabel(Room__c), Description__c, format(Date_and_Time__c) formattedDateTime,
//         (SELECT Speaker__r.Id, Speaker__r.Name, Speaker__r.Description, Speaker__r.Email, Speaker__r.Picture_URL__c FROM Session_Speakers__r)
//         FROM Session__c ORDER BY Date_and_Time__c LIMIT 100`;
//     /* Salesforce connection */
//     conn.query(soql, (err, result) => {
//         if (err) {
//             res.sendStatus(500);
//         } else if (result.records.length === 0) {
//             res.status(404).send('Session not found.');
//         } else {
//             /* Work with result data */
//             const formattedData = result.records.map(sessionRecord => {
//                 let speakers = [];
//                 if(sessionRecord.Session_Speakers__r){
//                     speakers = sessionRecord.Session_Speakers__r.records.map(
//                         record => {
//                             return {
//                                 id: record.Speaker__r.Id,
//                                 name: record.Speaker__r.Name,
//                                 email: record.Speaker__r.Email,
//                                 bio: record.Speaker__r.Description,
//                                 pictureUrl: record.Speaker__r.Picture_URL__c
//                             };
//                         }
//                     );
//                 }
//                 return {
//                     id: sessionRecord.Id,
//                     name: sessionRecord.Name,
//                     dateTime: sessionRecord.formattedDateTime,
//                     room: sessionRecord.Room__c,
//                     description: sessionRecord.Description__c,
//                     speakers
//                 };
//             });
//             res.send({ data: formattedData });
//         }
//     });
// });

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
)
