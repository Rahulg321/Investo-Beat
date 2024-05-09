import { Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import React from "react";
import { components } from "@/slices";
import formatDate from "@/lib/formatDate";

const ContentBody = ({ page }: { page: Content.BlogpostDocument }) => {
  const formattedDate = formatDate(page.data.publication_date);

  return (
    <article>
      <section className="block-space min-h-[60vh] content-center bg-mainO">
        <div className="big-container">
          <h1 className="text-center text-white">{page.data.title}</h1>
          <div className="md flex flex-col items-center justify-between md:flex-row">
            <div className="flex gap-4 text-white">
              {page.tags.map((tag, index) => (
                <span key={index} className="text-xl font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xl font-medium text-white">
              {formattedDate}
            </p>
          </div>
        </div>
      </section>
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  );
};

export default ContentBody;
