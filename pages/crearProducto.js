import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Formulario from '../components/formulario/Formulario'

export default function Home() {
  return (
    <Layout>
      <Formulario />
    </Layout>
  )
}