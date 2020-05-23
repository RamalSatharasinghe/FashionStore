import firebase from 'firebase/app';
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyAJV_ByW_OQH7XgrdcYqfLc8I0N4CBO70w",
    authDomain: "fashionhub-99f15.firebaseapp.com",
    databaseURL: "https://fashionhub-99f15.firebaseio.com",
    projectId: "fashionhub-99f15",
    storageBucket: "fashionhub-99f15.appspot.com",
    messagingSenderId: "895327216487",
    appId: "1:895327216487:web:c09ca97f770fe84d1645c2",
    measurementId: "G-VZ8MDQV04L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export {
    storage,firebase as default
}