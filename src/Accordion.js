import AccordionItem from './AccordionItem'

function Accordion({data}) {
    return (
        <div className='accordion'>
            {data.map((el, i) => {
                return <AccordionItem
                    key={i}
                    title={el.title}
                    text={el.text}
                    num={i}
                />
            } )}
        </div>
    )
}

export default Accordion;
