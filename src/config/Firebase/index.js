import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyBaZJ8EHnK7q4DSUwUZuAXHIHI5C-faaS8',
  authDomain: 'extrack-98ced.firebaseapp.com',
  databaseURL: 'https://extrack-98ced.firebaseio.com',
  storageBucket: 'gs://extrack-98ced.appspot.com',
  projectId: 'extrack-98ced',
  messagingSenderId: '585088487069',
  appId: '1:585088487069:web:26246f5e4ef8b32c'
}

firebase.initializeApp(config)

export default firebase
