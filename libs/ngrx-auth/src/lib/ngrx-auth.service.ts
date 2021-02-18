import { Observable } from 'rxjs';

export interface NgrxAuthService<TUser> {
  login<TPayload>(payload: TPayload): Observable<TUser>;
  logout(): Observable<boolean>;
  recover<TPayload>(payload: TPayload): Observable<boolean>;
  reset<TPayload>(payload: TPayload): Observable<TUser>;
  activate<TPayload>(payload: TPayload): Observable<TUser>;
  update<TPayload>(payload: TPayload): Observable<TUser>;
}
