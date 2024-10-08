import Header from "./components/Header";
import './App.css'
import UserCard from "./components/UserCard";
import Binary from "./components/Binary";
function App() {

    //  const userName = "ArjitVerma";
    //  const userAge = 32;
    //  const userEmail = "arjitverma@gmail.com";

    //create an array with numbers from 1 to 15
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //create an array with 5 users with different data
    const users = [
        {name: 'Alice', age: 30, email: 'alice@example.com'},
        {name: 'Bob', age: 24, email: 'bob@example.com'},
        {name: 'Charlie', age: 28, email: 'charlie@example.com'},
        {name: 'Diana', age: 22, email: 'diana@example.com'},
        {name: 'Ethan', age: 35, email: 'ethan@example.com'}
    ]
    

    return (
        // JSX - JavaScript XML
        <>
            <Header />
            <Binary/>
            {/* <UserCard userName={userName}
             userAge={userAge} userEmail={userEmail} /> */}

             {/* {numbers.map((num)=>{
                return <p>Number is : {num}</p>
             })} */}

             {users.map((user)=>{
                return <UserCard userName={user.name}
                 userAge={user.age} userEmail={user.email} />
             })}
        </>
    )

}

export default App;

//Inline styles
//Internal styles
//External styles