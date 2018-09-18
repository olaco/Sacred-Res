import { Member } from './../members.model';
import { MemberService } from './../member.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member [];
  constructor(private mService: MemberService) { }

  ngOnInit() {
    this.members = this.mService.getMember();
    this.mService.memberAdded
    .subscribe(
      (members: Member[]) => {
        this.members = this.members;
      }
    );
  }

}
