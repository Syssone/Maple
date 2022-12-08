import { MapleDatabase, MapleDataBaseOption, MikroORM } from '@maple/database';
export let MapleDB: MikroORM;
export const connectDB = async (opt?: MapleDataBaseOption) => {
  MapleDB = await MapleDatabase(opt);
  await MapleDB.getSchemaGenerator().createSchema();
};
