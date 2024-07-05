const process = require('process');
const cp = require('child_process');
const path = require('path');

test('test runs', () => {
  process.env['GITHUB_EVENT_PATH'] = './fixtures/event.json';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  expect(result).toContain('::set-output name=name::civilian-tan');
});

test('test runs with seed', () => {
  process.env['GITHUB_EVENT_PATH'] = './fixtures/event.json';
  process.env['INPUT_SEED'] = 'test-seed';
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  expect(result).toContain('::set-output name=name::damp-orange');
});
