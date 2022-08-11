import { useEffect, useState } from "react"
import request from "../../apis/request"
import useDebounce from "../../hooks/useDebounce"
import UserList from "./UserList"

const HomePage = () => {
    const [value, setValue] = useState('')
    const [userList, setUserList] = useState([])
    const debounceValue = useDebounce(value, 500)
    useEffect(() => {
        if (debounceValue) {
            fetchUserList(debounceValue).then((results) => {
                setUserList(results)
            })
        } else {
            setUserList([])
        }
    }, [debounceValue])

    const fetchUserList = async (username) => {
        try {
            const response = await request.get(`/search/users?q=${username}&page=1`)
            const data = await response.data.items
            return data
        } catch {
            return []
        }
    } 

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