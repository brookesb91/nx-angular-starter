import { Observable } from 'rxjs';

export interface AuthService<TAuth> {
  login<TPayload>(payload: TPayload): Observable<TAuth>;
  logout(): Observable<boolean>;
  recover<TPayload>(payload: TPayload): Observable<boolean>;
  reset<TPayload>(payload: TPayload): Observable<TAuth>;
  activate<TPayload>(payload: TPayload): Observable<TAuth>;
  update<TPayload>(payload: TPayload): Observable<TAuth>;
}
