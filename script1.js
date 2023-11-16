// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration here (Do not use the existing configuration)
const firebaseConfig = {
    apiKey: "AIzaSyBc-ZRdUFwaaGcGyrIdykF29qTiCk66KT8",
    authDomain: "toll-system-5d0eb.firebaseapp.com",
    databaseURL: "https://toll-system-5d0eb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "toll-system-5d0eb",
    storageBucket: "toll-system-5d0eb.appspot.com",
    messagingSenderId: "582188188658",
    appId: "1:582188188658:web:4c386b63ad1b18fface16b"
};

// Initialize Firebase
const tolls = firebase.initializeApp(firebaseConfig, 'Secondary');


async function fetchData() {
    var database = tolls.database();
    //getting reference to the data we want
    var dataRef1 = database.ref('Car');

    return new Promise((resolve, reject) => {
        dataRef1.on('value', function (getdata1) {
            var d = getdata1.val();
            const data = Object.values(d)
            resolve(data)
        }, (error) => {
            reject(error)
        });
    });
}

// getting reference to the database


function displayData(data) {
    const tableBody = document.querySelector("#mapTable tbody");
    tableBody.innerHTML = "";
    let noOfCars = (data.length)
    data.map((item) => {
        console.log(item)
        const row = tableBody.insertRow();
        const cellKey = row.insertCell(0);
        const cellValue = row.insertCell(1);
        cellKey.textContent = item.plate;
        cellValue.textContent = item.time;
    })
    document.getElementById('length').innerHTML = `${noOfCars} Cars Present`

}
async function fetchAndDisplay() {
    try {
        const data = await fetchData();
        displayData(data)
    } catch (error) {
        console.error('Error fetching/displaying the data', error)
    }
}

fetchAndDisplay()
//fetch the data

// Initial population of the table


