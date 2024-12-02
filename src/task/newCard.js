function newCard(taskName,username){
    const date = new Date();
    return(
        <div id='newCard-container'>
            <h3>{taskName}</h3>
            <div>{date.toLocaleDateString()}</div>
            <p>{username}</p>
        </div>
    );
}

export {newCard};