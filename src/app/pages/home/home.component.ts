import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home/home.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public tests: any = [];

  constructor(private homeService: HomeService, private meta: Meta) {

  }

  ngOnInit(): void {
    this.homeService.getTests().subscribe(result => {
      console.log(result);
      this.tests = result;
      this.meta.addTag({
        charset: 'utf-8',
        name: 'type',
        content: 'anunturi masini'
      })
    })
  }
}
