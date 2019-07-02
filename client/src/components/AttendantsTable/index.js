import React from 'react'

import { Table, Row, HeadItem, Item } from './style'
import TrincaButton from '../../objects/TrincaButton/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import AttendanceService from '../../services/AttendantService'
import BarbecueService from '../../services/BarbecueService'

const BarbecuesTable = ({barbecue, refetch}) => {

    function drinkToYesOrNo(withDrink) {
        return withDrink ? "Sim" : "Não";
    }

    async function deleteAttendant(attendantId) {
        try {
            await AttendanceService.DeleteAttendant(attendantId);
            const result = await BarbecueService.GetBarbecueById(barbecue._id)

            refetch(result);

            alert('Participante removido com sucesso');
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
