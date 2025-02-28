function Section1() {
  return (
    <section className="mt-10 flex w-full items-center justify-around max-lg:flex-col">
      <div className="max-lg:mt-7">
        <h1 className="mb-10 flex flex-col text-5xl font-bold max-lg:flex-row">
          OUR
          <span className="text-primary">DRIVING FORCE</span>
        </h1>
        <p className="mb-10 w-96">
          Mastering every turn, conquering every terrain—our skills are forged in the heat of
          competition. Whether it&apos;s precision engineering on the track or pixel-perfect
          execution online, we push the limits to deliver performance that wins.
        </p>
        <button className="bg-primary mb-5 mr-5 px-10 py-2 text-white">Explore Services</button>
      </div>
      <div className="w-1/2 max-lg:order-first">
        <img
          className="image w-full"
          src="https://minicarsmoscow.ru/image/cache/catalog/Tovari/MINIGT/22.07.2021/ET-f06JWoAAseKA-auto_width_1000.jpg"
          alt="Rally car on the edge of control"
        />
      </div>
    </section>
  );
}

export default Section1;
