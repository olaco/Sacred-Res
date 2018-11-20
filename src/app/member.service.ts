import { Injectable } from '@angular/core';
import { Member } from './members.model';
import { Subject, Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {map, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberAdded = new Subject<Member[]>();
  onEdit = new Subject<number>();

  private members: Member [] = [

    // new Member( 'Sis Mary Olayinka'),
    // new Member( 'Bro Seyi Emmanuel'),
    // new Member( 'Bro Gbenga'),
    // new Member( 'Sis Chichi'),
    // new Member( 'Sis Ese'),
    // new Member( 'Sis Victoria'),
    // new Member( 'Sis Chinwe'),
    // new Member( 'Bro Ema'),
    // new Member( 'Bro Ema'),
    // new Member( 'Bro Ema'),
    // new Member( 'Bro Gibson'),
    // new Member( 'Bro Sam'),
    // new Member( 'Sis Bimbo'),
    // new Member('Sis Patience')
];
private handleError(error: HttpErrorResponse) {
  console.log(error);
  return throwError('Error! something went wrong');
}

  constructor( private http: HttpClient) { }

  getMember(): Observable<Member[]> {
    // return this.members.slice();
    return this.http.get<Member[]>('/select.php', httpOptions).pipe(
      map((res) => {
        this.members = res['data'];
        return this.members;
      }),
      catchError(this.handleError)
    );
  }

  // for Edit
  getEditMember(index: number) {
    return this.members[index];

  }

  onAddTeam(member: Member): Observable<Member[]>  {
    // this.members.push(member);
    // this.memberAdded.next(this.members.slice());
    return this.http.post<Member[]>('/insert.php', member , httpOptions).pipe(
      map((res) => {
        this.members = res['data'];
        return this.members;
      }),
      catchError(this.handleError)
    );
  }

  DeleteMember(index: number): Observable<Member[]> {
    // this.members.splice(index, 1);
    // this.memberAdded.next(this.members.slice());
    return this.http.delete<Member[]>('/delete.php?id=' + index, httpOptions).pipe(
      map((res) => {
        this.members = res['data'];
        return this.members;
      }),
      catchError(this.handleError)
    );

  }
}
