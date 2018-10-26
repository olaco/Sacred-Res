import { Injectable } from '@angular/core';
import { Member } from './members.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberAdded = new Subject<Member[]>();
  onEdit = new Subject<number>();

  private members: Member [] = [

    new Member( 'Sis Mary Olayinka'),
    new Member( 'Bro Seyi Emmanuel'),
    new Member( 'Bro Gbenga'),
    new Member( 'Sis Chichi'),
    new Member( 'Sis Ese'),
    new Member( 'Sis Victoria'),
    new Member( 'Sis Chinwe'),
    new Member( 'Bro Ema'),
    new Member( 'Bro Ema'),
    new Member( 'Bro Ema'),
    new Member( 'Bro Gibson'),
    new Member( 'Bro Sam'),
    new Member( 'Sis Bimbo'),
    new Member('Sis Patience')




];

  constructor() { }

  getMember() {
    return this.members.slice();
  }

  // for Edit
  getEditMember(index: number) {
    return this.members[index];

  }

  onAddTeam(member: Member) {
    this.members.push(member);
    this.memberAdded.next(this.members.slice());
  }

  DeleteMember(index: number) {
    this.members.splice(index, 1);
    this.memberAdded.next(this.members.slice());

  }
}
