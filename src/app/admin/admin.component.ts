import { Member } from './../members.model';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  members: Member [];

  constructor(private mService: MemberService) { }

  ngOnInit() {
  }

}
