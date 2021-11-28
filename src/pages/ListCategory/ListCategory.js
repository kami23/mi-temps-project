import { Container, Row } from "react-bootstrap";
import Category from "../../components/Category/Category";
import category01 from "../../assets/category01.png";
import category02 from "../../assets/category02.png";
import category03 from "../../assets/category03.png";
import category04 from "../../assets/category04.png";
import category05 from "../../assets/category05.png";

const ListCategory = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h1>Categories of jobs</h1>
        <Category
          img={category01}
          title="App development Web & mobile applications Coding & programming"
        />
        <Category
          img={category02}
          title="Event organisation, Photography Flyer distribution"
        />
        <Category
          img={category04}
          title="Writting, Translating Correction Blogging"
        />
        <Category
          img={category03}
          title="Marketing, Commercial agent Communnity manager Phone operator"
        />

        <Category
          img={category05}
          title="Graphic design, UI/UX Web & mobile interfaces videos making..."
        />
      </Row>
    </Container>
  );
};

export default ListCategory;
