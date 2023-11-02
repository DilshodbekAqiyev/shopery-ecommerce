import { Button } from "../../components/ui/button";

const BlogPopularTag = () => {
   return (
      <div>
         <h3 className="mb-[16px] mt-[20px]">Popular tag</h3>
         <div className="flex flex-wrap gap-[8px]">
            <Button className=" bg-secondary "> Meat</Button>
            <Button> Meat</Button>
            <Button className=" bg-secondary "> Meat</Button>
            <Button className=" bg-secondary "> Meat</Button>
            <Button className=" bg-secondary "> Meat</Button>
            <Button className=" bg-secondary "> Meat</Button>
            <Button className=" bg-secondary "> Meat</Button>
         </div>
      </div>
   );
};

export default BlogPopularTag;
