import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCGm_qn8-jCVzqS9t8zBpRFyhAb3RTRuHo',
    authDomain: 'mentor-dashboard-e8274.firebaseapp.com',
    databaseURL: 'https://mentor-dashboard-e8274.firebaseio.com',
    projectId: 'mentor-dashboard-e8274',
    storageBucket: 'mentor-dashboard-e8274.appspot.com',
    messagingSenderId: '1073396115912'
};
const fire = firebase.initializeApp(config);
const provider = new firebase.auth.GithubAuthProvider();

export const fb = {
    login: () => fire.auth().signInWithPopup(provider)
};
