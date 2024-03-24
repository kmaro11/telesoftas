import { useState } from 'react';
import { Loader } from './Loader';
import { Pagination } from './Pagination';
import useFetch from '../hooks/useFetch';
import { PostItem } from './PostItem';
import ErrorMessage from './ErrorMesage';

export default function PostsList({ user }) {
  const [page, setPage] = useState(1);

  const { data, meta, loading, error } = useFetch(
    `users/${user.id}/posts?page=${page}`,
  );

  const changePage = (page) => {
    setPage(page);
  };

  const showNoData = data && data.length === 0 && !loading;
  const showList = data && data.length > 0 && !loading;
  const showPagination = meta && data && data.length > 0 && !loading;

  return (
    <div className="w-full flex flex-col border border-grey rounded-md">
      {loading && <Loader />}
      <ul>
        {showNoData && (
          <li className="px-2 py-5 text-center">No post avalible</li>
        )}
        {showList &&
          data.map((post, index) => {
            return <PostItem post={post} key={index} />;
          })}
      </ul>
      {showPagination && <Pagination meta={meta} changeMeta={changePage} />}
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
