import React from 'react'
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

export default function Binary() {

    const isUserLoggedIn = true;
    // const is_user_logged_in = true;

  return (
    <div>
      {/* {isUserLoggedIn ? "User is logged in" : "User is not logged in"} */}
    {isUserLoggedIn ? <LoggedIn /> : <LoggedOut />}
    
    </div>
  )
}
