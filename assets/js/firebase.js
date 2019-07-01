var firebaseConfig = {
    apiKey: "AIzaSyA9etshpb92of2cS3rcvsEiaZHMxyLiDJM",
    authDomain: "xablau-84077.firebaseapp.com",
    databaseURL: "https://xablau-84077.firebaseio.com",
    projectId: "xablau-84077",
    storageBucket: "xablau-84077.appspot.com",
    messagingSenderId: "810824469369",
    appId: "1:810824469369:web:50b412cb0980ea63"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
        });
    });