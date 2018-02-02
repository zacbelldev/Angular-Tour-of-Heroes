import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent implements OnInit {
  heroRanks: Hero[]; 

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroData();
  }

  getHeroData(): void {
    // if (heroes.hero.rank >3) {
      this.heroService.getHeroes().subscribe(h => this.heroRanks = h);
    // })
    // for (let entry of this.heroRanks) {
    //   console.log(entry); // 1, "string", false
    // }
  }
}



