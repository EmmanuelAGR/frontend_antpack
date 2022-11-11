export interface ICompany {
  id?:         string;
  name:        string;
  catchPhrase: string;
  bs:          string;
}

export interface ICompanyResponse {
  companies: ICompany[];
  page:      number;
  count:     number;
}
