function UserCard({userName, userAge, userEmail}) {
    // console.log("Props from usercard",props)

    function handleBtnClick(userName){
        console.log(userName + " is click");
    }
    return (
        <div>
            <h3>UserName : {userName}</h3>
            <p>Age : {userAge}</p>
            <p>Email : {userEmail}</p>
            <button onClick={()=>{handleBtnClick(userName)}}>
                Delete User</button>
        </div>
    )
}

export default UserCard;