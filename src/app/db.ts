import { Options as PoolOptions } from 'generic-pool'
import * as snowflake from 'snowflake-sdk'

const connectionOptions: snowflake.ConnectionOptions = {
  account: process.env.SNOWFLAKE_ACCOUNT!,
  database: process.env.SNOWFLAKE_DB,
  schema: process.env.SNOWFLAKE_SCHEMA,
  username: process.env.SNOWFLAKE_USERNAME,
  password: process.env.SNOWFLAKE_PASSWORD,
  warehouse: process.env.SNOWFLAKE_WAREHOUSE,
}

const poolOptions: PoolOptions = {
  max: 10,
  min: 2,
}

export const connectionPool = snowflake.createPool(
  connectionOptions,
  poolOptions,
)