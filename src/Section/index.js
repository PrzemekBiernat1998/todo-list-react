import { MainSection,
SectionHeader
} from "./styled";

const Section = ({ title, body , extraContainer }) => (
    <MainSection>
    <SectionHeader>
        <h2 className="section__title">{title}</h2>
        {extraContainer}
        </SectionHeader>
      <div className="list__item">
         {body}
      </div>
    </MainSection>
);

export default Section;