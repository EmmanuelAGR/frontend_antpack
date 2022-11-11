import { AxiosError } from 'axios';
import { handleIncompleteData } from '../helpers/handleIncompleteData';

import { IResponse } from '../interfaces/response';
import { IUser, IUserResponse } from '../interfaces/user';
import instance from './axios';

export const getUsersAll = async (
  search?: string,
  page?: number,
  limit?: number
): Promise<IResponse<IUserResponse>> => {
  try {
    const response = await instance.get<IResponse<IUserResponse>>('users', {
      params: {
        search,
        page,
        limit: limit,
      },
    });

    if (!response)
      throw { code: 500, msg: 'Hubo un problema con la petición recibida.' };

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err?.response?.data as IResponse<IUserResponse>;
  }
};

export const getUser = async (id: string): Promise<IResponse<IUser>> => {
  try {
    if (!id) throw { code: 404, msg: 'No se ha encontrado al usuario.' };

    const response = await instance.get<IResponse<IUser>>(`users/${id}`);

    if (!response)
      throw { code: 500, msg: 'Hubo un problema con la petición recibida.' };

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err?.response?.data as IResponse<IUser>;
  }
};

export const postUser = async (data: IUser): Promise<IResponse<unknown>> => {
  try {
    if (
      handleIncompleteData(data, [
        'street',
        'suite',
        'city',
        'zipcode',
        'website',
        'lat',
        'lng',
        'companyName',
        'catchPhrase',
        'bs',
      ])
    )
      return { code: 400, msg: 'Data Incompleta' };

    const response = await instance.post<IResponse<unknown>>('users', data);

    if (!response)
      throw { code: 500, msg: 'Hubo un problema con la petición recibida.' };

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err?.response?.data as IResponse<unknown>;
  }
};

export const putUser = async (
  id: string,
  data: IUser
): Promise<IResponse<unknown>> => {
  try {
    if (
      handleIncompleteData(data, [
        'street',
        'suite',
        'city',
        'zipcode',
        'website',
        'lat',
        'lng',
        'companyName',
        'catchPhrase',
        'bs',
      ])
    )
      return { code: 400, msg: 'Data Incompleta' };

    const response = await instance.put<IResponse<unknown>>(
      `users/${id}`,
      data
    );

    if (!response)
      throw { code: 500, msg: 'Hubo un problema con la petición recibida.' };

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err?.response?.data as IResponse<unknown>;
  }
};

export const deleteUser = async (id: string): Promise<IResponse<unknown>> => {
  try {
    const response = await instance.delete<IResponse<unknown>>(`users/${id}`);

    if (!response)
      throw { code: 500, msg: 'Hubo un problema con la petición recibida.' };

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err?.response?.data as IResponse<unknown>;
  }
};
