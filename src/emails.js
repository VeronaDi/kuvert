import Axios from "axios"

async function sendMailRequest(data) {
  try {
    await Axios({
      method: "post",
      url: "/app/request/",
      data,
    })
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

async function sendMail(data) {
  try {
    await Axios({
      method: "post",
      url: "/app/mail/",
      data,
    })
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

// zapyt@kuvert.if.ua //

export const sendCartEmail = async (form, findProduct, t) =>
  await sendMailRequest({
    subject: `Запит склад від ${form.name}`,
    message: prepareBodyForCartEmail(form, findProduct, t),
  })

const prepareBodyForCartEmail = (form, findProduct, t) => `
  Від: ${form.name}
  Email: ${form.email}
  Тел.: ${form.phone}
  Місто: ${form.city}
  Організація: ${form.company}

  Запит ціни:

  ${form.products
    .map(({ code, quantity }) => {
      const product = findProduct(code)
      const description = product.getProductDescription(t)

      return `Артикул: ${code}, опис: ${description}, к-сть: ${quantity} шт.`
    })
    .join("\n")}
`

export const sendPrintEmail = async form =>
  await sendMailRequest({
    subject: `Запит друк від ${form.name}`,
    message: prepareBodyForPrintEmail(form),
  })

const prepareBodyForPrintEmail = form => `
  Від: ${form.name}
  Email: <a href="mailto:${form.email}">${form.email}</a>
  Тел.: ${form.phone}
  Місто: ${form.city}
  Організація: ${form.company}

  Запит ціни на друк:

  ${form.product} - ${form.amount} шт.
  ${form.message}
`

// individual inquiry //

export const sendIndividualEmail = async form =>
  await sendMailRequest({
    subject: `Запит індивідуальний від ${form.name}`,
    message: prepareBodyForIndividualEmail(form),
  })

const prepareBodyForIndividualEmail = form => `
  Від: ${form.name}
  Email: ${form.email}
  Тел.: ${form.phone} 
  Місто: ${form.city}
  Організація: ${form.company}

  Запит індивідуальної ціни:
  ${form.message}
`

// kuvert.ua@kuvert.if.ua //

export const sendContactUsEmail = async form =>
  await sendMail({
    subject: `Лист з веб сторінки для ${form.department}`,
    message: prepareBodyForContactUsEmail(form),
  })

const prepareBodyForContactUsEmail = form => `
  Від: ${form.name}
  Email: ${form.email}
  Тел.: ${form.phone}
  Для: ${form.department}

  Повідомлення:
  ${form.message}
`
