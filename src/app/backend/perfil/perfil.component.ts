import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  firstName1:string = 'Pablo Perez García';
  email1:string = "pablito_clavo@unclavito.com";
  description1:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam vero architecto repellendus nemo dolorem nulla quam, eum totam nostrum molestiae iusto reprehenderit tempore iste, excepturi possimus! Earum, consectetur veritatis.';

  firstName2:string = '';
  email2:string = '';
  description2:string = '';

  guardar:boolean = false;
  urlImg:string = '../../../assets/img/profile.png';

  constructor() { }

  ngOnInit(): void {
  }

  change():void {
    this.firstName2 = this.firstName1;
    this.email2 = this.email1;
    this.description2 = this.description1;
  }

  cancel():void {
    this.firstName2 = '';
    this.email2 = '';
    this.description2 = '';
  }

  save():void {
    this.firstName1 = this.firstName2;
    this.email1 = this.email2;
    this.description1 = this.description2;
  }

  show(evt):void {
    if (evt.target.files && evt.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.urlImg = event.target.result;
      }
  
      reader.readAsDataURL(evt.target.files[0]);
      this.guardar = true;
    }
  }

  reset():void {
    this.urlImg = '../../../assets/img/profile.png';
    this.guardar = false;
  }

}
