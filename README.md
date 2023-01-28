# Kenneth Trecy's Personal Website
This is my personal website.

## Origin
Some parts of the repository was based from [`docker_js-mocha-svelte-typescript-sass`] branch of
[Web Template].

The template is specialized for front-end development.

## Usage
You can modify this repository's files' content or names as much as you want.

### Initialization
This repository should be initialized to adhere in [Conventional Commits specification] for organize
commits and automated generation of change log.

#### Prerequisites
- [Node.js and NPM]
- [pnpm] (optional)

#### Instructions
By running the command below, all your commits will be linted to follow the [Conventional Commits
specification].
```
$ npm install
```

Or if you have installed [pnpm], run the following command:
```
$ pnpm install
```

To generate the change log automatically, run the command below:
```
$ npx changelogen --from=[tag name or branch name or commit itself] --to=master
```

To run the website on local environemnt, run the following command:
```
npm run dev
```

### License
The repository's code (but not the paragraphs containing my information) is licensed under [MIT].

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

[`docker_js-mocha-svelte-typescript-sass`]: https://github.com/KennethTrecy/web_template/tree/docker_js-mocha-svelte-typescript-sass
[Web Template]: https://github.com/KennethTrecy/web_template/
[MIT]: https://github.com/KennethTrecy/web_template/blob/master/LICENSE
[Node.js and NPM]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md
