interface Props {
  children:   React.ReactNode;
  key?:       string;
  className?: string;
  size?:      number;
  isGrid?:    boolean;
}

export const Col = ({
  children,
  key,
  className,
  size = 1,
  isGrid = false,
}: Props) => {
  return (
    <div
      className={`${isGrid ? `grid grid-col-${size}` : 'flex flex-col'} ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
