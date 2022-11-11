import { useEffect, useState } from 'react';

import { ICompany } from '../../interfaces/company';
import { getCompanyAll } from '../../services/company';
import useFetch from '../../hooks/useFetch';
import { Row } from '../row/Row';
import { Col } from '../column/Col';
import { Title } from '../form/Title';
import { TextInput } from '../form/TextInput';
import { SelectForm } from '../form/SelectForm';

interface Props {
  id_company:    string;
  changeCompany: React.ChangeEventHandler<HTMLSelectElement>;
}

export const CompaniesSection = ({ id_company, changeCompany }: Props) => {
  const { fetched, isLoading } = useFetch(getCompanyAll);
  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    if (!fetched || isLoading) return;

    setCompanies(fetched?.data?.companies || []);
    return () => {};
  }, [fetched, isLoading]);

  return (
    <Row isGrid>
      <Title msg='Company Information' />

      <Col className='gap-1 xl:grid-cols-2 xl:gap-10' isGrid>
        <Col>
          <SelectForm
            data={companies}
            name='id_company'
            value={id_company}
            defaultValueText='Select a company'
            onChange={changeCompany}
            text='Company:'
          />
        </Col>

        <Col>
          <TextInput
            text='CatchPhrase:'
            name='catchPhrase'
            value={
              companies.find(({ id }) => id === id_company)?.catchPhrase || ''
            }
          />
        </Col>
      </Col>

      <Col>
        <TextInput
          text='Bs:'
          name='bs'
          value={companies.find(({ id }) => id === id_company)?.bs || ''}
        />
      </Col>
    </Row>
  );
};
