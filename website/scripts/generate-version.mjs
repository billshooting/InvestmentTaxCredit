import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(scriptDir, '..');
const packageJson = JSON.parse(
  readFileSync(resolve(websiteRoot, 'package.json'), 'utf8'),
);

function readGitValue(command, fallback = null) {
  try {
    return execSync(command, {
      cwd: websiteRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return fallback;
  }
}

const commit = process.env.GITHUB_SHA || readGitValue('git rev-parse HEAD');
const shortCommit =
  commit?.slice(0, 7) || readGitValue('git rev-parse --short HEAD', 'unknown');
const branch =
  process.env.GITHUB_REF_NAME ||
  readGitValue('git rev-parse --abbrev-ref HEAD', 'unknown');

const versionInfo = {
  name: 'Investment Tax Credit Website',
  packageName: packageJson.name,
  version: packageJson.version,
  build: shortCommit,
  commit: commit || 'unknown',
  branch,
  environment: 'static',
  status: 'deployed',
  generatedAt: new Date().toISOString(),
};

const publicDir = resolve(websiteRoot, 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(
  resolve(publicDir, 'version.json'),
  `${JSON.stringify(versionInfo, null, 2)}\n`,
);

console.log(`Generated version.json for ${versionInfo.build}`);
