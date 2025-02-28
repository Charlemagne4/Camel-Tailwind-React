function Section2() {
  return (
    <section className="">
      <h1 className="m-10 text-4xl font-bold">Performance Services</h1>
      <div className="bg-secondary flex items-center sm:h-auto sm:w-auto sm:flex-row sm:flex-wrap md:h-auto md:w-60 md:flex-nowrap">
        {/* ONE */}
        <div className="one flex h-screen flex-col gap-12">
          <div className="bg-primary relative left-20 top-10 ml-10 h-[40%] w-[300px] p-10">
            <h1 className="mb-5 font-bold">
              High-Speed <br />
              Web Development
            </h1>
            <p>
              Built for performance, designed for dominance. We engineer blazing-fast, responsive
              websites that handle the digital race with ease—because every millisecond counts.
            </p>
          </div>
          <div className="bg-primary relative left-20 top-10 ml-10 h-[40%] w-[300px] p-10">
            <h1 className="mb-5 font-bold">
              Precision <br />
              UI/UX Design
            </h1>
            <p>
              Like a perfectly tuned rally car, we craft seamless, intuitive user experiences that
              grip attention and drive engagement. Every pixel, a calculated move.
            </p>
          </div>
        </div>
        {/* TWO */}
        <div className="two flex h-screen flex-col gap-12">
          <div className="bg-secondary relative left-20 top-10 ml-10 h-[40%] w-[300px] p-10 text-white">
            <h1 className="mb-5 font-bold">Data-Driven Analytics</h1>
            <p>
              Just like telemetry fine-tunes race performance, our analytics break down every metric
              to optimize strategy and keep you ahead of the competition.
            </p>
          </div>
          <div className="bg-secondary relative left-20 top-10 ml-10 h-[40%] w-[300px] p-10 text-white">
            <h1 className="mb-5 font-bold">
              SEO & <br /> Digital Acceleration
            </h1>
            <p>
              Pole position isn&apos;t given, it&apos;s earned. With expert SEO & SMM strategies, we
              ensure your brand leads the digital race, never trailing behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
