import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../services/contract.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  dataBlc:any;
  constructor(cs: ContractsService) {
    cs.getChirps().then(result  => {
      this.dataBlc = result;
    });
    
    }

  ngOnInit() {
  }

  chirps:string[] = ["test","chirp"]; 
  temp:string = "";  
  addChirp(chirpText:string){
    this.chirps.push(chirpText);
   
    this.temp = "";
    return false;
  }

}
