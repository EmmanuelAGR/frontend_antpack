interface Props {
  page:       number;
  limit:      number;
  count:      number;
  changePage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ page, limit, count, changePage }: Props) => {
  return (
    <div className='btn-group items-center justify-center pt-5'>
      {page !== 1 && (
        <button className='btn' onClick={() => changePage(p => p - 1)}>
          «
        </button>
      )}
      <button className='btn'>Page {page}</button>
      {count - page * limit > 0 && (
        <button className='btn' onClick={() => changePage(p => p + 1)}>
          »
        </button>
      )}
    </div>
  );
};
