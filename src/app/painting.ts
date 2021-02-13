import {Artist} from './artist';

export class Painting {
  paintingId: number;
  name: string;
  text: string;
  likes: number;
  date: Date;
  image: string | ArrayBuffer;
  artists: Artist[];
  comments: Comment[];
}
