import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';
export { DataSource } from 'typeorm';
export type MapleDataBaseOption = {
  type: 'mongodb' | 'mysql';
  host: string;
  port: number;
};
export const MapleDatabase = (
  opt: MapleDataBaseOption = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
  }
) =>
  new DataSource({
    type: opt.type,
    host: opt.host,
    port: opt.port,
    username: '',
    password: '',
    database: 'maple-dev',
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
  });
