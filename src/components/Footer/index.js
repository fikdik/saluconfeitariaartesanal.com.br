import React from "react"

import { email, phone, address } from "content/info/contact.json"
import { graphql, StaticQuery } from "gatsby"
import _ from "lodash"

import SmartLink from "~/components/SmartLink"
import SocialIcons from "~/components/SocialIcons"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"
import Signature from "./Signature"

export default function Footer() {
  return (
    <div className={styles.bgFooter}>
      <div className="container flex flex-wrap">
        <div className={styles.footerCol}>
          <img src="/img/salu-logo-bbg.svg" alt="Salu logo" />
          <span>Tudo feito com amor!</span>
          <SocialIcons />
        </div>
        <div className={styles.footerCol}>
          <header>Ultimas Gostosuras</header>
          <BlogPosts />
        </div>
        <div className={styles.footerCol}>
          <header className="">Contato</header>
          <dl>
            <SmartLink to={address.link}>
              <SVGIcon className="md:hidden lg:block" name="map-marker-alt" />
              <div>
                <dt>Endereço</dt>
                <dd>{address.display}</dd>
              </div>
            </SmartLink>
            <SmartLink
              to={`https://api.whatsapp.com/send?phone=${phone.number}&text=${phone.message}`}
            >
              <SVGIcon className="md:hidden lg:block" name="phone" />
              <div>
                <dt>Telefone / Whatsapp</dt>
                <dd>{phone.display}</dd>
              </div>
            </SmartLink>
            <SmartLink to={`mailto:${email.address}?subject=${email.subject}`}>
              <SVGIcon className="md:hidden lg:block" name="envelope" />
              <div>
                <dt>Email</dt>
                <dd>{email.address}</dd>
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
      query FooterBlogIndex {
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
