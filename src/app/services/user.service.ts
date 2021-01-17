import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import { Constants } from '../shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userUrl = `${Constants.SERVER_URL}/users`;

  constructor(private http: HttpClient) {}

  /**
   * Create a new user account
   * @param user => the user to be created
   */
  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this._userUrl}`, user);
  }

  /**
   * Activate user account
   * @param token => string token for the activation
   */
  public activateUserAccount(token: string): Observable<any> {
    return this.http.post<any>(
      `${this._userUrl}/userToken/?token=${token}`,
      {}
    );
  }

  public getUsersByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this._userUrl}/username/${username}`);
  }

  public updateUser(user: FormData): Observable<any> {
    return this.http.put(`${this._userUrl}`, user);
  }
  public discordAuth(code: string): Observable<number> {
    return this.http.get<number>(`${this._userUrl}/discord/${code}`);
  }

  public steamSync(
    userId: number,
    steamId: number,
    username: string
  ): Observable<User> {
    return this.http.get<User>(
      `${this._userUrl}/steam-con/${userId}/${steamId}/${username}`
    );
  }

  public refreshGames(userId: number): Observable<any> {
    return this.http.get<any>(`${this._userUrl}/refresh-games/${userId}`);
  }

  public checkSteamConnected(userId: number): Observable<any> {
    return this.http.get<any>(`${this._userUrl}/steam-connected/${userId}`);
  }

  public checkDiscordConnected(userId: number): Observable<any> {
    return this.http.get<any>(`${this._userUrl}/discord-connected/${userId}`);
  }

  public resetPassword(
    email: string,
    password: string,
    newPassword: string,
    isForgotten: boolean
  ): Observable<any> {
    return this.http.put(
      `${this._userUrl}/resetPassword?email=${email}&password=${password}&newPassword=${newPassword}&isForgotten=${isForgotten}`,
      {}
    );
  }
}
