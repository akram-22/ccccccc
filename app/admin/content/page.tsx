"use client"

import { useState } from "react"
import { Save, CheckCircle2 } from "lucide-react"
import { AdminShell } from "@/components/admin/admin-shell"
import { useContentStore } from "@/lib/store"

function Field({
  label,
  value,
  onChange,
  multiline = false,
  placeholder = "",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  multiline?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide uppercase">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 rounded-sm border border-border bg-background text-foreground text-sm focus:outline-none focus:border-gold transition-colors"
        />
      )}
    </div>
  )
}

export default function AdminContentPage() {
  const { content, updateHero, updateAbout, updateContact } = useContentStore()
  const [hero, setHero] = useState({ ...content.hero })
  const [about, setAbout] = useState({ ...content.about })
  const [contact, setContact] = useState({ ...content.contact })
  const [saved, setSaved] = useState(false)

  function handleSave() {
    updateHero(hero)
    updateAbout(about)
    updateContact(contact)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <AdminShell>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-navy">Contenu du site</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Modifiez les textes et informations affichés sur le site.</p>
        </div>
        <button
          onClick={handleSave}
          className="btn-primary gap-2 text-sm whitespace-nowrap"
        >
          {saved ? <CheckCircle2 size={16} className="text-green-400" /> : <Save size={16} />}
          {saved ? "Enregistré !" : "Enregistrer les modifications"}
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {/* ── Hero Section ─────────────────────────────────────── */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="font-semibold text-navy mb-1">Section Hero</h2>
          <p className="text-muted-foreground text-xs mb-5">Première section visible sur le site.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field
                label="Badge / Accroche"
                value={hero.badge}
                onChange={(v) => setHero({ ...hero, badge: v })}
                placeholder="Oran, Algérie — Immobilier Premium"
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                label="Titre principal"
                value={hero.headline}
                onChange={(v) => setHero({ ...hero, headline: v })}
                multiline
                placeholder="Trouvez le bien qui vous correspond..."
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                label="Sous-titre"
                value={hero.subheadline}
                onChange={(v) => setHero({ ...hero, subheadline: v })}
                multiline
                placeholder="Je suis Chabane Chawki..."
              />
            </div>
            <Field label="Stat 1 — Valeur" value={hero.stat1Value} onChange={(v) => setHero({ ...hero, stat1Value: v })} placeholder="100+" />
            <Field label="Stat 1 — Label" value={hero.stat1Label} onChange={(v) => setHero({ ...hero, stat1Label: v })} placeholder="Biens vendus" />
            <Field label="Stat 2 — Valeur" value={hero.stat2Value} onChange={(v) => setHero({ ...hero, stat2Value: v })} placeholder="48h" />
            <Field label="Stat 2 — Label" value={hero.stat2Label} onChange={(v) => setHero({ ...hero, stat2Label: v })} placeholder="Délai moyen de contact" />
            <Field label="Stat 3 — Valeur" value={hero.stat3Value} onChange={(v) => setHero({ ...hero, stat3Value: v })} placeholder="Oran" />
            <Field label="Stat 3 — Label" value={hero.stat3Label} onChange={(v) => setHero({ ...hero, stat3Label: v })} placeholder="Expert local" />
          </div>
        </div>

        {/* ── About Section ─────────────────────────────────────── */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="font-semibold text-navy mb-1">Section À propos</h2>
          <p className="text-muted-foreground text-xs mb-5">Votre présentation personnelle.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Field
                label="Titre"
                value={about.headline}
                onChange={(v) => setAbout({ ...about, headline: v })}
                placeholder="Je ne suis pas un agent immobilier classique."
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                label="Sous-titre (en or)"
                value={about.subheadline}
                onChange={(v) => setAbout({ ...about, subheadline: v })}
                placeholder="Je suis un vendeur de biens."
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                label="Paragraphe 1"
                value={about.paragraph1}
                onChange={(v) => setAbout({ ...about, paragraph1: v })}
                multiline
                placeholder="Je m'appelle Chabane Chawki..."
              />
            </div>
            <div className="sm:col-span-2">
              <Field
                label="Paragraphe 2"
                value={about.paragraph2}
                onChange={(v) => setAbout({ ...about, paragraph2: v })}
                multiline
                placeholder="Mon objectif est simple..."
              />
            </div>
            <Field label="Années d'expérience" value={about.yearsExperience} onChange={(v) => setAbout({ ...about, yearsExperience: v })} placeholder="5+" />
            <Field label="Label de la carte flottante" value={about.experienceLabel} onChange={(v) => setAbout({ ...about, experienceLabel: v })} placeholder="ans dans l'immobilier à Oran" />
          </div>
        </div>

        {/* ── Contact Section ─────────────────────────────────────── */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="font-semibold text-navy mb-1">Coordonnées</h2>
          <p className="text-muted-foreground text-xs mb-5">Numéro WhatsApp et disponibilité affichés sur le site.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Numéro WhatsApp (sans +)"
              value={contact.whatsappNumber}
              onChange={(v) => setContact({ ...contact, whatsappNumber: v })}
              placeholder="213541029014"
            />
            <div className="sm:col-span-2">
              <Field
                label="Texte de disponibilité"
                value={contact.availabilityText}
                onChange={(v) => setContact({ ...contact, availabilityText: v })}
                multiline
                placeholder="Disponible du samedi au jeudi..."
              />
            </div>
          </div>
        </div>

        {/* Save button (bottom) */}
        <div className="flex justify-end">
          <button onClick={handleSave} className="btn-primary gap-2">
            {saved ? <CheckCircle2 size={16} className="text-green-400" /> : <Save size={16} />}
            {saved ? "Enregistré !" : "Enregistrer les modifications"}
          </button>
        </div>
      </div>
    </AdminShell>
  )
}
