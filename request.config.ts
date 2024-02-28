import { defineConfig } from '@liangskyli/openapi-gen-ts';

export default defineConfig({
  genTsDir: './gen-ts',
  openapiPath: './gen-openapi-dir/openapi/openapi-v3.json',
});
