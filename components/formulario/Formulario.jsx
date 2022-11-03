import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from './Formulario.module.css'
import axios from 'axios'

export default function Formulario() {
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
      })
    
      const router = useRouter()
    
      const handleChange = (e) => {
        setCredentials({
          ...credentials, // hago una copia de lo que tenga credentials hasta el momento
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:9000/createProduct', credentials)
        if (response.status === 200) {
          router.push('/')
        }
      } 

  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>Producto</h1>
      <form onSubmit={handleSubmit}>
        <input className={styles.input}
          name='nombre'
          type='text'
          placeholder='Nombre del producto'
          onChange={handleChange}
        />
        <input className={styles.input}
          name='cantidad'
          type='number'
          placeholder='Cantidad'
          onChange={handleChange}
        />
        <input className={styles.input}
          name='costo'
          type='number'
          placeholder='Costo unitario'
          onChange={handleChange}
        />
        <input className={styles.input}
          name='precioVenta'
          type='number'
          placeholder='Precio de venta'
          onChange={handleChange}
        />
        <button className={styles.loginBtn}>
            Ingresar
        </button>
      </form>
    </div>
  )
}
