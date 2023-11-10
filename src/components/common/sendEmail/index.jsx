import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../../ui/button'

function SendEmail() {
  const [email, setEmail] = useState('')

  const sendEmail = () => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      try {
        emailjs.send(
          'service_9b1piuw',
          'template_31kxhvg',
          {
            from_name: 'Ecobazar',
            reply_to: 'bu juda ajoyib habar',
            message:
              "bizni saytdan foydalanganingiz uchun raxmat \n bu saytdan hali ancha vaqt foydalanasiz degan umiddamiz \n agar sayt tuzish kerak bo'lsa shu manzillarga murojat qiling.",
            to_email: email,
            to_name: email,
          },
          'KiJukHoeyLNnyatMO'
        )
        // console.log("successful", email);
        setEmail('')
      } catch (error) {
        console.error(error)
      }
    })()
  }

  return (
    <div className=" container flex items-center max-xl:flex-col max-xl:items-start max-xl:gap-5 justify-between py-12 bg-greenGrays-greenGray0.5">
      <img src="./assets/Logo.png" alt="logo" className=" w-[223px] object-fill" />
      <div>
        <p className=" font-medium text-[24px]">Subcribe our Newsletter</p>
        <p className=" font-normal text-sm text-greenGrays-greenGray400">
          Pellentesque eu nibh eget mauris congue mattis matti.
        </p>
      </div>
      <div className=" bg-white rounded-full p-0 max-[570px]:bg-transparent">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" outline-none p-4 px-8 bg-transparent text-gray-500 w-[320px] max-[570px]:bg-white max-[570px]:rounded-full max-[570px]:mb-5"
          type="text"
          placeholder="Your email address"
        />
        <Button onClick={sendEmail} className="rounded-full px-[40px] text-base font-medium">
          Subscribe
        </Button>
      </div>
    </div>
  )
}

export default SendEmail
