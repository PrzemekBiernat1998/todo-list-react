import "./style.css"

const Section = ({title, body , extraContainer }) => (
    <section className="section">
    <div className="section__header section__header--display">
        <h2 className="section__title">{title}</h2>
        {extraContainer}
        </div>
      <div className="list__item">
         {body}
      </div>
    </section>
);

export default Section;