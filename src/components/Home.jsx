function Home() {
  return (
    <>
      <div className="pt-20" id="home">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-fit leading-6">
            <h2 className="text-4xl font-bold pb-7">
              Rise to Your{" "}
              <span className="text-mainColor font-bold">Peak</span>
              Potential
            </h2>
            <p className="leading-relaxed text-balance mb-5">
              Welcome to Elevate Fitness Hub, where we&rsquo;re dedicated to
              helping you reach new heights in your fitness journey. Our
              state-of-the-art facilities, experienced trainers, and diverse
              range of classes cater to individuals of all fitness levels and
              goals.
            </p>
            <a
              className="px-10 py-2 rounded-sm text-white bg-black hover:bg-white hover:text-black border-black border transition-all"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-7 lg:mt-0">
            <img
              src="/Frame1.png"
              alt="frame"
              className="md:mr-5 w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/Frame2.png"
              alt="frame"
              className="mt-5 md:mt-0 w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3 justify-items-center ">
          <p className="text-2xl flex justify-center flex-col items-center">
            <span className="font-bold">500 +</span>
            <span>Happy customers</span>
          </p>
          <p className="text-2xl py-10 lg:py-0 flex justify-center flex-col items-center">
            <span className="font-bold">5 +</span>
            <span>Years of experience</span>
          </p>
          <p className="text-2xl flex justify-center flex-col items-center">
            <span className="font-bold">3 +</span>
            <span>Types of expercise</span>
          </p>
        </div>{" "}
        <img src="/Vector.png" alt="vectoer" className="mt-20 pb-5" />
      </div>
    </>
  );
}

export default Home;
