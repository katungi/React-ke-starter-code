import Image from 'next/image'

export default function PodcastCard({ podcast }) {
  return (
    <div className='border rounded-lg p-4 flex'>
      <div className='my-auto'>
        <Image
          src={podcast.art}
          alt='Url'
          width={40}
          height={40}
          className='rounded-full'
        />
      </div>
      <div className='ml-4'>
        <p className='text-xl text-gray-700'>{podcast.title}</p>
        <p className='text-gray-500'>{podcast.creator}</p>
      </div>
    </div>
  );
}
