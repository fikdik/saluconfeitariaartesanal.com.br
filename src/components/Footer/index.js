import React from "react"

import { contacts } from "content/info/contact.json"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import Signature from "./Signature"

export default function Footer() {
  const [address, phone, email] = contacts
  return (
    <div className="bg-footer pt-6 text-custom-1-1">
      <div className="container flex flex-wrap">
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
          <header className="">Contato</header>
          <dl>
            <SmartLink to={address.url}>
              <SVGIcon className="md:hidden lg:block" name="map-marker-alt" />
              <div>
                <dt>{address.label}</dt>
                <dd>{address.description}</dd>
              </div>
            </SmartLink>
            <SmartLink to={phone.url}>
              <SVGIcon className="md:hidden lg:block" name="phone" />
              <div>
                <dt>{phone.label}</dt>
                <dd>{phone.description}</dd>
              </div>
            </SmartLink>
            <SmartLink to={email.url}>
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
