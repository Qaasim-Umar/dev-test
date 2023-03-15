import Link from "next/link";
import React from "react";

type CategoriesProp = {
  text: String;
  number: String;
};

const CategoriesComponent = ({ text, number }: CategoriesProp): JSX.Element => {
  return (
    <Link href="/">
      <div className="flex gap-1 items-center">
        <p className="font-medium">{text}</p>
        <p className="text-green font-medium text-sm">({number})</p>
      </div>
    </Link>
  );
};

export default CategoriesComponent;
