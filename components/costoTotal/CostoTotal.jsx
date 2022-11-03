import React, { useEffect, useState } from 'react'

export default function CostoTotal({ productos }) {

const [costoTotal, setCosto] = useState(0)

useEffect(() => {
    let costo = 0
    productos.map(p => {
        costo += parseInt(p.costo, 10);
    })
    setCosto(costo)
  },[productos]);

  return (
    <div>
      costo total: {costoTotal}
    </div>
  )
}
