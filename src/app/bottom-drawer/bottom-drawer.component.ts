import {Component} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Section} from '../drawer/drawer.component';

@Component({
  selector: 'app-bottom-drawer',
  templateUrl: './bottom-drawer.component.html',
  styleUrls: ['./bottom-drawer.component.css']
})
export class BottomDrawerComponent {
  folders: Section[] = [
    {
      name: 'Home',
      updated: new Date('1/1/16'),
      icon: 'home',
    },
    {
      name: 'Favourite',
      updated: new Date('1/17/16'),
      icon: 'favorite',
    },
    {
      name: 'Bookmark',
      updated: new Date('1/28/16'),
      icon: 'bookmark',
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
      icon: 'note',
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      icon: 'note',
    }
  ];

  constructor(private bottomSheetRef: MatBottomSheetRef<BottomDrawerComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
