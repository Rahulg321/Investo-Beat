import { KeyTextField, LinkField } from "@prismicio/client";
import React from "react";

const MainButton = ({
  btnlabel,
  btnLink,
}: {
  btnlabel: KeyTextField | string;
  btnLink: LinkField;
}) => {
  return (
    <button className="mt-4 w-fit border-2 border-mainO bg-white px-8 py-2 font-semibold text-mainO">
      {btnlabel}
    </button>
  );
};

export default MainButton;
