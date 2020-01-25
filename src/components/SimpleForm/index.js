import React, { useState } from "react"

import { navigate } from "gatsby-link"

import styles from "./index.module.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function SimpleForm(props) {
  const [state, setState] = useState({})

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <form
      className={styles.simpleForm}
      name="contact"
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      netlify
    >
      <div className="hidden">
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
      </div>
      <div className={styles.input}>
        <input
          type={"text"}
          name={"name"}
          onChange={handleChange}
          id={"name"}
          placeholder="Seu nome"
          required={true}
        />
      </div>
      <div className={styles.input}>
        <input
          type={"email"}
          name={"email"}
          onChange={handleChange}
          id={"email"}
          placeholder="Seu email"
          required={true}
        />
      </div>
      <div className={styles.input}>
        <textarea
          name={"message"}
          onChange={handleChange}
          id={"message"}
          placeholder="Sua mensagem"
          required={true}
        />
      </div>
      <button className="bg-yellow-500 py-3 rounded-lg" type="submit">
        Enviar
      </button>
    </form>
  )
}
