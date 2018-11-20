import { Subject } from 'rxjs';
import { Member } from './../members.model';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // @ViewChild('nameInput')nameInputRef: ElementRef;
  // @ViewChild('fileInput')fileInputRef: ElementRef;
  searchTerm: string;
  index;
  members: Member [];
  member = new Member();



  constructor(private mService: MemberService) { }

  ngOnInit() {
    this.mService.getMember()
    .subscribe(
      data => this.members = data,
      err => console.log(err),
      () => console.log('member')
    );
    // this.mService.memberAdded
    // .subscribe(
    //   (members: Member[]) => {
    //     this.members = members;
    //   }
    // );
  }

  onAddTeam() {
    // this.members.push(member);
    // const ingFile = this.fileInputRef.nativeElement.value;
    // const ingName = this.nameInputRef.nativeElement.value;

    this.mService.onAddTeam(this.member).subscribe(
      data => this.members = data,
  );


  }

  onDelete(index: Member) {
    if (index !== null) {
      this.mService.DeleteMember(index.id).subscribe(
        data => this.members = data,
    );
    // for (let i = 0; i <= this.members.length; i++) {


    //     pipe(
    //       map((res) => {
    //         this.members = res['data'];
    //         return this.members;
    //       }),
    //       catchError(this.handleError)
    //     );
    //   }
    }

  }


 }
