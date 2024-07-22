import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // clear input fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    console.log('Form data:', formData);
  };

  return (
    <div className='max-w-6xl mx-auto p-5'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Contact Us</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Get in Touch</h3>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                rows='4'
                required
              />
            </div>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold mb-4'>Contact Details</h3>
          <p className='flex items-center text-gray-700'>
            <FaPhone className='mr-2 text-indigo-600' /> (123) 456-7890
          </p>
          <p className='flex items-center text-gray-700'>
            <FaEnvelope className='mr-2 text-indigo-600' /> info@homyz.com
          </p>
          <p className='flex items-center text-gray-700'>
            <FaMapMarkerAlt className='mr-2 text-indigo-600' /> 123 Main Street, Jaipur, India
          </p>
          <div className='mt-6'>
            <h4 className='text-lg font-semibold mb-2'>Follow Us</h4>
            <div className='flex gap-4'>
              <a>
                <FaFacebook className='text-gray-700 hover:text-indigo-600' />
              </a>
              <a>
                <FaTwitter className='text-gray-700 hover:text-indigo-600' />
              </a>
              <a>
                <FaInstagram className='text-gray-700 hover:text-indigo-600' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
