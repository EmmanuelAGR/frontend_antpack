interface Props {
  data:             any;
  name:             string;
  value?:           string;
  defaultValueText: string;
  onChange:         React.ChangeEventHandler<HTMLSelectElement>;
  className?:       string;
  text?:            string;
}

export const SelectForm = ({
  className = 'w-full bg-gray-100 shadow-md',
  data,
  name,
  value = '',
  defaultValueText,
  onChange,
  text,
}: Props) => {
  return (
    <>
      {text && (
        <label className='label'>
          <span className='label-text'>{text}</span>
        </label>
      )}
      <select
        className={`select select-bordered ${className}`}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option disabled value={''}>
          {defaultValueText}
        </option>
        {data.map(({ id, name }: any) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};
