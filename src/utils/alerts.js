import Swal from 'sweetalert2';

export const showLoading = () => {
  Swal.fire({
    title: 'Enviando...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });
};

export const showSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Mensaje enviado',
    confirmButtonColor: '#d4ff00',
    customClass: {
      confirmButton: 'swal-confirm-btn'
    }
  });
};

export const showError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error al enviar',
    confirmButtonColor: '#d4ff00'
  });
};