import React from 'react'
import ButtonBox from '../Button/Button'
import { ContactInputs } from '../Input/Input'

const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-col-1 text-center mt-9 bg-black">
            <div
                className="col-span-1 ml-44 mt-10 relative inline-block font-medium group"
            >
                <span className={`relative text-primary-500 group-hover:text-white`}><img className="w-[70%] h-full" src="https://media1.popsugar-assets.com/files/thumbor/oxQ6oz09k5dj76iBWnQ8fQS-b0o/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/11/10/736/n/1922729/59937a645a05d69045c832.75949516_edit_img_twitter_post_image_file_44242623_1510275897.jpg" alt="..." /></span>
            </div>
            <div className="col-span-1 gap-4 p-6">
                <h2 className="mb-3 text-3xl font-bold text-white ">ASK US <br />ANYTHING</h2>
                <p className="mb-3 text-white dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptas  </p>
                <div className="flex gap-32 justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl text-white font-extrabold">73M+</dt>
                        <dd className="text-white0 dark:text-white">Developers</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl text-white font-extrabold">100M+</dt>
                        <dd className="text-white dark:text-white">Public repositories</dd>
                    </div>
              </div>
              <div className="mt-20">
                  <ContactInputs />
              </div>
                <div className="mt-20">
                    <ButtonBox field="Get More Info" href="#" />
                </div>
            </div>
        </div>
  )
}

export default Contact
