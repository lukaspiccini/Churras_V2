import React, { useState } from 'react'
import axios from 'axios'

import { Background, Wrapper, ModalTitle, Body, FlexItem, Observation, Footer } from './style'
import TrincaInput from '../../objects/TrincaInput/index'
import TrincaButton from '../../objects/TrincaButton/index'

const AttendandModal = ({action}) => {
    const [when, setWhen] = useState()
    const [why, setWhy] = useState()
    const [observation, setObservation] = useState()
    const [withDrinks, setWithDrinks] = useState()

    function handleWhenChange(event) {
        setWhen(event.target.value);
    }
    
    function handleWhyChange(event) {
        setWhy(event.target.value);
    }

    function handleObservationChange(event) {
        setObservation(event.target.value);
    }

    async function saveBarbecue() {
        // try {
        //     await axios.post('http://localhost:3000/api/attendant',{
        //         date: when,
        //         description: why,
        //         observations: observation,
        //         price_with_drinks: withDrinks,
        //         price_without_drinks: withoutDrinks
        //     })

        //     const result = await axios.get('http://localhost:3000/api/barbecue');

        //     refetch(result.data);
        //     action(false);

        //     alert('Participante adicionado com sucesso!');
        // } catch (err) {
        //     alert(err);
        // }
    }

    return (
        <Background>
            <Wrapper>
                <Body>
                    <ModalTitle>Adicionar Participante</ModalTitle>

                    <FlexItem>
                        <span>Nome</span>
                        <TrincaInput type="text" onChange={handleWhenChange}></TrincaInput>
                    </FlexItem>

                    <FlexItem>
                        <span>Valor da contribuição</span>
                        <TrincaInput type="number" onChange={handleWhyChange}></TrincaInput>

                        <span>Pago:</span>
                        <input type="checkbox" onChange={handleObservationChange}></input>
                    </FlexItem>

                    <FlexItem>
                        <span>Com bebida</span>
                        <input type="checkbox" onChange={handleObservationChange}></input>

                        <span>Sem bebida</span>
                        <input type="checkbox" onChange={handleObservationChange}></input>
                    </FlexItem>
                </Body>

                <TrincaButton primary onClick={saveBarbecue}>Adicionar</TrincaButton>
                <TrincaButton cancel onClick={() => action(false)}>Cancelar</TrincaButton>
            </Wrapper>
        </Background>
    )
}

export default AttendandModal;