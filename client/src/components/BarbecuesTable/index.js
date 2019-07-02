import React from 'react'

import { Table, Row, HeadItem, Item } from './style'
import TrincaButton from '../../objects/TrincaButton/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import BarbecueService from '../../services/BarbecueService'

const BarbecuesTable = ({items, action, refetch}) => {
    async function remove(barbecueId) {
        try {
            await BarbecueService.DeleteBarbecue(barbecueId)
            const result = await BarbecueService.GetAllBarbecues();
    
            refetch(result);

            alert('Churras apagado com sucesso!')
        } catch (err) {
            alert(err)
        }
    }

    async function setItem(barbecueId) {
        try {
            const result = await BarbecueService.GetBarbecueById(barbecueId);
            action(result);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <>
        {items.length > 0 ? (
            <Table>
                <thead>
                    <Row>
                        <HeadItem>Data</HeadItem>
                        <HeadItem>Descrição</HeadItem>
                        <HeadItem>Participantes</HeadItem>
                        <HeadItem>Total Arrecadado</HeadItem>
                        <HeadItem>Ações</HeadItem>
                    </Row>
                </thead>
                <tbody>
                    {items.map((item, key) => (
                        <Row key={key}>
                            <Item>{new Date(item.date).toLocaleDateString()}</Item>
                            <Item>{item.description}</Item>
                            <Item>{item.attendants.length}</Item>
                            <Item>{item.attendants.reduce((acc, actual) => {
                                        if (actual.paid) return acc + actual.value
                                        else return acc 
                                    }, 0)}  
                            </Item>
                            <Item>
                                <TrincaButton edit onClick={() => setItem(item._id)}><FontAwesomeIcon icon={faInfoCircle} size="1x" /></TrincaButton>
                                <TrincaButton cancel onClick={() => remove(item._id)}><FontAwesomeIcon icon={faTimesCircle} size="1x" /></TrincaButton>
                            </Item>
                        </Row>))
                        }
                </tbody>
            </Table>) : (<h1>Nenhum Churras cadastrado</h1>)}
        </>
    )
}

export default BarbecuesTable;