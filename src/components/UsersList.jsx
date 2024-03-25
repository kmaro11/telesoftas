import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { Loader } from './Loader';
import { ListItem } from './ListItem';
import { Pagination } from './Pagination';
import ErrorMessage from './ErrorMesage';

export default function UsersList({ searchTerm, setUser }) {
  const [page, setPage] = useState(1);
  const [filteredUsers, setFilteredList] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const { data, meta, loading, error } = useFetch(`users?page=${page}`);

  useEffect(() => {
    searchUser();
  }, [searchTerm, data]);

  const searchUser = () => {
    let filteredItems = [];

    if (data && searchTerm.length) {
      filteredItems = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    if (data && !searchTerm.length) {
      filteredItems = [...data];
    }

    setFilteredList(filteredItems);
  };

  const selectUser = (user) => {
    setUser(user);
    setSelectedUserId(user.id);
  };

  const changePage = (page) => {
    setPage(page);
  };

  const showNoData = !loading && filteredUsers && filteredUsers.length === 0;
  const showPagination =
    meta && !loading && filteredUsers && filteredUsers.length > 0;

  return (
    <div className="w-full flex flex-col border border-grey rounded-md">
      <div className="flex px-2 py-5 border-b border-grey">
        <div className="w-1/2">name</div>
        <div className="w-1/2">Email</div>
      </div>
      {loading && <Loader />}
      {showNoData && (
        <div className="px-2 py-5 text-center">No users found</div>
      )}
      {filteredUsers && (
        <ul>
          {filteredUsers.map((user, index) => {
            return (
              <ListItem
                user={user}
                key={index}
                selectUser={selectUser}
                selectedUserId={selectedUserId}
              />
            );
          })}
        </ul>
      )}
      {showPagination && <Pagination meta={meta} changeMeta={changePage} />}
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
