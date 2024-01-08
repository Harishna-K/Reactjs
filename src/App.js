
// /*import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import Login from './component/login';
// import React from "react";
// import List from "./component/list";
// const App = () => {
//   return (
//     <div>
// <Login/>
// <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login/>}></Route>
//           <Route path= "/Home/:names" element={<Home/>} />
//            <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} /> 
//       </Routes>
//     </BrowserRouter> 
//     <List/>
//     </div>
//   );
// }

// export default App;


// import SampleRenderProps from './component/RenderPropsComponent';

// function App{
//   return (
//     <div>
//       <SampleRenderProps/>
//     </div>
//   );
// }
// export default App;*/


          // HTTP AXIOS GET POST DELETE
           
// /*import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const apiUrl = 'https://6593e3c11493b011606961a2.mockapi.io/employee'; 

// const App = () => {
//   const [data, setData] = useState([]);
//   const [newItem, setNewItem] = useState('');
//   const [editItem, setEditItem] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//  /* const fetchData = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleCreate = async () => {
//     try {
//       await axios.post(apiUrl, { text: newItem });
//       setNewItem('');
//       fetchData();
//     } catch (error) {
//       console.error('Error creating item:', error);
//     }
//   };

//   const handleUpdate = async (id, newText) => {
//     try {
//       await axios.put(`${apiUrl}/${id}`, { text: newText });
//       setEditItem(null);
//       fetchData();
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   }; 

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${apiUrl}/${id}`);
//       fetchData();
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>CRUD Operations with Axios in React</h1>
      
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>
//             {editItem === item.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={newItem}
//                   onChange={(e) => setNewItem(e.target.value)}
//                 />
//                 <button onClick={() => handleUpdate(item.id, newItem)}>
//                   Update
//                 </button>
//               </>
//             ) : (
//               <>
//                 {item.text}
//                 <button onClick={() => setEditItem(item.id)}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(item.id)}>
//                   Delete
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div>
//         <input
//           type="text"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//         />
//         <button onClick={handleCreate}>
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;*/




// import React, { createContext, useContext, useState } from 'react';

// // Step 1: Create a context
// const ThemeContext = createContext();

// // Step 2: Create a provider component
// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Step 3: Create a custom hook to use the context
// const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// // Step 4: Create components that use the theme context
// const ThemedComponent = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
//       <h1>{`Current Theme: ${theme}`}</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// const AnotherThemedComponent = () => {
//   const { theme } = useTheme();

//   return <p style={{ color: theme === 'light' ? '#333' : '#fff' }}>This component is also themed!</p>;
// };

// // Step 5: Use the ThemeProvider to wrap your components
// const App = () => {
//   return (
//     <ThemeProvider>
//       <ThemedComponent />
//       <AnotherThemedComponent />
//     </ThemeProvider>
//   );
// };

// export default App;



// import React from 'react';
// import Counter from './component/Counter';
// // import Counter2 from './component/Counter2';


// const App = () => {
//   return (
//     <div>
//      <Counter/>
  
//     </div>
//   );
// }

// export default App;

// import React from "react";

// const Form = () => {
//     return (
//         <form>
//             <input placeholder="Email" />
//             <input placeholder="Password" type="password" />
//             <button type="submit">Sign in</button>
//         </form>
//     );
// };

// export default Form;


import React from "react";
import styled from "styled-components";

import useInput from "./useInput";

const SignInForm = () => {
    const email = useInput("");
    const password = useInput("");

    const submitForm = (event) => {
        event.preventDefault();
        console.log("email", email.value);
        console.log("password", password.value);
    };

    return (
        <FormWrapper onSubmit={submitForm}>
            <Title>Sign in</Title>
            <Input placeholder="Email" {...email} />
            <Input placeholder="Password" type="password" {...password} />
            <Button type="submit">Sign in</Button>
        </FormWrapper>
    );
};

export default SignInForm;

const FormWrapper = styled.form`
    display: grid;
    justify-content: center;
    gap: 20px;
    padding-bottom: 50px;
`;

const Title = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    text-align: center;
`;

const Input = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 10px 20px;
    background-blend-mode: overlay;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(250, 250, 250, 0.4);

    :focus {
        outline: none;
    }
`;

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;