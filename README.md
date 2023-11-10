# KEngine CLI
[![Documentation][docs_badge]][docs]
[![Latest Release][release_badge]][release]
[![License][license_badge]][license]<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


[![Observability for serverless](./images/kengine.gif)](https://kengine.khulnasoft.com?utm_campaign=kengine-kengine-cli-github-repo&utm_source=github.com&utm_medium=top-banner)


🛠️ The Developer Toolset for the Serverless World

- 📊 Observability in your terminal: tail your logs and view your traces in your terminal (and finally close your CloudWatch browser tabs)
- 🪄 Observability as Code: manage your queries, alerts, slos, and more all as code
- 🧭 Works with any IaC, from the Serverless Framework to SST

---

## Table of Contents

1. [Introduction](#introduction)
1. [Goal](#Goal)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Documentation](#documentation)
1. [Contributing](#contributing)
1. [License](#license)

## Introduction

The official command line client for [kengine](https://kengine.khulnasoft.com/). Kengine CLI
brings the power of Kengine and Observability as Code to the command-line.

Documentation is available on the [Kengine Docs](https://kengine.khulnasoft.com/docs/cli/install/).

## Goal

The Goal of the Kengine CLI is to provide a simple interface to interact with your Kengine
applications and deploy your Observability as Code configurations. 

## Installation

Installing the CLI globally provides access to the Kengine command.

### Install manually

```shell
curl -s https://https://raw.githubusercontent.com/khulnasoft/kengine-cli/install | bash
```

### Install using [Homebrew](https://brew.sh)

```shell
brew tap kengine/tap
brew install kengine
```

To update:

```shell
brew upgrade kengine
```

### Install using [npm](npmjs.com/)

```shell
$ npm install kengine-cli -g
```

### Download the compiled binary manually

Binary releases are available on
[GitHub Releases](https://github.com/khulnasoft/kengine-cli/releases/latest).

### Docker
Binary is also distributed as a [docker image](https://hub.docker.com/r/khulnasoft/kengine)

### Validate installation

In all cases the installation can be validated by running `kengine -v` in the
terminal:

```shell
0.0.78
```

## Usage

```shell
kengine <command>
kengine <command> <subcommand> [flags]
```

### Configuration

The configuration files are located in `~/.config/kengine`. Each profile is saved in a file named against the profile.
The default profile is saved in `~/.config/kengine/default.json`.
Configuration values can also be set using flags.

#### Troubleshooting

If unexpected errors occur when using `kengine`,
make sure your environment is clean of any `KENGINE_` prefixed variables.
Use the `--debug` flag to print in the console the stack trace of any error you encounter.

## Documentation

To learn how to use Kengine to start observing your serverless applications, visit the
[Kengine documentation](https://kengine.khulnasoft.com/docs/).

For full command reference, see the list below, or visit
[docs.khulnasoft.com](https://kengine.khulnasoft.com/docs/reference/cli).

## Contributing

Feel free to submit PRs or to fill issues. Every kind of help is appreciated. 

Kindly check our [Contributing](Contributing.md) guide on how to propose
bugfixes and improvements, and submitting pull requests to the project.

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://boristane.com/"><img src="https://avatars.githubusercontent.com/u/10452259?v=4?s=100" width="100px;" alt="Boris Tane"/><br /><sub><b>Boris Tane</b></sub></a><br /><a href="https://github.com/khulnasoft/kengine-cli/commits?author=boristane" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Lastin"><img src="https://avatars.githubusercontent.com/u/5638394?v=4?s=100" width="100px;" alt="Maksym Makuch"/><br /><sub><b>Maksym Makuch</b></sub></a><br /><a href="https://github.com/khulnasoft/kengine-cli/commits?author=Lastin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ankcorn.dev"><img src="https://avatars.githubusercontent.com/u/7361428?v=4?s=100" width="100px;" alt="Thomas Ankcorn"/><br /><sub><b>Thomas Ankcorn</b></sub></a><br /><a href="https://github.com/khulnasoft/kengine-cli/commits?author=Ankcorn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://maxdiamond.co.uk"><img src="https://avatars.githubusercontent.com/u/23747483?v=4?s=100" width="100px;" alt="Max Diamond"/><br /><sub><b>Max Diamond</b></sub></a><br /><a href="https://github.com/khulnasoft/kengine-cli/commits?author=dmdboi" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

&copy; KhulnaSoft Limited, 2023

Distributed under MIT License (`The MIT License`).

See [LICENSE](LICENSE) for more information.

<!-- Badges -->

[docs]: https://kengine.khulnasoft.com/docs/
[docs_badge]: https://img.shields.io/badge/docs-reference-blue.svg?style=flat-square
[release]: https://github.com/khulnasoft/kengine-cli/releases/latest
[release_badge]: https://img.shields.io/github/release/khulnasoft/kengine-cli.svg?style=flat-square&ghcache=unused
[license]: https://opensource.org/licenses/MIT
[license_badge]: https://img.shields.io/github/license/khulnasoft/kengine-cli.svg?color=blue&style=flat-square&ghcache=unused
