import React from 'react'
import classes from './UserList.module.css'
import Card from '../components/UI/Card'
const UserList = (props) => {
  return (
 <Card className={classes.users}>
    <ul>
        {props.users.map(user => {
            return <li key={user.id}>{user.name} ({user.age}) years old</li>
        })}
    </ul>
 </Card>
  )
}

export default UserList