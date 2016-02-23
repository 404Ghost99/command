import indexBy from 'lodash.indexBy'
import pluck from 'lodash.pluck'

import * as Giphy from './Giphy/Giphy'
import * as Help from './Help/Help'
import * as Selfie from './Selfie/Selfie'

const COMMANDS = {
  Giphy,
  Help,
  Selfie
}

export let MATCHES = pluck(COMMANDS, 'match')
export let MATCH_TO_COMMAND = indexBy(COMMANDS, 'match')
export let MATCH_REGEX = new RegExp(`(?:^|\\s|>)\/(${MATCHES.join("|")})`)

export function match(text) {
  let match = text.match(MATCH_REGEX)
  if (match) {
    return {
      command: MATCH_TO_COMMAND[match[1]],
      match: '/' + match[1]
    }
  } else {
    return {}
  }
}

export function getAtData() {
  return _.map(COMMANDS, (command) => {
    return {
      name: command.match,
      icon: command.icon
    }
  })
}
