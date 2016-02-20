import React from 'react'
import classnames from 'classnames'

import * as Extension from 'lib/extension'
import styles from './Container.scss'

let Icon = (props) => {
  return (
    <a className={styles.icon} href="https://github.com/jessepollak/slash" target="_blank">
      <img src={require('icons/slash.png')} />
    </a>
  )
}

let Version = (props) => {
    return (
      <a className={styles.version} href="https://github.com/jessepollak/slash/releases" target="_blank">
      Private beta v{ Extension.getVersion() }
      </a>
    )
}

let Container = (props) => {
  let style = {
    top: props.top,
    left: props.left
  }

  var classes = [styles.container, props.className]
  if (props.isExpanded) classes.push(styles['container--isExpanded'])

  return (
    <div className={classnames(classes)} style={style}>
      { props.children }
      <Icon />
      <Version />
    </div>
  )
}
Container.propTypes = {
  top: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  className: React.PropTypes.string
}

export default Container
