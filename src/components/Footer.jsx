import styles from '../style'
import {footerLinks, socialMedia} from '../constants'
import {logo} from '../assets'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start">
          <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} max-w-[310px] mx-5 my-5`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-[1.5] flex-wrap flex-row justify-between w-full md:mt-0 mt-10 ">
          {
            footerLinks.map((footerLink) => (
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px] ">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {
                    footerLink.links.map((link, index) => (
                      <li key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${footerLink.links.length - 1 !== index ? 'mb-4' : 'mb-0'}`}
                      >
                         {link.name}
                      </li>
                  ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      
      <div className={`w-full flex md:flex-row flex-col justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]`}>
          <p className="font-poppins font-noraml text-center text-dimWhite text-[16px] leading-[27px] ">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {
                socialMedia.map((social, index) => (
                  <img  src={social.icon}
                        key={social.id}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}
                  />
                ))
            }
          </div>
      </div>
    </section>
  )


export default Footer