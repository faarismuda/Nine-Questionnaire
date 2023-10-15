# React + SurveyJS with Firebase Integration

This is a simple questionnaire app built with React, SurveyJS, and Firebase. Users can answer a questionnaire and their responses will be saved to a Firebase Realtime Database.

## Setting up

Create a .env file in the root of your project and add your Firebase project credentials. Example:

```
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=yourproject.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://yourproject-default-rtdb.(server).firebasedatabase.app
REACT_APP_FIREBASE_PROJECT_ID=yourproject
REACT_APP_FIREBASE_STORAGE_BUCKET=yourproject.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=000000000000
REACT_APP_FIREBASE_APP_ID=1:000000000000:web:xxxxxxxxxxxxxxxxxxxxxx
REACT_APP_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

SurveyJS:
```
npm install survey-react-ui --save
```

Install Firebase:
```
npm install firebase
```

Start the app:
```
yarn start
```

## Usage

When the app starts, a questionnaire will be displayed to the user. When the user submits the form, their responses will be saved to a Firebase Realtime Database.

To view the survey results, go to the Firebase Console and navigate to the "Realtime Database" section. You should see a new entry under the "surveyResults" node.