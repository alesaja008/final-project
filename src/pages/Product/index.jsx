import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container,  Card, Row, Col, Placeholder } from "react-bootstrap";
import { getAll } from "../../store/product/action";
import { useDispatch, useSelector } from "react-redux";
import './styles.css';
import SliderApps from "../../components/Slider";


const ProductPage = () => {

    const {entities, loading} = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProducts = async () => {
        dispatch(getAll());
    };

    const goToDetail = (prodId) => {
        navigate (`/detail/${prodId}`)
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (

      <>

      <Container className="Container-apps">
      <SliderApps />
        <Row>
          {loading ? 
          <Container className="mt-3">
            <Row xs={2} md={2} className="g-4">
              {Array.from({ length: 8 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{ width: '11rem' }} >
                <Card.Img variant="top" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
                </Card.Body>
              </Card>
                </Col>
              ))}
            </Row>
          </Container>
          
        
          :  entities.map((product,i) => {
                return (
                    <Col lg={6} xs={6} key={i} style={{cursor: 'pointer'}}>
                          
                                <Card className="card-deck mt-3" key={product.id} onClick={() => goToDetail(product.id)}>
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                    <Card.Title className="tittle-product">{product.title}</Card.Title>
                                    <Card.Text className="des-text">{product.descsription}</Card.Text>
                                    <Card.Text className="text-bold">Rp. {product.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                          
                    </Col>
                    
                )
            })}
        </Row>
      </Container>

      </>
    )

};

export default ProductPage;