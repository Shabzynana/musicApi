import { Entity, ManyToOne, Column } from 'typeorm';
import { User } from '.';
import ExtendedBaseEntity from "../base-entity";


@Entity()
export class UserPlaylist extends ExtendedBaseEntity {

  @ManyToOne(() => User, (user) => user.likedPlaylists)
  user: User;

  @Column('bigint') // Big integer type in the database
  playlistId: string;

}
