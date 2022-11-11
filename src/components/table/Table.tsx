import { Link, useNavigate } from 'react-router-dom';

import { IUser } from '../../interfaces/user';
import { deleteUser } from '../../services/users';
import { handleSwal } from '../../helpers/handleSwal';

interface Props {
  data?: IUser[];
  page:  number;
  limit: number;
}

export const Table = ({ data, page, limit }: Props) => {
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    handleSwal({ 
      request: () => deleteUser(id),
      navigate: () => navigate('/'), 
      title: 'Are you sure you want to delete the user?',
      desc: 'This action cannot be reversed.',
    });
  };

  return (
    <div className='flex-grow w-full h-full px-5 mt-10 border rounded-xl overflow-y-auto hideScroll border-gray-100'>
      <div className='flex w-full h-12 items-center justify-center text-center font-semibold bg-white text-gray-500'>
        <span className='hidden xl:block flex-grow overflow-x-auto hideScroll'></span>
        <span className='hidden md:block md:w-[45%] xl:w-[20%] overflow-x-auto hideScroll'>Name</span>
        <span className='w-[60%] md:w-[40%] xl:w-[20%] overflow-x-auto hideScroll'>Email</span>
        <span className='hidden xl:block w-[20%] overflow-x-auto hideScroll'>City</span>
        <span className='hidden xl:block w-[20%] overflow-x-auto hideScroll'>Company</span>
        <span className='w-[40%] md:w-[15%] overflow-x-auto hideScroll'>Actions</span>
      </div>
      
      <div className='w-full bg-white'>
        {
          data?.map( ({ id, name = 'N/A', email = 'N/A', address, company }, index) => {
            return (
              <div 
                key={id} 
                className={`
                  flex w-full h-14 items-center justify-center text-center border-b 
                  overflow-hidden
                  transition-all duration-150 hover:bg-gray-100 hover:text-gray-500
                `}
              >
                <span className='hidden xl:block flex-grow overflow-x-auto hideScroll'>{ ((page - 1) * limit) + index + 1 }</span>
                <span className='hidden md:block md:w-[45%] xl:w-[20%] overflow-x-auto hideScroll'>{name}</span>
                <span className='w-[60%] md:w-[40%] xl:w-[20%] overflow-x-auto hideScroll'>{email}</span>
                <span className='hidden xl:block w-[20%] overflow-x-auto hideScroll'>{address?.city || 'N/A'}</span>
                <span className='hidden xl:block w-[20%] overflow-x-auto hideScroll'>{company?.name || 'N/A'}</span>
                
                <div className='w-[40%] md:w-[15%] overflow-x-auto hideScroll'>
                  <Link 
                    to={`user/${id}`} 
                    className='material-icons-outlined transition-all duration-100 hover:text-black'
                  >
                    edit
                  </Link>

                  <button className="material-icons-outlined transition-all duration-100 hover:text-black" onClick={ () => { handleDelete( id! ) } }>delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
