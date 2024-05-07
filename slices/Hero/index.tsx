import { Content } from "@prismicio/client";
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
    >
      <h1 className="text-mainO">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis ad
        similique quasi maiores deserunt laborum! Veniam nemo sit exercitationem
        minima eligendi quidem temporibus voluptas dolor! Minus ratione
        repellendus commodi.
      </h1>
      Placeholder component for hero (variation: {slice.variation}) Slices
    </section>
  );
};

export default Hero;
