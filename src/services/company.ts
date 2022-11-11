import { AxiosError } from 'axios';

import { IResponse } from '../interfaces/response';
import { ICompanyResponse } from '../interfaces/company';
import instance from './axios';

export const getCompanyAll = async (
  search?: string,
  page?: number,
  limit?: number
): Promise<IResponse<ICompanyResponse>> => {
  try {
    const response = await instance.get<IResponse<ICompanyResponse>>(
      'companies',
      {
        params: {
          search,
          page,
          limit: limit,
        },
      }
    );

    if (!response)
      throw { code: 500, msg: 'Hubo un problema con la petición recibida.' };

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return err?.response?.data as IResponse<ICompanyResponse>;
  }
};
