import { IUser, IUserForm } from '../interfaces/user';

/**
 * Transform form data to IUser
 * @param {IUserForm} form Form to transform
 * @return {IUser} user
 */
export const formToUser = ({
  name,
  username,
  email,
  street,
  suite,
  city,
  zipcode,
  lat,
  lng,
  phone,
  id_company,
  website,
}: IUserForm): IUser => ({
  name,
  username,
  email,
  address: {
    street,
    suite,
    city,
    zipcode,
    geo: {
      lat,
      lng,
    },
  },
  phone,
  id_company,
  website,
});
