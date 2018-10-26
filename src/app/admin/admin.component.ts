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

  onAddTeam(form: NgForm ) {
    // this.members.push(member);
    // const ingFile = this.fileInputRef.nativeElement.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    const value = form.value;
    const newMember =  new Member(value.name);
    this.mService.onAddTeam(newMember);
    console.log(newMember);
    form.reset();

  }

  onDelete(index) {
    for (let i = 0; i <= this.members.length; i++) {
      if (index === this.members[i]) {
        this.mService.DeleteMember(i);
      }
    }

  }


}
