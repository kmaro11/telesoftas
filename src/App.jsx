const { useState } = 'react'
import { List } from './components/List'
import { Search } from './components/Search'

export default function App() {
    // const [searchUsers, setSearchUsers] = useState('')


    return(
        <>
            <Search />
            <List />
        </>
    ) 
}