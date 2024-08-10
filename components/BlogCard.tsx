import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type BlogCardProps = {
  post: Content.BlogpostDocument;
  classnames?: string;
};

const BlogCard = ({ post, classnames }: BlogCardProps) => {
  const { title, small_description, featured_image, author } = post.data;

  return (
    <div className={clsx("bg-gray-200 p-4", classnames)}>
      <div className="">
        <PrismicNextImage field={featured_image} className="object-cover" />
      </div>
      <h3 className="my-2">{title}</h3>
      <span className="mb-2 block text-xl font-medium">
        {small_description}
      </span>
      <Link
        href={`/blogs/${post.uid}`}
        className="flex items-center gap-4 text-lg font-semibold text-mainO"
      >
        Read More
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default BlogCard;
