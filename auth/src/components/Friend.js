import React, {useState} from 'react'

const Friend = ({friend, deleteFriend, editFriend}) => {
    const[isEditing, setIsEditing] = useState(false)
    const [friendEdit, setFriendEdit] = useState(friend)

    const handleDelete = () => {
        deleteFriend(friend);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        editFriend(friendEdit)
        setIsEditing(false)
    }

    const handleChange = e => {
        setFriendEdit({...friendEdit, [e.target.name]: e.target.value})
    }

    return (
    <div className='friend-cta'>
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button className='delete' onClick={handleDelete}> Delete </button>
        <button className='edit' onClick={handleEdit}> Edit </button>

        {isEditing && <form onSubmit={handleSubmit}>
            <div className='friend-edit'>
                <label htmlFor='name'>Name </label>
                <input type='text' name='name' value={friendEdit.name} onChange={handleChange} />
                
                <label htmlFor='age'>Age </label>
                <input type='number' name='age' value={friendEdit.age} onChange={handleChange} />
                
                <label htmlFor='email'>Email </label>
                <input type='email' name='email' value={friendEdit.email} onChange={handleChange} />
                <button type='submit'>Save</button>
                </div>
            </form>}
    </div>
    )

}

export default Friend