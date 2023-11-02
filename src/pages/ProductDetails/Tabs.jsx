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
      <TabsContent value="description" className="text-textSmall">
        <div>
          <p>
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
            posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
            vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
            porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
            Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
            Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
            scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
            commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit.
            <br />
            <br />
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
            iaculis, metus faucibus elementum tincidunt, turpis mi viverra
            velit, pellentesque tristique neque mi eget nulla. Proin luctus
            elementum neque et pharetra.
          </p>
        </div>
        <div></div>
      </TabsContent>
      <TabsContent value="additionInfo">Additional Information</TabsContent>
      <TabsContent value="customerFeedback">Customer Feedback</TabsContent>
    </Tabs>
  );
}

export default TabBar;
