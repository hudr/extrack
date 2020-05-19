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
  `
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
    `
  })
}
