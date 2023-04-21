import { Container, Row, Col } from "react-bootstrap"
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    margin-top: 40pc;
    text-align: center;
`
const StyledRow = styled(Row)`
    border-bottom: 1px solid #E8E9EB;
    display: flex;
    justify-content; space-evenly;
`

const CircleDiv = styled.div`
    width: 40px;
    height: 40px;
    background-color: red;
    border: 1px solid red;
    border-radius: 100%;
`

export default function StoreListing() {
    return(
            <StyledContainer>
                <StyledRow>
                    <Row>
                        <Col xs='0.5'>
                            <CircleDiv/>
                        </Col>
                        <Col>
                            <h5 style={ { fontWeight: 'bold' } }>Aldi</h5>
                            <p>Delivery and Pickup</p>
                        </Col>
                    </Row>
                    <Col sm='1'></Col>
                    <Row>
                        <Col xs='0.5'>
                            <CircleDiv/>
                        </Col>
                        <Col>
                            <h5 style={ { fontWeight: 'bold' } }>Scott's Veg</h5>
                            <p>Delivery and Pickup</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='0.5'>
                            <CircleDiv/>
                        </Col>
                        <Col>
                            <h5 style={ { fontWeight: 'bold' } }>Kroger</h5>
                            <p>Delivery and Pickup</p>
                        </Col>
                    </Row>
                </StyledRow>
            </StyledContainer>
    )
}