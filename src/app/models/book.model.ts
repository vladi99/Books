export class Book {

  static maxRating = 5;
  static minRating = 1;
  static minPrice = 1;
  static maxPrice = 100;

  Id: number;
  Name: string;
  Author: string;
  PictureURL: string;
  Price: number;
  Rating: number;
  Description: string;
}
