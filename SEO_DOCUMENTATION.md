# SEO Documentation - Antek Automation

## Overview
This document provides comprehensive SEO implementation details for the Antek Automation website, including keyword strategies, technical implementation, and best practices.

---

## Primary Keywords & Targeting

### Primary Keywords (High Priority)
- **ai automation agency uk** - Main brand positioning
- **automation agency** - Service category
- **ai automation agency** - Core keyword phrase
- **business automation uk** - Geographic + service
- **ai automation solutions** - Solution-focused

### Secondary Keywords (Medium Priority)
- workflow automation
- ai chatbots
- voice automation systems
- business process automation
- lead automation
- customer service automation
- process automation
- workflow management

### Long-Tail Keywords (Conversion-Focused)
- ai automation agency london
- ai automation agency manchester
- business automation for service businesses
- ai chatbot for lead generation
- voice automation phone systems
- workflow automation save time

---

## Implementation Details

### Meta Tags & SEO Enhancements

#### Homepage
- **Title**: "Antek Automation | AI Automation Agency UK | Business Growth" (60 chars)
- **Description**: "Antek Automation: Leading AI automation agency UK. We deliver automation solutions that boost leads 40% & save 20hrs/week for service businesses." (160 chars)
- **Keywords**: ai automation agency uk, automation agency, ai automation agency, business automation uk, workflow automation, ai chatbots, voice automation systems
- **Schema**: Organization + ProfessionalService
- **Canonical**: https://antekautomation.com/

#### Service Pages
1. **AI Chatbots Page** (`/services/ai-chatbots`)
   - Keywords: ai chatbots, ai lead automation, chatbot for lead generation
   - Schema: ProfessionalService (AI Lead Automation)

2. **Voice Automation Page** (`/services/ai-voice-assistants`)
   - Keywords: voice automation, ai phone agents, voice ai
   - Schema: ProfessionalService (Voice Automation)

3. **Workflow Automation Page** (`/services/workflow-automation`)
   - Keywords: workflow automation, business process automation
   - Schema: ProfessionalService (Business Process Automation)

#### Contact Page
- **Title**: "Contact Antek Automation | AI Automation Agency UK | Free Audit"
- **Description**: References "AI automation agency UK" and service offerings

### Location Pages (9 Cities)
All location pages include:
- **Schema**: ProfessionalService + BreadcrumbList
- **Meta Description**: Includes city name + AI automation keywords
- **Canonical URL**: https://antekautomation.com/locations/[city-slug]

Priority Cities (Priority 0.85):
- London
- Manchester
- Birmingham
- Leeds
- Glasgow

Secondary Cities (Priority 0.75):
- Liverpool
- Newcastle
- Hampshire
- Edinburgh

---

## Technical SEO Implementation

### 1. Sitemap Configuration (`/public/sitemap.xml`)
- **Homepage**: Priority 1.0, weekly updates
- **Service Pages**: Priority 0.9, weekly updates
- **Location Pages**: Priority 0.85-0.75 (tiered)
- **Contact Page**: Priority 0.8, monthly updates

### 2. Robots.txt Configuration (`/public/robots.txt`)
```
- Allows crawling of all public pages
- Disallows: /admin/, /.env*, /node_modules/, /dist/
- Includes sitemap location
- Crawl delay: 1 second
- Request rate: 30/60 (30 requests per 60 seconds)
```

### 3. Meta Tags Structure

#### Open Graph Tags (Social Sharing)
- og:title - Page title
- og:description - Page description
- og:url - Canonical URL
- og:type - "website"
- og:site_name - "Antek Automation"
- og:locale - "en_GB"
- og:image - Social sharing image (1200x630px)
- og:image:width - 1200
- og:image:height - 630
- og:image:alt - Page title

#### Twitter Card Tags
- twitter:card - "summary_large_image"
- twitter:site - "@antekautomation"
- twitter:title - Page title
- twitter:description - Page description
- twitter:image - Social sharing image
- twitter:image:alt - Page title

#### Essential Meta Tags
- charset: UTF-8
- viewport: width=device-width, initial-scale=1.0
- description: Page meta description
- keywords: Target keywords for page
- canonical: Absolute canonical URL

### 4. Structured Data (Schema Markup)

#### Organization Schema (Homepage)
```json
{
  "@type": ["Organization", "ProfessionalService"],
  "name": "Antek Automation",
  "description": "AI Automation Agency UK specializing in business automation for service businesses",
  "url": "https://antekautomation.com",
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "serviceType": ["AI Automation", "Business Process Automation", "Workflow Automation"]
}
```

#### ProfessionalService Schema (Service Pages)
Each service page includes specific ProfessionalService schema:
- **AI Lead Automation**: Covers chatbot services
- **Voice Automation**: Covers voice agent services
- **Business Process Automation**: Covers workflow automation

#### BreadcrumbList Schema (All Pages)
Automatically generated for:
- Location pages: Home > Locations > City
- Service pages: Home > Services > Service Name
- Breadcrumbs indexed by Google for rich snippets

#### LocalBusiness Schema (Location Pages)
Includes:
- City-specific service area
- Regional postal address
- Service types
- Area served details

---

## Internal Linking Strategy

### Navigation Links (Navigation.tsx)
Keyword-rich anchor text updated:
- "AI Lead Automation" → `/services/ai-chatbots`
- "Voice Automation Systems" → `/services/ai-voice-assistants`
- "Business Process Automation" → `/services/workflow-automation`

### Contextual Internal Links
1. **Homepage to Services**: Each service section links to detailed page
2. **Services to Locations**: Location pages link back to relevant services
3. **Location Pages to Services**: Each city page references available services
4. **Contact CTA**: All pages include link to contact page

### Link Anchor Text Best Practices
- Use primary keywords in links where contextually appropriate
- Avoid generic anchors like "click here"
- Use descriptive, keyword-rich text
- Maintain natural reading flow

---

## Content Optimization

### Keyword Density Guidelines

| Keyword | Homepage | Service Pages | Location Pages |
|---------|----------|---------------|----------------|
| "ai automation agency uk" | 3-4x | - | City variant |
| "automation agency" | 5-6x | 2-3x | 1-2x |
| "ai automation" | 2-3x | 3-4x | 2-3x |
| Service-specific terms | - | 4-5x | 1-2x |

### Content Structure
- **H1**: One main heading per page (primary keyword)
- **H2/H3**: Supporting headings with secondary keywords
- **Body Text**: Natural keyword distribution (2-3% density)
- **Alt Text**: Descriptive, keyword-relevant image descriptions

### Call-to-Action Text Optimization
- "Book Free Automation Audit" - Emphasizes value + free offer
- "See Live Demo" - Action-oriented, builds trust
- "Get Started Today" - Clear urgency

---

## Performance & Monitoring

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Monitoring Tools to Use
1. **Google Search Console**
   - Monitor impressions by keyword
   - Track click-through rate (CTR)
   - View search performance

2. **Google Analytics 4**
   - Track user behavior by landing page
   - Monitor conversion funnels
   - Track keyword-driven traffic

3. **PageSpeed Insights**
   - Monitor Core Web Vitals
   - Track mobile/desktop scores
   - Identify optimization opportunities

4. **Lighthouse**
   - SEO audit (Lighthouse SEO score)
   - Performance metrics
   - Accessibility checks

### Keyword Tracking
- Track top 20 keywords monthly
- Monitor ranking positions (1-20, 21-50, 51-100)
- Track search volume trends
- Monitor competitor rankings

---

## File Structure

### Public Files
- `/public/robots.txt` - Search engine crawling rules
- `/public/sitemap.xml` - XML sitemap for all indexable pages
- `/public/logo.svg` - Brand logo (used in schema)

### Configuration Files
- `.env.example` - Environment variable template
- `CLAUDE.md` - Development documentation
- `SEO_DOCUMENTATION.md` - This file

### Source Files
- `src/components/SEOHead.tsx` - Meta tags, schema, OG tags component
- `src/components/Navigation.tsx` - Internal linking structure
- `src/pages/*.tsx` - Individual page SEO configuration
- `src/data/cities.ts` - Location page SEO data

---

## SEO Checklist

### On-Page SEO
- [x] Primary keywords in title tags (< 60 chars)
- [x] Meta descriptions with keywords (< 160 chars)
- [x] H1 tags with primary keywords
- [x] H2/H3 structure with secondary keywords
- [x] Internal linking with keyword anchor text
- [x] Canonical URLs on all pages
- [x] Mobile-responsive design

### Technical SEO
- [x] XML sitemap created and linked in robots.txt
- [x] robots.txt configured correctly
- [x] Meta viewport tag present
- [x] Charset (UTF-8) defined
- [x] Schema markup (Organization, ProfessionalService, LocalBusiness)
- [x] Breadcrumb schema on location pages
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags for Twitter sharing

### Content SEO
- [x] Keyword research completed
- [x] Keyword-rich service page titles
- [x] Location pages with city names
- [x] Meta descriptions with CTAs
- [x] Schema markup for services
- [x] Service types in structured data

### Future Improvements
- [ ] Create content marketing blog section
- [ ] Develop backlink outreach strategy
- [ ] Add FAQ schema markup
- [ ] Create location-specific content assets
- [ ] Implement analytics tracking
- [ ] Set up Search Console property
- [ ] Monitor ranking progress monthly
- [ ] A/B test meta titles and descriptions

---

## Quick Reference Links

### Google Tools
- [Google Search Console](https://search.google.com/search-console) - Monitor organic performance
- [Google PageSpeed Insights](https://pagespeed.web.dev) - Performance monitoring
- [Google Rich Results Test](https://search.google.com/test/rich-results) - Schema validation

### SEO Tools
- [SEMrush](https://semrush.com) - Competitive analysis
- [Ahrefs](https://ahrefs.com) - Backlink analysis
- [Moz](https://moz.com) - Rank tracking
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk) - Technical audit

### Validation Tools
- [W3C Markup Validator](https://validator.w3.org) - HTML validation
- [Schema.org Validator](https://validator.schema.org) - Schema markup validation
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - Mobile optimization

---

## Maintenance Schedule

### Weekly
- Monitor new search queries in GSC
- Check for crawl errors in GSC
- Review core web vitals

### Monthly
- Track keyword rankings (top 20 keywords)
- Analyze organic traffic trends
- Review user behavior in Analytics

### Quarterly
- Comprehensive site audit
- Competitive keyword analysis
- Content performance review
- Update location page content

### Annually
- SEO strategy review
- Keyword research refresh
- Backlink opportunity analysis
- Site-wide structural improvements

---

## Notes

- All keywords are UK-focused (en_GB locale)
- Service business targeting (trades, cleaning, professionals, beauty)
- Focus on conversion-based keywords
- Emphasis on local market penetration through location pages
- Continuous optimization based on GSC and GA4 data

**Last Updated**: October 20, 2025
**Maintained By**: Antek Automation Development Team
