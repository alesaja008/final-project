import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./styles.css"

const Checkout = () => {
    const {entities} = useSelector((state) => state.cart);
     const countTotalPrice = (product) => {
         const result = product.reduce((prevValue, currValue) => {
            return prevValue + parseInt(currValue.price, 10)
        }, 0)
        return result
     }
    return (
        <>
       <Container className="container-apps mt-5">
        <div>
            <h5>Keranjang</h5>
        </div>
        <Table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                {entities.map((item) => {
                    return (
                        <tr>
                            <td>{item.title}</td>
                            <td>Rp. {item.price}</td>
                        </tr>
                    )
                })} 
            </tbody>
            <tfoot>
                <tr>
                    <td className="font-weight-bold">Total</td>
                    <td className="font-weight-bold">Rp. {countTotalPrice(entities)}. 00</td>
                </tr>
            </tfoot>
        </Table>
       </Container>
        </>
    );
}

export default Checkout;