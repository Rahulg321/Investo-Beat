import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Newsletter`.
 */
export type NewsletterProps = SliceComponentProps<Content.NewsletterSlice>;

/**
 * Component for "Newsletter" Slices.
 */
const Newsletter = ({ slice }: NewsletterProps): JSX.Element => {
  console.log(slice.primary.image);
  const { image } = slice.primary;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container flex flex-col border-8 md:flex-row">
        <div className="basis-1/3">
          <PrismicNextImage
            field={slice.primary.image}
            height={image.dimensions?.height}
            width={image.dimensions?.width}
            className=""
          />
        </div>
        <div className="basis-2/3 content-center space-y-2 p-4 text-center">
          <h2 className="">{slice.primary.heading}</h2>
          <p className="">{slice.primary.tagline}</p>

          <form action="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-gray-200 p-2 md:p-4"
            />
            <button className="border-2 border-mainO bg-white p-2 font-semibold text-mainO md:p-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
