import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SectionHeading`.
 */
export type SectionHeadingProps =
  SliceComponentProps<Content.SectionHeadingSlice>;

/**
 * Component for "SectionHeading" Slices.
 */
const SectionHeading = ({ slice }: SectionHeadingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-mainO"
    >
      <div className="block-space-large narrow-container text-center">
        <h1 className="mb-2 text-white">{slice.primary.heading}</h1>
        <p className="text-lg text-white md:text-xl lg:text-2xl">
          {slice.primary.tagline}
        </p>
      </div>
    </section>
  );
};

export default SectionHeading;
