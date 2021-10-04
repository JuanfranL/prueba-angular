import { Component, Input, OnInit } from '@angular/core';

export interface ListDataCard {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  content?: string; //can be template
  footer: string[];

}

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
/**
 * This is a common component that has to be in a loop to iterate each item
 */
export class ListCardComponent implements OnInit {
  /**
   * input data of the list data card
   */
  @Input() card: ListDataCard|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
