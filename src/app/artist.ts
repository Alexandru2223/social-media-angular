import {Painting} from './painting';
import {Like} from './like';

export class Artist {
  artistId: number;
  fullName: string;
  email: string;
  born: Date;
  country: string;
  avatar: string | ArrayBuffer;
  paintings: Painting[];
  likes: Like[];
  comments: Comment[];
}
