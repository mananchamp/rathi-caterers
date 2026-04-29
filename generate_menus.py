import re
import os

menus = [
    ("menu1.html", "Wedding Menu"),
    ("menu2.html", "60th Wedding Menu"),
    ("menu3.html", "70th Wedding Menu"),
    ("menu4.html", "80th Wedding Menu"),
    ("menu5.html", "Engagement Menu"),
    ("menu6.html", "Seemantham Menu"),
    ("menu7.html", "Annaprasana Ceremony"),
    ("menu8.html", "Birthday Menu"),
    ("menu9.html", "House Warming Breakfast Menu"),
    ("menu10.html", "House Warming Lunch Menu"),
    ("menu11.html", "Mehndi Function Menu"),
    ("menu12.html", "Corporate Menu"),
    ("menu13.html", "Retirement Function Menu"),
    ("menu14.html", "Live Counter"),
    ("menu15.html", "Counters & Stalls for Wedding Function")
]

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Split into header, main, footer
header_part = content.split('<main>')[0]
footer_part = content.split('</main>')[1]

# Fix links in header and footer to point back to index.html
header_part = re.sub(r'href="#', r'href="index.html#', header_part)
footer_part = re.sub(r'href="#', r'href="index.html#', footer_part)

main_template = """<main>
    <section class="hero" style="min-height: 60vh;">
        <div class="hero-overlay"></div>
        <div class="hero-content" style="padding-top: 200px;">
            <div class="container">
                <span class="hero-tagline">Premium Selection</span>
                <h1 class="hero-title">{title}</h1>
            </div>
        </div>
    </section>

    <section class="services" style="padding: 100px 0; background-color: var(--bg-main);">
        <div class="container" style="text-align: center;">
            <div class="section-header">
                <span class="section-tag">Explore</span>
                <h2 class="section-title">A Curated <em>Experience</em></h2>
                <p class="section-desc" style="margin-bottom: 40px;">Our {title_lower} is crafted with the finest ingredients and culinary expertise. Full menu details and customization options will be available here soon.</p>
                <a href="index.html#contact" class="btn btn-primary">Enquire About This Menu</a>
            </div>
        </div>
    </section>
</main>"""

for filename, title in menus:
    main_content = main_template.format(title=title, title_lower=title.lower())
    full_html = header_part + main_content + footer_part
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(full_html)
    
print("All 15 menu files have been generated successfully.")
