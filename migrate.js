const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://simpzone-c261f-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();
const realtimeDb = admin.database();

async function migrateUsers() {
  try {
    const usersSnapshot = await firestore.collection("users").get();

    if (usersSnapshot.empty) {
      console.log("❌ No user data found in Firestore.");
      return;
    }

    const updates = {};
    usersSnapshot.forEach(doc => {
      updates[`users/${doc.id}`] = doc.data();
    });

    await realtimeDb.ref().update(updates);
    console.log("✅ Migration complete: Users moved from Firestore to Realtime Database.");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
}

migrateUsers();
