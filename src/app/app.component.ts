import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild (MatSidenav) sideNav !: MatSidenav;
  sources : any = [];
  articles : any = []
  selectedNewChannel : any = "Top 10 Trending News"

  constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef, private newsService : NewsService){}

  ngOnInit() : void{
    this.newsService.initSources().subscribe((data:any)=>{
      this.sources = data.sources;
    });

    this.newsService.initArticles().subscribe((data:any)=>{
      console.log(data);
      this.articles = data.articles;
    })
  }

  ngAfterViewInit() : void{
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:800px)']).subscribe(res=>{
      if(res?.matches){
        this.sideNav.mode = "over";
        this.sideNav.close();
      }
      else{
        this.sideNav.mode = "side";
        this.sideNav.open();
      }
    })
    this.cd.detectChanges();
  }

  searchSources(source :any){
    this.newsService.getArticlesByID(source.id).subscribe((data:any)=>{
      this.articles = data.articles;
      this.selectedNewChannel = source.name;
    })
  }

}
