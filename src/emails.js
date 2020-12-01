import Email from "./smtpjs"

const mailParams = {
  // SecureToken: "8ebfda6c-53ab-40af-aee8-d0fb7f0f9d0f",
  // SecureToken: "x",
  // Host: "smtp.elasticemail.com",
  // Username: "hochukonvert@gmail.com",
  // Password: "9EBE51CBFD3812D695B77C53A63D3ABDA82A",
  // port: 2525
  // From: "hochukonvert@gmail.com",
  // To: "diana.didijtsuk@gmail.com",
}

const mailZaputParams = {
  // SecureToken: "56f0c0b7-4141-49f7-baae-7916a94c16b5",
  Host: "smtp.elasticemail.com",
  Username: "kuvertwebzaput@gmail.com",
  Password: "28FC662989BAC4745B8238E9E3EABCBC2017",
  port: 2525,

  From: "kuvertwebzaput@gmail.com",
  To: "diana.didijtsuk@gmail.com",
}

// sklad inquiry //

export const sendCartEmail = async (form, findProduct, t) =>
  Email.send({
    ...mailZaputParams,
    Subject: `Запит склад від ${form.name}`,
    Body: prepareBodyForCartEmail(form, findProduct, t),
  }).then(response => {
    if (response !== "OK") throw response
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

// print inquiry //

export const sendPrintEmail = async form =>
  Email.send({
    ...mailParams,
    Subject: `Запит друк від ${form.name}`,
    Body: prepareBodyForPrintEmail(form),
  }).then(response => {
    if (response !== "OK") throw response
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
  Email.send({
    ...mailParams,
    Subject: `Запит індивідуальний від ${form.name}`,
    Body: prepareBodyForIndividualEmail(form),
  }).then(response => {
    if (response !== "OK") throw response
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

// contact us form //

export const sendContactUsEmail = async form =>
  Email.send({
    ...mailParams,
    Subject: `Лист з веб сторінки для ${form.department}`,
    Body: prepareBodyForContactUsEmail(form),
  }).then(response => {
    if (response !== "OK") throw response
  })

const prepareBodyForContactUsEmail = form => `
  <p>Від: ${form.name}</p>
  <p>email: <a href="mailto:${form.email}">${form.email}</a></p>
  <p>Тел.: ${form.phone}</p>
  <p>Для: ${form.department}</p>

  Повідомлення:
  <p>${form.message}</p>
`
