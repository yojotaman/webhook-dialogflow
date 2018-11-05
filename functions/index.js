const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.webhook = functions.https.onRequest((request, response) => {
    response.send({
        fulfillmentText: "Hola desde el webhook - cambio"
    });
});