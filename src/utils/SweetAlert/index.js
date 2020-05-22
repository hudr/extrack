import Swal from 'sweetalert2'

export const alertSuccessMessage = message => {
  Swal.fire({
    type: 'success',
    title: message,
    showConfirmButton: false,
    timer: 3000,
    width: '300px',
    backdrop: `
    rgba(0,0,0,0.7)
    center left
    no-repeat
  `,
  })
}

export const alertErrorMessage = message => {
  Swal.fire({
    type: 'error',
    title: message,
    showConfirmButton: false,
    timer: 3000,
    width: '300px',
    backdrop: `
      rgba(0,0,0,0.7)
      center left
      no-repeat
    `,
  })
}

export const alertTips = () => {
  Swal.fire({
    position: 'bottom-end',
    title: 'Hey! You have a new tip!',
    timer: 10000,

    showCancelButton: true,
    cancelButtonColor: '#059DFF',
    cancelButtonText: 'Ok',

    confirmButtonColor: '#00A40C ',
    confirmButtonText: 'Go to tips',
  }).then(result => {
    if (result.value) {
      window.location = '/tips'
    }
  })
}
