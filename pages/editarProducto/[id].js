import React from 'react'
import Layout from '../../components/Layout'
import EditarProducto from '../../components/editar/EditarProducto'

export async function getServerSideProps({ params }){

  const { id } = params 

  return {
    props: {
      id
    }
  }
}

function editarProductos({ id }) {
  return (
    <Layout>
      <EditarProducto id={id} />
    </Layout>
  )
}

export default editarProductos
