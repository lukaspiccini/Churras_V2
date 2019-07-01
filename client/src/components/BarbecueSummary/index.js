import React, { useState } from 'react'

import TrincaButton from '../../objects/TrincaButton/index'
import AttendantModal  from '../../components/AttendantModal/index'
import { Wrapper, Title, Body, Item, ButtonItem, Footer, BottomBox, BottomItem } from './style'

const BarbecueSummary = ({barbecue}) => {
    const [showAddAttendanceModal, setShowAddAttendanceModal] = useState(false)

    function handleClick() {
        setShowAddAttendanceModal(true);
    }

    function closeModal(dataFromChild) {
        setShowAddAttendanceModal(dataFromChild)
    }

    function getExpectedValue() {
        let withoutDrinksTotal = barbecue.price_without_drinks * barbecue.attendants.filter(x => !x.with_drinks).length;
        let withDrinksTotal = barbecue.price_with_drinks * barbecue.attendants.filter(x => x.with_drinks).length;

        return withoutDrinksTotal + withDrinksTotal;
    }

    return (
        <Wrapper>
            {showAddAttendanceModal ? 
                (<AttendantModal action={closeModal} />) : 
                null
            }

            <Body>
                <Title>{barbecue.description}</Title>

                <Item>Dia {new Date(barbecue.date).toLocaleDateString()}</Item>
                <Item>{barbecue.observations}</Item>
                <Item>Quantos pila?</Item>

                <Footer>
                    <Item>Com bebida: <strong>R${barbecue.price_with_drinks}</strong></Item>
                    <Item>Sem bebida <strong>R${barbecue.price_without_drinks}</strong></Item>
                </Footer>

                <ButtonItem>
                    <TrincaButton primary onClick={handleClick}>+ Adicionar</TrincaButton>
                </ButtonItem>

                <BottomBox>
                    <Item>Número de participantes: {barbecue.attendants.length}</Item>
                    <Item>Valor a ser arrecadado: R${getExpectedValue()}</Item>
                    <Item>Valor já pago: R${barbecue.attendants.reduce((acc, item) => {
                        if (item.paid) return acc + item.value
                        else return acc
                    }, 0)}</Item>

                    <BottomItem>Total de Bebuns: {barbecue.attendants.filter(x => x.with_drinks).length}</BottomItem>
                    <BottomItem>Total de Saudáveis: {barbecue.attendants.filter(x => !x.with_drinks).length}</BottomItem>
                </BottomBox>
            </Body>
        </Wrapper>
    )

}

export default BarbecueSummary;