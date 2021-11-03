import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Matt Smith',
      'Developer',
      'https://static3.depositphotos.com/1002188/144/i/600/depositphotos_1448005-stock-photo-smile.jpg',
      
    ),
    new Place(
      'p2',
      "James Skokan",
      'Foreman',
      'https://www.papertraildesign.com/wp-content/uploads/2017/06/emoji-sunglasses.png',
      
    ),
    new Place(
      'p3',
      'Cory Ness',
      'Foreman',
      'https://www.papertraildesign.com/wp-content/uploads/2017/06/Happy-teeth.png',
      
    ),
    new Place(
      'p4',
      'Mike Dolato',
      'Plumber',
      'https://st.depositphotos.com/1787196/2514/i/600/depositphotos_25142717-stock-photo-3d-cartoon-cute-yellow-ball.jpg'
    ),
    new Place(
      'p5',
      'Brandon Adams',
      'Electrician',
      'https://www.pngitem.com/pimgs/m/35-357435_thumbs-up-clipart-free-happy-smiley-emoticon-face.png'
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
