// import  {useState,useEffect} from 'react';

// const MyForm = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault(); 
//     const formData = new FormData(event.target);
//     console.log('Form data:', Object.fromEntries(formData));
//   };
//   const MyForm = () => {
//     const handleSubmit = (event) => {
//       event.preventDefault(); 
//       const formData = new FormData(event.target);
//       console.log('Form data:', Object.fromEntries(formData));
//     };
//     const validateFormWithJS = (event) => {
//         event.preventDefault(); // Prevent the form from submitting normally
    
//         const name = document.querySelector('#name').value;
//         const rollNumber = document.querySelector('#rollNumber').value;
    
//         if (!name) {
//           alert('Please enter your name.');
//           return false;
//         }
    
//         if (rollNumber.length < 3) {
//           alert('Roll Number should be at least 3 digits long.');
//           return false;
//         }
//         const formData = new FormData(event.target);
//         console.log('Form data:', Object.fromEntries(formData));
//       };
//       const [name, setName] = useState('');
//       const [rollNumber, setRollNumber] = useState('');
    
//       const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the form from submitting normally
    
//         if (!name) {
//           alert('Please enter your name.');
//           return;
//         }
    
//         if (rollNumber.length < 3) {
//           alert('Roll Number should be at least 3 digits long.');
//           return;
//         }
//         console.log('Name:', name);
//         console.log('Roll Number:', rollNumber);
//         const [name, setName] = useState('');
//         const handleSubmit = (event) => {
//             event.preventDefault(); 
//             const formData = new FormData(event.target);
//             console.log('Form data:', Object.fromEntries(formData));
//           };
//   };
// }

//   return (
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="rollNumber">Roll Number:</label>
//       <input
//         type="text"
//         name="rollNumber"
//         id="rollNumber"
//         value={rollNumber}
//         onChange={(event) => setRollNumber(event.target.value)}
//       />

//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         name="name"
//         id="name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />
//         <label htmlFor="pswrd">Password:</label>
//       <input
//         type="password"
//         id="pswrd"
//         name="pswrd"
//         pattern="[a-z0-9]{1,15}"
//         title="Password should be digits (0 to 9) or alphabets (a to z)."
//       />

//       <button type="submit">Submit</button>
//     </form>
    
//   );
// };

// export default MyForm;