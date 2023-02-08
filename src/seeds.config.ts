import typeormConfig from './typeorm-psql.config';

const seedConfig = {
  ...typeormConfig,
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
};

export default seedConfig;
