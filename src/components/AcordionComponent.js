import React from 'react'
import ShowItems from './ShowItems';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function AcordionComponent({ categories, setCurrentId, products }) {

    return (
        <>
            <Accordion allowZeroExpanded>
                {
                    categories.map(({ name, id }) => (
                        <AccordionItem key={id}>
                            < AccordionItemHeading >
                                <AccordionItemButton>
                                    {name}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="row row-cols-1 row-cols-md-3 g-2">
                                    <ShowItems {...{ setCurrentId, products }} />
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>

                    ))
                }
            </Accordion >

        </>
    )
}

export default AcordionComponent;
