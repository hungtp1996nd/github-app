import React from "react"
import { useNavigate } from 'react-router-dom'

const UserList = ({ userList }) => {
    const navigate = useNavigate()
    return (
        <>
            {userList &&
                userList?.map((user, index) => <li key={user.id} onClick={() => navigate(`/repo/${user.login}`)}>{user.login}</li>)
            }
        </>
    )
}

export default UserList