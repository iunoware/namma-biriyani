const CTA = () => {
  return (
    <div className="min-h-screen pb-20 relative bg-[url(/images/cta-bg.jpeg)] bg-cover bg-center w-screen flex flex-col items-center justify-center bg-dark-brown">
      <div className="pt-20 flex flex-col items-center justify-center">
        <p className="text-center text-3xl font-accent text-dark-brown font-bold">
          Bulk Orders
        </p>
        {/* <img src="/images/eyebrow.png" alt="" className="h-7  w-auto" /> */}
        <h3 className="md:text-8xl text-5xl  tracking-tighter text-white text-center font-bold">
          {/* SEE WHY <br /> EVERYONE’S TALKING */}
          Food For <br />
          Every <span className="italic text-dark-brown"> Occasions</span>
        </h3>
      </div>
      <img
        src="/images/biryani-1.png"
        alt=""
        className="md:-translate-y-12 md:h-90 w-auto object-center object-cover"
      />
      <button className="group absolute bottom-20 cursor-pointer overflow-hidden rounded-full bg-dark-brown px-8 py-4 transition-all hover:pr-12 md:p-4">
        <span className="relative z-10 font-heading  font-semibold tracking-wide text-white md:text-lg">
          Get a Quote
        </span>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100 group-hover:right-6">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CTA;
