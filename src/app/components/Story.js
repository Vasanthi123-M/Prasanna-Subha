

'use client'
import Image from 'next/image'
import { FaHeart, FaRing, FaDove } from 'react-icons/fa'

export default function LoveStory() {
  return (


    <main className=" ">
{/* Desktop */}

<div id='Story' className='bg-pink-100 py-16 hidden 2xl:block'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[2.2vw] font-1 font-semibold text-center">
          OUR &nbsp;LOVE &nbsp;STORY
        </h2>
      </div>

      {/* TIMELINE */}
<section className="mx-[18%] relative">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-[#c9d8e6]" />

  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🌱 Childhood Friends</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
            We were childhood friends and grew up knowing each other like family.
            <br />
            Same memories, same laughter, same bond.
          </p>
        </div>

        <Image
          src="/our_story_1.png"
          alt="Childhood Friends"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story_2.png"
          alt="College Love"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />



     <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">💍 The Proposal</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
          The day friendship officially turned into a promise of love 💖   </p>
        </div>



      
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaDove size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🎓 Love Began in College</h4>

          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
           Our friendship slowly turned into love during our college first year.
          
            That&apos;s when we realised — this connection is something special.
         
          </p>
        </div>

        <Image
          src="/our_story_3.png"
          alt="The Proposal"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaRing size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story_4.png"
          alt="Years Together"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />

        <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">❤️ 9 Years of Togetherness</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
            Now, we are stepping into our 9th year of love,
          
            stronger, happier, and more confident than ever.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

  </div>
</section>



      </div>

      {/* Desktop */}




      {/* Laptop */}
<div id='Story' className='bg-pink-100 py-16 2xl:hidden hidden lg:block'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[2.2vw] font-1 font-semibold text-center">
          OUR &nbsp;LOVE &nbsp;STORY
        </h2>
      </div>

      {/* TIMELINE */}
<section className="mx-[18%] relative">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-[#c9d8e6]" />

  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🌱 Childhood Friends</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
            We were childhood friends and grew up knowing each other like family.
            <br />
            Same memories, same laughter, same bond.
          </p>
        </div>

        <Image
          src="/our_story_1.png"
          alt="Childhood Friends"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story_2.png"
          alt="College Love"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />



     <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">💍 The Proposal</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
          The day friendship officially turned into a promise of love 💖   </p>
        </div>



      
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaDove size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🎓 Love Began in College</h4>

          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
           Our friendship slowly turned into love during our college first year.
          
            That&apos;s when we realised — this connection is something special.
         
          </p>
        </div>

        <Image
          src="/our_story_3.png"
          alt="The Proposal"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaRing size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story_4.png"
          alt="Years Together"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />

        <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">❤️ 9 Years of Togetherness</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
            Now, we are stepping into our 9th year of love,
          
            stronger, happier, and more confident than ever.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

  </div>
</section>


      </div>
      {/* Laptop */}
      

      {/* Tab */}


<div className='bg-pink-100 py-16 hidden md:block lg:hidden'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[5.2vw] font-1 font-semibold text-center">
          OUR &nbsp;LOVE &nbsp;STORY
        </h2>
      </div>

{/* TIMELINE */}
<section className="relative">
  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_1.png"
          alt="Childhood Friends"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🌱 Childhood Friends
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            We were childhood friends and grew up knowing each other like family.
           
            Same memories, same laughter, same bond.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_2.png"
          alt="College Love"
          width={1000}
          height={1000}
          className="object-cover"
        />


        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            💍 The Proposal
          </h4>
        
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            The day friendship officially turned into a promise of love 💖
          </p>
        </div>
  
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_3.png"
          alt="The Proposal"
          width={1000}
          height={1000}
          className="object-cover"
        />
      <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🎓 Love Began in College
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            Our friendship slowly turned into love during our college first year.
           
            That&apos;s when we realised — this connection is something special.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_4.png"
          alt="Years of Togetherness"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            ❤️ 9 Years of Togetherness
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            Now, we are stepping into our 9th year of love,
            <br />
            stronger, happier, and more confident than ever.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


      </div>



      {/* Tab */}


      {/* Mobile */}

<div className='bg-pink-100 py-16 md:hidden block'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[5.2vw] font-1 font-semibold text-center">
          OUR &nbsp;LOVE &nbsp;STORY
        </h2>
      </div>

{/* TIMELINE */}
<section className="relative">
  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_1.png"
          alt="Childhood Friends"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🌱 Childhood Friends
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            We were childhood friends and grew up knowing each other like family.
           
            Same memories, same laughter, same bond.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_2.png"
          alt="College Love"
          width={1000}
          height={1000}
          className="object-cover"
        />


        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            💍 The Proposal
          </h4>
        
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            The day friendship officially turned into a promise of love 💖
          </p>
        </div>
  
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_3.png"
          alt="The Proposal"
          width={1000}
          height={1000}
          className="object-cover"
        />
      <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🎓 Love Began in College
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            Our friendship slowly turned into love during our college first year.
           
            That&apos;s when we realised — this connection is something special.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story_4.png"
          alt="Years of Togetherness"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            ❤️ 9 Years of Togetherness
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            Now, we are stepping into our 9th year of love,
            <br />
            stronger, happier, and more confident than ever.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


      </div>
      {/* Mobile */}
      
    </main>
  )
}
