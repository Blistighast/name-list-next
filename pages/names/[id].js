export const getStaticPaths = async () => {

  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map(name => {
    return {
      params: { id: name.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
  const data = await response.json()

  return {
    props: { name: data }
  }
}

const Details = ({ name }) => {
  return ( 
    <div>
      <h1>{name.name}</h1>
      <p>{name.email}</p>
      <p>{name.website}</p>
      <p>{name.address.city}</p>
    </div>
   );
}
 
export default Details;