// @ts-ignore
import Listr from 'listr';
import glob from 'glob-promise';
import path from 'path';
// @ts-ignore
import execa from 'execa';

const RELATIVE_PATH = '../../inshur-openapi-spec/src';
const SHARED_PATH = path.join(__dirname, '../');
const OUTPUT_PATH = path.join(SHARED_PATH, 'apis');

const ABSOLUTE_PATH = path.join(__dirname, RELATIVE_PATH);
const SPEC_GLOB = path.join(ABSOLUTE_PATH, '**/*.yaml');
const LOCAL_GLOB = path.join(SHARED_PATH, 'openapi', '**/*.yaml');

(async () => {
  const external_specs = await glob(SPEC_GLOB);
  const local_specs = await glob(LOCAL_GLOB);
  const result = [...external_specs, ...local_specs];

  const files = result.map((f) => {
    const name = path.basename(f, '.v1.yaml');
    const file = path.basename(f);
    const directory = path.dirname(f);
    const output = path.join(OUTPUT_PATH, `${name}-api`);

    return {
      name,
      file,
      directory,
      output,
      path: f,
    };
  });

  const tasks = new Listr(
    files.map((file) => ({
      title: `Generating types for the ${file.name} api`,
      task: async () => {
        await execa('openapi-generator', [
          'generate',
          '-i',
          file.path,
          '-g',
          'typescript-axios',
          '-o',
          file.output,
          '--reserved-words-mappings',
          'package=package',
        ]);
      },
    })),
    { concurrent: true }
  );

  await tasks.run();
})();
