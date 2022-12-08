import { MikroORM } from '@mikro-orm/core';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';
export { MikroORM } from '@mikro-orm/core';
export type MapleDataBaseOption = {
  type:
    | 'mysql'
    | 'mariadb'
    | 'sqlite'
    | 'mongo'
    | 'postgresql'
    | 'better-sqlite';
  host: string;
  port: number;
  dbName: string;
};
export const MapleDatabase = async (
  opt: MapleDataBaseOption = {
    type: 'mongo',
    host: 'localhost',
    port: 27017,
    dbName: 'maple-dev',
  }
) =>
  await MikroORM.init({
    // host: opt.host,
    // port: opt.port,
    clientUrl: 'mongodb://localhost:27017/maple-dev',
    type: opt.type,
    dbName: opt.dbName,
    allowGlobalContext: true,
    entities: [User], // path to our JS entities (dist), relative to `baseDir`
  });
