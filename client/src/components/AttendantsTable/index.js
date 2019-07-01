import React from 'react'
import axios from 'axios'

import { Table, Row, HeadItem, Item } from './style'
import TrincaButton from '../../objects/TrincaButton/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const BarbecuesTable = ({barbecue, refetch}) => {

    function drinkToYesOrNo(withDrink) {
        return withDrink ? "Sim" : "Não";
    }

    async function deleteAttendant(attendantId) {
        try {
            axios.delete(`http://localhost:3000/api/attendant/${attendantId}`);
            const result = await axios.get(`http://localhost:3000/api/barbecue/${barbecue._id}`)

            refetch(result.data);

            alert('Participante apagado com sucesso');
        } catch(err) {
            alert(err);
        }
    }

    return (
        <>
            {barbecue.attendants.length > 0 ? (
                <Table>
                    <thead>
                        <Row>
                            <HeadItem>Nome</HeadItem>
                            <HeadItem>Contribuição</HeadItem>
                            <HeadItem>Bebida</HeadItem>
                            <HeadItem>Pago</HeadItem>
                            <HeadItem>Ações</HeadItem>
                        </Row>
                    </thead>
                    <tbody>
                        {barbecue.attendants.map((attendant, key) => (
                            <Row key={key}>
                                <Item>{attendant.name}</Item>
                                <Item>R${attendant.value}</Item>
                                <Item>{drinkToYesOrNo(attendant.with_drinks)}</Item>
                                <Item><input type="checkbox" checked={attendant.paid} disabled /></Item>
                                <Item>
                                    <TrincaButton cancel onClick={() => deleteAttendant(attendant._id)}><FontAwesomeIcon icon={faTimesCircle} size="1x" /></TrincaButton>
                                </Item>
                            </Row>))
                        }
                    </tbody>
                </Table>) : (<h1>Nenhum participante cadastrado</h1>)}
        </>
    )
}

export default BarbecuesTable;