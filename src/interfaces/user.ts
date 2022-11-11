import { ICompany } from './company';

export interface IUserGeo {
  lat?: string;
  lng?: string;
}

export interface IUserAddress {
  street?:  string;
  suite?:   string;
  city?:    string;
  zipcode?: string;
  geo?:     IUserGeo;
}

export interface IUser {
  id?:        string,
  name:       string;
  username:   string;
  email:      string;
  address:    IUserAddress;
  phone:      string;
  id_company: string;
  website?:   string;
  img?:       string;
  company?:   ICompany;
}

export interface IUserResponse {
  users: IUser[],
  page:  number,
  count: number
}

export interface IUserForm {
  name:          string;
  username:      string;
  email:         string;
  street?:       string;
  suite?:        string;
  city?:         string;
  zipcode?:      string;
  lat?:          string;
  lng?:          string;
  phone:         string;
  id_company:    string;
  companyName?:  string;
  catchPhrase?:  string;
  bs?:           string;
  website?:      string;
  img?:          string;
}