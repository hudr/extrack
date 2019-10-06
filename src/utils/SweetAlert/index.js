import Swal from 'sweetalert2'

export const forgotpw = () => {
  Swal.fire({
    type: 'success',
    title: 'Your reset email has been sent',
    showConfirmButton: false,
    timer: 3500,
    width: '300px',
    backdrop: `
    rgba(0,0,0,0.7)
    center left
    no-repeat
  `
  })
}

export const profile = () => {
  Swal.fire({
    type: 'success',
    title: 'Your profile was updated',
    showConfirmButton: false,
    timer: 3500,
    width: '300px',
    backdrop: `
      rgba(0,0,0,0.7)
      center left
      no-repeat
    `
  })
}
