function Header() {
  return (
    <header className="hero mt-20 flex w-full items-center justify-around max-lg:flex-col">
      <div className="flex w-1/2 justify-center">
        <img
          className="image w-full"
          src="https://francuskie.pl/wp-content/uploads/2018/07/peugeot-205-t16.jpg"
          alt="Peugeot 205 T16 Rally Legend"
        />
      </div>
      <div className="ml-10 mr-10 sm:mt-24 md:mt-0">
        <h1 className="mb-10 flex flex-col text-5xl font-bold max-lg:mt-6 max-lg:flex-row">
          FUELING
          <span className="text-primary">PERFORMANCE</span>
        </h1>
        <p className="mb-10 w-96">
          The spirit of the 90s roars to life—blazing deserts, relentless speed, and the pursuit of
          victory. From the Dakar dunes to tarmac legends, we craft digital experiences with the
          same precision and passion that built motorsport history.
        </p>
        <div className="button-container mb-2 max-lg:flex max-lg:items-center max-lg:justify-between">
          <button className="bg-primary mb-5 mr-5 px-10 py-2 text-white max-lg:mb-0 max-lg:mr-0">
            Explore Legacy
          </button>
          <button className="text-secondary border-secondary ml-6 border-b-2 font-bold max-lg:ml-0">
            Discover More
          </button>
        </div>
        <div className="mt-7 flex gap-5">
          <div className="flex items-center justify-around sm:flex-col md:flex-row">
            <div className="bg-primary flex h-full flex-col items-center justify-center p-2">
              <h1 className="mt-5">
                <span className="font-bold">5-Star</span> Racing Heritage
              </h1>
              <p className="w-60 p-2 text-center">
                Proven on the toughest terrains. Built for champions. This is where grit meets
                performance.
              </p>
            </div>
          </div>
          <div className="bg-primary/20 flex flex-col items-center justify-center p-2">
            <h1 className="mt-5">
              Ignite
              <span className="font-bold"> Your </span>
              Passion
            </h1>
            <p className="w-60 p-2 text-center">
              Join the legacy of those who dare. Whether on the web or the race track, precision and
              power drive everything we create.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
