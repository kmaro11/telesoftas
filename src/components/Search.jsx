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
            <div className="w-3/4">
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