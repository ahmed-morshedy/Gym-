function About() {
  return (
    <>
      <div
        className=" relative flex flex-col items-center container p-10 "
        id="about"
      >
        <img
          src="/Vector2.png"
          alt="vector"
          className=" md:-right-14 right-0 absolute pt-5"
        />
        <h2 className="font-bold text-3xl mt-36">
          What our client say about us
        </h2>
        <div>
          <div className=" ml-0 md:ml-32 mt-10 bg-black relative">
            <div className="md:px-20 py-8 px-5">
              <p className="text-white ">
                Machines are A1 quality, environment is great and <br></br>
                people are very cooperative! <br></br>Overall a great gym in
                Ghazipur!!
              </p>
              <p className="text-white mt-2 text-sm">Shivam Jaiswal</p>
            </div>
            <div className="bg-black50 w-fit absolute top-6 -left-36 hidden md:block">
              <img src="/unsplash.png" alt="client" className="w-48 h-48" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/Vector.png"
        alt="vector"
        className=" left-0 bottom-0  pt-14 pb-6"
      />
    </>
  );
}

export default About;
