import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  texto = "";

  constructor(private router: Router,private http: HttpClient) {}

  enviarText(){


      let postData = {
              "text": this.texto
      }

      this.http.post("https://obscure-sierra-83920.herokuapp.com/api/text", postData)
        .subscribe(data => {
          this.router.navigate(['/tabs/Post'])
        }, error => {
          console.log(error);
        });
   
  }

}
