import Header from "./components/Header";
import "./App.css";
// import UserCard from "./components/UserCard";
// import Binary from "./components/Binary";
// import UseEffectDemo from "./components/UseStateDemo";
import UseStateDemo from "./components/UseStateDemo";
import Binary from "./components/Binary";
import BasicForm from "./components/BasicForm";
import UseEffectDemo from "./components/UseEffectDemo";
import DemoTimer from "./components/DemoTimer";
import TodoApp from "./components/TodoApp";
import AsyncDemo from "./components/AsyncDemo";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
function App() {
  //  const userName = "ArjitVerma";
  //  const userAge = 32;
  //  const userEmail = "arjitverma@gmail.com";

  //create an array with numbers from 1 to 15
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //create an array with 5 users with different data
  // const users = [
  //     {name: 'Alice', age: 30, email: 'alice@example.com'},
  //     {name: 'Bob', age: 24, email: 'bob@example.com'},
  //     {name: 'Charlie', age: 28, email: 'charlie@example.com'},
  //     {name: 'Diana', age: 22, email: 'diana@example.com'},
  //     {name: 'Ethan', age: 35, email: 'ethan@example.com'}
  // ]

  return (
    // JSX - JavaScript XML
    <>
      <BrowserRouter>
        <h1>Welcome to my website</h1>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

            </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer>This is the footer</footer>
      </BrowserRouter>

      {/* <AsyncDemo/> */}
      {/* <TodoApp/> */}
      {/* <UseEffectDemo/> */}
      {/* <DemoTimer/> */}
      {/* <Binary/> */}
      {/* <UseStateDemo/> */}
      {/* <BasicForm/> */}
      {/* <Header />
            <Binary/> */}
      {/* <UserCard userName={userName}
             userAge={userAge} userEmail={userEmail} /> */}

      {/* {numbers.map((num)=>{
                return <p>Number is : {num}</p>
             })} */}

      {/* {users.map((user)=>{
                return <UserCard userName={user.name}
                 userAge={user.age} userEmail={user.email} />
             })} */}
    </>
  );
}

export default App;

//Inline styles
//Internal styles
//External styles
