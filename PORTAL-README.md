# TallTree Technologies Document Portal

A comprehensive web portal for accessing and managing all legal, operational, and policy documents.

## Features

### 🌲 Main Portal (`index.html`)
- **Category Navigation**: 6 organized categories (Client, Employee, Security, HR, International, Operational)
- **Quick Access**: Fast links to most-used documents
- **Search Functionality**: Full-text search across all 40+ documents
- **Modern UI**: Responsive design with professional styling

### 📥 PDF Export
Every document page includes:
- **Auto-injected Navigation**: JavaScript automatically adds a navigation bar to all HTML documents
- **One-Click PDF Export**: Click "Export PDF" button on any document to save as PDF
- **Print-Optimized**: Special CSS for clean PDF output (removes navigation, headers, footers)

### 🔍 Search Features
- Search by document name
- Search by keywords
- Search by category
- Enter key support
- Auto-redirect for single results
- Results page for multiple matches

### 📱 Responsive Design
- Mobile-friendly layout
- Tablet-optimized
- Desktop-enhanced
- Print/PDF-ready

## Portal Structure

```
TallTreeTech/
├── index.html                    # Main portal landing page
├── css/
│   ├── portal.css               # Portal-specific styles
│   └── talltree-styles.css      # Document styles
├── js/
│   └── portal.js                # Portal functionality & PDF export
├── categories/
│   ├── client-documents.html    # Client category page
│   ├── employee-documents.html  # Employee category page
│   ├── security-policies.html   # Security category page
│   ├── hr-policies.html         # HR category page
│   ├── international.html       # International category page
│   └── operational.html         # Operational category page
└── [40+ document HTML files]
```

## Document Categories

### 📋 Client Documents (10 documents)
- Master Services Agreement
- Mutual NDA
- Statements of Work
- Retainer Agreements
- SLAs, Proposals, Quotes
- Data Processing Agreement
- Client Feedback & Complaints

### 👥 Employee Documents (7 documents)
- Employment Contracts
- Employee Handbook
- NDA & IP Assignment
- Leave, Home Working, Health & Safety Policies
- Reasonable Adjustments

### 🔒 Security & IT Policies (5 documents)
- Cyber Essentials Policy
- Access Control
- IT Governance
- Secure Configuration
- Patch Management

### 📚 HR Policies (6 documents)
- Diversity, Equity & Inclusion
- Employee Benefits
- Employee Responsibilities
- UK Sponsor License
- Job Description Template
- Whistleblowing

### 🌍 International Framework (5 documents)
- International MSA Addendum
- Standard Contractual Clauses (SCCs)
- US MSA Variant
- Data Processing Agreement
- International Clients Guide

### ⚙️ Operational Documents (8 documents)
- Accounting Policies
- Travel Policy
- Project Management Templates
- Data Protection & Compliance
- Coding Standards
- Copyright & Notices

## How to Use

### Local Development
1. Open `index.html` in any modern web browser
2. Navigate using category cards or quick access links
3. Use search to find specific documents
4. Click "Export PDF" on any document to save it

### Deployment Options

#### Option 1: Static Web Hosting
Upload all files to:
- **GitHub Pages**: Free, automatic HTTPS
- **Netlify**: Free tier, continuous deployment
- **Vercel**: Free tier, serverless functions support
- **AWS S3 + CloudFront**: Enterprise-grade, scalable

#### Option 2: Local Server
```bash
# Using Python 3
cd TallTreeTech
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Then visit: http://localhost:8000
```

#### Option 3: Company Intranet
- Copy all files to internal web server
- Configure access controls as needed
- Perfect for employee access to policies

### GitHub Pages Deployment
```bash
# 1. Go to GitHub repository settings
# 2. Pages → Source → Deploy from branch
# 3. Select branch: claude/incomplete-description-011XKewooQAG4Hcjztk9Rh11
# 4. Select folder: / (root)
# 5. Save

# Your portal will be available at:
# https://yourusername.github.io/TallTreeTech/
```

## PDF Export Instructions

### For Users
1. Open any document (e.g., `master-services-agreement.html`)
2. Click the "📥 Export PDF" button in the navigation bar
3. Browser's print dialog opens
4. Select "Save as PDF" as destination
5. Adjust settings if needed (margins, headers/footers)
6. Click "Save"

### Print Settings Recommendations
- **Margins**: Normal or Minimum
- **Headers/Footers**: OFF (already removed via CSS)
- **Background graphics**: ON (for better appearance)
- **Scale**: 100%

## Customization

### Branding
Edit `/css/portal.css`:
```css
:root {
    --primary-color: #2c5f2d;      /* Main green */
    --secondary-color: #97bc62;    /* Light green */
    --accent-color: #4a90e2;       /* Blue accent */
}
```

### Adding Documents
1. Create new HTML document
2. Add entry to `/js/portal.js` documents array:
```javascript
{
    name: "New Document",
    category: "Client",
    file: "new-document.html",
    keywords: "keyword1 keyword2 keyword3"
}
```
3. Add link to relevant category page
4. Portal JavaScript will auto-inject navigation

### Search Keywords
Update keywords in `/js/portal.js` to improve search results for each document.

## Browser Compatibility

### Supported Browsers
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required JavaScript Features
- ES6 (const, let, arrow functions, template literals)
- DOM manipulation
- Array methods (filter, map)
- Event listeners

## Accessibility

- Semantic HTML5 structure
- Keyboard navigation support
- Screen reader friendly
- ARIA labels (can be enhanced)
- High contrast mode compatible
- Responsive text sizing

## Performance

- **Lightweight**: ~15KB total (CSS + JS gzipped)
- **Fast Load**: No external dependencies except Google Fonts
- **Cached**: Browser caching for repeat visits
- **Instant Search**: Client-side, no server required

## Security Considerations

### For Public Hosting
- All documents are publicly accessible
- No authentication/authorization built-in
- Consider adding if documents are confidential

### For Internal Hosting
- Use company VPN/intranet
- Implement SSO if needed
- Add access logging if required

### HTTPS Recommendation
Always deploy with HTTPS for:
- Data encryption in transit
- Modern browser features (Service Workers, etc.)
- SEO benefits
- User trust

## Maintenance

### Updating Documents
1. Edit HTML files directly
2. Changes reflect immediately
3. No build process required
4. Browser cache may need clearing (Ctrl+F5)

### Adding New Categories
1. Create new category HTML in `/categories/`
2. Add category card to `index.html`
3. Update category count in card
4. Add documents to `/js/portal.js` array

### Version Control
All changes should be committed to git:
```bash
git add .
git commit -m "docs: Update [document name]"
git push
```

## Troubleshooting

### Search Not Working
- Check browser console for JavaScript errors
- Ensure `/js/portal.js` is loaded
- Verify document array syntax

### PDF Export Issues
- Modern browser required (Chrome, Firefox, Safari)
- Check print preview shows correctly
- Try different browser if issues persist
- PDF generation is browser-native feature

### Navigation Not Appearing
- JavaScript must be enabled
- Check `/js/portal.js` is loaded
- Verify file path is correct (not on index.html)
- Check browser console for errors

### Styling Issues
- Clear browser cache (Ctrl+Shift+R)
- Check `/css/portal.css` is loaded
- Verify file paths are correct
- Check browser console for 404 errors

## Future Enhancements

Potential improvements:
- [ ] User authentication
- [ ] Document versioning
- [ ] Change tracking
- [ ] Approval workflows
- [ ] Digital signatures
- [ ] Advanced search filters
- [ ] Document templates with form filling
- [ ] API integration
- [ ] Analytics/tracking
- [ ] Multi-language support

## Support

For issues or questions:
- Check this README first
- Review browser console for errors
- Test in different browser
- Contact: [legal@talltreetech.com](mailto:legal@talltreetech.com)

## License

© 2024 Software Systems Limited trading as TallTree Technologies  
Company No. 14466340 | Registered in England and Wales

---

**Last Updated**: 2024-11-14  
**Version**: 1.0  
**Maintained By**: TallTree Technologies Legal Team
