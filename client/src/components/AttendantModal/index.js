import React, { useState } from 'react'

import { Background, Wrapper, ModalTitle, Body, FlexItem } from './style'
import TrincaInput from '../../objects/TrincaInput/index'
import TrincaButton from '../../objects/TrincaButton/index'
import AttendantService from '../../services/AttendantService'

const AttendandModal = ({action, id}) => {
    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [paid, setPaid] = useState(false)
    const [withDrinks, setWithDrinks] = useState(false)

    function handleNameChange(event) {
        setName(event.target.value);
    }
    
    function handleValueChange(event) {
        setValue(event.target.value);
    }

    function handlePaidChange(event) {
        setPaid(!paid);
    }

    function handleWithDrinksChange(event) {
        setWithDrinks(!withDrinks);
    }

    async function saveAttendant() {
        try {
            const attendant = {
                _barbecueId: id,
                name: name,
                value: parseInt(value),
                paid: paid,
                with_drinks: withDrinks
            }

            await AttendantService.AddAttendant(attendant)
            action(false);

            alert('Participante adicionado com sucesso!');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <Background>
            <Wrapper>
                <Body>
                    <ModalTitle>Adicionar Participante</ModalTitle>

                    <FlexItem>
                        <span>Nome</span>
                        <TrincaInput type="text" onChange={handleNameChange}></TrincaInput>
                    </FlexItem>

                    <FlexItem>
                        <span>Valor da contribuição</span>
                        <TrincaInput type="number" onChange={handleValueChange}></TrincaInput>

                        <span>Pago:</span>
                        <input type="checkbox" onChange={handlePaidChange} checked={paid}></input>
                    </FlexItem>

                    <FlexItem>
                        <span>Com bebida</span>
                        <input type="checkbox" onChange={handleWithDrinksChange} checked={withDrinks}></input>

                        <span>Sem bebida</span>
                        <input type="checkbox" onChange={handleWithDrinksChange} checked={!withDrinks}></input>
                    </FlexItem>
                </Body>

                <TrincaButton primary onClick={saveAttendant}>Adicionar</TrincaButton>
                <TrincaButton cancel onClick={() => action(false)}>Cancelar</TrincaButton>
            </Wrapper>
        </Background>
    )
}

export default AttendandModal;
