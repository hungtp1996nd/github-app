import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../apis/request'
const RepoPage = () => {
    const { username } = useParams()
    const [repos, setRepos] = useState([])
    useEffect(() => {
        if (!username) return;
        const fetchReposByUserName = async () => {
            const response = await request.get(`/users/${username}/repos`)
            const data = await response.data
            setRepos(data)
        }
        fetchReposByUserName()
    })
    return <div>Repo page of {username}
        {repos && repos?.map((repo) => (
            <div key={repo.id}>
                <p>{repo.name} - {repo.owner.login}</p>
            </div>
        ))}
    </div>
}

export default RepoPage