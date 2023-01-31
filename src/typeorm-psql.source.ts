// This file is only used to run package.json scripts related to database
import { DataSource } from 'typeorm';
import config from './typeorm-psql.config';

const dataSource: DataSource = new DataSource(config);

export default dataSource;
