import { Component, Input, OnInit } from '@angular/core';

export interface ListDataCard {
  id: number;
  title: string;
  image: string;
  footer: string[];
}

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() movieCard: ListDataCard|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
