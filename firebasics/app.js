//Create instance
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});


//Create function to accompany Google login
function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user)
        })
        .catch(console.log);
}