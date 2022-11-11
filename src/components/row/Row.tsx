interface Props {
  children:   React.ReactNode;
  key?:       string;
  className?: string;
  size?:      number;
  isGrid?:    boolean;
}

export const Row = ({
  children,
  key,
  className,
  size = 1,
  isGrid = false,
}: Props) => {
  return (
    <div
      className={`${isGrid ? `grid grid-row-${size}` : 'flex'} ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
