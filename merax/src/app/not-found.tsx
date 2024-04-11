import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center gap-4'>
      <h1 className='font-bold text-5xl'>Not Found</h1>
      <p className='font-normal text-base text-textColor'>Could not find requested resource</p>
      <Link href="/" className='text-mainColor font-semibold'>Return Home</Link>
      </div>
  )
}