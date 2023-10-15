import { useCallback } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, push } from "firebase/database";
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { surveyJson } from './json.js';
import { themeJson } from "./theme.js";
import 'survey-core/defaultV2.min.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

function App() {
  const survey = new Model(surveyJson);
  survey.applyTheme(themeJson);
  const alertResults = useCallback((sender) => {
    const results = sender.data;
    saveSurveyResults(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

function saveSurveyResults(results) {
  const surveyRef = ref(database, 'surveyResults');
  const newSurveyRef = push(surveyRef); // Generate a new child location using a unique key

  const {
    boolean_persetujuan,
    nama_lengkap,
    email,
    jenis_kelamin,
    ttl,
    pendidikan,
    pekerjaan,
    pendapatan,
    pengeluaran,
    postal_code,
    no_telepon,
    no_rekening,
    alamat
  } = results;

  const createdOn = new Date().toISOString(); // Generate a string with the current date and time in ISO format

  const data = {
    created_on: createdOn,
    boolean_persetujuan,
    nama_lengkap,
    email,
    jenis_kelamin,
    ttl,
    pendidikan,
    pekerjaan,
    pendapatan,
    pengeluaran,
    postal_code,
    no_telepon
  };

  if (no_rekening) {
      data.no_rekening = no_rekening;
    }

  if (alamat) {
      data.alamat = alamat;
    }

  set(newSurveyRef, data)
    .then(() => {
      console.log('Data berhasil disimpan.');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


export default App;
