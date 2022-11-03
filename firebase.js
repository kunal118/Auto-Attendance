  

  // Import the functions you need from the SDKs you need
  // import {curly} from "https://cdn.jsdelivr.net/npm/node-libcurl@2.3.4/dist/curly.min.js";
  
  import { initializeApp} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getDatabase ,ref, set,get} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
  import configs from "./keys.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = configs.firebaseConfig;

  function sendNotification()
{
var myHeaders = new Headers();
myHeaders.append("Authorization", `Basic ${configs.twilioAuth}`);
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("To", `whatsapp:+91${configs.phone}`);
urlencoded.append("From", "whatsapp:+14155238886");
urlencoded.append("Body", "A link is opened");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://api.twilio.com/2010-04-01/Accounts/AC9d4f60e41125811940b03de2afb17607/Messages.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function updateStatus(subject)
{
  const db = getDatabase(app);
  const dbRef = ref(getDatabase(app));
  setTimeout(()=>{
    if(location.href.slice(-8) == 'viewform')
    {
     
      
      
  set(ref(db, 'subjects/' + subject), {
    active:true
  });
  sendNotification();
    }
    else{
      
      set(ref(db, 'subjects/' + subject), {
        active:false
      });
    }
  },100);
  
}



const app = initializeApp(firebaseConfig);

updateStatus("attendance");

