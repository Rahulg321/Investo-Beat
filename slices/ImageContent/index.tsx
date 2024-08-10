import MainButton from "@/components/MainButton";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageContent`.
 */
export type ImageContentProps = SliceComponentProps<Content.ImageContentSlice>;

/**
 * Component for "ImageContent" Slices.
 */
const ImageContent = ({ slice }: ImageContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="basis-1/2">
            <PrismicNextImage
              field={slice.primary.featured_image}
              className="object-cover"
            />
          </div>
          <div className="container basis-1/2 content-center md:px-10">
            <span className="font-semibold tracking-wider text-mainO">
              {slice.primary.tag}
            </span>
            <h2>{slice.primary.heading}</h2>
            <p className="font-medium md:text-lg lg:text-xl">
              {slice.primary.tagline}
            </p>
            <MainButton
              btnlabel={slice.primary.button_label}
              btnLink={slice.primary.button_link}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContent;
