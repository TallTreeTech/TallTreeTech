// TallTree Technologies Portal JavaScript

// Document database for search functionality
const documents = [
    // Client Documents
    { name: "Master Services Agreement", category: "Client", file: "master-services-agreement.html", keywords: "msa contract client agreement services" },
    { name: "Mutual Non-Disclosure Agreement", category: "Client", file: "mutual-nda.html", keywords: "nda confidentiality non-disclosure mutual" },
    { name: "Statement of Work Template", category: "Client", file: "statement-of-work-template.html", keywords: "sow project deliverables scope" },
    { name: "Retainer Agreement SOW", category: "Client", file: "retainer-agreement-sow.html", keywords: "retainer fractional ongoing monthly" },
    { name: "Service Level Agreement", category: "Client", file: "service-level-agreement.html", keywords: "sla uptime support response" },
    { name: "Proposal Template", category: "Client", file: "proposal-template.html", keywords: "proposal quote estimate pitch" },
    { name: "Quote Template", category: "Client", file: "quote-template.html", keywords: "quote price cost estimate" },
    { name: "Client Feedback Form", category: "Client", file: "client-feedback-form.html", keywords: "feedback survey satisfaction testimonial" },
    { name: "Data Processing Agreement", category: "Client", file: "data-processing-agreement.html", keywords: "dpa gdpr data protection privacy" },
    { name: "Complaints Policy", category: "Client", file: "complaints-policy.html", keywords: "complaints grievance resolution" },
    
    // Employee Documents
    { name: "Employment Contract Template", category: "Employee", file: "employment-contract-template.html", keywords: "employment contract hire job offer" },
    { name: "Employee Handbook", category: "Employee", file: "employee-handbook.html", keywords: "handbook policies procedures guide" },
    { name: "Employee NDA & IP Assignment", category: "Employee", file: "employee-nda-ip-assignment.html", keywords: "nda intellectual property ip confidentiality" },
    { name: "Leave Policy", category: "Employee", file: "leave-policy.html", keywords: "holiday vacation leave absence time-off" },
    { name: "Home Working Policy", category: "Employee", file: "home-working-policy.html", keywords: "remote work home working telework flexible" },
    { name: "Health & Safety Policy", category: "Employee", file: "health-safety-policy.html", keywords: "health safety wellbeing dse workstation" },
    { name: "Reasonable Adjustments Policy", category: "Employee", file: "reasonable-adjustments-policy.html", keywords: "disability adjustments accessibility accommodations" },
    
    // Security & IT Policies
    { name: "Cyber Essentials Policy", category: "Security", file: "cyber-essentials-policy.html", keywords: "cyber essentials security certification" },
    { name: "Access Control Policy", category: "Security", file: "access-control-policy.html", keywords: "access control accounts admin passwords mfa" },
    { name: "IT Governance Policy", category: "Security", file: "it-governance-policy.html", keywords: "it governance risk management change" },
    { name: "Secure Configuration Policy", category: "Security", file: "secure-configuration-policy.html", keywords: "configuration hardening encryption security" },
    { name: "Patch Management Policy", category: "Security", file: "patch-management-policy.html", keywords: "patches updates vulnerabilities maintenance" },
    
    // HR Policies
    { name: "Diversity, Equity & Inclusion Policy", category: "HR", file: "diversity-equity-inclusion-policy.html", keywords: "dei diversity inclusion equality equity" },
    { name: "Employee Benefits Policy", category: "HR", file: "employee-benefits-policy.html", keywords: "benefits perks compensation leave pension" },
    { name: "Employee Responsibilities", category: "HR", file: "employee-responsibilities.html", keywords: "responsibilities conduct code ethics" },
    { name: "UK Sponsor License Policy", category: "HR", file: "uk-sponsor-license-policy.html", keywords: "visa sponsorship immigration right-to-work" },
    { name: "Job Description Template", category: "HR", file: "job-description-template.html", keywords: "job description role jd recruitment" },
    { name: "Whistleblowing Policy", category: "HR", file: "whistleblowing-policy-enhanced.html", keywords: "whistleblowing protected disclosure reporting" },
    
    // International
    { name: "International MSA Addendum", category: "International", file: "international-msa-addendum.html", keywords: "international cross-border eu us australia" },
    { name: "Standard Contractual Clauses", category: "International", file: "standard-contractual-clauses.html", keywords: "scc data transfer gdpr eu" },
    { name: "US MSA Variant", category: "International", file: "us-msa-variant.html", keywords: "us usa american contract msa" },
    { name: "International Clients Guide", category: "International", file: "international-clients-guide.html", keywords: "international guide compliance multi-currency" },
    
    // Operational
    { name: "Accounting Policies", category: "Operational", file: "accounting-policies.html", keywords: "accounting finance capitalisation depreciation" },
    { name: "Travel Policy", category: "Operational", file: "travel-policy.html", keywords: "travel expenses business trips accommodation" },
    { name: "Meeting Minutes Template", category: "Operational", file: "meeting-minutes-template.html", keywords: "meeting minutes notes actions" },
    { name: "Project Status Report Template", category: "Operational", file: "project-status-report-template.html", keywords: "status report project update progress" },
    { name: "Project Planning Template", category: "Operational", file: "project-planning-template.html", keywords: "project planning schedule timeline milestones" },
    { name: "Data Protection Policy", category: "Operational", file: "data-protection-policy.html", keywords: "data protection privacy gdpr compliance" },
    { name: "Malpractice Policy", category: "Operational", file: "malpractice-policy.html", keywords: "malpractice conduct ethics misconduct" },
    { name: "Copyright & Notices Policy", category: "Operational", file: "copyright-and-notices-policy.html", keywords: "copyright ip intellectual property notices" },
    { name: "Coding Standards", category: "Operational", file: "coding-standards.html", keywords: "coding standards development code quality" },
    { name: "Complaints Policy (Enhanced)", category: "Operational", file: "complaints-policy-enhanced.html", keywords: "complaints grievance resolution escalation" }
];

// Search functionality
function searchDocuments() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    const results = documents.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm) ||
        doc.keywords.includes(searchTerm) ||
        doc.category.toLowerCase().includes(searchTerm)
    );
    
    if (results.length === 0) {
        alert('No documents found for "' + searchTerm + '"');
        return;
    }
    
    if (results.length === 1) {
        window.location.href = results[0].file;
        return;
    }
    
    displaySearchResults(results, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    const container = document.querySelector('.portal-container');
    
    let resultsLinks = results.map(doc => 
        '<a href="' + doc.file + '" class="quick-link">' +
        '<span class="link-icon">📄</span>' +
        '<span class="link-text">' + doc.name + '</span>' +
        '<span class="link-action">View →</span>' +
        '</a>'
    ).join('');
    
    const resultsHTML = 
        '<section class="search-results-section">' +
        '<h2>Search Results for "' + searchTerm + '" (' + results.length + ' documents)</h2>' +
        '<div class="quick-access-list">' + resultsLinks + '</div>' +
        '<button onclick="clearSearch()" class="search-button" style="margin-top: 1.5rem;">Clear Search</button>' +
        '</section>';
    
    const sections = container.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    
    const resultsSection = document.createElement('div');
    resultsSection.innerHTML = resultsHTML;
    container.insertBefore(resultsSection.firstElementChild, container.firstChild);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Clear search and restore original view
function clearSearch() {
    location.reload();
}

// Enable search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDocuments();
            }
        });
    }
});

// PDF Export functionality
function exportToPDF() {
    window.print();
}

// Add export button to document pages
function addExportButton() {
    if (window.location.pathname.includes('.html') && !window.location.pathname.endsWith('index.html')) {
        if (!document.querySelector('.doc-nav')) {
            const nav = document.createElement('div');
            nav.className = 'doc-nav';
            nav.innerHTML = 
                '<div class="doc-nav-content">' +
                '<a href="index.html" class="nav-home">🌲 TallTree Portal Home</a>' +
                '<div class="nav-actions">' +
                '<button onclick="exportToPDF()" class="nav-btn pdf-btn">📥 Export PDF</button>' +
                '</div>' +
                '</div>';
            document.body.insertBefore(nav, document.body.firstChild);
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    addExportButton();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
