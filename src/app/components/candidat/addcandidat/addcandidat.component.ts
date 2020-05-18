import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/app/models/candidat';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.css']
})
export class AddcandidatComponent implements OnInit {

candidat: Candidat = new Candidat();
  submitted = false;
  constructor(private candidatService: CandidatService,   private router: Router) { }
  ngOnInit() {
  }
  newCandidat(): void {
    this.submitted = false;
    this.candidat = new Candidat();
  }
  saveCandidat() {
    this.candidatService.create(this.candidat)
      .subscribe(data =>
        console.log(data),
        error => console.log(error));
    this.candidat = new Candidat();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.saveCandidat();
  }
  gotoList() {
    this.router.navigate(['/listcandidats']);
  }
}


