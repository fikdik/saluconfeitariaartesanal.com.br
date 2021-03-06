import React from "react"

import { email, phone, address } from "content/general/info.json"
import siteMetadata from "content/settings/siteMetadata"
import { graphql, StaticQuery } from "gatsby"

import SmartLink from "~/components/SmartLink"
import SocialIcons from "~/components/SocialIcons"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"
import Signature from "./Signature"

export default function Footer() {
  return (
    <div className={styles.bgFooter}>
      <div className="container flex flex-wrap">
        <div className={`${styles.footerCol} ${styles.logoCol} `}>
          <img src={siteMetadata.logoAlt} alt={`Logo, ${siteMetadata.name}`} />
          <span>Tudo feito com amor!</span>
          <div className="flex items-center">
            <SmartLink className="w-10 h-10 p-1 rounded-lg mr-2" to="/links">
              <SVGIcon className="w-10 h-10" name="link" />
            </SmartLink>
            <SocialIcons />
          </div>
        </div>
        <div className={`${styles.footerCol} ${styles.newsCol} `}>
          <header>Ultimas Gostosuras</header>
          <BlogPosts />
        </div>
        <div className={`${styles.footerCol} ${styles.contactCol} `}>
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
            <small>{post.frontmatter.metadata.datePublished}</small>
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
          sort: {
            order: DESC
            fields: [frontmatter___metadata___datePublished]
          }
          filter: { frontmatter: { templateKey: { eq: "blog/post" } } }
        ) {
          nodes {
            id
            frontmatter {
              title
              metadata {
                datePublished(formatString: "MMMM DD, YYYY")
              }
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
