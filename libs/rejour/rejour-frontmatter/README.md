> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `rejourFrontmatter()`

#### Signature

```ts
rejourFrontmatter(): Function;
```

#### Returns

`Function`

##### `Signature`

```ts
(tree: Root, file: VFile): void;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `tree` | `Root` |
| `file` | `VFile` |

##### `Returns`

`void`

Defined in:  [lib/rejour-frontmatter.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/rejour/rejour-frontmatter/src/lib/rejour-frontmatter.ts#L8)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add rejour-frontmatter
# or with yarn
# yarn add rejour-frontmatter
# or with npm
# npm install rejour-frontmatter
```

# rejour-frontmatter

Plugin for `rejour` that parses the frontmatter of a `JATS` document and adds it to the processing VFile as a list of `csl` citations.
