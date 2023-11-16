// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration here (Do not use the existing configuration)
const firebaseConfig = {
    apiKey: "AIzaSyCgJUtvKxKlRxG-MUH4op_sO1bi4qCRrgI",
    authDomain: "smartparking2-15877.firebaseapp.com",
    databaseURL: "https://smartparking2-15877-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smartparking2-15877",
    storageBucket: "smartparking2-15877.appspot.com",
    messagingSenderId: "370463902571",
    appId: "1:370463902571:web:327080131175228a02da2e"
};

// Initialize Firebase
const sparking = firebase.initializeApp(firebaseConfig);


// getting reference to the database
var database = sparking.database();

//getting reference to the data we want
var dataRef1 = database.ref('sensor/Distance');


//fetch the data
dataRef1.on('value', function (getdata1) {
    var d = getdata1.val();
    document.getElementById('val').innerHTML = d + " cm";
    if (parseInt(d) <= 8) {
        toggleLight(true)
    } else {
        toggleLight(false)
    }

})

const bulb = document.getElementById('bulb');

function toggleLight(status) {
    if (status) {
        bulb.classList.add('on');
    } else {
        bulb.classList.remove('on');
    }
}

