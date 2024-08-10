import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { CloudFog } from "lucide-react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="narrow-container block-space"
    >
      <div className="prose w-full max-w-none md:prose-lg lg:prose-xl">
        <PrismicRichText field={slice.primary.textblock} />
      </div>
    </section>
  );
};

export default TextBlock;
