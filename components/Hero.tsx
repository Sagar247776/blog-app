export default function Hero() {
  return <div>
            <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif text-black'>
            <span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect</h1>
          <h2 className="text-black">It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        <img className="hidden md:inline-flex h-32 lg:h-full" src="https://th.bing.com/th/id/R.4399e421ae7f3c7340d3ff61e78c147f?rik=T9tSVMR9jnwgJw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmedium-logo-png-medium-icon-512.png&ehk=aNu4SGyjCq21a24E2xEcKl2PZQ7IV1foQepj%2bSnxJis%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
  </div>;
}
