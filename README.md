[![Web Front-end Tests](https://img.shields.io/github/actions/workflow/status/KennethTrecy/kennethtrecy.pages.dev/front-end.yml?style=for-the-badge)](https://github.com/KennethTrecy/kennethtrecy.pages.dev/actions/workflows/front-end.yml)
![GitHub lines](https://img.shields.io/github/license/KennethTrecy/kennethtrecy.pages.dev?style=for-the-badge)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/KennethTrecy/kennethtrecy.pages.dev?style=for-the-badge&display_name=tag&sort=semver)
![GitHub closed issues count](https://img.shields.io/github/issues-closed/KennethTrecy/kennethtrecy.pages.dev?style=for-the-badge)
![GitHub pull request count](https://img.shields.io/github/issues-pr-closed/KennethTrecy/kennethtrecy.pages.dev?style=for-the-badge)
![Commits since latest version](https://img.shields.io/github/commits-since/KennethTrecy/kennethtrecy.pages.dev/latest/dev?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/repo-size/KennethTrecy/kennethtrecy.pages.dev?style=for-the-badge)

# Kenneth Trecy's Personal Website
This is my personal website.

Other programmers may fork it and customize the website's code according to their needs as it has
been licensed under [MIT]. The website complies with [semantic versioning specification]. With that,
other developers can know which code like components, APIs, or test utilities will be broken in the
next release.

## Origin
Some parts of the repository was based from [`sveltekit`] branch of [Web Template].

The template is specialized for front-end development.

## Usage

### Initialization
This repository should be initialized to adhere in [Conventional Commits specification] for organize
commits and automated generation of change log.

#### Prerequisites
- [Node.js environment]
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

To run the website on local environment, run the following command:
```
npm run dev
```

## Notes
Before hosting your fork of this website, replace the website's articles or any content referring to my personal information with your own articles and personal information, unless it is for the purpose of acknowledging my work.

### License
The repository's code (but not the paragraphs such as containing my information) is licensed under [MIT].

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

### Disclaimer
This personal project may contain references to trademarks, which are included in good faith. However, it is important to note that such references do not indicate any endorsement, affiliation, or sponsorship by the respective trademark holders unless explicitly stated.

[`sveltekit`]: https://github.com/KennethTrecy/web_template/tree/sveltekit
[Web Template]: https://github.com/KennethTrecy/web_template/

[MIT]: https://github.com/KennethTrecy/web_template/blob/master/LICENSE
[Node.js environment]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md
[semantic versioning specification]: https://semver.org/
