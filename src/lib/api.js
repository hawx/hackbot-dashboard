/* global process */

import * as Yayson from 'yayson'
const yayson = Yayson()

const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://hack24-api.herokuapp.com'
  : 'https://hack24-api-staging.herokuapp.com'

export function fetchTeams () {
  return window.fetch(`${apiUrl}/teams`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Unable to fetch teams; network error.')
    }).then(json => Promise.resolve((new yayson.Store()).sync(json)))
}

export function fetchUsers () {
  return window.fetch(`${apiUrl}/users`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Unable to fetch users; network error.')
    }).then(json => Promise.resolve((new yayson.Store()).sync(json)))
}
