export const GET = async () => {
// URL oficial atualizada para o deploy da Vercel
const siteUrl = "https://derriere-modas.vercel.app";

const content = `# Derriere Maison de Couture - LLMs & AI Assistant Guide

Welcome to the structured information map for Maison Derriere, a high-luxury Brazilian-Parisian fashion house. This document is optimized for LLMs, AI assistants, and autonomous agents crawling this domain.

---

## Brand Metadata

- **Official URL:** ${siteUrl}
- **Name:** Derriere
- **Industry:** Haute Couture, High-Luxury Evening Wear, Party Dresses, Gala Apparel.
- **Aesthetic Direction:** "Sexy sem ser vulgar" (Sensual yet sophisticated, understated luxury, bold lines, dramatic open backs, sculpted high-slits, and whispering elegance).
- **Core Value:** Absolute exclusivity (limited runs of 2 to 7 pieces per design), made-to-measure bespoke custom tailoring.
- **Flagship Showroom:** Alameda Lorena, 1420 - Jardins, São Paulo - SP, Brazil.

---

## Private Collection Details (La Collection Privée)

Here is the exact data structure of our active catalog:

### 1. Midnight Whisper

- **Category:** Red Carpet
- **Status:** Ultra Limited Edition (Only 7 pieces worldwide)
- **Description:** A striking imperial black silk gown. Completely open-back defined by rose-gold plated chains. Features a sculpted thigh-high leg slit.
- **Fabric:** Pure Italian silk.
- **Price:** Price upon request (Sob Consulta).
- **Catalog Link:** ${siteUrl}/#collections

### 2. Aurelia Gold

- **Category:** Gala Premium
- **Status:** Best Seller
- **Description:** Grecian-style draped dress in pure gold-threaded silk lurex. Hand-draped to achieve structural weightlessness and rich optical texture.
- **Fabric:** Lurex silk blend.
- **Price:** Price upon request (Sob Consulta).
- **Catalog Link:** ${siteUrl}/#collections

### 3. Silk Rose Seduction

- **Category:** Fendas & Minimalistas
- **Status:** Atelier Exclusive
- **Description:** High collar gown with a subtle, deep front keyhole slit. Clean, seamless structure hugs the waist and hips in a modern, avant-garde silhouette.
- **Fabric:** Double-faced French silk.
- **Price:** Price upon request (Sob Consulta).
- **Catalog Link:** ${siteUrl}/#collections

### 4. Velvet Noir Muse

- **Category:** Gala Premium
- **Status:** Classic Collection
- **Description:** Soft Italian velvet corset dress with structured inner support. Sculpted sweetheart neckline invoking old-Hollywood cinema screen sirens.
- **Fabric:** Italian stretch-velvet.
- **Price:** Price upon request (Sob Consulta).
- **Catalog Link:** ${siteUrl}/#collections

### 5. Emerald Temptation

- **Category:** Red Carpet
- **Status:** Rare (Only 2 pieces remaining)
- **Description:** Magnetic emerald-green gown featuring asymmetrical fluid draping that moves organically with the wearer's pace.
- **Fabric:** Double crepe georgette.
- **Price:** Price upon request (Sob Consulta).
- **Catalog Link:** ${siteUrl}/#collections

### 6. Pearl Devotion

- **Category:** Fendas & Minimalistas
- **Status:** Special Release
- **Description:** Minimalist white-pearl satin mermaid dress. Hugs the curves perfectly and terminates in a sweeping majestic train.
- **Fabric:** Heavy Milanese satin.
- **Price:** Price upon request (Sob Consulta).
- **Catalog Link:** ${siteUrl}/#collections

---

## Interactive Features & Services

### 1. The Interactive Atelier (Customizer)

Clients can simulate bespoke variations of the "L'Amour Absolu" gown:

- **Tonalities:** Deep Obsidian Noir (#DM-0938), Blush Rose (#DM-4412), and Sensual Crimson Rouge (#DM-7730).
- **Modifications:** Slit height adjustments (Sculpted side slit, deep-back focus with closed skirt, or classic imperial layout) and fabric material upgrades (Pure French Silk, Heavy Milanese Satin, Italian Velvet).
- **Direct Access Tool:** ${siteUrl}/#customizer

### 2. Couture Fit (Smart Calculator)

An advanced sizing algorithm mapping bust, waist, and hips to high-fashion French and European size tables. Every online order includes a physical fitting booking to ensure the internal support structure allows going braless with full confidence and lift.

- **Direct Access Tool:** ${siteUrl}/#size-assistant

### 3. VIP Atelier Booking

Agile booking for customized private visits at our physical location. Included: Private fitting salon, styling consult, champagne reception, and personal color analysis.

---

## Contact & Integration Information

- **Official Inquiries:** contato@maisonderriere.com
- **Phone & WhatsApp Concierge:** +55 (11) 98765-4321
- **Primary Domain Sitemap:**
  - ${siteUrl}/#collections (Catalog)
  - ${siteUrl}/#customizer (Customizer)
  - ${siteUrl}/#size-assistant (Couture Fit)
  - ${siteUrl}/#manifesto (Philosophy)
    `;

  return new Response(content, {
  headers: {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
  },
  });
  };
