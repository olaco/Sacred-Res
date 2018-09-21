import { Member } from './../members.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('nameInput')nameInputRef: ElementRef;
  @ViewChild('fileInput')fileInputRef: ElementRef;
  members: Member [];

  constructor(private mService: MemberService) { }

  ngOnInit() {
    this.members = this.mService.getMember();
  }

  onAddTeam(member: Member) {
    this.members.push(member);
    const ingFile = this.fileInputRef.nativeElement.value;
    const ingName = this.nameInputRef.nativeElement.value;
    const newMember =  new Member(ingName, ingFile);
    this.mService.onAddTeam(newMember);
    console.log(newMember);

  }


}
