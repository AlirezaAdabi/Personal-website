import writeContacts from "../../lib/firebase";
import { initializeApp } from "firebase/app";

export default async function handler(req, res) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };
  try {
    const app = initializeApp(firebaseConfig);
    console.log(req.body);

    writeContacts(req.body, app);
    res.status(200).json({ message: "successfully sent!" });
  } catch (error) {
    res.status(400).json({ message: "something is wrong!" });
  }
}
