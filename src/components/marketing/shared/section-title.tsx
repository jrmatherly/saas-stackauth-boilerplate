import React from "react";

interface SectionTitleProps {
  name: string;
  title: string;
}

export const SectionTitle = ({name, title}: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="font-bold font-mono text-primary text-sm uppercase tracking-wider">
        {name}
      </h2>
      <h3 className="mx-auto mt-4 max-w-xs font-semibold text-3xl sm:max-w-xl sm:text-4xl md:text-5xl">
        {title}
      </h3>
    </div>
  );
};