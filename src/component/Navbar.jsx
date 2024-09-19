import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="mb-20 bg-red flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <h1 className="mx-2 w-10 text-3xl">AS</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </div>
  )
}

export default Navbar