import React, { useState } from "react"
import { toast } from "react-toastify"

import { Form, Input, Textarea } from "@rocketseat/unform"
import { phone, email } from "content/info/contact.json"
import * as Yup from "yup"

// import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  message: Yup.string().required("Precisa enviar uma mensagem"),
})

function openInNewTab(url, query = {}) {
  var win = window.open(url + encode(query), "_blank")
  win.focus()
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function SimpleForm() {
  const [way, setWay] = useState("")

  function handleSubmit(data, { resetForm }) {
    switch (way) {
      case "whatsapp": {
        const text = `${phone.message} Sou *${data.name.trim()}*.\n${
          data.message
        }`
        openInNewTab("https://api.whatsapp.com/send?", {
          phone: phone.number,
          text,
        })
        toast.success("Campos validos, complete o envio pelo Whatsapp")
        resetForm({ message: "" })
        break
      }
      case "email": {
        const body = `Sou ${data.name.trim()}.\n${data.message}`
        openInNewTab(`mailto:${email.address}?`, {
          subject: `contato pela página ${window.location.pathname} `,
          body,
        })
        toast.success("Campos validos, complete o envio pelo seu app de email")
        resetForm({ message: "" })
        break
      }
      default: {
        toast.error("Use um dos botoes para enviar")
      }
    }
  }

  return (
    <Form
      schema={schema}
      name="contact"
      method="post"
      action="/"
      onSubmit={handleSubmit}
      className={styles.simpleForm}
    >
      <div className={styles.input}>
        <Input name="name" type="text" placeholder="Escreva seu nome aqui" />
      </div>
      <div className={styles.input}>
        <Textarea name="message" placeholder="Escreva sua mensagem aqui" />
      </div>
      <div className="flex w-full text-white">
        <button
          className="btn mr-2 flex-auto flex-wrap bg-brand-2-3"
          type="submit"
          onClick={() => setWay("email")}
        >
          <SVGIcon className="w-8 h-8 mr-2 mb-2" name="envelope" />
          Enviar por email
        </button>
        <button
          className="btn flex-auto flex-wrap bg-green-500"
          type="submit"
          onClick={() => setWay("whatsapp")}
        >
          <SVGIcon className="w-8 h-8 mr-2 mb-2" name="whatsapp" />
          Enviar por Whatsapp
        </button>
      </div>
    </Form>
  )
}
