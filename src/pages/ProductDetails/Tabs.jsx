import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

function TabBar() {
  return (
    <Tabs defaultValue="description" className="w-full bg-white">
      <TabsList className="bg-white">
        <TabsTrigger
          value="description"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none border-white border-2 data-[state=active]:border-b-primary"
        >
          Descriptions
        </TabsTrigger>
        <TabsTrigger
          value="additionInfo"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none border-white border-2 data-[state=active]:border-b-primary"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="customerFeedback"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none border-white border-2 data-[state=active]:border-b-primary"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">Description</TabsContent>
      <TabsContent value="additionInfo">Additional Information</TabsContent>
      <TabsContent value="customerFeedback">Customer Feedback</TabsContent>
    </Tabs>
  );
}

export default TabBar;
