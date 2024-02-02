## Snowflake google cloud storage issue

This repo contains the minimal repro for https://github.com/snowflakedb/snowflake-connector-nodejs/issues/759

## Steps to reproduce

1. Install Next.js
2. Add snowflake connector
3. Create a server action [actions.ts](src/app//actions.ts)
4. Import the server action in a Client component. [page.tsx](src/app/page.tsx)

You shall see the following error in the console:

```
Module not found: Can't resolve 'request' in '/path/to/snowflake-google-cloud-storage-issue/node_modules/retry-request'

Import trace for requested module:
./node_modules/retry-request/index.js
./node_modules/@google-cloud/storage/build/src/nodejs-common/util.js
./node_modules/@google-cloud/storage/build/src/nodejs-common/index.js
./node_modules/@google-cloud/storage/build/src/bucket.js
./node_modules/@google-cloud/storage/build/src/index.js
./node_modules/snowflake-sdk/lib/file_transfer_agent/gcs_util.js
./node_modules/snowflake-sdk/lib/file_transfer_agent/remote_storage_util.js
./node_modules/snowflake-sdk/lib/file_transfer_agent/file_transfer_agent.js
./node_modules/snowflake-sdk/lib/connection/statement.js
./node_modules/snowflake-sdk/lib/connection/connection.js
./node_modules/snowflake-sdk/lib/core.js
./node_modules/snowflake-sdk/lib/snowflake.js
./node_modules/snowflake-sdk/index.js
./src/app/db.ts
./src/app/actions.tsx
```
