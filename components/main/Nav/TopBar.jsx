import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-blue-700 bg-opacity-80 shadow-md text-white py-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="hidden lg:flex space-x-4 mb-2 lg:mb-0">
          <Link href="#" className="hover:text-blue-200">
            <Twitter width={20} />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <Facebook width={20} />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <Linkedin width={20} />
          </Link>
          <Link href="#" className="hover:text-blue-200">
            <Instagram width={20} />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li className="hidden lg:flex items-center">
            <Mail className='mr-2'/>
            <Link href="mailto:tawhidacademy.info@gmail.com" className="hover:text-blue-200">
              tawhidacademy.info@gmail.com
            </Link>
          </li>
          <li className="hidden lg:flex items-center">
            <Phone width={20} className='mr-2'/>  {' '} 020 3149 9484
          </li>
          <li>
            <Link href="#" className="btn" title="Login">
              Login
            </Link>
          </li>
          <li>
            <Link
              href="https://tawhidacademy.org.uk/support-us"
              className="btn"
              title="Tawhid Academy Support us Page"
            >
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
