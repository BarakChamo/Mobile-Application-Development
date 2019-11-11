rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write: if request.auth.uid != null;
      allow read: if request.auth.uid == resource.data.owner;
    }
  }
}