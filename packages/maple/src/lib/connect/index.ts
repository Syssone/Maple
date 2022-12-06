import {
  DataSource,
  MapleDatabase,
  MapleDataBaseOption,
} from '@maple/database';
export let MapleDB: DataSource;
export const connectDB = async (opt?: MapleDataBaseOption) => {
  MapleDB = MapleDatabase(opt);
  await MapleDB.initialize();
};
