import { useCallback, useEffect, useState } from 'react';

import { IUser } from '../../interfaces/user';
import { getUsersAll } from '../../services/users';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { Search } from '../../components/search/Search';
import { Table } from '../../components/table/Table';
import { Pagination } from '../../components/pagination/Pagination';

export const Home = () => {
  const limit = 10;
  const [page, setPage] = useState(1);

  const {
    form: { search },
    handleInputChange,
    submitForm,
  } = useForm(
    {
      search: '',
    },
    () => handleSearch()
  );

  const getUsers = useCallback(() => {
    const { value: search } = document.getElementById(
      'search_input'
    ) as HTMLInputElement;
    return getUsersAll(search, page, limit);
  }, [page]);
  const { fetched, isLoading, reFetch } = useFetch(getUsers);

  const [users, setUsers] = useState<IUser[]>([]);
  const [count, setCount] = useState(0);

  const handleSearch = () => {
    setPage(1);
    reFetch();
  };

  useEffect(() => {
    if (!fetched || isLoading) return;

    setUsers(fetched?.data?.users || []);
    setCount(fetched?.data?.count || 0);
    return () => {};
  }, [fetched, isLoading]);

  return (
    <div className='flex h-full items-center justify-center'>
      <form
        onSubmit={submitForm}
        className='flex flex-col w-5/6 h-5/6 p-5 overflow-hidden bg-white shadow-md'
      >
        <Search
          msg='Search for email'
          search={search}
          changeSearch={handleInputChange}
          id='search_input'
        />

        <Table data={users} page={page} limit={limit} reFetch={reFetch} />

        <Pagination
          page={page}
          limit={limit}
          count={count}
          changePage={setPage}
        />
      </form>
    </div>
  );
};
