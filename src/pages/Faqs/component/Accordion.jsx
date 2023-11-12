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
    <AccordionContent className="text-[#2C742F]">  
    Morbi porttitor ligula in nunc varius sagittis. Proin  <br/> dui nisi, laoreet ut tempor ac, cursus vitae eros. 
    </AccordionContent>
  </AccordionItem>
</Accordion> 
    </div>
  )
}

export default Accordions