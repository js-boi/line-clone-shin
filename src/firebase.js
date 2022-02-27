// --- firebaseの初期化ファイル ---

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZLhvSaVD2WFoXBmkAa7q-p8hy2lAJr1Q",
    authDomain: "line-clone-shin.firebaseapp.com",
    projectId: "line-clone-shin",
    storageBucket: "line-clone-shin.appspot.com",
    messagingSenderId: "1090728981715",
    appId: "1:1090728981715:web:ca1efb610139f9ad0a5026"
});

// データベース
const db = firebaseApp.firestore();

// auth:どのユーザーがログインしているのか(認証の情報を取得できる)
const auth = firebase.auth();


export {db, auth};