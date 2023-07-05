import './App.css';


function App() {
  const data = {
    username: "Thippawan1234568กข",
    password: "Siblarn5905",
    userProfile: {
      firstName: "Thippawan",
      lastName: "Puttachart",
      gender: "Female",
      birthDate: "2000-02-17",
      imageUrl: "https://lh3.googleusercontent.com/a/AGNmyxbL_EzNJDYY9thXth0NAUCRiDxlgJF7AUJeEuSXQg=s96-c"
    },
    userPhone: {
      phoneCode: "+66",
      phoneNumber: "929985905"
    },
    userConfigs: {
      moblieApp: {},
      webApp: {
        language: "en",
        news_modal: true
      }
    },
    userRoles: "admin",
    isVerified: false,
    email: "Siblarn5905@gmail.com"
  };
  
  fetch(' http://61.7.237.18:1150/user/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  return (
    <div className="App">
      eiei
    </div>
  );
}

export default App;