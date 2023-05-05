const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {}

  let emailErrors = []
  if (!regexEmail.test(inputs.email)) {
    emailErrors.push('Debe ser un correo electrónico válido');
  }
  if (inputs.email.length > 35) {
    emailErrors.push('El nombre de usuario no puede tener más de 35 caracteres');
  }
  if (!inputs.password) {
    errors.password = 'Se requiere una contraseña';
  }
  
  errors.email = emailErrors.join('\n')

  return errors
}