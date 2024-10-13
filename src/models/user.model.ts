
import { IsEmail } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne} from "typeorm";
import { getIsInvalidMessage } from "../utils";
import ExtendedBaseEntity from "../base-entity";
import { UserPlaylist, UserSong } from ".";
@Entity({ name: "users" })
export class User extends ExtendedBaseEntity {

  @Column({ nullable: false })
  first_name: string;

  @Column({ nullable: false })
  last_name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true, nullable: false })
  @IsEmail(undefined, { message: getIsInvalidMessage("Email") })
  email: string;

  @Column()
  password: string;
  
  @Column({ nullable: true })
  google_id: string;

  @Column({ default: false })
  is_verified: boolean;

  @Column({ nullable: true })
  is_verified_date: Date;

  @Column({ nullable: true })
  image_url: string;

  // Soft delete flag
  @Column({ default: false })
  is_deleted: boolean;

  @OneToMany(() => UserPlaylist, (userPlaylist) => userPlaylist.user)
  likedPlaylists: UserPlaylist[];

  @OneToMany(() => UserSong, (userSong) => userSong.user)
  likedSongs: UserSong[];

}
