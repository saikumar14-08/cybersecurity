import React from 'react'
import PreText from './pretexting/index'
import Phishing from './phishing/index'
import Baiting from './baiting/index'

function Cards() {
  return (
    <div>
        <PreText />
        <Phishing />
        <Baiting />
    </div>
  )
}

export default Cards