import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  classForm = this.formBuilder.group({
    name: [''],
    password:[''],
    confirm_password:[''],
    race:[{
      name:''
    }],
    class:[{
      name:'',roles:[{name:''}]
    }],
    level:[0],
    description:[''],
  }) 

  classes$ : Observable<Class[]>;
  races$: Observable<Race[]>;

  constructor(private formBuilder: FormBuilder, warcraftService: WarcraftService) { 
    this.classes$ = warcraftService.getClasses();
    this.races$ = warcraftService.getAllianceRaces();
  }

  ngOnInit(): void {
  }

  onSubmit() { 
    console.log(this.classForm.value)
  } 

  onAutofill() {
    this.classForm.patchValue({
      name: 'Magnus',
      password: 'Mag',
      confirm_password: 'Mag',
      class: {
        name: 'YaYeet',
        roles: [{ name: 'YaYeeter' }],
      },
      race: {
        name: 'NotHuman',
      },

      level: 2,
      description: 'Heyy',
    });
  }

  compareClasses(c1: Class, c2: Class) {
    return c1 && c2 ? c1.name === c2.name : c1 === c2;
  }


}
