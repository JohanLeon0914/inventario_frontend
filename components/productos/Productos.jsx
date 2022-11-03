import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Table } from 'antd'
import { useRouter } from 'next/router'

export default function Productos({ productos }) {

const router = useRouter()
const [products, setProducts] = useState([{}])


const columnas = [
    {
        name: "ID",
        selector: 'id',
        sortable: true
    },
    {
        name: "Producto",
        selector: 'nombre',
        sortable: true
    },
    {
        name: "Costo",
        selector: 'costo',
        sortable: true
    },
    {
        name: "Precio de venta",
        selector: 'precioVenta',
        sortable: true
    },
    {
        name: "Acciones",
        dataIndex: "acciones",
        align: "center",
        cell: (row) => (
            <button className='btn btn-primary' onClick={() => router.push(`/editarProducto/${row.id}`)}>Editar</button>
        )
    },
]


  return (
    <div>
      <DataTable 
         columns={columnas}
         data={productos}
         title="Inventario Jardin Plaza"  
         pagination
         fixedHeader
      />
    </div>
  )
}
