const express = require('express')
const fetch = require('node-fetch')
const path = require('path');
// uncomment to use Firebase
const admin = require('firebase-admin');
const app = express()

app.use(express.static(path.join(__dirname, 'client/build')));

// Firebase starter code appears below

let serviceAccount = require('./serviceAccountApiKey.json');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

async function fetchAndAddDataToFireStore(){
  try{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(async data=> {
    await Promise.allSettled(data.map(user => db.collection('users').add({user})))
  })
  }catch(err){
    console.log(err)
  }
}
fetchAndAddDataToFireStore()

// const cities = ["Fairfax", "Vienna", "Falls Church", "Arlington"];

// const populations = [24019, 16489, 14128, 236842];

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/users', async (req, res) => {
  const userRef = await db.collection('users').get();
  const users = userRef.docs.map(doc => ({...doc.data(), id: doc.id}))
  return res.send(users)
})

app.get('/users/:id', async (req, res) => {
  const {id} = req.params;
  const userRef = db.collection('users').doc(id);
  const user = (await userRef.get()).data()
  return res.json(user)
})

// app.get('/populations', (req, res) => {
//   return res.json(populations)
// })

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;