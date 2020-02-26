// import firebase
var admin = require('firebase-admin');

// Initialize the app
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://myman180.firebaseio.com'
});

let flag = false;

function resetTimeSlots() {


    var doubleTimeSlots = [{
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "8:00 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "8:30 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "9:00 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "9:30 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "10:00 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "10:30 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "11:00 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "11:30 AM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "12:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "12:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "1:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "1:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "2:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "2:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "3:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "3:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "4:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "4:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "5:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "5:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "6:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "6:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "7:00 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "7:30 PM"
    }, {
        "first": 0,
        "second": 0,
        "state": 0,
        "status": 0,
        "time": "8:00 PM"
    }];

    var singleTimeSlots = [{
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "8:00 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "8:30 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "9:00 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "9:30 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "10:00 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "10:30 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "11:00 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "11:30 AM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "12:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "12:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "1:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "1:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "2:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "2:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "3:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "3:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "4:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "4:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "5:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "5:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "6:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "6:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "7:00 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "7:30 PM"
    }, {
        "first": 0,
        "state": 0,
        "status": 0,
        "time": "8:00 PM"
    }];

    // database reference for read the shop details
    var db = admin.database();
    var ref = db.ref("haircut/shops");

    ref.once("value", response => {

        var obj = Object.entries(response.val());

        obj.forEach(element => {
            
            // Update if the seat capacity is one
            if (element[1].seatCapacity == 1) {

                element[1].timeSlots = singleTimeSlots;
                var updRef = db.ref("haircut/shops/" + element[1].id);
                updRef.set(element[1]);

            }

            // Update if the seat capacity is two
            else if (element[1].seatCapacity == 2) {

                element[1].timeSlots = doubleTimeSlots;
                var updRef = db.ref("haircut/shops/" + element[1].id);
                updRef.set(element[1]);

            }

        });

    });

}

while (true) {
    var d = new Date(); // for now
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds(); // => 51

    var currentTime = d.getHours() + ":" + d.getMinutes(); // + ":" + d.getSeconds();

    
    if (currentTime == "23:30" && !flag) {

        resetTimeSlots();
        flag = true;

    }

    if (currentTime == "0:6:0") {
        flag = false;
    }
}

resetTimeSlots();