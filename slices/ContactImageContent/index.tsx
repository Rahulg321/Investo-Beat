import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import signature from "@/public/signature.png";
/**
 * Props for `ContactImageContent`.
 */
export type ContactImageContentProps =
  SliceComponentProps<Content.ContactImageContentSlice>;

/**
 * Component for "ContactImageContent" Slices.
 */
const ContactImageContent = ({
  slice,
}: ContactImageContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="aspect-h-1 aspect-w-1 relative flex basis-1/2 md:aspect-h-2 md:aspect-w-4">
            <PrismicNextImage
              field={slice.primary.featured_image}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex basis-1/2 flex-col justify-center gap-6 px-8">
            <div className="text-4xl text-mainO">
              <FaQuoteLeft />
            </div>
            <h3>{slice.primary.quote}</h3>
            <div>
              <h4>Investobeat Team</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactImageContent;
