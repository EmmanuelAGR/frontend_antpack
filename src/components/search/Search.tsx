import { Link } from 'react-router-dom';

import { TextInput } from '../form/TextInput';

interface Props {
  msg:          string;
  search:       string;
  changeSearch: React.ChangeEventHandler<HTMLInputElement>;
  id?:          string;
}

export const Search = ({ msg, search, changeSearch, id }: Props) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <TextInput
        placeholder={msg}
        name='search'
        value={search}
        onChange={changeSearch}
        id={id}
      />

      <div className='flex w-full gap-4'>
        <button
          type='submit'
          className='flex-grow btn btn-warning text-white shadow-md xl:w-1/5
        '
        >
          Search
        </button>
        <Link
          to='/user'
          className='flex-grow btn btn-info text-white shadow-md xl:w-1/12'
        >
          Create
        </Link>
      </div>
    </div>
  );
};
