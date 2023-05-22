import { useEffect } from "react";
import {Container, Row, Col, Image, Button, Placeholder, Card} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../store/cart/slice";
import { getDetail } from "../../store/product/action";
import httpService from "../../utils/service";

const DetailPage = () => {
    const { id }= useParams();
    const dispatch = useDispatch();
    const { entity, loading} = useSelector((state) => state.product);

    const fetchProductDetail = async (prodId) => {
        // const response = await httpService.get(`/product/${prodId}`);
        // console.log("response detail", response);
      await dispatch(getDetail(prodId))

    };

useEffect(() => {
 fetchProductDetail(id);
}, [])
    return (


        <Container style={{ marginTop: "50px"}} className="Container-apps">
            {loading ? 
            <Row>
                <Col  md={{ span: 4 , offset: 2}}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Placeholder as="p" animation="glow">
                    <Placeholder lg={12} />
                </Placeholder>
                </Col>
                <Col>
                <Placeholder as="p" animation="glow">
                <Placeholder xs={3} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                <Placeholder xs={8} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as="p" animation="glow">
                <Placeholder xs={2} />
                </Placeholder>
                <Placeholder.Button variant="success" xs={2} />
                
                </Col>
                
                

            </Row>
             : (  <Row>
                <Col lg={12}>
                <Image style={{width: "100%", objectFit: "contain"}} src={entity.image} rounded/>
                </Col>
                <Col lg={12}>
                    <h3>{entity.title}</h3>
                    <p>{entity.descsription}</p>
                    <h5>Rp. {entity.price}</h5>

                    <Button onClick={() => dispatch(addItem(entity))} variant={"success"}>+ Add to Cart</Button>
                </Col>
            </Row>)}
          
        </Container>
    )
    
    
}

export default DetailPage;