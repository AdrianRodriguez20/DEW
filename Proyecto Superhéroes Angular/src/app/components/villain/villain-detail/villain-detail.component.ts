import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Villain } from '../../../interfaces/villain';
import { VillainService } from '../../../services/villain.service';
@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent implements OnInit {

  villain: Villain;
  constructor(
    private route: ActivatedRoute,
    private villainService: VillainService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVillain();
   
  }
  getVillain(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.villainService.getVillain(id)
      .subscribe(villain => this.villain = villain);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.villainService.updateVillain(this.villain)
      .subscribe(() => this.goBack());
  }
  seeColour():void{
   document.getElementById("color").style.backgroundColor= (<HTMLInputElement>document.getElementById("color")).value;
   document.getElementById("color").style.color="white";
  }
  year():void{
    if((<HTMLInputElement>document.getElementById("fechaNacimiento")).value!=="Desconocido"){
    var birthday_arr: string[] = (<HTMLInputElement>document.getElementById("fechaNacimiento")).value.split("/");
    var birthday_date:Date = new Date(Number(birthday_arr[2]), Number(birthday_arr[1]) - 1, Number(birthday_arr[0]));
    var ageDifMs = Date.now() - birthday_date.getTime();
    var ageDate:Date = new Date(ageDifMs);
    const output = document.getElementById("edad");
    if (output) output.innerHTML = "<label>Edad: <input class='form-control' value="+ String(Math.abs(ageDate.getUTCFullYear() - 1970))+"></label>"
    }else{
     alert("Solo puedes conocer la edad de aquellos que S.H.I.E.L.D tenga constancia de su fecha de nacimiento") 
    }
   
  }

}
