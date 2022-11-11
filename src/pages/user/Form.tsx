import { IUserForm } from '../../interfaces/user';
import { Row } from '../../components/row/Row';
import { Col } from '../../components/column/Col';
import { TextInput } from '../../components/form/TextInput';
import { Title } from '../../components/form/Title';
import { CompaniesSection } from '../../components/home/CompaniesSection';

interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  >;
  clearForm: (clearValues?: IUserForm | undefined) => void;
  data: IUserForm;
  type?: 'create' | 'edit';
}

export const Form = ({
  onSubmit,
  handleInputChange,
  clearForm,
  data: {
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
    img,
  },
  type = 'create',
}: Props) => {
  const handleClearForm = () => {
    if (type === 'edit')
      return clearForm({
        name: '',
        username: '',
        email,
        street,
        suite,
        city,
        zipcode,
        lat,
        lng,
        phone: '',
        id_company: '',
        website: '',
        img,
      });

    return clearForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      autoComplete='off'
      className='grid grid-row-4 p-5 mt-10 gap-5 border rounded-xl overflow-y-auto hideScroll border-gray-100'
    >
      {/* -> User Information Section <- */}
      <Row isGrid>
        <Title msg='User Information' />

        <Row className={`${type === 'edit' && img && 'xl:grid-cols-4'}`} isGrid>
          {type === 'edit' && img && (
            <Row className='items-center justify-center' isGrid>
              <div className='avatar'>
                <div className='xs:w-44 mask mask-hexagon'>
                  <img src={img} />
                </div>
              </div>
            </Row>
          )}

          <Row
            className={`${type === 'edit' && img && 'xl:col-span-3'}`}
            isGrid
          >
            <Col className='gap-1 xl:grid-cols-2 xl:gap-10' isGrid>
              <Col>
                <TextInput
                  text='Name:'
                  name='name'
                  value={name}
                  onChange={handleInputChange}
                />
              </Col>

              <Col>
                <TextInput
                  text='Username:'
                  name='username'
                  value={username}
                  onChange={handleInputChange}
                />
              </Col>
            </Col>

            <Col className='gap-1 xl:grid-cols-2 xl:gap-10' isGrid>
              <Col>
                <TextInput
                  type='email'
                  text='Email:'
                  name='email'
                  value={email}
                  onChange={handleInputChange}
                  disabled={type === 'edit' && true}
                />
              </Col>

              <Col>
                <TextInput
                  text='Phone:'
                  name='phone'
                  value={phone}
                  onChange={handleInputChange}
                />
              </Col>
            </Col>
          </Row>
        </Row>

        <Col>
          <TextInput
            text='Website:'
            name='website'
            value={website}
            onChange={handleInputChange}
          />
        </Col>
      </Row>

      {/* -> Address Information Section <- */}
      <Row isGrid>
        <Title msg='Address Information' />

        <Col className='gap-1 xl:grid-cols-2 xl:gap-10' isGrid>
          <Col>
            <TextInput
              text='Street:'
              name='street'
              value={street}
              onChange={handleInputChange}
              disabled={type === 'edit' && true}
            />
          </Col>

          <Col>
            <TextInput
              text='Suite:'
              name='suite'
              value={suite}
              onChange={handleInputChange}
              disabled={type === 'edit' && true}
            />
          </Col>
        </Col>

        <Col className='gap-1 xl:grid-cols-2 xl:gap-10' isGrid>
          <Col>
            <TextInput
              text='City:'
              name='city'
              value={city}
              onChange={handleInputChange}
              disabled={type === 'edit' && true}
            />
          </Col>

          <Col>
            <TextInput
              text='ZipCode:'
              name='zipcode'
              value={zipcode}
              onChange={handleInputChange}
              disabled={type === 'edit' && true}
            />
          </Col>
        </Col>

        {/* -> Geoposition Information Section <- */}
        <Row
          className='p-5 mt-10 border rounded-xl overflow-y-auto hideScroll border-gray-100'
          isGrid
        >
          <Title msg='Geoposition Information' />

          <Col className='gap-1 xl:grid-cols-2 xl:gap-10' isGrid>
            <Col>
              <TextInput
                text='Latitude:'
                name='lat'
                value={lat}
                onChange={handleInputChange}
                disabled={type === 'edit' && true}
              />
            </Col>

            <Col>
              <TextInput
                text='Longitude:'
                name='lng'
                value={lng}
                onChange={handleInputChange}
                disabled={type === 'edit' && true}
              />
            </Col>
          </Col>
        </Row>
      </Row>

      {/* -> Company Information Section <- */}
      <CompaniesSection
        id_company={id_company}
        changeCompany={handleInputChange}
      />

      {/* -> Action Buttons <- */}
      <Row className='mt-10'>
        <Col
          className='w-full gap-3 justify-items-end xs:grid-cols-2 xl:gap-10'
          isGrid
        >
          <button
            type='button'
            className='btn w-full gap-2 text-white shadow-md '
            onClick={handleClearForm}
          >
            <span className='hidden sm:block material-icons-outlined'>
              delete
            </span>
            Clear
          </button>

          <button
            type='submit'
            className='btn btn-success w-full gap-2 text-white shadow-md'
          >
            <span className='hidden sm:block material-icons-outlined'>
              {type === 'create' ? 'save' : 'update'}
            </span>
            {type === 'create' ? 'Save' : 'Update'}
          </button>
        </Col>
      </Row>
    </form>
  );
};
