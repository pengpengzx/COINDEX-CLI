/*
 * @Author: Yepeng Zhang
 * @LastEditors: Yepeng Zhang
 */
const program = require('commander')
const key = require('../commands/key')

program
    .command('set')
    .description('Set API Key -- Get at Https://nomics.com')
    .action(key.set)

program
    .command('show')
    .description('Show API Key')
    .action(key.show)

program
    .command('remove')
    .description('Remove API Key')
    .action(key.remove)

program.parse(program.argv)