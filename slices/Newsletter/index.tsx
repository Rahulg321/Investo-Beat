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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-large "
    >
      <div className="big-container flex flex-col border-8 md:flex-row">
        <div className="aspect-h-1 aspect-w-1 relative basis-1/2 md:aspect-h-1 md:aspect-w-3 lg:top-[-80px]">
          <PrismicNextImage
            field={slice.primary.image}
            fill
            className="object-cover"
          />
        </div>
        <div className="basis-1/2 p-4">
          <div className="mb-4">
            <h1>{slice.primary.heading}</h1>
            <p>{slice.primary.tagline}</p>
          </div>
          <div className="">
            <form action="flex ">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-gray-200 p-4"
              />
              <button className="mt-4 border-2 border-mainO bg-white p-4 font-semibold text-mainO">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
