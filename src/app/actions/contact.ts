'use server'

import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.email('Please enter a valid email address'),
  company: z.string().max(100, 'Company name is too long').optional(),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .refine(
      (val) => /^\(\d{3}\) \d{3}-\d{4}$/.test(val),
      'Phone number must be in format (XXX) XXX-XXXX',
    ),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1000, 'Message is too long'),
  sms_consent: z.literal('on', 'SMS consent is required'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || undefined,
      phone: formData.get('phone'),
      message: formData.get('message'),
      sms_consent: formData.get('sms_consent'),
    }

    const validationResult = contactFormSchema.safeParse(rawData)

    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((issue: { message: string }) => issue.message)
        .join(', ')
      throw new Error(errors)
    }

    const data = validationResult.data

    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_SECRET_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: data.name,
              Email: data.email,
              Company: data.company || '',
              Phone: data.phone,
              Message: data.message,
              'SMS Consent': data.sms_consent === 'on',
            },
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)

      // Handle specific Airtable API errors
      if (errorData?.error) {
        const { type, message } = errorData.error

        switch (type) {
          case 'INVALID_REQUEST_MISSING_FIELDS':
            throw new Error(
              'Required fields are missing. Please fill in all required information.',
            )
          case 'INVALID_REQUEST_BODY':
            throw new Error(
              'The form data is invalid. Please check your information and try again.',
            )
          case 'AUTHENTICATION_REQUIRED':
            throw new Error(
              'Authentication failed. Please try again later or contact support.',
            )
          case 'NOT_FOUND':
            throw new Error(
              'The contact form is temporarily unavailable. Please try again later.',
            )
          case 'REQUEST_TOO_LARGE':
            throw new Error(
              'Your message is too long. Please shorten it and try again.',
            )
          case 'INVALID_REQUEST_UNKNOWN_FIELD':
            throw new Error(
              'There was an issue with the form data. Please refresh and try again.',
            )
          case 'UNPROCESSABLE_ENTITY':
            throw new Error(
              "Some of your information couldn't be processed. Please check your entries and try again.",
            )
          default:
            throw new Error(
              message ||
                'Something went wrong submitting your message. Please try again.',
            )
        }
      }

      // Handle HTTP status codes
      switch (response.status) {
        case 401:
          throw new Error(
            'Authentication failed. Please try again later or contact support.',
          )
        case 403:
          throw new Error(
            'Access denied. Please try again later or contact support.',
          )
        case 404:
          throw new Error(
            'The contact form is temporarily unavailable. Please try again later.',
          )
        case 413:
          throw new Error(
            'Your message is too long. Please shorten it and try again.',
          )
        case 422:
          throw new Error(
            "Some of your information couldn't be processed. Please check your entries and try again.",
          )
        case 429:
          throw new Error(
            'Too many requests. Please wait a moment and try again.',
          )
        case 500:
        case 502:
        case 503:
        case 504:
          throw new Error(
            'Our servers are temporarily unavailable. Please try again in a few minutes.',
          )
        default:
          throw new Error(
            'Something went wrong submitting your message. Please try again.',
          )
      }
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.',
    )
  }
}
