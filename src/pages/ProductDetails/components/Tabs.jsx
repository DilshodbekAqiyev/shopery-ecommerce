import { Button } from "../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { AdditionalInformationData, CheckData, FeedbackData, featureData } from "../__mock__/detailsData";

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
        className="text-textSmall text-grays-gray500 flex justify-between gap-[136px] py-2 data-[state=inactive]:hidden"
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
            {featureData.map(({id,title,img,description}) => {
              return <div key={id} className="flex items-center gap-3">
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
      <TabsContent value="additionInfo" className="flex items-start justify-between py-2 data-[state=inactive]:hidden">
        <div className="flex flex-col gap-y-3">
          {AdditionalInformationData.map(({title,value}) => {
            return <div key={title} className="flex items-center text-textSmall">
            <h4 className="w-[112px] font-[500] text-grays-gray900">{title}</h4>
            <span className="text-grays-gray600">{value}</span> 
            </div>
          })}
        </div>
        <div className="flex flex-col items-start gap-5 w-[536px]">
          <div className=" bg-greenGrays-greenGray700 w-full h-[320px] flex justify-center items-center rounded-lg">Video</div>
          <div className="border-2 border-grays-gray100 px-5 py-6 flex justify-between w-full rounded-lg">
            {featureData.map(({id,title,img,description}) => {
              return <div key={id} className="flex items-center gap-3">
                <img src={img} alt="featureImg" loading="lazy"/>
                <div className="flex flex-col gap-1">
                  <h4 className="font-[500] text-grays-gray900 text-textSmall">{title}</h4>
                  <p className="text-[13px]">{description}</p>
                </div>
              </div>
            })}
          </div>
        </div>
        <div></div>
      </TabsContent>
      <TabsContent value="customerFeedback" className="py-2 data-[state=inactive]:hidden">
       <div className="w-[760px]">
       {FeedbackData.map(({rating,img,id,name,comment,latestSend}) => {
        return <div key={id} className="flex flex-col items-start gap-3 py-5 w-full border-b-2 border-b-grays-gray100 text-textSmall text-grays-gray500">
          <div className="flex items-center gap-3 w-full">
            <img src={img} alt="AvatarImgg" />
            <div className="flex items-center justify-between w-full">
              <div>
                <h3 className="font-medium text-grays-gray900">{name}</h3>
                <span>{rating}</span>
              </div>
              <div className="text-grays-gray600">{latestSend}</div>
            </div>
          </div>
          <p>{comment}</p>
        </div>
       })}
       </div>
       <Button className='mt-5' variant='outline'>Load More</Button>
      </TabsContent>
    </Tabs>
  );
}

export default TabBar;
