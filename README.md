# egg-profiler

provides egg bindings for the v8 profiler.

[![npm download](https://img.shields.io/github/actions/workflow/status/uccu/egg-profiler/npm-publish.yml)](https://github.com/uccu/egg-profiler/actions/workflows/npm-publish.yml)
[![NPM version][npm-image]][npm-url]
[![GitHub issues](https://img.shields.io/github/issues/uccu/egg-profiler)](https://github.com/uccu/egg-profiler/issues)
![GitHub](https://img.shields.io/github/license/uccu/egg-profiler)

[npm-image]: https://img.shields.io/npm/v/egg-profiler.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-profiler
[download-image]: https://img.shields.io/npm/dm/egg-profiler.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-profiler

## Install

```bash
$ npm i egg-profiler --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eggProfiler = {
  enable: true,
  package: 'egg-profiler',
};

/** 
 * anywhere start profiling
 * @param number time Milliseconds
 * /
this.app.profiler.profiling(time);

```

## Configuration

```js
// {app_root}/config/config.default.js
exports.eggProfiler = {
  name: 'profiling',
  timeFormate: 'YYYYMMDD-HHmmssSSS'
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/uccu/egg-profiler/issues).

## License

[MIT](LICENSE)
