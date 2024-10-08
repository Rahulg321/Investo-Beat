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
      <div className="block-space-large container flex basis-3/5 flex-col justify-center gap-4 text-pretty md:px-16">
        <span className="font-semibold uppercase tracking-wider text-mainO">
          {slice.primary.tag}
        </span>
        <h1>{slice.primary.heading}</h1>
        <h2>{slice.primary.designation}</h2>
        <span className="text-xl font-semibold text-muted-foreground">
          {slice.primary.tagline}
        </span>
        <button className="mt-4 w-fit border-2 border-mainO bg-white px-8 py-2 font-semibold text-mainO">
          Join Now
        </button>
      </div>
      <div className="block-space  basis-2/5 content-center bg-mainO">
        <div className="aspect-h-1 aspect-w-1 relative top-4">
          <PrismicNextImage
            field={slice.primary.hero_image}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
