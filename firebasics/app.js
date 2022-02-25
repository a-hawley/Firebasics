//Initialize Firebase and database
document.addEventListener("DOMContentLoaded", event => {
    
    const app = firebase.app();

    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firstpost');

});


//Create function to accompany Google login
function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}! Thanks for joining!`);
            console.log(user)
            
    })
        .catch(console.log);
} 