import Swal from 'sweetalert2'

export const forgotpwSuccess = () => {
  Swal.fire({
    type: 'success',
    title: 'Your reset email has been sent',
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

export const profileSuccess = () => {
  Swal.fire({
    type: 'success',
    title: 'Your profile has been updated',
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

export const productSuccess = () => {
  Swal.fire({
    type: 'success',
    title: 'Product has been created',
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

export const productError = () => {
  Swal.fire({
    type: 'error',
    title: 'Please, fill all required fields',
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
