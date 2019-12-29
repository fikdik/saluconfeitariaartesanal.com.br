import React from "react"

import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import Navbar from "./Navbar"

export default function Header() {
  return (
    <section id="page-header">
      <div className="bg-black py-2 hidden sm:block">
        <div className="container">
          <div className="text-white">
            <SmartLink className="flex items-center">
              <SVGIcon name="envelope" className="h-4 w-4 mr-3" />
              saluconfeitariaartesanal@gmail.com
            </SmartLink>
          </div>
          <div></div>
        </div>
      </div>
      <Navbar />
    </section>
  )
}

// const Container = styled.section``

// const TopBarBG = styled.div`
//   background: #222;
// `
// const TopBar = styled.div`
//   ${props => props.theme.container}
//   display: none;

//   color: #eee;

//   a {
//     display: flex;
//     align-items: center;
//     height: 2.5rem;
//   }

//   svg {
//     height: 1rem;
//     width: 1rem;
//     margin-right: 1rem;
//   }

//   ${media.tablet} {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
// `
