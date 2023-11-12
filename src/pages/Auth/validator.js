export const emailValidator = email => {
  if (!email) {
    return "Email is required"
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Incorrect email format"
  }

  return ""
}

export const passwordValidator = password => {
  if (!password) {
    return "Passwordi is required"
  } else if (password.length < 8) {
    return "Password must have a minimum 8 characters"
  }

  return ""
}

export const confirmPasswordValidator = (confirmPassword, password) => {
  if (!confirmPassword) {
    return "Confirm password is required"
  } else if (confirmPassword.length < 8) {
    return "Confirm password must have a minimum 8 charaters"
  } else if (confirmPassword !== password) {
    return "Passwords do not match"
  }

  return ""
}