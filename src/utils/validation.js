const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {}

  const emails = {}
  const password = {}

  if (!inputs.email) {
    emails.require = 'Se requiere un correo electrónico'
  }
  if (!regexEmail.test(inputs.email)) {
    emails.valid = 'Debe ser un correo electrónico válido';
  }
  if (inputs.email.length > 35) {
    emails.maxCharacters = 'El nombre de usuario no puede tener más de 35 caracteres';
  }
  if (!inputs.password) {
    password.requireP = 'Se requiere una contraseña';
  }

  if (!/.*\d+.*/i.test(inputs.password)) {
    password.validP = 'Debe contener al menos 1 número'
  }

  if (inputs.password.length > 10 || inputs.password.length < 6) {
    password.lengthP = 'Debe contener entre 6 y 10 caracteres'
  }

  errors.email = emails;
  errors.password = password;

  return errors
}

// TODO: { email1: Se requiere un correo electrónico, email2: El nombre de usuario no puede tener más de 35 caracteres', ...}