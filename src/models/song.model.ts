import { Entity, ManyToOne, Column } from 'typeorm';
import { User } from './user.model';
import ExtendedBaseEntity from "../base-entity";


@Entity()
export class UserSong extends ExtendedBaseEntity {

  @ManyToOne(() => User, (user) => user.likedSongs)
  user: User;

  @Column('bigint') // Big integer type in the database
  songId: string; 
}
