import {Painting} from './painting';
import {Artist} from './artist';

export class Comment {
  id: number;
  artistId: number;
  paintingId: number;
  comment: string;
  date: Date;
  painting: Painting;
  artist: Artist;
}
