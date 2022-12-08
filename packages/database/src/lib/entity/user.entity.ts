import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base';

@Entity()
export class User extends BaseEntity {
  @Property()
  title!: string;
}
