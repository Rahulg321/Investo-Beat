import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

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
      className="flex min-h-screen"
    >
      <div className="block-space-large flex basis-3/5 flex-col justify-center gap-4 text-pretty px-16">
        <span className="font-semibold uppercase tracking-wider text-mainO">
          WELCOME
        </span>
        <h1>I’m Dianna Adams</h1>
        <h2>Food Critic / Influencer / Blogger</h2>
        <span>
          Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
          nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
          pharetra, ac porttitor orci.
        </span>
        <button className="mt-4 w-fit border-2 border-mainO bg-white px-8 py-2 font-semibold text-mainO">
          Join Now
        </button>
      </div>
      <div className="basis-2/5 bg-mainO">
        <div className="aspect-h-3 aspect-w-4 relative left-[-15px] top-[100px]">
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
