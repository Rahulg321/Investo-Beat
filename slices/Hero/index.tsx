import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-screen flex-col-reverse md:flex-row"
    >
      <div className="block-space-large flex basis-3/5 flex-col justify-center gap-4 text-pretty px-16">
        <span className="font-semibold uppercase tracking-wider text-mainO">
          {slice.primary.tag}
        </span>
        <h1>{slice.primary.heading}</h1>
        <h2>{slice.primary.designation}</h2>
        <span>{slice.primary.tagline}</span>
        <button className="mt-4 w-fit border-2 border-mainO bg-white px-8 py-2 font-semibold text-mainO">
          Join Now
        </button>
      </div>
      <div className="block-space basis-2/5 content-center bg-[#634876]">
        <div className="aspect-h-1 aspect-w-1 relative md:aspect-h-3 md:aspect-w-4 md:left-[-15px] ">
          <div>
            <PrismicNextImage
              field={slice.primary.hero_image}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
