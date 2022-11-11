interface Props {
  msg:        string;
  className?: string;
}

export const Title = ({ msg, className }: Props) => {
  return (
    <>
      <h2 className={`text-xl pl-2 ${className}`}>{msg}</h2>
      <div className='divider' />
    </>
  );
};
