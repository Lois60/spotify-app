import "./Features.css";

export const Features = ({ imageSrc, heading, paragraph }) => {
  return (
    <section className="features">
      <div className="wrapper">
      
        <img src={imageSrc} />
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    
    </section>
  );
};
