const admin = require('firebase-admin');
const serviceAccount = require('./assets/e-can-f6a1d-firebase-adminsdk-rlpcl-fbc254de1f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://e-can-f6a1d.appspot.com'
});

module.exports = admin;
