import Swal from 'sweetalert2';

import { IResponse } from '../interfaces/response';

interface IHandleSwal {
  request: () => Promise<IResponse>;
  navigate:      VoidFunction;
  title?:        string;
  desc?:         string;
  ask?:          boolean;
}

/**
 * Run requests on the backend using the "Sweetalert2" library
 */
export const handleSwal = async ({
  request,
  navigate,
  title,
  desc,
  ask = true,
}: IHandleSwal) => {
  if (ask) {
    const { isConfirmed } = await Swal.fire({
      title,
      text: desc,
      icon: 'warning',
    });

    if (!isConfirmed) return;
  }

  Swal.showLoading(null);

  const { code, msg } = await request();

  Swal.hideLoading();

  if (code !== 200)
    return Swal.fire({
      text: msg,
      icon: 'error',
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        container: 'position-absolute',
      },
      timer: 2000,
      timerProgressBar: true,
      position: 'bottom-right',
      toast: true,
      didOpen(toast) {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

  Swal.fire({
    text: msg,
    icon: 'success',
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      container: 'position-absolute',
    },
    position: 'bottom-right',
    timer: 2000,
    timerProgressBar: true,
    toast: true,
    didOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  
  navigate();
};
