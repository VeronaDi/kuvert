import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Form,
  Field,
  FieldArray,
  Formik,
  useField,
  useFormikContext,
} from "formik"
import * as Yup from "yup"
import { localizedNavigate } from "../components/LocalizedLink"

import { css } from "@emotion/core"

import { useTranslation } from "react-i18next"

import BtnNext from "../components/BtnNext"
import ContactForm from "../components/ContactForm"
import Steps from "../components/Steps"

import logoGrey from "../images/logoGrey.png"
import plus from "../images/plus.png"
import minus from "../images/minus.png"

import envelopes from "../data/envelopes"
import extEnvelopes from "../data/extensionEnvelopes"
import triangularEnvelopes from "../data/triangularEnvelopes"
import airpoc from "../data/airpoc"
import ecobagWhite from "../data/ecobagWhite"
import ecobagBrown from "../data/ecobagBrown"
import ecobagColor from "../data/ecobagColor"
import stericlin from "../data/stericlin"

import { useCart } from "../useCard"

const MyInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
      `}
    >
      <label
        htmlFor={props.id || props.name}
        css={css`
          font-size: 12px;
          padding-bottom: 5px;
        `}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        css={css`
          height: 65px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          box-sizing: border-box;
          padding: 20px;
          outline: none;
          ::-webkit-input-placeholder {
            font-size: 16px;
            color: #ababab;
          }
          :focus {
            border: 2px solid #c4c4c4;
            border-radius: 3px;
          }
        `}
      />
      {meta.touched && meta.error ? (
        <div
          css={css`
            width: 141px;
            height: 35px;
            background: #a74444;
            border-radius: 3px;
            color: white;
            color: #ffffff;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
          `}
        >
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

const sendEmail = async values => {
  return fetch("https://hooks.zapier.com/hooks/catch/8670957/og9qtfo/", {
    method: "POST",
    body: JSON.stringify(values),
  })
}

const getCardProducts = data => {
  return Object.keys(data).map(code => ({
    code,
    quantity: data[code],
  }))
}

const getEnvelopeDescription = function(t) {
  return [
    this.format,
    t(this.type),
    t(this.color),
    `${this.gsm}${t("gsm")}`,
    t(this.sealing),
    `${t("window")}: ${this.window ? t(this.window) + t("mm") : "-"}`,
    `${t("innerPrintShort")}: ${this.print ? t(this.print) : "-"}`,
  ].join(" ")
}

const getExtensionEnvelopeDescription = function(t) {
  return [
    this.format,
    t(this.type),
    t(this.color),
    `${this.gsm}${t("gsm")}`,
    t(this.sealing),
  ].join(" ")
}

const getTriangularEnvelopeDescription = function(t) {
  return [
    this.format,
    t(this.type),
    t(this.color),
    `${this.gsm}${t("gsm")}`,
    t(this.sealing),
  ].join(" ")
}

const getAirpocDescription = function(t) {
  return [this.size, t(this.sealing), t(this.color)].join(" ")
}

const getEcobagWhiteDescription = function(t) {
  return [
    this.size,
    t(this.color),
    `${this.gsm}${t("gsm")}`,
    t(this.handle),
  ].join(" ")
}

const getEcobagBrownDescription = function(t) {
  return [
    this.size,
    t(this.color),
    `${this.gsm}${t("gsm")}`,
    t(this.handle),
  ].join(" ")
}

const getEcobagColorDescription = function(t) {
  return [
    this.size,
    t(this.color),
    `${this.gsm}${t("gsm")}`,
    t(this.handle),
  ].join(" ")
}

const getStericlinDescription = function(t) {
  return [this.articul, this.size].join(" ")
}

const allProducts = {}

envelopes.forEach(envelope => {
  allProducts[envelope.code] = {
    ...envelope,
    getProductDescription: getEnvelopeDescription,
  }
})

extEnvelopes.forEach(extenvelope => {
  allProducts[extenvelope.code] = {
    ...extenvelope,
    getProductDescription: getExtensionEnvelopeDescription,
  }
})

triangularEnvelopes.forEach(triangenvelope => {
  allProducts[triangenvelope.code] = {
    ...triangenvelope,
    getProductDescription: getTriangularEnvelopeDescription,
  }
})

airpoc.forEach(airpoc => {
  allProducts[airpoc.code] = {
    ...airpoc,
    getProductDescription: getAirpocDescription,
  }
})

ecobagWhite.forEach(ecobagwh => {
  allProducts[ecobagwh.code] = {
    ...ecobagwh,
    getProductDescription: getEcobagWhiteDescription,
  }
})

ecobagBrown.forEach(ecobagbr => {
  allProducts[ecobagbr.code] = {
    ...ecobagbr,
    getProductDescription: getEcobagBrownDescription,
  }
})

ecobagColor.forEach(ecobagclr => {
  allProducts[ecobagclr.code] = {
    ...ecobagclr,
    getProductDescription: getEcobagColorDescription,
  }
})

stericlin.flat.forEach(stericlin => {
  allProducts[stericlin.code] = {
    ...stericlin,
    getProductDescription: getStericlinDescription,
  }
})

stericlin.volume.forEach(stericlin => {
  allProducts[stericlin.code] = {
    ...stericlin,
    getProductDescription: getStericlinDescription,
  }
})

const findProduct = code => {
  return allProducts[code]
}

const AmountInput = ({ step = 1, ...props }) => {
  const [field, meta, { setValue }] = useField(props.name)

  return (
    <div
      css={css`
        width: 25%;
        position: relative;
      `}
    >
      <button
        onClick={() => {
          let newValue = Math.floor((Number(meta.value) - step) / step) * step
          if (newValue < step) newValue = step
          setValue(newValue)
        }}
        type="button"
        css={css`
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translate(0%, -50%);
          border: none;
          background: url(${minus}) no-repeat center;
          outline: none;
          padding: 10px;
          cursor: pointer;
        `}
      />
      <input
        {...field}
        {...props}
        type="number"
        min="0"
        step="1"
        css={css`
          width: 100%;
          height: 65px;
          background: #ffffff;
          border: 1px solid #d6d6d6;
          border-radius: 3px;
          padding: 23px 18px;
          outline: none;
          text-align: center;
          color: #444444;
          :focus {
            border: 2px solid #c4c4c4;
          }
          ::-webkit-inner-spin-button,
          ::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      />
      <button
        onClick={() => {
          setValue(Math.floor((Number(meta.value) + step) / step) * step)
        }}
        type="button"
        css={css`
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translate(0, -50%);
          border: none;
          background: url(${plus}) no-repeat center;
          outline: none;
          padding: 10px;
          cursor: pointer;
        `}
      />
    </div>
  )
}

const ProductRow = ({ index, t, arrayHelpers }) => {
  const [field] = useField({ name: `products.${index}.code` })
  const code = field.value
  const product = findProduct(code)
  const description = product.getProductDescription(t)

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
        color: #444444;
        font-size: 16px;
        border-bottom: 1px solid #aeaeae;
        :last-child {
          border-bottom: none;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          width: 15%;
        }
      `}
      >
        {code}
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          width: 50%;
        }
      `}
      >
        {description}
      </div>
      <Field name={`products.${index}.code`} type="hidden" />

      <AmountInput
        name={`products.${index}.quantity`}
        type="number"
        placeholder="0"
        step={product.boxSize}
      />

      <button
        type="button"
        onClick={() => arrayHelpers.remove(index)}
        css={css`
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
        `}
      >
        ✕
      </button>
    </div>
  )
}

const SaveCart = () => {
  const { values } = useFormikContext()
  const [cart, , setCart] = useCart()

  useEffect(() => {
    const newCartData = values.products.reduce((acc, { code, quantity }) => {
      acc[code] = quantity
      return acc
    }, {})

    if (JSON.stringify(cart) !== JSON.stringify(newCartData)) {
      setCart(newCartData)
    }
  }, [values, cart, setCart])

  return null
}

export default props => {
  const [step, setStep] = React.useState(1)
  const [cart] = useCart()

  const T = useTranslation()
  if (T.i18n.language !== props.pageContext.langKey) {
    T.i18n.changeLanguage(props.pageContext.langKey)
  }

  const t = key => (typeof key === "string" ? T.t(key) : key[T.i18n.language])

  const steps = [
    t("requestType"),
    t("requestOrderCreate"),
    t("requestPersonal"),
  ]

  return (
    <Layout>
      <SEO title="Warehouse inquiry" />
      <Link
        css={css`
          background: url(${logoGrey}) center center no-repeat;
          width: 190px;
          height: 66px;
          background-size: cover;
          position: absolute;
          top: 20px;
          left: 30px;
        `}
        to="/"
      ></Link>

      <Steps steps={steps} activeStep={step} />

      <h1
        css={css`
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 50px;
          text-align: center;
        `}
      >
        {t("basicOrder")}
      </h1>

      <Formik
        initialValues={{
          name: "",
          company: "",
          city: "",
          email: "",
          phone: "",
          products: getCardProducts(cart),
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          phone: Yup.string().required("Required"),
        })}
        onSubmit={async () => {
          await sendEmail()
          localizedNavigate("/thanxrequest", props.pageContext.langKey)
        }}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form
            css={css`
              width: 90vw;
              max-width: 780px;
              margin: 0 auto;
            `}
          >
            <SaveCart />
            {step === 1 && (
              <>
                <div
                  css={css`
                    width: 100%;
                    height: auto;
                    background: #d6d6d6;
                    border-radius: 3px;
                  `}
                >
                  <FieldArray
                    name="products"
                    render={arrayHelpers => (
                      <div>
                        {values.products.map((_product, index) => (
                          <ProductRow
                            key={index}
                            index={index}
                            t={t}
                            arrayHelpers={arrayHelpers}
                          />
                        ))}
                      </div>
                    )}
                  />
                  <div
                    css={css`
                      width: 100%;
                      background: #8a8a8a;
                      border-radius: 0px 0px 3px 3px;
                      height: 78px;
                      display: flex;
                      justify-content: flex-end;
                      align-items: center;
                      padding: 0 37px;
                      > button {
                        width: 30%;
                        @media (max-width: 1024px) {
                          width: 100%;
                        }
                      }
                    `}
                  >
                    <BtnNext type="button" onClick={() => setStep(2)} />
                  </div>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div
                  css={css`
                    width: 90vw;
                    max-width: 780px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    @media screen and (max-width: 768px) {
                      flex-direction: column;
                      padding-bottom: 80px;
                    }
                  `}
                >
                  <div
                    css={css`
                      width: 48%;
                      @media screen and (max-width: 768px) {
                        width: 100%;
                      }
                    `}
                  >
                    <MyInput
                      label={t("name")}
                      name="name"
                      type="text"
                      placeholder={t("name")}
                    />
                    <MyInput
                      label={t("company")}
                      name="company"
                      type="text"
                      placeholder={t("company")}
                    />
                  </div>
                  <div
                    css={css`
                      width: 48%;
                      @media screen and (max-width: 768px) {
                        width: 100%;
                      }
                    `}
                  >
                    <MyInput
                      label={t("city")}
                      name="city"
                      type="text"
                      placeholder={t("city")}
                    />
                    <MyInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="hello@email.com"
                    />
                    <MyInput
                      label={t("phone")}
                      name="phone"
                      type="phone"
                      placeholder="123456789"
                    />
                  </div>
                </div>
                <button
                  css={css`
                    background: #c5003e;
                    border-radius: 3px;
                    border: none;
                    padding-top: 18px;
                    padding-bottom: 18px;
                    color: white;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 18px;
                    outline: none;
                    text-decoration: none;
                    display: block;
                    text-align: center;
                    margin: 30px 0;
                    width: 100%;
                    &:hover {
                      background: #b60039;
                    }
                    &:active {
                      background: #f4004d;
                    }
                  `}
                  type="submit"
                  // disabled={isSubmitting}
                >
                  {t("request")}
                </button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
