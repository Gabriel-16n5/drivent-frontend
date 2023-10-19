import styled from 'styled-components';


export default function Header() {

    return (
        <>
            <PaymentHeader>
                Ingresso e pagamento
            </PaymentHeader>
        </>
    )
}

const PaymentHeader = styled.p`
    font-family: Roboto;
    font-size: 34px;
    text-align: left;
`;