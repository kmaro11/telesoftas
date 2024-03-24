import { Search } from './components/Search'
import { useEffect, useState } from 'react'
import { ListItem } from './components/ListItem'
import { Pagination } from './components/Pagination'
import { Post } from './components/Post'
import HttpClient from './utils/HttpClient'
import { Loader } from './components/Loader'

export default function App() {
    const [apiUsers, setApiUsers] = useState([])
    const [filteredUsers, setFilteredList] = useState(apiUsers)
    const [posts, setPosts] = useState([])
    const [usersMeta, setUserMeta ] = useState(null)
    const [postsMeta, setPostsMeta ] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [loadingUserData, setLoadingUserData] = useState(false)
    const [loadingPosts, setLoadingPosts] = useState(false)
  
    const fetchUsersData = async (page) => {
        setLoadingUserData(true)
        const {
            data,
            error,
        } = await HttpClient(`https://gorest.co.in/public/v1/users?page=${page}`);

        if(data) {
            setApiUsers(data.data)
            setFilteredList(data.data)
            setUserMeta(data.meta.pagination)
        }
        setLoadingUserData(false)
    }

    const fetchUserPosts = async (userId, page) => {
        setLoadingPosts(true)
        const {
            data,
            error,
        } = await HttpClient(`https://gorest.co.in/public/v1/users/${userId}/posts?page=${page}`);

        if(data) {
            setPosts(data.data)
            setPostsMeta(data.meta.pagination)
        }

        setLoadingPosts(false)
    }

    const searchUser = (searchTerm) => {
        let filteredItems = []

        if(searchTerm.length) {
            filteredItems = apiUsers.filter((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else {
            filteredItems = [...apiUsers]
        }
        
        setFilteredList(filteredItems)
    }

    const selectUser = (user) => {
        setPosts([])
        setSelectedUser(user)
        fetchUserPosts(user.id, usersMeta.page)
    } 

    const changePostPage = (page) => {
        fetchUserPosts(selectedUser.id, page)
    }

    useEffect(() => {
        fetchUsersData(1)
    }, [])

    return(
        <>
            <div className='py-20 w-3/4 max-w-3xl flex flex-col justify-center items-center gap-y-10 mx-auto'>
                <Search searchItem={searchUser}/>

                <div className="w-full flex flex-col border border-grey rounded-md">
                    <div className="flex px-2 py-5 border-b border-grey">
                        <div className="w-1/2">
                            name
                        </div>
                        <div className="w-1/2">
                            Email
                        </div>
                    </div>
                        {
                            loadingUserData && 
                            <Loader />
                        }
                        {
                            (!loadingUserData && filteredUsers.length === 0) && 
                            <div className="px-2 py-5 text-center">
                                 No users found
                            </div>
                        }
                        {
                            <ul>
                                {
                                    filteredUsers.map((user, index) => {
                                        return (
                                            <ListItem user={user} key={index} selectUser={selectUser}/>
                                        )
                                    })
                                }
                            </ul>
                            
                        }
                        {
                           (usersMeta && !loadingUserData && filteredUsers.length > 0) &&  
                            <Pagination meta={usersMeta} changeMeta={fetchUsersData}/>
                        }
                    </div>
                    
                        <div className="w-full flex flex-col border border-grey rounded-md">
                            {
                                loadingPosts &&
                                <Loader />
                            }
                            <ul>
                                {
                                    (posts.length === 0  && !loadingPosts) && 
                                    <li className="px-2 py-5 text-center">
                                        No post avalible { selectedUser ? `for ${selectedUser.name}` : ''}
                                    </li>
                                }   
                                {
                                    posts.map((post, index) => {
                                        return (
                                                <Post post={post} key={index} />
                                            )
                                        })
                                }
                            </ul>
                            

                            {
                                (postsMeta && posts.length > 0 && !loadingPosts) &&  
                                <Pagination meta={postsMeta} changeMeta={changePostPage}/>
                            }
                        </div>
                </div>
        </>
    ) 
}