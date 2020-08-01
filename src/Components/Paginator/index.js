import React from 'react'

import './styles.scss';

const sections = [
  {
    id: 1,
    title: "Bienvenidos"
  },
  {
    id: 2,
    title: "Con el reslapdo de Claro"
  },
  {
    id: 3,
    title: "Mandá y Recibí Dinero"
  },
  {
    id: 4,
    title: "Pagá Facturas"
  },
  {
    id: 5,
    title: "En todo momento sin obstáculos"
  },
  {
    id: 6,
    title: "Todas tus tarjetas en un solo lugar"
  },
  {
    id: 7,
    title: "Recargá con descuentos exclusivos"
  },
  {
    id: 8,
    title: "Abierto las 24hs"
  },
]

const PagingButton = ({ id, title }) => {
  const selector = `#s${id}`;
  return (
    <a href={selector} parallax="paging-button" parallax-container={selector} title={title}></a>
  )
};


const Paginator = () => {
  return (
    <div className="paging">
      {sections.map(({id, title}) => (
        <PagingButton key={id} id={id} title={title} />
      ))}
    </div>
  )
}

export default Paginator
