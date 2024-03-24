import { Search } from './components/Search';
import { useState } from 'react';
import UsersList from './components/UsersList';
import PostsList from './components/PostsList';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const searchUser = (text) => {
    setSearchTerm(text);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="py-20 w-3/4 max-w-3xl flex flex-col justify-center items-center gap-y-10 mx-auto">
      <Search searchItem={searchUser} />

      <UsersList searchTerm={searchTerm} setUser={selectUser} />

      {selectedUser && <PostsList user={selectedUser} />}
    </div>
  );
}
