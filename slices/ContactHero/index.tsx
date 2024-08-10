import ContactForm from "@/components/ContactForm";
import { Content, KeyTextField } from "@prismicio/client";
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
      className="flex min-h-[100dvh] flex-col lg:flex-row"
    >
      <div className="block-space-xl bg p px- mt-4 flex basis-3/5 flex-col justify-center md:px-12 lg:px-16">
        <div className="mb-6">
          <h1>Contact Us</h1>
        </div>
        <ContactInfoCard
          icon={<FaLocationDot />}
          heading="Address"
          description={slice.primary.address}
          classname="mb-6"
        />
        <ContactInfoCard
          icon={<FaPhone />}
          heading="Phone"
          description={slice.primary.phone_number}
          classname="mb-6"
        />
        <EmailContactCard
          icon={<MdEmail />}
          heading="Email"
          primaryEmail={slice.primary.email}
          secondaryEmail={slice.primary.secondary_email}
        />
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
  description: string | KeyTextField;
  classname?: string;
}) {
  return (
    <div className={clsx("flex items-start gap-4", classname)}>
      <div className="text-xl text-mainO">{icon}</div>
      <div>
        <span className="font-semibold uppercase tracking-widest">
          {heading}
        </span>
        <span className="block text-xl font-semibold text-gray-500 md:text-2xl lg:text-3xl">
          {description}
        </span>
      </div>
    </div>
  );
}

function EmailContactCard({
  icon,
  heading,
  primaryEmail,
  secondaryEmail,
  classname,
}: {
  icon: any;
  heading: string;
  primaryEmail: string | KeyTextField;
  secondaryEmail: string | KeyTextField;
  classname?: string;
}) {
  return (
    <div className={clsx("flex items-start gap-4", classname)}>
      <div className="text-xl text-mainO">{icon}</div>
      <div>
        <span className="font-semibold uppercase tracking-widest">
          {heading}
        </span>
        <span className="block text-xl font-semibold text-gray-500 md:text-2xl lg:text-3xl">
          {primaryEmail}
        </span>
        <span className="block text-xl font-semibold text-gray-500 md:text-2xl lg:text-3xl">
          {secondaryEmail}
        </span>
      </div>
    </div>
  );
}
