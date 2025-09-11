/**
 * @copyright 2025 SanThosh
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      contentType: "html",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-12">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="santhosh image"
                className="image-couver"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* <h2 className="headline-1 max-w-[15ch] bg-amber-200 sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2> */}

          <div className="max-w-full lg:max-w-[80ch] mt-5 mb-8 lg:mb-10">
            <h3 className="text-3xl text-zinc-400 font-semibold lg:leading-[1.15] mb-2">
              Hello It's Me
            </h3>

            <h2 className="font-semibold lg:leading-[1.15] tracking-wide lg:text-6xl text-5xl">
              Santhosh
            </h2>
            <h3 className="text-3xl font-semibold lg:leading-[1.15] mt-3 text-zinc-400">
              And I'm a{" "}
              <span
                ref={typedRef}
                className="text-indigo-400 font-bold md:text-4xl "
              ></span>
            </h3>

            <div className="md:hidden flex justify-center mt-6">
              <figure>
                <img
                  src="/images/santhos.png"
                  className="w-full max-w-[300px] bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden"
                  alt=""
                />
              </figure>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="https://drive.google.com/file/d/1ToePdP5D9dhHbI3ssyjQj1j08KX9wLga/view?usp=drive_link"
            />

            <ButtonOutline
              label="Scroll down"
              href="#about"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block mt-9">
          <figure className="w-full max-w-[440px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden ">
            <img
              src="/images/santhos.png"
              width={650}
              height={800}
              alt="Santhosh"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
