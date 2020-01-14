import React from "react"

import { contacts } from "content/info/contact.json"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import Signature from "./Signature"

export default function Footer() {
  const [address, phone, email] = contacts
  return (
    <div className="bg-footer pt-6">
      <div className="container flex flex-wrap text-gray-200">
        <div className="footer-col">
          <img src="/img/salu-logo-bbg.svg" alt="Salu logo" />
          <span>Tudo feito com amor!</span>
        </div>
        <div className="footer-col">
          <header>Ultimas Gostosuras</header>
          <ul>
            <li>
              <SmartLink>
                <span>Post Title</span>
                <small>30 de outubro de 2019</small>
              </SmartLink>
            </li>
            <li>
              <SmartLink>
                <span>
                  Post Title 2 a very long long title, more them I expected to
                  be
                </span>
                <small>30 de outubro de 2019</small>
              </SmartLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <header>Contato</header>
          <dl>
            <SmartLink url="https://www.google.com/maps/place/Sal%C3%BA+Confeitaria+Artesanal/@-20.2503748,-40.2726554,17z/data=!3m1!4b1!4m5!3m4!1s0xb819a814e6cb6b:0x86e4aa1c4e2ceb81!8m2!3d-20.2503748!4d-40.2704667">
              <SVGIcon className="md:hidden lg:block" name="map-marker-alt" />
              <div>
                <dt>{address.label}</dt>
                <dd>{address.description}</dd>
              </div>
            </SmartLink>
            <SmartLink url="https://api.whatsapp.com/send?phone=+5527996250970&text=Ol%C3%A1%20Salu%20Confeitaria%20Artesanal">
              <SVGIcon className="md:hidden lg:block" name="phone" />
              <div>
                <dt>{phone.label}</dt>
                <dd>{phone.description}</dd>
              </div>
            </SmartLink>
            <SmartLink url={`mailto:${email.description}`}>
              <SVGIcon className="md:hidden lg:block" name="envelope" />
              <div>
                <dt>{email.label}</dt>
                <dd>{email.description}</dd>
              </div>
            </SmartLink>
          </dl>
        </div>
      </div>
      <Signature />
    </div>
  )
}
