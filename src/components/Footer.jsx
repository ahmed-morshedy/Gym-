function Footer() {
  return (
    <>
      <div className="bg-black10 py-20 px-10" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <img src="/Logo.png" alt="Logo" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable.
            </p>
            <div className="flex py-3 ">
              <img src="/Fb.svg" alt="Facebook" className=" mr-3" />
              <img src="/Insta.svg" alt="Insta" />
            </div>
          </div>
          <div>
            <div>
              <p className="font-bold">Call:</p>
              <p>01234 987654</p>
              <p>098765 34621</p>
            </div>
            <div className="py-5">
              <p className="font-bold">Mail:</p>
              <p>contact@fitnessfit.com</p>
            </div>
            <div>
              <p className="font-bold">Location:</p>
              <p>Lanka, Ghazipur</p>
            </div>
          </div>
          <div>
            <p className="font-bold mb-2">Browse</p>
            <p>
              <a href="#home">Home</a>
            </p>
            <p className="py-10">
              <a href="#about">About us</a>
            </p>
            <p>
              <a href="#contact">Contact us</a>
            </p>
          </div>
        </div>{" "}
      </div>
      <footer className="border border-t flex justify-center items-center py-5">
        Privacy policy. All right reserved
      </footer>
    </>
  );
}

export default Footer;
