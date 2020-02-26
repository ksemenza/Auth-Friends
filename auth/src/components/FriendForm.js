import React, { useState } from 'react';

const FriendForm = props => {
    const [friend, setFriend] = useState({name: '', age: '', email: ''});

    const handleSubmit = e => {
        e.preventDefault();
        props.addFriend(friend);
        setFriend({name: '', age: '', email: ''});
    }

    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value});
    }

    return (
        <div className='friend-add-cta'>
            <h2>Add Friend</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'/>
                <input type='text' name='name' placeholder='Name' value={friend.name} onChange={handleChange} />
                <label htmlFor='age'/>
                <input type='number' name='age' placeholder='Age' value={friend.age} onChange={handleChange} />
                <label htmlFor='email'/>
                <input type='email' name='email' placeholder='Email' value={friend.email} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;