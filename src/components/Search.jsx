import { useState } from "react"


export function Search() {
    const [searchUsers, setSearchUsers] = useState('')

    const handleInputChange = (e) => {
        const searchItem = e.target.value
        setSearchUsers(searchItem)
        console.log(searchItem)
    }


    return(
        <>
            <div>
                Search
                <input 
                    type="text"
                    value={searchUsers}
                    onChange={handleInputChange}
                /> 
            </div>
        </>
    ) 
}