'use client';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function BackButton({ pageType }) {
  const handleNavigation = () => {
    pageType === 'landing' ? window.location.href = '/' : window.location.href = '/contacts/'
  }
  return (
    <button onClick={handleNavigation} className='self-start text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400'><AiOutlineArrowLeft className='inline-block' /> Back</button>
  )
}
