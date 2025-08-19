"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const projectTypes = [
    "Industrial Construction",
    "Commercial Buildings",
    "Infrastructure Projects",
    "Equipment Rental",
    "Maintenance Services",
    "Material Supply",
    "Skilled Labor",
    "Project Management"
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const company = formData.get('company') as string
    const projectType = formData.get('projectType') as string
    const message = formData.get('message') as string

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company}
*Project Type:* ${projectType}

*Message:*
${message}

---
Sent from Ascend Arabia Contact Form`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappNumber = "966573653238"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form
    e.currentTarget.reset()
    
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <Card className={`p-8 shadow-lg ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed response.
        </p>
      </div>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <p className="text-green-700 font-medium">
              Message sent successfully! WhatsApp will open with your message.
            </p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            className="w-full"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            className="w-full"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select 
            id="projectType"
            name="projectType"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Select project type</option>
            {projectTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Project Details *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please provide details about your project, timeline, budget, and specific requirements..."
            className="w-full min-h-[10px]"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-medium disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send via WhatsApp
            </>
          )}
        </Button>
      </form>
    </Card>
  )
} 