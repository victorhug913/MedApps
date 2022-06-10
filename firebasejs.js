        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAUwq05l4mJTYwtz5HssQo78_oq5sHWPf8",
          authDomain: "scriptdedoencas.firebaseapp.com",
          databaseURL: "https://scriptdedoencas-default-rtdb.firebaseio.com/",
          projectId: "scriptdedoencas",
          storageBucket: "scriptdedoencas.appspot.com",
          messagingSenderId: "552741649829",
          appId: "1:552741649829:web:8545c77fa8f1768dd47c4c",
          measurementId: "G-Y9N66520ZT"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        document.getElementById("concluir").onclick = function writeScript(){
        const db = getDatabase();
        var cid10 = document.getElementById('cid10').value
        var ciap = document.getElementById('ciap').value
        var titulo = document.getElementById('titulo').value
        var s = document.getElementById('s').value
        var c = document.getElementById('c').value
        var r = document.getElementById('r').value
        var i = document.getElementById('i').value
        var p = document.getElementById('p').value
        var t = document.getElementById('t').value

        set(ref(db, 'script/' + document.getElementById('cid11').value), {
        cid10: cid10,
        ciap: ciap,
        nome: titulo,
        s: s,
        c: c,
        r: r,
        i: i,
        p: p,
        t: t
        });
        }