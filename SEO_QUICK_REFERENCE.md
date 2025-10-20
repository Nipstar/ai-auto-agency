# SEO Quick Reference Guide

## Primary Keywords
**Focus on these 5 keywords for all content:**
1. `ai automation agency uk`
2. `automation agency`
3. `ai automation agency`
4. `business automation uk`
5. `ai automation solutions`

---

## File Locations

| What | Where |
|------|-------|
| SEO Config | `src/components/SEOHead.tsx` |
| Sitemap | `/public/sitemap.xml` |
| Robots | `/public/robots.txt` |
| Homepage | `src/pages/HomePage.tsx` |
| Services | `src/pages/AI*Page.tsx` |
| Locations | `src/pages/LocationPage.tsx` |
| Full Docs | `SEO_DOCUMENTATION.md` |
| Summary | `SEO_IMPLEMENTATION_SUMMARY.md` |

---

## Adding Keywords to Pages

### To a Page Component
```tsx
<SEOHead
  title="Your Title | Antek Automation"
  description="Your description with keywords here"
  path="/your-path"
  keywords="keyword1, keyword2, keyword3"
  schema={yourSchema}
/>
```

### Service Page Template
```tsx
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Service Name',
  description: 'Service description',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Service Type Here',
};
```

---

## SEO Checklist for New Pages

- [ ] Meta title with primary keyword (< 60 chars)
- [ ] Meta description with keywords (150-160 chars)
- [ ] Keywords meta tag added
- [ ] H1 with primary keyword
- [ ] H2/H3 with secondary keywords
- [ ] Internal links to related pages
- [ ] Schema markup included
- [ ] Canonical URL correct
- [ ] Open Graph tags (auto-handled)
- [ ] Sitemap entry added

---

## Google Search Console Tasks

1. **Submit Sitemap**
   - URL: `https://antekautomation.com/sitemap.xml`
   - Go to: Google Search Console → Coverage → Sitemaps

2. **Monitor Keywords**
   - GSC → Performance
   - Filter by keywords
   - Check rankings monthly

3. **Fix Errors**
   - GSC → Coverage
   - Address any "Error" status issues
   - Check mobile usability

4. **Test Rich Results**
   - Use: https://search.google.com/test/rich-results
   - Validate schema markup

---

## Meta Tag Guidelines

### Title Format
`Main Topic | Antek Automation | Benefit or Location`
- Example: "AI Chatbots | Antek Automation | Lead Generation"
- Max 60 characters

### Description Format
`Action: [Main benefit]. Features: [Key features]. CTA: [Call to action].`
- Example: "Capture leads 24/7 with AI chatbots. Automation for UK service businesses. Book your free audit today."
- 150-160 characters

### Keywords Format
`primary, secondary, tertiary, location, specific-service`
- Comma-separated, no quotes
- 5-8 most relevant terms

---

## Keyword Usage by Page Type

### Homepage
- Include all 5 primary keywords
- Focus: agency positioning
- Keywords: ai automation agency uk, automation agency, ai automation solutions

### Service Pages
- Use 1 primary + 3-4 service-specific keywords
- Focus: service value
- Keywords: [service type], [benefit], [target audience]

### Location Pages
- Use city name + keyword variant
- Focus: local relevance
- Keywords: [city] [service], [city] automation agency

---

## Common SEO Mistakes to Avoid

❌ **Don't do this:**
- Keyword stuffing (overusing keywords unnaturally)
- Duplicate meta descriptions across pages
- Keyword stuffing in title tags
- Missing alt text on images
- No internal links between related pages
- Broken links in content

✅ **Do this instead:**
- Use keywords naturally in sentences
- Unique meta description for each page
- 1-2 primary keywords per title tag
- Descriptive alt text for all images
- Link related pages with keyword anchor text
- Regularly check links are working

---

## Tools & Links

**Monitoring**
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics 4](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev)

**Testing**
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Structured Data Validator](https://validator.schema.org)

**Analysis**
- [SEMrush](https://semrush.com) - Keyword research
- [Ahrefs](https://ahrefs.com) - Backlink analysis
- [Moz Keyword Tool](https://moz.com/keyword-explorer)

---

## Environment Setup

**Local Development:**
```bash
# Copy template
cp .env.example .env

# Update with your values
VITE_CONTACT_WEBHOOK_URL=https://your-webhook-url
VITE_CHATBOT_WEBHOOK_URL=https://your-webhook-url

# For local n8n testing
ngrok http 5678
# Update URLs to ngrok tunnel

# Restart dev server
npm run dev
```

---

## Deployment Checklist

Before deploying to production:
- [ ] All meta tags filled in
- [ ] TypeScript: `npm run typecheck`
- [ ] Linting: `npm run lint`
- [ ] Build: `npm run build`
- [ ] No crawl errors in GSC
- [ ] Schema markup validated
- [ ] Canonical URLs correct
- [ ] Internal links working

---

## Monthly Review

### First of each month:
1. Check Google Search Console
   - New queries appearing
   - Click-through rate
   - Average position
2. Check Google Analytics
   - Organic traffic trend
   - Top landing pages
   - User behavior metrics
3. Check rankings for top 20 keywords
4. Update location pages if needed
5. Review new competitor content

---

## Quick Commands

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview

# Development server
npm run dev
```

---

## Contact & Questions

For SEO-related questions or updates:
1. Check `SEO_DOCUMENTATION.md` (detailed reference)
2. Check `SEO_IMPLEMENTATION_SUMMARY.md` (overview)
3. Check this file for quick answers
4. Review CLAUDE.md for development context

---

## Last Updated
October 20, 2025

**Status**: ✅ All SEO implementations complete and deployed
**Next Review**: November 20, 2025 (Monthly check-in)
