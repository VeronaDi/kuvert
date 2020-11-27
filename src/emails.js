import Email from "./smtpjs"

const mailParams = {
  // SecureToken: "8ebfda6c-53ab-40af-aee8-d0fb7f0f9d0f",
  SecureToken: "x",
  // Host: "smtp.elasticemail.com",
  // Username: "hochukonvert@gmail.com",
  // Password: "9EBE51CBFD3812D695B77C53A63D3ABDA82A",
  // port: 2525

  From: "hochukonvert@gmail.com",
  To: "diana.didijtsuk@gmail.com",
}

export const sendCartEmail = async (form, findProduct, t) =>
  Email.send({
    ...mailParams,
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
