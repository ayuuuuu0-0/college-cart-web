import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-2-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">Sell & Buy</div>
            <h1 className="mb-6 h1 text-p6 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly <br /> Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed College Cart to be an easy to use, quick to learn and
              surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg" download="/download/cc.apk">
                Download now
              </Button>
            </LinkScroll>
          </div>
          <div className="absolute top-24 md:left-[calc(70%-250px)] lg:left-[calc(70%-250px)] xl:left-[calc(70%-150px)] sm:left-[calc(70%-150px)] max-sm:top-34 max-sm:right-[calc(20%-450px)] transform -translate-x-1/6 justify-end pointer-events-non">
            <img src="/images/hero1.png" className="" alt="hero" />
          </div>
        </div>
      </Element>
    </section>
  );
};
