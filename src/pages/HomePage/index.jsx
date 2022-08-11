import { useEffect, useState } from "react"
import request from "../../apis/request"
import UserList from "./UserList"

const HomePage = () => {
    const [value, setValue] = useState('')
    const [userList, setUserList] = useState([])
    useEffect(() => {
        const fetchUserList = async () => {
            const response = await request.get(`/search/users?q=hung&page=1`)
            const data = await response.data.items
            setUserList(data)
        }
        fetchUserList()
    }, [])
    return (
        <>
            <input 
                type="text" 
                placeholder="Search for username"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <UserList userList={userList} />
        </>
    )
}

export default HomePage;