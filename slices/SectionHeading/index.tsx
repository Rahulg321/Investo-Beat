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
        <h1 className="text-white mb-2">Invite me to your restaurant.</h1>
        <h1 className="text-white mb-2">
          Get exposure of millions food lovers.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque in
          illo eius sint explicabo reprehenderit totam, autem laborum quo culpa
          incidunt ipsa consectetur blanditiis fugiat eum consequuntur aut unde
          magni!
        </p>
        <button className="px-8 py-2 font-semibold bg-white text-mainO mt-4">
          lets Talk
        </button>
      </div>
    </section>
  );
};

export default SectionHeading;
