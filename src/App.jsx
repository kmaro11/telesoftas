const { useState } = 'react'
import { UsersList } from './components/UsersList'
import { Search } from './components/Search'
import { PostsList } from './components/PostsList'

export default function App() {
    // const [searchUsers, setSearchUsers] = useState('')


    return(
        <>
            <div className='py-20 w-3/4 max-w-3xl flex flex-col justify-center items-center gap-y-20 mx-auto'>
                <Search />
                <UsersList />
                <PostsList />
            </div>
        </>
    ) 
}