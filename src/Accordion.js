import { useState } from 'react';
import AccordionItem from './AccordionItem'

function Accordion({data}) {
    const [curOpen, setCurOpen] = useState(null);

    return (
        <div className='accordion'>
            {data.map((el, i) => {
                return <AccordionItem
                    key={i}
                    title={el.title}
                    num={i}
                    curOpen={curOpen}
                    onOpen={setCurOpen}
                >
                    {el.text}
                </AccordionItem>
            } )}
        </div>
    )
}

export default Accordion;
