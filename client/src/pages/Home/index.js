import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Wrapper, Panel } from './style'
import BarbecuesTable  from '../../components/BarbecuesTable/index'
import BarbecueModal  from '../../components/BarbecueModal/index'
import BarbecueSummary  from '../../components/BarbecueSummary/index'
import AttendantsTable  from '../../components/AttendantsTable/index'
import TrincaButton  from '../../objects/TrincaButton/index'

const Home = () => {
    const [items, setItems] = useState([])
    const [selectedItem, setSelectedItem] = useState()
    const [showAddBarbecueModal, setshowAddBarbecueModal] = useState(false)

    function handleClick() {
        setshowAddBarbecueModal(true);
    }

    function closeModal(dataFromChild) {
        setshowAddBarbecueModal(dataFromChild);
    }

    function updateItems(dataFromChild) {
        setItems(dataFromChild)
    }

    function updateSelectedItem(dataFromChild) {
        setSelectedItem(dataFromChild)
    }
    
    useEffect(() => {
        async function fetchBarbecues() {
            const result = await axios('http://localhost:3000/api/barbecue');
            setItems(result.data);
        }

        fetchBarbecues();
    }, [])

    return (
        <Wrapper>
            <Panel>
                <BarbecuesTable items={items} action={updateSelectedItem} refetch={updateItems}/>
                <TrincaButton primary onClick={handleClick}>+ Adicionar Churras</TrincaButton>
            </Panel>

            {showAddBarbecueModal ? 
                (<BarbecueModal showAddBarbecueModal={showAddBarbecueModal} action={closeModal} refetch={updateItems}/>) : 
                null
            }


            {
                selectedItem ? (
                    <>
                        <Panel>
                            <BarbecueSummary barbecue={selectedItem}></BarbecueSummary>
                        </Panel>

                        <Panel>
                            <AttendantsTable barbecue={selectedItem} refetch={updateSelectedItem}></AttendantsTable>
                        </Panel>
                    </>
                ) : null
            }
        </Wrapper>
    )
}

export default Home;