// ─── Core domain types ────────────────────────────────────────────────────────

export type PropertyType = "F2" | "F3" | "F4" | "F5+"
export type PropertyStatus = "available" | "sold" | "reserved"

export interface Property {
  id: string
  type: PropertyType
  title: string
  location: string
  price: string
  surface: string
  rooms: number
  condition: string
  badge: string
  badgeColor: string
  features: string[]
  description: string
  image: string
  status: PropertyStatus
  createdAt: string
  updatedAt: string
}

export interface SiteContent {
  hero: {
    headline: string
    subheadline: string
    badge: string
    stat1Value: string
    stat1Label: string
    stat2Value: string
    stat2Label: string
    stat3Value: string
    stat3Label: string
  }
  about: {
    headline: string
    subheadline: string
    paragraph1: string
    paragraph2: string
    yearsExperience: string
    experienceLabel: string
  }
  contact: {
    whatsappNumber: string
    availabilityText: string
  }
}

export interface Lead {
  id: string
  name: string
  phone: string
  intent: "buy" | "sell" | "invest" | "other"
  details: string
  createdAt: string
  read: boolean
}

export interface AdminUser {
  username: string
  passwordHash: string
}
