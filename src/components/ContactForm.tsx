'use client'

import { useActionState, useCallback, useEffect, useId, useState } from 'react'

import { submitContactForm } from '@/app/actions/contact'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { formatPhoneNumber } from '@/lib/formatPhone'
import { toast } from 'sonner'

function TextInput({
  label,
  value,
  onChange,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function PhoneInput({
  label,
  value: externalValue,
  onChange: externalOnChange,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatPhoneNumber(e.target.value)
      const newEvent = { ...e, target: { ...e.target, value: formatted } }
      externalOnChange?.(newEvent)
    },
    [externalOnChange],
  )

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="tel"
        id={id}
        {...props}
        value={externalValue}
        onChange={handlePhoneChange}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function CheckboxInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: React.ReactNode }) {
  return (
    <label className="flex items-start gap-x-3">
      <div className="relative mt-1">
        <input
          type="checkbox"
          {...props}
          className="peer h-5 w-5 flex-none appearance-none rounded border border-neutral-950/20 outline-hidden checked:border-green-500 checked:bg-green-500 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        />
        <svg
          className="pointer-events-none absolute inset-0 h-5 w-5 text-white opacity-0 peer-checked:opacity-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-sm/6 text-neutral-700">{label}</span>
    </label>
  )
}

const handleSubmit = async (_: unknown, formData: FormData) => {
  try {
    await submitContactForm(formData)
    toast.success('Message sent successfully! We will get back to you soon.')

    // Reset form
    const form = document.querySelector('form') as HTMLFormElement
    if (form) {
      form.reset()
    }

    return { success: true }
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.'
    toast.error(errorMessage)
    return { success: false, error: errorMessage }
  }
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(handleSubmit, null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    marketing_consent: false,
    informational_consent: false,
  })

  // Clear form only on successful submission
  useEffect(() => {
    if (state?.success === true) {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        marketing_consent: false,
        informational_consent: false,
      })
    }
  }, [state?.success])

  return (
    <FadeIn className="lg:order-last">
      <form action={formAction}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput 
            label="Name" 
            name="name" 
            autoComplete="name" 
            required 
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
          />
          <PhoneInput 
            label="Phone" 
            name="phone" 
            autoComplete="tel" 
            required 
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
          <TextInput 
            label="Message" 
            name="message" 
            required 
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
        </div>
        <div className="mt-6 space-y-4 bg-white/50 px-6 py-8">
          <CheckboxInput
            name="marketing_consent"
            required
            checked={formData.marketing_consent}
            onChange={(e) => setFormData(prev => ({ ...prev, marketing_consent: e.target.checked }))}
            label={
              <>
                I consent to receive marketing text messages from Originotes at the
                phone number provided. Frequency may vary. Message & data rates may
                apply. Text HELP for assistance, reply STOP to opt out.
              </>
            }
          />
          <CheckboxInput
            name="informational_consent"
            required
            checked={formData.informational_consent}
            onChange={(e) => setFormData(prev => ({ ...prev, informational_consent: e.target.checked }))}
            label={
              <>
                I consent to receive non-marketing text messages from Originotes about
                my order updates, appointment reminders, etc. Message & data rates may apply.
              </>
            }
          />
        </div>

        {/* Display success/error messages from state */}
        {state?.success === false && (
          <div className="mt-3">
            <p className="text-sm text-red-600">{state.error}</p>
          </div>
        )}

        {state?.success === true && (
          <div className="mt-3">
            <p className="text-black-950 text-sm">
              Message sent successfully! We will get back to you soon.
            </p>
          </div>
        )}

        <Button
          type="submit"
          className={isPending ? 'mt-10 opacity-50' : 'mt-10'}
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Submit Inquiry'}
        </Button>
      </form>
    </FadeIn>
  )
}
