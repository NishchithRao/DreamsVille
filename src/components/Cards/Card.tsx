import React from "react";
import "./Cards.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  image: string;
}

const Card = ({ title, image, ...rest }: CardProps) => {
  return (
    <div {...rest} className={`card ${title && "has-title"}`}>
      {title && <p>{title}</p>}
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
