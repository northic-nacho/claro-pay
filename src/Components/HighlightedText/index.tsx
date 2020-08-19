import React from 'react';
import '../extended-html.d.ts';

interface HighlightedTextProps {
  containerClassName: string;
  effect: string;
  text: string;
}

const HighlightedText = ({
    containerClassName = '',
    effect = 'reveal-left-in',
    text
}: HighlightedTextProps ) => {
    return (
        <span className={`highlight ${containerClassName}`}>
            <i parallax={effect}>{text}</i>
            {text}
        </span>
    );
};

export default HighlightedText;
