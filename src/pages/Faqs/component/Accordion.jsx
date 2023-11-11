import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion"     
function Accordions(){
  return (
    <div>
        <Accordion type="single" collapsible> 
  <AccordionItem value="item-1">
    <AccordionTrigger>In elementum est a ante sodales iaculis.</AccordionTrigger>
    <AccordionContent>  
    Morbi porttitor ligula in nunc varius sagittis. 
    </AccordionContent>
  </AccordionItem>
</Accordion> 
    </div>
  )
}

export default Accordions