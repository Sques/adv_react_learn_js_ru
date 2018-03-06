import firebase from 'firebase'

export const appName = 'advreact-16b50'

const config = {
    apiKey: "AIzaSyDOFI4XemVl6oLI5kTm4f7WqDzL-XOXl64",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "955900184624"
}

firebase.initializeApp(config)