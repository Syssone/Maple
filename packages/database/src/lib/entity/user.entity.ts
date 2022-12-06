import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn({})
  id: ObjectID | undefined;

  @PrimaryGeneratedColumn('uuid')
  uid: string | undefined;

  @Column()
  firstName: string | undefined;

  @Column()
  lastName: string | undefined;

  @Column()
  age: number | undefined;
}
