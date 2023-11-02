import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { CheckData, featureData } from "../__mock__/detailsData";

function TabBar() {
  return (
    <Tabs defaultValue="description" className="w-full bg-white">
      <TabsList className="bg-white border-b-2 border-b-gray-300 w-full rounded-none">
        <TabsTrigger
          value="description"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none pb-3 rounded-none border-2 border-white border-b-gray-300 data-[state=active]:border-b-primary"
        >
          Descriptions
        </TabsTrigger>
        <TabsTrigger
          value="additionInfo"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none pb-3 rounded-none border-2 border-white border-b-gray-300 data-[state=active]:border-b-primary"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="customerFeedback"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none pb-3 rounded-none border-2 border-white border-b-gray-300 data-[state=active]:border-b-primary"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="text-textSmall text-grays-gray500 mt-8 flex justify-between gap-[136px]"
      >
        <div className="flex flex-col gap-5 items-start w-[660px]">
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
          <div className="flex flex-col gap-3">
            {CheckData.map((data) => {
              return (
                <div key={data.title} className="flex items-center gap-2">
                  <p>{data.icon}</p>
                  <p>{data.title}</p>
                </div>
              );
            })}
          </div>
          <p>
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 w-[536px]">
        <div className=" bg-greenGrays-greenGray700 w-full h-[320px] flex justify-center items-center rounded-lg">Video</div>
        <div className="border-2 border-grays-gray100 px-5 py-6 flex justify-between w-full rounded-lg">
          {featureData.map(({title,img,description}) => {
            return <div key={title} className="flex items-center gap-3">
              <img src={img} alt="featureImg" loading="lazy"/>
              <div className="flex flex-col gap-1">
                <h4 className="font-[500] text-grays-gray900 text-textSmall">{title}</h4>
                <p className="text-[13px]">{description}</p>
              </div>
            </div>
          })}
        </div>
        </div>
      </TabsContent>
      <TabsContent value="additionInfo" className="mt-8">
        Additional Information
      </TabsContent>
      <TabsContent value="customerFeedback" className="mt-8">
        Customer Feedback
      </TabsContent>
    </Tabs>
  );
}

export default TabBar;
