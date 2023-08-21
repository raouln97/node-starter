export interface UserDtoRes {
    userName: string
    password: string
    email: string
    roles: string[]
  }

export interface SignInRes {
    userName: string
    password: string
  }

export interface ForgotPasswordDTORes {
    userName: string
  }