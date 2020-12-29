import Axios from "axios"

async function sendMail(form) {
  try {
    await Axios({
      method: "post",
      url: "https://to/endpoint",
      data: {
        subject: form.subject,
      },
    })
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

// zapyt@kuvert.if.ua //

export const sendCartEmail = async (form, findProduct, t) =>
  await sendMail({
    subject: `Запит склад від ${form.name}`,
    message: prepareBodyForCartEmail(form, findProduct, t),
  })

const prepareBodyForCartEmail = (form, findProduct, t) => `
  <p>Від: ${form.name}</p>
  <p>email: <a href="mailto:${form.email}">${form.email}</a></p>
  <p>phone: ${form.phone}</p>
  <p>city: ${form.city}</p>
  <p>company: ${form.company}</p>

  Запит ціни:

  <ul>${form.products
    .map(({ code, quantity }) => {
      const product = findProduct(code)
      const description = product.getProductDescription(t)

      return `<li>Артикул: ${code}, опис: ${description}, к-сть: ${quantity} шт.</li>`
    })
    .join("")}</ul>
`

export const sendPrintEmail = async form =>
  await sendMail({
    subject: `Запит друк від ${form.name}`,
    message: prepareBodyForPrintEmail(form),
  })

const prepareBodyForPrintEmail = form => `
  <p>Від: ${form.name}</p>
  <p>email: <a href="mailto:${form.email}">${form.email}</a></p>
  <p>phone: ${form.phone}</p>
  <p>city: ${form.city}</p>
  <p>company: ${form.company}</p>

  Запит ціни на друк:

  <p>${form.product} - ${form.amount} шт.</p>
  <p>${form.message}</p>
`

// individual inquiry //

export const sendIndividualEmail = async form =>
  await sendMail({
    subject: `Запит індивідуальний від ${form.name}`,
    message: prepareBodyForIndividualEmail(form),
  })

const prepareBodyForIndividualEmail = form => `
  <p>Від: ${form.name}</p>
  <p>email: <a href="mailto:${form.email}">${form.email}</a></p>
  <p>phone: ${form.phone}</p>
  <p>city: ${form.city}</p>
  <p>company: ${form.company}</p>

  Запит індивідуальної ціни:
  <p>${form.message}</p>
`

// kuvert.ua@kuvert.if.ua //

export const sendContactUsEmail = async form => {
  await sendMail({
    subject: `Лист з веб сторінки для ${form.department}`,
    message: prepareBodyForContactUsEmail(form),
  })
}

const prepareBodyForContactUsEmail = form => `
  <p>Від: ${form.name}</p>
  <p>email: <a href="mailto:${form.email}">${form.email}</a></p>
  <p>Тел.: ${form.phone}</p>
  <p>Для: ${form.department}</p>

  Повідомлення:
  <p>${form.message}</p>
`
