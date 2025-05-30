import { defineConfig } from '@liangskyli/openapi-gen-ts';

export default defineConfig({
  genTsDir: './gen-ts',
  //openapiPath: './gen-openapi-dir/openapi/openapi-v3.json',
  openapiPath: new URL(
    './gen-openapi-dir/openapi/openapi-v3.json',
    // @ts-ignore
    import.meta.url,
  ),
});
