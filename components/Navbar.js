import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/logo2.png" width={128} height={85} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/names"><a>Name Listing</a></Link>
    </nav>
   );
}
 
export default Navbar;