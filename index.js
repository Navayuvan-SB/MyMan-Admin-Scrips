// Import FCm
var FCM = require('fcm-node');
var admin = require("firebase-admin");

// Initializing the realtime database reference

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://myman180.firebaseio.com'
});

var db = admin.database();
var ref = db.ref("requests");


// Server key to push notifications
var serverKey = 'AAAADgKHotc:APA91bHYcxebXBaxXQm_UUITa0Wg2u5f4uhlZyHiFBW4m86Zx893wbH1vmJzeCGTWQvV5TAC0pFVirtK1pqaY6COzQb8ihfjJ3k1QhA25dWpseIZgz0DBqh9mBZz-kQy_d71X2oUwMAP'; // put your server key here

// Initializing the server
var fcm = new FCM(serverKey);

// Send notifications to the user when appointment is accepted or rejected
ref.on("child_changed", function (snapshot) {
    var changedPost = snapshot.val();

    var userToken = '';
    var message = {};
    db.ref('users/' + changedPost.userId).once("value", response => {
        var result = response.val();
        userToken = result.refreshToken.registrationId;

        // If the appointment was accepted
        if (changedPost.status == 1) {

            message = {
                to: userToken,

                notification: {
                    title: 'Appointment Status',
                    body: 'Your Appointment was accepted successfully'
                },

                data: {
                    request: changedPost,
                },

                showNotificationsWhenInForeground: true
            };

            fcm.send(message, function (err, response) {
                if (err) {
                    console.log("Something has gone wrong!");
                } else {
                    console.log("Successfully sent with response: ", response);
                }
            });
        }

        // If the appointment was rejected 
        else if (changedPost.status == 2) {

            message = {
                to: userToken,

                notification: {
                    title: 'Appointment Status',
                    body: 'Sorry, Your Appointment was rejected..! Try a different time slot'
                },

                data: {
                    request: changedPost,
                },

                showNotificationsWhenInForeground: true
            };

            fcm.send(message, function (err, response) {
                if (err) {
                    console.log("Something has gone wrong!");
                } else {
                    console.log("Successfully sent with response: ", response);
                }
            });
        }



    });


});


// Send notifications to the shop when appointment is added
ref.on("child_added", function (snapshot, prevChildKey) {
    var newAppointment = snapshot.val();
    var shopToken = '';

    db.ref('users/' + newAppointment.shopId).once("value", response => {

        try {
            var result = response.val();
            shopToken = result.refreshToken.registrationId;

            var message = {
                to: shopToken,

                notification: {
                    title: 'New Appointment',
                    body: 'A new appointment at ' + newAppointment.time + ' is requested'
                },

                data: {
                    request: newAppointment,
                }
            };

            fcm.send(message, function (err, response) {
                if (err) {
                    console.log("Something has gone wrong!");
                } else {
                    console.log("Successfully sent with response: ", response);
                }
            });

        } catch (e) {
            console.log(e);
        }

    });

});