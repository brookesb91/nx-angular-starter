export interface AuthState<TUser> {
  user: TUser;
  isLoading: boolean;
  isLoaded: boolean;
  isAuthorised: boolean;
}
