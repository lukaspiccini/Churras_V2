import React, { useState } from 'react'

import { Background, Wrapper, ModalTitle, Body, FlexItem, Observation, Footer } from './style'
import TrincaInput from '../../objects/TrincaInput/index'
import TrincaButton from '../../objects/TrincaButton/index'
import BarbecueService from '../../services/BarbecueService'

const BarbecueModal = ({action, refetch}) => {
    const [when, setWhen] = useState()
    const [why, setWhy] = useState()
    const [observation, setObservation] = useState()
    const [withDrinks, setWithDrinks] = useState()
    const [withoutDrinks, setWithoutDrinks] = useState()

    function handleWhenChange(event) {
        setWhen(event.target.value);
    }
    
    function handleWhyChange(event) {
        setWhy(event.target.value);
    }

    function handleObservationChange(event) {
        setObservation(event.target.value);
    }

    function handleWithDrinksChange(event) {
        setWithDrinks(event.target.value);
    }

    function handleWithoutDrinksChange(event) {
        setWithoutDrinks(event.target.value);
    }

    async function saveBarbecue() {
        try {
            const barbecue = {
                date: when,
                description: why,
                observations: observation,
                price_with_drinks: withDrinks,
                price_without_drinks: withoutDrinks
            }

            await BarbecueService.AddBarbecue(barbecue);

            const result = await BarbecueService.GetAllBarbecues();

            refetch(result);
            action(false);

            alert('Churras criado com sucesso!');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <Background>
            <Wrapper>
                <Body>
                    <ModalTitle>Churras da Trinca</ModalTitle>

                    <FlexItem>
                        <span>Quando?</span>
                        <TrincaInput type="date" onChange={handleWhenChange}></TrincaInput>
                    </FlexItem>

                    <FlexItem>
                        <span>Porquê?</span>
                        <TrincaInput type="text" onChange={handleWhyChange}></TrincaInput>
                    </FlexItem>

                    <FlexItem>
                        <span>Obs:</span>
                        <Observation type="date" onChange={handleObservationChange}></Observation>
                    </FlexItem>

                    <span>Valor de contribuição sugerido:</span>
                    <Footer>
                        <FlexItem>
                            <span>Com bebida</span>
                            <TrincaInput type="number" onChange={handleWithDrinksChange}></TrincaInput>
                        </FlexItem>

                        <FlexItem>
                            <span>Sem bebida</span>
                            <TrincaInput type="number" onChange={handleWithoutDrinksChange}></TrincaInput>
                        </FlexItem>

                    </Footer>
                </Body>

                <TrincaButton primary onClick={saveBarbecue}>Adicionar</TrincaButton>
                <TrincaButton cancel onClick={() => action(false)}>Cancelar</TrincaButton>
            </Wrapper>
        </Background>
    )
}

export default BarbecueModal;
