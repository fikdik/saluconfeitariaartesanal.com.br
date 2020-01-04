import React from "react"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import Signature from "./Signature"

export default function Footer() {
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
            <SmartLink>
              <div>
                <dt>Endereço</dt>
                <dd>
                  Av. Dr Herman Mondenese Wanderley, 655, 1 - Jardim Camburi
                </dd>
              </div>
              <SVGIcon name="map-marker-alt" />
            </SmartLink>
            <SmartLink>
              <div>
                <dt>Telefone / Whatsapp</dt>
                <dd>27 9 9625.0970</dd>
              </div>
              <SVGIcon name="phone" />
            </SmartLink>
            <SmartLink>
              <div>
                <dt>Email</dt>
                <dd>saluconfeitariaartesanal@gmail.com</dd>
              </div>
              <SVGIcon name="envelope" />
            </SmartLink>
          </dl>
        </div>
      </div>
      <Signature />
    </div>
  )
}
