import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  posts
  constructor(private http: HttpClient) {
    this.pegaDados();
  }

  pegaDados(){
    this.http.get("https://obscure-sierra-83920.herokuapp.com/api/text")
        .subscribe(response => {
          this.posts = response
          this.posts.reverse();
        }, error => {
          console.log(error);
        });
  }

  ionViewWillEnter(){
    this.pegaDados();
  }

}
