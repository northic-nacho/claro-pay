import React from 'react';

interface SectionDescriptionProps {
  children: JSX.Element;
}

const SectionDescription = ({ children }: SectionDescriptionProps ) => {
    return <div className="page_section-description">{children}</div>;
};

export default SectionDescription;
