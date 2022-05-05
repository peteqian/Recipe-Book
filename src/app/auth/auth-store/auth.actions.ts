import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

// export const LOGIN_START = '[Auth] Login Start';
// export const AUTHENTICATE_SUCCESS = '[Auth] Login';
// export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
// export const SIGNUP_START = '[Auth] Signup Start';
// export const CLEAR_ERROR = '[Auth] Clear Error';
// export const AUTO_LOGIN = '[Auth] Auto Login';
// export const LOGOUT = '[Auth] Logout';

// export class LoginStart implements Action {
//   readonly type = LOGIN_START;

//   constructor(public payload: { email: string; password: string }) {}
// }

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{
    email: string;
    password: string;
  }>()
);

// export class AuthenticateSuccess implements Action {
//   readonly type = AUTHENTICATE_SUCCESS;

//   constructor(
//     public payload: {
//       email: string;
//       userId: string;
//       token: string;
//       expirationDate: Date;
//       redirect: boolean;
//     }
//   ) {}
// }
export const authenticateSuccess = createAction(
  '[Auth] Authenticate Success',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
  }>()
);
// export class AuthenticateFail implements Action {
//   readonly type = AUTHENTICATE_FAIL;

//   constructor(public payload: string) {}
// }
export const authenticateFail = createAction(
  '[Auth] Authenticate Fail',
  props<{
    errorMessage: string;
  }>()
);

// export class SignupStart implements Action {
//   readonly type = SIGNUP_START;

//   constructor(public payload: { email: string; password: string }) {}
// }
export const signupStart = createAction(
  '[Auth] Signup Start',
  props<{
    email: string;
    password: string;
  }>()
);

// export class ClearError implements Action {
//   readonly type = CLEAR_ERROR;
// }
export const clearError = createAction('[Auth] Clear Error');

// export class LogOut implements Action {
//   readonly type = LOGOUT;
// }
export const logout = createAction('[Auth] Logout');

// export class AutoLogin implements Action {
//   readonly type = AUTO_LOGIN;
// }
export const autoLogin = createAction('[Auth] Auto Login');

// export type AuthActions =
//   | AuthenticateSuccess
//   | LogOut
//   | LoginStart
//   | AuthenticateFail
//   | SignupStart
//   | ClearError
//   | AutoLogin;
