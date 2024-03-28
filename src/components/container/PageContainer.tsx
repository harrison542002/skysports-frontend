import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  backlink?: { link: string; desc: string };
};

const PageContainer = (props: Props) => {
  return (
    <div className="px-5 py-5">
      <h2 className="text-3xl mb-5">{props.title}</h2>
      {props.backlink && (
        <h5 className="my-4">
          <Link href={props.backlink.link}>{props.backlink.desc} &#10230;</Link>
        </h5>
      )}

      <h3 className="text-2xl">{props.subtitle}</h3>
      <hr className="my-2" />
      {props.children}
    </div>
  );
};

export default PageContainer;
