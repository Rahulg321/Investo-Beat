import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PageHeroSection`.
 */
export type PageHeroSectionProps =
  SliceComponentProps<Content.PageHeroSectionSlice>;

/**
 * Component for "PageHeroSection" Slices.
 */
const PageHeroSection = ({ slice }: PageHeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-[60vh] content-center bg-mainO"
    >
      <div className="big-container">
        <h1 className="text-center text-white">{slice.primary.heading}</h1>
      </div>
    </section>
  );
};

export default PageHeroSection;
