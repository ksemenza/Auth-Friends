import React, { useState, useEffect} from 'react'
import {axiosAuth} from '../utils/axiosAuth'
import FriendForm from '../components/FriendForm'
import Friend from './Friend'

const FriendList = props => {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosAuth().get('./friends')
        .then(res=> {
            console.log(res)
            setFriends(res.data)
            setLoading(false)
        })
        .catch(err=> console.log(err))
    }, [])

    const addFriend = newFriend => {
        setLoading(true)
        console.log(newFriend)
        axiosAuth().post('/friends', newFriend)
        .then(res => {
            console.log(res)
            setFriends(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    const deleteFriend = friend => {
        setLoading(true)
        console.log(friend)
        axiosAuth().delete(`/friends/${friend.id}`)
        .then(res => {
            console.log(res)
            setFriends(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })

    }
        const editFriend = friend => {
            console.log('Friend is being edited')
            console.log(friend)
            setLoading(true)

            axiosAuth().put(`/friends/${friend.id}`, friend)
            .then(res=> {
                console.log(res)
                setFriends(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })

        }

        return (
            <div className='friend-form-cta'>
                <FriendForm addFriend={addFriend}/>
                <h2 className='your-friends'>Your Friends</h2>
                <div className='friends-list-cta'>
                    {loading && <p>Getting Friends...</p>}
                    {friends && friends.map(friend => {
                        return (<Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} editFriend={editFriend}/>)
                    })}
                </div>
            </div>
        )
    }

    export default FriendList

