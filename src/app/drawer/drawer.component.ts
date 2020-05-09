import {Component, HostListener, OnInit} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BottomDrawerComponent} from '../bottom-drawer/bottom-drawer.component';
import {BreakpointObserver} from '@angular/cdk/layout';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  opened: boolean;
  isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }
  constructor(private bottomSheet: MatBottomSheet, private breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomDrawerComponent);
  }
}

