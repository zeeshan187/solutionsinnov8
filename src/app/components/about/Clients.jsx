import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'

const Clients = () => {
  return (
    <section
      id="stats"
      className="py-10 lg:py-20 bg-gradient-to-br from-gray-100 to-gray-200"
    >
      <Wrapper>
        <div className="mx-auto flex flex-col gap-6">
          <h2 className="text-3xl lg:text-6xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B0B22] to-[#c73955]">
            Our Clients WorldWide
            </span>
          </h2>
          <Image src="/images/about/map.png" alt='map' width="1000" height="800" className='mx-auto' />
          
        </div>
      </Wrapper>
    </section>
  )
}

export default Clients
