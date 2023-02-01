import React from 'react'
import './NoMatch.scss'

function NoMatch() {
  return (
    <div className='container text-center noMatch'>
      <img src="../../assets/imgs/ghost.png" alt="Under construction" width="300" />
      <h3 className='mt-5 noMatch__title'>Página en construcción</h3>
      <p className='noMatch__subtitle'>Estamos dando lo mejor por crear una web digna para tí, pronto estará lista, mientras tanto te dejo este formulario de contacto donde puedes consultar lo que desees y te responderé en la brevedad posible.</p>
    </div>
  )
}

export default NoMatch