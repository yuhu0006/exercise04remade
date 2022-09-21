import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Class } from 'src/app/class.type';
import { Race } from 'src/app/race.type';
import { WarcraftService } from 'src/app/warcraft.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  

  classes$: Observable<Class[]>;
  races$: Observable<Race[]>

  constructor(warcraftService: WarcraftService) { 
    this.classes$ = warcraftService.getClasses();
    this.races$ = warcraftService.getHordeRaces();
  }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form.value)
  }

}
