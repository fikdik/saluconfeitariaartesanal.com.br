import React from "react"

import { contacts } from "content/info/contact.json"
import { graphql, StaticQuery } from "gatsby"

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
          <BlogPosts />
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

function FooterBlogPots({ data }) {
  const { nodes } = data.allMarkdownRemark
  return (
    <ul>
      {nodes.map(post => (
        <li key={post.id}>
          <SmartLink to={post.fields.slug}>
            <span>{post.frontmatter.title}</span>
            <small>{post.frontmatter.date}</small>
          </SmartLink>
        </li>
      ))}
    </ul>
  )
}

const BlogPosts = () => (
  <StaticQuery
    query={graphql`
      query BlogIndex {
        allMarkdownRemark(
          limit: 3
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog/post" } } }
        ) {
          nodes {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={(data, count) => <FooterBlogPots data={data} count={count} />}
  />
)
