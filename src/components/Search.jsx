import { useState } from 'react';
import useDebounce from '../utils/UseDebounce';

export function Search({ searchItem }) {
  const [searchUsers, setSearchUsers] = useState('');

  const handleSearch = useDebounce((term) => {
    searchItem(term);
  }, 200);

  const handleInputChange = (e) => {
    setSearchUsers(e.target.value);
    if (
      e.target.value.length > 2 ||
      e.target.value.length <= searchUsers.length
    ) {
      handleSearch(e.target.value);
    }
  };

  return (
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
  );
}
