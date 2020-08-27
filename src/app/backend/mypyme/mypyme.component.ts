import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypyme',
  templateUrl: './mypyme.component.html',
  styleUrls: ['./mypyme.component.css']
})
export class MypymeComponent implements OnInit {

  pyme:string = 'CAFETERIA';
  description:string = 'SOY LA DESCRIPCION DE LA CAFETERIA';

  constructor() { }

  ngOnInit(): void {
  }

}
