import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCatalog } from '../context/useCatalog'
import { products } from '../data/products'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  product: '',
  quantity: '',
  message: '',
}

export function QuoteForm() {
  const { saveQuoteRequest } = useCatalog()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  const productNames = useMemo(() => products.map((product) => product.name), [])

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    if (!form.company.trim()) next.company = 'Company is required.'
    if (!form.product) next.product = 'Choose a product.'
    if (!form.quantity.trim()) next.quantity = 'Quantity is required.'
    if (!form.message.trim()) next.message = 'Tell us what you need.'
    return next
  }

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    const entry = {
      ...form,
      submittedAt: new Date().toISOString(),
    }

    saveQuoteRequest(entry)
    setSubmitted(entry)
    setForm(initialForm)
    setErrors({})
  }

  return (
    <>
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" error={errors.name}>
            <input name="name" value={form.name} onChange={onChange} className="input" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input name="email" type="email" value={form.email} onChange={onChange} className="input" />
          </Field>
          <Field label="Phone" error={errors.phone}>
            <input name="phone" value={form.phone} onChange={onChange} className="input" />
          </Field>
          <Field label="Company" error={errors.company}>
            <input name="company" value={form.company} onChange={onChange} className="input" />
          </Field>
          <Field label="Product" error={errors.product} className="md:col-span-2">
            <select name="product" value={form.product} onChange={onChange} className="input">
              <option value="">Select product</option>
              {productNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Quantity" error={errors.quantity}>
            <input name="quantity" value={form.quantity} onChange={onChange} className="input" placeholder="e.g. 5000" />
          </Field>
          <Field label="Message" error={errors.message} className="md:col-span-2">
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              className="input min-h-32"
              placeholder="Tell us about the part, specification, finish, and target volume."
            />
          </Field>
        </div>
        <button
          type="submit"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
        >
          Submit Request
        </button>
      </form>

      <AnimatePresence>
        {submitted ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSubmitted(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 16, opacity: 0, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-lg rounded-[2rem] bg-white p-8 shadow-[0_30px_70px_rgba(15,23,42,0.2)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--blue)]">
                Request Saved
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900">
                Quote request received
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Your request is stored locally in this frontend demo. We captured a premium summary
                for {submitted.product} and will show the engineering response path here.
              </p>
              <div className="mt-5 rounded-[1.25rem] bg-slate-50 p-4 text-sm text-slate-700">
                <p>
                  <strong>Company:</strong> {submitted.company}
                </p>
                <p>
                  <strong>Quantity:</strong> {submitted.quantity}
                </p>
                <p>
                  <strong>Email:</strong> {submitted.email}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(null)}
                className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--blue)]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

function Field({ label, error, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-[var(--orange)]">{error}</span> : null}
    </label>
  )
}
