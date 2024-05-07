import ContactForm from "@/components/ContactForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";

/**
 * Props for `ContactHero`.
 */
export type ContactHeroProps = SliceComponentProps<Content.ContactHeroSlice>;

/**
 * Component for "ContactHero" Slices.
 */
const ContactHero = ({ slice }: ContactHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex min-h-screen flex-col md:flex-row"
    >
      <div className="basis-3/5">
        <div className="xl-narrow-container block-space-xl">
          <div className="mb-6">
            <h1>Contact Me</h1>
            <p>
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra at adipiscing sit morbi aliquet mauris porttitor nisi,
              senectus pharetra, ac porttitor orci.
            </p>
          </div>
          <ContactInfoCard
            icon={<FaLocationDot />}
            heading="Address"
            description="1234 N Spring St, Los Angeles, CA 90012, United States."
            classname="mb-6"
          />
          <ContactInfoCard
            icon={<FaPhone />}
            heading="Phone"
            description="+01 - 123 456 7890"
            classname="mb-6"
          />
          <ContactInfoCard
            icon={<MdEmail />}
            heading="Email"
            description="mail@example.com"
          />

          <div className="mt-12">
            <span className="mb-6 block font-semibold uppercase tracking-wider text-mainO">
              Follow Me
            </span>
            <div className="flex justify-between">
              <SocialInfoCard
                icon={<FaInstagram />}
                heading="1.2M+"
                description="Subscribers"
              />
              <SocialInfoCard
                icon={<FaYoutube />}
                heading="1.2M+"
                description="Followers"
              />
              <SocialInfoCard
                icon={<MdOutlineWifi />}
                heading="1.2M+"
                description="Commenters"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex basis-2/5 flex-col justify-center bg-mainO">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactHero;

function SocialInfoCard({
  icon,
  heading,
  description,
  classname,
}: {
  icon: any;
  heading: string;
  description: string;
  classname?: string;
}) {
  return (
    <div className="">
      <div className="mb-4 text-4xl text-mainO">{icon}</div>
      <span className="block text-lg font-bold">{heading}</span>
      <span className="block font-semibold tracking-wide">{description}</span>
    </div>
  );
}

function ContactInfoCard({
  icon,
  heading,
  description,
  classname,
}: {
  icon: any;
  heading: string;
  description: string;
  classname?: string;
}) {
  return (
    <div className={clsx("flex items-start gap-4", classname)}>
      <div className="text-xl text-mainO">{icon}</div>
      <div>
        <span className="font-semibold uppercase tracking-widest">
          {heading}
        </span>
        <h2 className="text-gray-500">{description}</h2>
      </div>
    </div>
  );
}
