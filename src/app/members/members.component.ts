import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Member } from './../members.model';
import { MemberService } from './../member.service';
import { Component, OnInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnDestroy {
  members: Member [];
  private subscription: Subscription;
  constructor(private mService: MemberService,
  private router: Router ) { }

  ngOnInit() {
    this.members = this.mService.getMember();
   this.subscription = this.mService.memberAdded
    .subscribe(
      (members: Member[]) => {
        this.members = this.members;
      }
    );
  }

  onReload() {
    this.router.navigate(['/admin']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
