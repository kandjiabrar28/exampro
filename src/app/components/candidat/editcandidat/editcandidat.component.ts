import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editcandidat',
  templateUrl: './editcandidat.component.html',
  styleUrls: ['./editcandidat.component.css']
})
export class EditcandidatComponent implements OnInit {

  candidats: Observable<Candidat[]>;
  constructor(private candidatService: CandidatService) {
  }


  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.candidats = this.candidatService.getCandidatsList();
  }
  deleteCandidat(id: number) {
    this.candidatService.deleteCandidat(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
