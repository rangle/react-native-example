/*eslint-disable */

// add extra commands after jest validation executed
process.argv = [...process.argv, '--configuration', 'ios.sim.release'];

import config, { IOS_SIM } from './config';
import cp from 'child_process';

const detox = require('detox');

async function setPermissions(permissions) {
  await cp.execSync(
    `applesimutils \\
    --simulator "${IOS_SIM}" \\
    --bundle io.rangle.starter.app \\
    --setPermissions "${permissions.join()}"`,
    {
      stdio: 'inherit',
    },
  );
}


beforeAll(async () => {
  await detox.init(config);
  await setPermissions(['camera=YES']);
  await device.relaunchApp();
}, 25000);

afterAll(async () => {
  await detox.cleanup();
});
