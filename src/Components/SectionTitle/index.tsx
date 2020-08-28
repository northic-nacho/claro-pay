import React from 'react';

interface SectionTitleProps {
  children: JSX.Element;
}

const SectionTitle = ({ children }: SectionTitleProps ) => {
    return (
        <div className="page_section__title">
            <h1 className="title color-red">{children}</h1>
        </div>
    );
};

export default SectionTitle;
