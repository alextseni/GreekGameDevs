'use strict'
const fs = require('fs')
const path = require('path')
const defaults = require('./global')
let envConfigs = {}

/* Load Local Config By Default */
let env = 'local'
if (/(prod|production)/gi.test(process.env.NODE_ENV)) {
  env = 'prod'
} else {
  env = process.env.NODE_ENV || env
}

if (env) {
  const envPath = '/' + env + '.js'
  const absPath = path.resolve(__dirname + envPath)
  const fileExists = fs.existsSync(absPath)
  if (fileExists) {
    envConfigs = require('./' + env)
  }
}

/* Resolve App Root Path for Convinience */
const rootPath = path.resolve(__dirname + '/../')
defaults.root_path = rootPath

const configs = Object.assign({}, defaults, envConfigs)

module.exports = configs
