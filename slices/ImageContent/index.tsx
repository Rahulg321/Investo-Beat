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
      <div className="big-container">
        <div className="flex flex-col md:flex-row">
          <div className="aspect-h-2 aspect-w-4 relative basis-1/2">
            <PrismicNextImage
              field={slice.primary.featured_image}
              className="object-cover"
              fill
            />
          </div>
          <div className="basis-1/2 content-center px-10">
            <span className="font-semibold tracking-wider text-mainO">
              {slice.primary.tag}
            </span>
            <h2>{slice.primary.heading}</h2>
            <p>{slice.primary.tagline}</p>
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
