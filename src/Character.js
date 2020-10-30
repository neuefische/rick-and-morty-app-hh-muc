import React from 'react'

export default function Character({name, imgUrl}) {
  return (
    <section>
      <h3>{name}</h3>
      <img src={imgUrl} alt="" />
    </section>
  )
}
