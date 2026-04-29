import urllib.request
import re
from html.parser import HTMLParser

class MenuParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.categories = []
        self.in_a = False
        self.current_filter = None
        self.current_text = ""

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            attrs_dict = dict(attrs)
            if 'data-filter' in attrs_dict:
                self.in_a = True
                self.current_filter = attrs_dict['data-filter']
                self.current_text = ""

    def handle_data(self, data):
        if self.in_a:
            self.current_text += data

    def handle_endtag(self, tag):
        if tag == 'a' and self.in_a:
            self.in_a = False
            self.categories.append((self.current_filter, self.current_text.strip()))

def get_menu_data(i):
    # Fetch HTML
    url_html = f"https://venuscateringservice.com/menu{i}.html"
    try:
        html = urllib.request.urlopen(url_html).read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {url_html}: {e}")
        return [], []
    
    parser = MenuParser()
    parser.feed(html)
    categories = parser.categories
    
    # Fetch JS
    url_js = f"https://venuscateringservice.com/js/myscript{i}.js"
    try:
        js = urllib.request.urlopen(url_js).read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {url_js}: {e}")
        items = []
    else:
        # Extract items using regex
        # Format: { category: '1', name: '...', image: '...' }
        pattern = r"\{\s*category:\s*['\"](.*?)['\"],\s*name:\s*['\"](.*?)['\"],\s*image:\s*['\"](.*?)['\"]\s*\}"
        items = re.findall(pattern, js)
        
    return categories, items

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

header_part = content.split('<main>')[0]
footer_part = content.split('</main>')[1]
header_part = re.sub(r'href="#', r'href="index.html#', header_part)
footer_part = re.sub(r'href="#', r'href="index.html#', footer_part)

main_template = """<main>
    <section class="hero" style="min-height: 40vh; padding-top: 150px;">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="container">
                <span class="hero-tagline">Premium Selection</span>
                <h1 class="hero-title">{title}</h1>
            </div>
        </div>
    </section>

    <section class="menu-details" style="padding: 80px 0; background-color: var(--bg-main);">
        <div class="container">
            <div class="menu-layout">
                <!-- Left Sidebar: Categories -->
                <aside class="menu-sidebar">
                    <ul class="category-list" id="category-list">
                        {category_html}
                    </ul>
                </aside>

                <!-- Right Content: Items -->
                <div class="menu-content">
                    <div class="menu-grid" id="menu-grid">
                        <!-- Items rendered by JS -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<style>
.menu-layout {
    display: flex;
    gap: 40px;
}
.menu-sidebar {
    flex: 0 0 300px;
    background-color: var(--bg-alt);
    padding: 30px;
    border: 1px solid var(--accent-gold-subtle);
    border-radius: 8px;
    height: max-content;
    position: sticky;
    top: 100px;
}
.category-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.category-link {
    display: block;
    padding: 12px 15px;
    color: var(--text-secondary);
    font-family: var(--font-body);
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
    border-left: 2px solid transparent;
    transition: var(--transition-medium);
}
.category-link:hover, .category-link.active {
    color: var(--accent-gold);
    background-color: rgba(212, 175, 55, 0.05);
    border-left: 2px solid var(--accent-gold);
}
.menu-content {
    flex: 1;
}
.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}
.menu-card {
    background-color: var(--bg-alt);
    border: 1px solid var(--accent-gold-subtle);
    border-radius: 8px;
    overflow: hidden;
    transition: var(--transition-medium);
}
.menu-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-gold);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.menu-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid var(--accent-gold-subtle);
}
.menu-card-body {
    padding: 20px;
    text-align: center;
}
.menu-card-title {
    font-family: var(--font-heading);
    color: var(--text-primary);
    font-size: 18px;
    margin: 0;
}
@media (max-width: 991px) {
    .menu-layout {
        flex-direction: column;
    }
    .menu-sidebar {
        flex: none;
        position: static;
    }
}
</style>
<script>
    const menuItems = {items_json};
    
    function renderItems(filterId) {
        const grid = document.getElementById('menu-grid');
        grid.innerHTML = '';
        const filtered = menuItems.filter(item => item.category === filterId);
        filtered.forEach(item => {
            grid.innerHTML += `
                <div class="menu-card">
                    <img src="https://venuscateringservice.com/${item.image}" class="menu-card-img" alt="${item.name}">
                    <div class="menu-card-body">
                        <h3 class="menu-card-title">${item.name}</h3>
                    </div>
                </div>
            `;
        });
        
        // Update active class
        document.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.filter === filterId) {
                link.classList.add('active');
            }
        });
    }

    // Render first category by default
    document.addEventListener('DOMContentLoaded', () => {
        const firstCat = document.querySelector('.category-link');
        if (firstCat) {
            renderItems(firstCat.dataset.filter);
        }
    });
</script>
"""

import json

for i, (filename, title) in enumerate(menus, start=1):
    print(f"Processing {filename}...")
    categories, items = get_menu_data(i)
    
    # Generate category HTML
    category_html = ""
    for cat_id, cat_name in categories:
        category_html += f'<li><a class="category-link" data-filter="{cat_id}" onclick="renderItems(\'{cat_id}\')">{cat_name}</a></li>\n'
    
    # Format items for JS
    items_list = [{"category": c, "name": n, "image": img} for c, n, img in items]
    items_json = json.dumps(items_list)
    
    main_content = main_template.replace('{title}', title).replace('{category_html}', category_html).replace('{items_json}', items_json)
    
    full_html = header_part + main_content + footer_part
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(full_html)

print("All 15 menu files fetched and generated successfully.")
