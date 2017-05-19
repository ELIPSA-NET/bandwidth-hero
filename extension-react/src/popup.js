/* @flow */
declare var chrome: any
import React from 'react'
import ReactDOM from 'react-dom'
import Popup from './popup/Popup'
import defaultState from './defaults'
import 'semantic-ui-css/semantic.css'
import './popup/index.css'
import type { AppState } from './types'

chrome.storage.sync.get((storedState: AppState) => {
  const initialState = { ...defaultState, ...storedState }
  const { enabled, statistics, whitelist, proxyUrl } = initialState

  ReactDOM.render(
    <Popup
      enabled={enabled}
      statistics={statistics}
      whitelist={whitelist}
      proxyUrl={proxyUrl}
    />,
    document.getElementById('root')
  )
})