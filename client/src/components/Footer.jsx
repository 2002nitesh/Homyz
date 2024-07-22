import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../asset/logo.png';

export default function Footer() {
  return (
    <footer className='bg-slate-200 shadow-md mt-10'>
      <div className='max-w-6xl mx-auto p-5'>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <Link to='/'>
            <img src={logo} alt='logo' className='h-9 w-20 mb-4 sm:mb-0' />
          </Link>
          <ul className='flex flex-col sm:flex-row gap-4'>
            <Link to='/'>
              <li className='text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/contact-us'>
              <li className='text-slate-700 hover:underline'>Contact Us</li>
            </Link>
            <Link to='/privacyPolicy'>
              <li className='text-slate-700 hover:underline'>Privacy Policy</li>
            </Link>
          </ul>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center mt-4'>
          <p className='text-slate-700 mb-4 sm:mb-0'>&copy; {new Date().getFullYear()} Homyz. All rights reserved.</p>
          <div className='flex gap-4'>
            <a>
              <FaFacebook className='text-slate-700 hover:text-slate-500' />
            </a>
            <a>
              <FaTwitter className='text-slate-700 hover:text-slate-500' />
            </a>
            <a>
              <FaInstagram className='text-slate-700 hover:text-slate-500' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
