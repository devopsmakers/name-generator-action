# pr-name-generator-action
A Github action to create consistent and unique names for PR based environments.

Uses [unique-names-generator](https://github.com/andreasonny83/unique-names-generator)
and a "seed" based on the repo owner, name and issue (PR) number to generate a
unique and consistent name.
This makes it easy to deploy and clean up ephemaral environments on PR open, close or merge without needing to keep track of a 
non-deterministic unique name.
The seed can be overriden also with `seed` input.

## Inputs
### `seed`
String. Not required.

## Outputs
### `name`
The generated unique and consistent name

## Example Usage
See:
- [example_deploy.yml](https://github.com/devopsmakers/pr-name-generator-action/blob/main/.github/workflows/example_deploy.yml)
- [example_destroy.yml](https://github.com/devopsmakers/pr-name-generator-action/blob/main/.github/workflows/example_destroy.yml)
- [PR #6](https://github.com/devopsmakers/pr-name-generator-action/pull/6)
