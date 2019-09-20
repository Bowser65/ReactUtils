/**
 * Some personal React and Redux utilities
 * Copyright (C) 2019 Bowser65
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react'
import { hot } from 'react-hot-loader'
import { useDispatch } from 'react-redux'

import style from './style.scss'
import { dismissNotice } from '@react-utils/Notice/redux'

const Notice = React.memo(
  ({ color, text, button, noDismiss }) => {
    const dispatch = useDispatch()
    const dismiss = () => dispatch(dismissNotice())

    const classNames = [ style.notice ]
    color ? classNames.push(color) : classNames.push(style.colorDark)

    return <div className={classNames.join(' ')}>
      {text}
      {button && <button className={style.button} onClick={dismiss() || button.callback}>{button.text}</button>}
      {!noDismiss && <span className={style.dismiss} onClick={dismiss}/>}
    </div>
  }
)

Notice.Colors = {
  BRAND: style.colorBrand,
  GRADIENT: style.colorGradient,
  GREEN: style.colorGreen,
  ORANGE: style.colorOrange,
  RED: style.colorRed,
  BLUE: style.colorBlue,
  BLURPLE: style.colorBlurple,
  DARK: style.colorDark
}

Notice.displayName = 'Notice'
export default hot(module)(Notice)
