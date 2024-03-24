import { useState } from "react"


export function Search({searchItem}) {
    const [searchUsers, setSearchUsers] = useState('')

    const handleInputChange = (e) => {
        setSearchUsers(e.target.value)
        searchItem(searchUsers)
        // console.log(searchUsers)
    }


    return(
        <>
            <div className="w-full">
                <input 
                    type="text"
                    placeholder="Search users by typing atleast 3 letters"
                    className="w-full border border-grey p-2"
                    value={searchUsers}
                    onChange={handleInputChange}
                /> 
            </div>
        </>
    ) 
}