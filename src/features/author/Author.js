import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const Author = () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Przemysław Biernat"
            body={
                <>
                    <p class="main__paragraph">Mam na imię Przemek. Pochodzę z małej wsi, która znajduje sie niedaleko Żywca. Jestem
                        fanem <b>piłki nożej</b> ale nie tylko,
                        ponieważ inne sporty zespołowe jak i solowe nie są mi obce.
                    </p>
                </>}
        />
    </Container>
);
export default Author;