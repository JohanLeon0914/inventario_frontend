import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Table } from 'antd'
import { useRouter } from 'next/router'
import CostoTotal from '../components/costoTotal/CostoTotal'

export async function getServerSideProps({ params }){

    const res =  await fetch('http://localhost:9000/products')
    const productos = await res.json()

    return {
      props: {
        productos
      }
    }
  }

export default function Productos({ productos }) {

const router = useRouter()
const [products, setProducts] = useState([])

useEffect(() => {
    setProducts(productos)
  },[productos]);


const columnas = [
    {
        name: "ID",
        selector: (row) => row.id,
    },
    {
        name: "Producto",
        selector: (row) => row.nombre,
    },
    {
        name: "Costo",
        selector: (row) => row.costo,
    },
    {
      name: "Cantidad",
      selector: (row) => row.cantidad,
    },
    {
        name: "Precio de venta",
        selector: 'precioVenta',
    },
    {
        name: "Acciones",
        cell: (row) => (
            <button className='btn btn-primary' onClick={() => router.push(`/editarProducto/${row.id}`)}>Editar</button>
        )
    },
]


  return (
    <div>
      <button onClick={() => router.push('/crearProducto')}>
        Añadir
      </button>
      <DataTable 
         columns={columnas}
         data={products}
         title="Inventario Jardin Plaza"  
         pagination
         fixedHeader
      />
      <div>
        <CostoTotal productos={products} />
      </div>
    </div>
  )
}
