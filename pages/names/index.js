import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/names.module.css'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();

  return  {
    props: { names: data }
  }
}

const Names = ({ names }) => {
  return ( 
    <>
      <Head>
        <title>Name List | List</title>
      </Head>
      <div>
        <h1>All Names</h1>
        {names.map(name => (
          <Link href={`/names/${name.id}`} key={name.id}>
            <a className={styles.single}>
              <h3>{ name.name }</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
   );
}
 
export default Names;