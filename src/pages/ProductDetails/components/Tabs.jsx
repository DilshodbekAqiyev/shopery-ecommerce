import PropTypes from 'prop-types'
import { Button } from '../../../components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { CheckData, featureData } from '../__mock__/detailsData'
import VideoPlayer from './VidoePlayer'

function TabBar({ product }) {
  const { description, reviews, additionalInformation } = product

  return (
    <Tabs defaultValue="description" className="w-full bg-white mt-2 mb-20">
      <TabsList className="bg-white border-b-2 border-b-gray-300 w-full rounded-none">
        <TabsTrigger
          value="description"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-[3px] pb-3 rounded-none border-2 border-white border-b-gray-300 data-[state=active]:border-b-primary"
        >
          Descriptions
        </TabsTrigger>
        <TabsTrigger
          value="additionInfo"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-[3px] pb-3 rounded-none border-2 border-white border-b-gray-300 data-[state=active]:border-b-primary"
        >
          Additional Information
        </TabsTrigger>
        <TabsTrigger
          value="customerFeedback"
          className="data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-[3px] pb-3 rounded-none border-2 border-white border-b-gray-300 data-[state=active]:border-b-primary"
        >
          Customer Feedback
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="text-textSmall text-grays-gray500 flex mt-8 justify-between gap-[136px] py-2 data-[state=inactive]:hidden"
      >
        <div className="flex flex-col gap-5 items-start w-[660px]">
          <p>{description}</p>
          <div className="flex flex-col gap-3">
            {CheckData.map((data) => {
              return (
                <div key={data.title} className="flex items-center gap-2">
                  <p>{data.icon}</p>
                  <p>{data.title}</p>
                </div>
              )
            })}
          </div>
          <p>
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis
            at ut massa.
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 w-[536px]">
          <div className="w-full h-[320px] object-cover rounded-lg">
            <VideoPlayer />
          </div>
          <div className="border-2 border-grays-gray100 px-5 py-6 flex justify-between w-full rounded-lg">
            {featureData.map(({ id, title, img, description }) => {
              return (
                <div key={id} className="flex items-center gap-3">
                  <img src={img} alt="featureImg" loading="lazy" />
                  <div className="flex flex-col gap-1">
                    <h4 className="font-[500] text-grays-gray900 text-textSmall">{title}</h4>
                    <p className="text-[13px]">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="additionInfo"
        className="flex mt-8 items-start justify-between py-2 data-[state=inactive]:hidden"
      >
        <div className="flex flex-col gap-y-3">
          {additionalInformation?.map(({ title, description }) => {
            return (
              <div key={title} className="flex items-center text-textSmall">
                <h4 className="w-[112px] font-[500] text-grays-gray900">{title}</h4>
                <span className="text-grays-gray600">{description}</span>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col items-start gap-5 w-[536px]">
          <div className="w-full h-[320px] object-cover rounded-lg">
            <VideoPlayer />
          </div>
          <div className="border-2 border-grays-gray100 px-5 py-6 flex justify-between w-full rounded-lg">
            {featureData.map(({ id, title, img, description }) => {
              return (
                <div key={id} className="flex items-center gap-3">
                  <img src={img} alt="featureImg" loading="lazy" />
                  <div className="flex flex-col gap-1">
                    <h4 className="font-[500] text-grays-gray900 text-textSmall">{title}</h4>
                    <p className="text-[13px] text-grays-gray600">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div></div>
      </TabsContent>
      <TabsContent value="customerFeedback" className="py-2 mt-8 data-[state=inactive]:hidden">
        <div className="w-[760px]">
          {reviews?.map(({ rating, userImage, id, userName, description, date }) => {
            return (
              <div
                key={id}
                className="flex flex-col items-start gap-3 py-5 w-full border-b-2 border-b-grays-gray100 text-textSmall text-grays-gray500"
              >
                <div className="flex items-center gap-3 w-full">
                  <img src={userImage} alt="AvatarImgg" />
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="font-medium text-grays-gray900">{userName}</h3>
                      <span className="flex items-center">
                        {Array(5)
                          .fill(undefined)
                          .map((_, index) => (
                            <img
                              key={index}
                              src={`/assets/icons/${index < rating ? 'star' : 'star-fill'}.svg`}
                              alt="Star"
                            />
                          ))}
                      </span>
                    </div>
                    <div className="text-grays-gray600">{date}</div>
                  </div>
                </div>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
        <Button
          className="mt-5 bg-[#EFF7EF] hover:bg-primary hover:text-white transition-all ease-in-out duration-500 active:scale-95"
          variant="ghost"
          size="md"
        >
          Load More
        </Button>
      </TabsContent>
    </Tabs>
  )
}
TabBar.propTypes = {
  product: PropTypes.any,
}

export default TabBar
