const Booking = () => {
  return (
    <section
      id="booking"
      className="bg-neutral-900 h-screen mt-20 md:ml-80 scroll-m-20 md:scroll-m-0"
    >
      <div className="border-b-4 border-neutral-100 mb-6">
        <h2 className="text-5xl font-bold text-neutral-100 lg:text-6xl">
          Booking
        </h2>
      </div>
      <div className="grid grid-cols-1 bg-neutral-100 h-[95%] sm:px-12 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-neutral-900 font-bold h-full">
          <h3 className="text-6xl font-header md:text-7xl lg:text-8xl">
            Schedule
          </h3>
          <h3 className="text-6xl font-header md:text-7xl lg:text-8xl">Your</h3>
          <h3 className="text-6xl font-header md:text-7xl lg:text-8xl">
            Tattoo
          </h3>
          <h3 className="text-6xl font-header md:text-7xl lg:text-8xl">
            Today
          </h3>
        </div>
        <div className="text-center md:flex md:flex-col md:items-center md:justify-start lg:justify-center">
          <a
            href="https://square.site/book/L76Q76YA54CYC/aftermath_tattoo-east-hartford-ct"
            target="_blank"
            rel="noreferrer"
            className="max-w-xs border-2 border-neutral-900 rounded-lg px-14 py-5 text-2xl text-neutral-100 bg-neutral-900 transition ease-in-out duration-300 hover:bg-neutral-100 hover:text-neutral-900 md:mt-10"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
