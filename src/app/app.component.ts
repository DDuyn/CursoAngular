import { Component, OnChanges } from '@angular/core';
import { Books } from './Books'
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'devShop';
  book: Books
  showList: boolean

constructor(private languageService: LanguageService){
  this.languageService.setLanguage('es')
  this.showList = false
}

ngOnChanges(){
  
}


  showDetailItem(event: Books){
    this.book = event
    this.showList = false
  }

  showListItems(event: boolean){
      this.book = null
      this.showList = event
  }

  showPage(event: string){
    if (event == 'Home'){
      this.showList = false
    }else if (event == 'Links'){
      this.showList = true
    }
  }

}
