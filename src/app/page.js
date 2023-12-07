import Image from 'next/image'
import styles from './page.module.css'

async function getData() {
  const response = await fetch("http://localhost:3000/api/hello")

  cache: "no-store"

  console.log("first")
  return response.json()
}

async function products () {
  const response = await fetch("http://localhost:3000/api/product")

  cache: "no-cache"

  return response.json()
}

export default async function Home() {

  const data = await getData()
  const product = await products()

  return (
    <main className={styles.main}>
      {
        data.map((item) => {
          return <div key={item.id}>
            <h1>{item.name}</h1>
            </div>
        })
      }

      {
        product.map((item) => {
          return <div>
            <h2>{item.name}</h2>
          </div>
        })
      }
    </main>
  )
}
