import { useCallback, useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { IUserForm } from '../../interfaces/user';
import { getUser, postUser, putUser } from '../../services/users';
import { handleSwal } from '../../helpers/handleSwal';
import { formToUser } from '../../helpers/users';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { Form } from './Form';

const initialValues: IUserForm = {
  name: '',
  username: '',
  email: '',
  street: '',
  suite: '',
  city: '',
  zipcode: '',
  lat: '',
  lng: '',
  phone: '',
  id_company: '',
  website: '',
  img: '',
  companyName: '',
  catchPhrase: '',
  bs: '',
};

export const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getUserByPk = useCallback(() => getUser(id || ''), []);
  const { fetched, isLoading } = useFetch(getUserByPk);

  useEffect(() => {
    if (!fetched || isLoading || !id) return;

    const { code, data } = fetched;

    if (code !== 200 || !data) {
      navigate('/');
      return;
    }

    const {
      name,
      username,
      email,
      address,
      phone,
      id_company,
      website,
      img,
      company,
    } = data;

    setForm({
      name,
      username,
      email,
      street: address?.street,
      suite: address?.suite,
      city: address?.city,
      zipcode: address?.zipcode,
      lat: address?.geo?.lat,
      lng: address?.geo?.lng,
      phone,
      id_company,
      website,
      img,
      companyName: company?.name,
      catchPhrase: company?.catchPhrase,
      bs: company?.bs,
    });
    return () => {};
  }, [fetched, isLoading]);

  const sendRequest = (form: IUserForm) =>
    handleSwal({
      request: () =>
        id ? putUser(id || '', formToUser(form)) : postUser(formToUser(form)),
      navigate: () => navigate('/'),
      desc: 'Are you sure?',
      ask: Boolean(id),
    });

  const { form, setForm, handleInputChange, submitForm, clearForm } =
    useForm<IUserForm>(initialValues, form => sendRequest(form));

  return (
    <div className='flex h-full items-center justify-center text-gray-500'>
      <div className='flex flex-col w-5/6 h-5/6 p-10 overflow-hidden bg-white shadow-md'>
        <div className='flex w-full gap-10 items-center '>
          <Link
            to={'/'}
            className='material-icons-outlined transition-all duration-100 hover:text-black'
          >
            {' '}
            arrow_back_ios{' '}
          </Link>
          <h1 className='text-3xl'>User</h1>
        </div>

        <Form
          data={form}
          type={id ? 'edit' : 'create'}
          onSubmit={submitForm}
          handleInputChange={handleInputChange}
          clearForm={clearForm}
        />
      </div>
    </div>
  );
};
