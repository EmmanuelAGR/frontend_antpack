interface Props {
  name:         string;
  value?:       string;
  id?:          string;
  onChange?:    React.ChangeEventHandler<HTMLInputElement>;
  type?:        string;
  className?:   string;
  text?:        string;
  placeholder?: string;
  disabled?:    boolean;
}

export const TextInput = ({
  type = 'text',
  className = 'w-full bg-gray-100 shadow-md',
  name,
  value,
  id,
  onChange,
  text,
  placeholder,
  disabled,
}: Props) => {
  return (
    <>
      {text && (
        <label className='label'>
          <span className='label-text'>{text}</span>
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`input input-bordered ${className} disabled:border-0 disabled:shadow-inner disabled:bg-gray-100 disabled:text-gray-400`}
        placeholder={placeholder}
        name={name}
        value={value || ''}
        onChange={onChange}
        disabled={!onChange || disabled}
      />
    </>
  );
};
