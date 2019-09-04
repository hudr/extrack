import * as firebase from 'firebase'

export function InitializeFirebase() {
  const config = {
    apiKey: 'AIzaSyBaZJ8EHnK7q4DSUwUZuAXHIHI5C-faaS8',
    authDomain: 'extrack-98ced.firebaseapp.com',
    databaseURL: 'https://extrack-98ced.firebaseio.com',
    projectId: 'extrack-98ced',
    storageBucket: '',
    messagingSenderId: '585088487069',
    appId: '1:585088487069:web:26246f5e4ef8b32c'
  }

  return firebase.initializeApp(config)
}
