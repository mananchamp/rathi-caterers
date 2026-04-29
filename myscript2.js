
document.addEventListener("DOMContentLoaded", () => {
    fetchMenuItems();
    setupFilterLinks();
    setupPaginationControls();
});

const itemsPerPage = 6;
let currentPage = 1;
let currentFilter = '1'; // Default filter for initial load
let menuItems = []; // Placeholder for menu items data

// Mock data - Replace with actual data fetching logic
function fetchMenuItems() {
    menuItems = [
       
  // second category

  {  category: '1', name: 'Sweet Paniyaram', image: 'images/menu/category2/1.jpg' },
  {  category: '1', name: 'Kara Kuzhi Paniyaram', image: 'images/menu/category2/2.jpg' },
  {  category: '1', name: 'Live Mysore Bonda Stall', image: 'images/menu/category15/10.jpg' },
  {  category: '1', name: 'Live Bajji Stall', image: 'images/menu/category15/13.jpg' },
  {  category: '1', name: 'White Coconut Chutney', image: 'images/menu/category2/3.jpg' },
  {  category: '1', name: 'Red Spicy Chutney', image: 'images/menu/category2/4.jpg' },



  {  category: '2', name: 'Live Kumbakonam Degree Coffee', image: 'images/menu/category1/1.jpg' },

  {  category: '2', name: 'Assam Tea', image: 'images/menu/category5/49.jpg' },
  {  category: '2', name: 'Milk', image: 'images/menu/category2/9.jpg' },
  {  category: '2', name: 'Horlicks', image: 'images/menu/category2/6.jpg' },
  {  category: '2', name: 'Boost', image: 'images/menu/category2/8.jpg' },
  {  category: '2', name: 'Badam Milk', image: 'images/menu/category4/2.jpg' },
  
  

  {  category: '2', name: 'Bournvita', image: 'images/menu/category2/5.jpg' },
  
  {  category: '2', name: 'Ragimalt', image: 'images/menu/category2/7.jpg' },
  
  
  
  
  {  category: '4', name: 'Panipuri', image: 'images/menu/category2/12.jpg' },
  {  category: '4', name: 'Bhelpuri', image: 'images/menu/category2/13.jpg' },
  {  category: '4', name: 'Sevpuri', image: 'images/menu/category2/15.jpg' },
  {  category: '4', name: 'Dahipuri', image: 'images/menu/category2/14.jpg' },
  
  
  {  category: '5', name: ' Venus Signature Fresh Mint Lime Juice ', image: 'images/menu/category7/1.jpg' },
  {  category: '5', name: 'Grape Juice', image: 'images/menu/category2/17.jpg' },
  {  category: '5', name: 'Pineapple Juice', image: 'images/menu/category2/18.jpg' },
  {  category: '5', name: 'Watermelon Juice', image: 'images/menu/category2/19.jpg' },
  {  category: '5', name: 'Mosambi Juice', image: 'images/menu/category2/16.jpg' },

  {  category: '6', name: 'Black Currant ', image: 'images/menu/category2/21.jpg' },
  {  category: '6', name: 'Mango ', image: 'images/menu/category2/24.jpg' },
  {  category: '6', name: 'Orange ', image: 'images/menu/category2/23.jpg' },
  {  category: '6', name: 'Lemon ', image: 'images/menu/category2/26.jpg' },
  {  category: '6', name: 'Blue Berry ', image: 'images/menu/category2/29.jpg' },
  {  category: '6', name: 'Strawberry ', image: 'images/menu/category2/22.jpg' },
  {  category: '6', name: 'Litchi ', image: 'images/menu/category2/25.jpg' },
  {  category: '6', name: 'Kiwi ', image: 'images/menu/category2/27.jpg' },
  {  category: '6', name: 'Green Apple ', image: 'images/menu/category2/28.jpg' },

  {  category: '6', name: 'Blue Curacao ', image: 'images/menu/category2/20.jpg' },
 
  
  
  
  
  
  
  
  {  category: '7', name: 'Dragon Fruit', image: 'images/menu/category2/30.jpg' },
  {  category: '7', name: 'Pineapple', image: 'images/menu/category2/31.jpg' },
  {  category: '7', name: 'Papaya', image: 'images/menu/category2/32.jpg' },
  {  category: '7', name: 'Watermelon', image: 'images/menu/category2/33.jpg' },
  {  category: '7', name: 'Apple', image: 'images/menu/category2/34.jpg' },
  {  category: '7', name: 'Musk Melon', image: 'images/menu/category2/35.jpg' },
  {  category: '7', name: 'Hill Banana', image: 'images/menu/category2/36.jpg' },

  
  {  category: '8', name: 'Paneer Tikka', image: 'images/menu/category1/112.jpg' },
        {  category: '8', name: 'Veg  Roll', image: 'images/menu/category12/6.jpg' },
        {  category: '8', name: 'Aloo Tikki', image: 'images/menu/category12/8.jpg' },
        
        
        {  category: '8', name: 'Tomato Sauce', image: 'images/menu/category1/48.jpg' },
        {  category: '8', name: 'Chilli Sauce', image: 'images/menu/category12/13.jpg' },
        {  category: '8', name: 'Schezwan Sauce', image: 'images/menu/category1/106.jpg' },


  {  category: '9', name: 'Tomato Soup', image: 'images/menu/category2/39.jpg' },
  {  category: '9', name: 'Sweet Corn Soup', image: 'images/menu/category2/38.jpg' },
  {  category: '9', name: 'Mushroom Soup', image: 'images/menu/category1/107.jpg' },
  {  category: '9', name: 'Mixed Vegetable Soup', image: 'images/menu/category1/113.jpg' },
  


  {  category: '10', name: 'Venus Signature Elaneer Payasam', image: 'images/menu/category3/3.jpg' },
  {  category: '10', name: 'Kaju Katli', image: 'images/menu/category2/101.jpg' },
  {  category: '10', name: 'Pure Badam Halwa', image: 'images/menu/category2/40.jpg' },
  {  category: '10', name: 'Rasmalai', image: 'images/menu/category1/35.jpg' },
  {  category: '10', name: 'Arcot Sweet Makkan Peda', image: 'images/menu/category2/41.jpg' },
  {  category: '10', name: 'Jalebi', image: 'images/menu/category2/42.jpg' },
  {  category: '10', name: 'Hot Pure Badam Kheer', image: 'images/menu/category2/43.jpg' },
  {  category: '10', name: 'Rajasthani Style of Beeda', image: 'images/menu/category1/84.jpg' },

  {  category: '11', name: 'Chennai No.1 Abu Gatta Ice Cream', image: 'images/menu/category2/45.jpg' },
  {  category: '11', name: 'Kulfi Stick', image: 'images/menu/category1/110.jpg' },
        
  {  category: '11', name: 'Pot Ice Cream', image: 'images/menu/category1/111.jpg' },
  {  category: '11', name: 'Pineapple ', image: 'images/menu/category2/50.jpg' },
  {  category: '11', name: 'Mango ', image: 'images/menu/category2/52.jpg' },
  {  category: '11', name: 'Butterscotch', image: 'images/menu/category2/46.jpg' },
  {  category: '11', name: 'Pista', image: 'images/menu/category2/49.jpg' },
  
  {  category: '11', name: 'Orange ', image: 'images/menu/category2/51.jpg' },
  {  category: '11', name: 'Honey', image: 'images/menu/category2/53.jpg' },
  {  category: '11', name: 'Strawberry', image: 'images/menu/category2/48.jpg' },
  {  category: '11', name: 'Vanilla', image: 'images/menu/category2/47.jpg' },
  {  category: '11', name: 'Guava', image: 'images/menu/category2/54.jpg' },
  {  category: '11', name: 'Banana', image: 'images/menu/category2/56.jpg' },


  {  category: '12', name: 'Mixed Vegetable Fried Rice', image: 'images/menu/category2/57.jpg' },
  {  category: '12', name: 'Mixed Vegetable Noodles', image: 'images/menu/category2/113.jpg' },
  {  category: '12', name: 'Schezwan Fried Rice', image: 'images/menu/category2/114.jpg' },
  {  category: '12', name: 'Schezwan Noodles', image: 'images/menu/category2/115.jpg' },
  {  category: '12', name: 'Tomato Sauce', image: 'images/menu/category2/58.jpg' },
  {  category: '12', name: 'Chilli Sauce', image: 'images/menu/category12/13.jpg' },


  {  category: '13', name: 'Venus Signature 9.5 Inches Phulka', image: 'images/menu/category1/55.jpg' },
  {  category: '13', name: 'Rumali Roti', image: 'images/menu/category2/60.jpg' },
  {  category: '13', name: 'Cashew Ghee Paneer Butter Masala', image: 'images/menu/category2/61.jpg' },
  {  category: '13', name: 'Mushroom Pepper Gravy', image: 'images/menu/category2/117.jpg' },
  {  category: '13', name: 'Kadai Veg', image: 'images/menu/category2/116.jpg' },

  {  category: '14', name: 'Venus Special Dosa & Idli', image: 'images/menu/category2/62.jpg' },
  {  category: '14', name: 'Uthappam', image: 'images/menu/category1/73.jpg' },
  {  category: '14', name: 'South Indian Tiffin Sambar', image: 'images/menu/category2/65.jpg' },
  {  category: '14', name: 'Podi With Nallennai ', image: 'images/menu/category2/97.jpg' },
  {  category: '14', name: 'White Coconut Chutney', image: 'images/menu/category2/63.jpg' },
  {  category: '14', name: 'Red Spicy Chutney', image: 'images/menu/category2/64.jpg' },
  {  category: '14', name: 'Mint Chutney', image: 'images/menu/category2/66.jpg' },
  {  category: '14', name: 'Groundnut Chutney', image: 'images/menu/category4/12.jpg' },

  {  category: '15', name: 'Veg Biryani', image: 'images/menu/category2/67.jpg' },
  {  category: '15', name: 'Mixed Veg Cucumber White Onion Raita', image: 'images/menu/category2/68.jpg' },
  {  category: '15', name: 'Bisi-Bele-Bath', image: 'images/menu/category2/69.jpg' },
  {  category: '15', name: 'Potato Chenna Peas Curry', image: 'images/menu/category2/70.jpg' },
  {  category: '15', name: 'National Poriyal (Carrot, Cabbage & Beans)', image: 'images/menu/category2/71.jpg' },
  {  category: '15', name: 'Varuval (Vazhakka Podi Mass)', image: 'images/menu/category2/72.jpg' },
  {  category: '15', name: 'Curd Rice (Garnished with Carrot, Pomegranate, Parsley & Green Chilli)', image: 'images/menu/category2/73.jpg' },
  {  category: '15', name: 'Pickle (Manga Thokku)', image: 'images/menu/category2/74.jpg' },
  {  category: '15', name: 'Steamed Rice', image: 'images/menu/category2/75.jpg' },
  {  category: '15', name: 'Tomato Rasam', image: 'images/menu/category2/76.jpg' },
  {  category: '15', name: 'Manathakkali Vatha Kuzhambu', image: 'images/menu/category2/77.jpg' },
  {  category: '15', name: 'Buttermilk', image: 'images/menu/category2/78.jpg' },
  {  category: '15', name: 'Mor Millaga', image: 'images/menu/category2/79.jpg' },
  {  category: '15', name: 'Chips (Salt/Spicy)', image: 'images/menu/category2/80.jpg' },
  {  category: '15', name: 'Bisleri Mineral Water', image: 'images/menu/category2/81.jpg' },
  {  category: '15', name: 'Hill Banana', image: 'images/menu/category2/82.jpg' },

  {  category: '16', name: 'Carrot Halwa', image: 'images/menu/category2/83.jpg' },
  {  category: '16', name: 'Chenna Basundi', image: 'images/menu/category11/12.jpg' },
  {  category: '16', name: 'Mallipoo Idli', image: 'images/menu/category2/85.jpg' },
  {  category: '16', name: 'Ghee Ven Pongal', image: 'images/menu/category2/86.jpg' },
  {  category: '16', name: 'South Indian Kal Dosa', image: 'images/menu/category2/87.jpg' },
  {  category: '16', name: 'Poori (Live Counter)', image: 'images/menu/category2/88.jpg' },
  {  category: '16', name: 'Poori Masala', image: 'images/menu/category2/89.jpg' },
  {  category: '16', name: 'Idiyappam', image: 'images/menu/category2/90.jpg' },
  {  category: '16', name: 'White Veg Kurma', image: 'images/menu/category2/91.jpg' },
  {  category: '16', name: 'South Indian Tiffin Sambar', image: 'images/menu/category2/92.jpg' },
  {  category: '16', name: 'White Coconut Chutney', image: 'images/menu/category2/93.jpg' },
  {  category: '16', name: 'Spicy Chutney', image: 'images/menu/category2/94.jpg' },
  {  category: '16', name: 'Mint Chutney', image: 'images/menu/category2/95.jpg' },
  {  category: '16', name: 'Groundnut Chutney', image: 'images/menu/category4/12.jpg' },
  {  category: '16', name: 'Vadacurry', image: 'images/menu/category2/96.jpg' },
  {  category: '16', name: 'Podi With Nallaennai ', image: 'images/menu/category2/97.jpg' },
  {  category: '16', name: 'Medu Vada', image: 'images/menu/category2/98.jpg' },
  {  category: '16', name: 'Bisleri Mineral Water Bottle', image: 'images/menu/category2/99.jpg' },

  {  category: '17', name: 'Rasmalai', image: 'images/menu/category2/100.jpg' },
  {  category: '17', name: 'Kaju Katli', image: 'images/menu/category2/101.jpg' },
  {  category: '17', name: 'Milkmaid Semiya Payasam', image: 'images/menu/category2/102.jpg' },
  {  category: '17', name: 'Steamed Rice', image: 'images/menu/category2/75.jpg' },
  {  category: '17', name: 'Yellow Dhal with Ghee', image: 'images/menu/category1/90.jpg' },
  {  category: '17', name: 'Paruppu Podi with Ghee', image: 'images/menu/category2/103.jpg' },
  
  {  category: '17', name: 'Thair Vada', image: 'images/menu/category2/104.jpg' },
  {  category: '17', name: 'Kathambha Sambar', image: 'images/menu/category2/105.jpg' },
  {  category: '17', name: 'Tomato Rasam', image: 'images/menu/category2/76.jpg' },
  {  category: '17', name: 'Chow Chow Kootu', image: 'images/menu/category2/106.jpg' },
  {  category: '17', name: 'Karunai Varuval', image: 'images/menu/category2/107.jpg' },
  {  category: '17', name: 'Avial', image: 'images/menu/category2/108.jpg' },
  {  category: '17', name: 'Kathirikka Mocha Kara Kuzhambu', image: 'images/menu/category2/109.jpg' },
  {  category: '17', name: 'Curd Rice', image: 'images/menu/category2/73.jpg' },
  {  category: '17', name: 'Pickle (Lemon)', image: 'images/menu/category2/110.jpg' },
  {  category: '17', name: 'Kalyana Appalam', image: 'images/menu/category2/111.jpg' },
  {  category: '17', name: 'Bisleri Mineral Water Bottle', image: 'images/menu/category2/99.jpg' },
  {  category: '17', name: 'Ice Cream', image: 'images/menu/category2/112.jpg' },
  {  category: '17', name: 'Sweet Beeda', image: 'images/menu/category1/84.jpg' },


  
  {  category: '19', name: 'Thamboolam Bag', image: 'images/menu/category1/71.jpg' },
        
  
  
 
  

{  category: '18', name: 'Reception Arthi Counter (31 Plates)', image: 'images/menu/category14/2.jpg' },
{  category: '18', name: 'Welcome Reception Thamboolam Stall', image: 'images/menu/category14/21.jpg' },
{  category: '18', name: 'Reception Evening Tea Shop Stall', image: 'images/menu/category1/103.jpg' },
{  category: '18', name: 'Live Jalebi Stall', image: 'images/menu/category2/42.jpg' },
{  category: '18', name: 'Live Soup Stall', image: 'images/menu/category14/3.jpg' },
{  category: '18', name: 'Live Paniyaram Stall', image: 'images/menu/category15/9.jpg' },
{  category: '18', name: 'Live Chaat Stall', image: 'images/menu/category14/4.jpg' },
{  category: '18', name: 'Live Uthappam Stall', image: 'images/menu/category15/5.jpg' },
{  category: '18', name: 'Live Dosa Stall', image: 'images/menu/category15/4.jpg' },
{  category: '18', name: 'Live Poori & Chola Poori Stall', image: 'images/menu/category15/6.jpg' },
{  category: '18', name: 'Live Phulka Stall', image: 'images/menu/category15/15.jpg' },
{  category: '18', name: 'Live Parotta Stall', image: 'images/menu/category15/14.jpg' },
{  category: '18', name: 'Live Masala Badam Milk Stall', image: 'images/menu/category15/12.jpg' },
{  category: '18', name: 'Live Starter Stall', image: 'images/menu/category15/17.jpg' },
{  category: '18', name: 'Live Sweet Corn Stall', image: 'images/menu/category15/18.jpg' },

{  category: '18', name: 'Live Stone Ice Cream Stall', image: 'images/menu/category15/19.jpg' },
{  category: '18', name: 'Live Spring Potato Stall', image: 'images/menu/category15/16.jpg' },
{  category: '18', name: 'Live Bajji Stall', image: 'images/menu/category15/13.jpg' },

{  category: '18', name: 'Live Chocolate Fountain Stall', image: 'images/menu/category14/17.jpg' },

{  category: '18', name: 'Live Fresh Juice Stall', image: 'images/menu/category14/14.jpg' },
{  category: '18', name: 'Live Mocktail Stall', image: 'images/menu/category14/6.jpg' },
{  category: '18', name: 'Live Fresh Fruit Cut Stall', image: 'images/menu/category14/8.jpg' },
{  category: '18', name: 'Live Popcorn Stall', image: 'images/menu/category14/16.jpg' },
{  category: '18', name: 'Live Sugar Candy Stall', image: 'images/menu/category1/104.jpg' },
{  category: '18', name: 'Mehndi Stall', image: 'images/menu/category1/105.jpg' },
{  category: '18', name: 'Bangle Stall', image: 'images/menu/category14/9.jpg' },
{  category: '18', name: 'Children Stick Ballon Stall', image: 'images/menu/category14/10.jpg' },
{  category: '18', name: 'Ice Cream Stall (12 Varieties)', image: 'images/menu/category14/19.jpg' },
{  category: '18', name: 'Rajasthani Style Of Sweet Beda Stall', image: 'images/menu/category14/20.jpg' },
{  category: '18', name: 'Muhurtham Morning Tea Shop Stall', image: 'images/menu/category1/103.jpg' },

{  category: '18', name: 'Grand Venus Couple Service Dining', image: 'images/menu/category14/22.jpg' },




  


  
 


    ];
    displayMenuItems();
}



// Function to display menu items based on current filter and pagination
function displayMenuItems() {
    const menuContainer = document.querySelector('.menu-item-boxes');
    
    menuContainer.innerHTML = '';

    // Filter items based on current category (currentFilter)
    let filteredItems = menuItems.filter(item => item.category === currentFilter);

    // Calculate total pages based on filtered items
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    currentPage = Math.min(currentPage, totalPages); // Ensure currentPage is within valid range

    
    // Slice the filtered items to display only items for the current page
    const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    

    // Generate HTML for each item and append to menuContainer
    paginatedItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = `col-lg-4 col-md-6 menu-item-box ${item.category}`;
        menuItem.innerHTML = `
            <div class="menu-item">
                <div class="menu-item-img">
                    <figure class="image-anime">
                        <img src="${item.image}" alt="${item.name}">
                    </figure>
                </div>
                <div class="menu-item-body">
                   
                    <h3>${item.name}</h3>
                    <!-- Add more item details if needed -->
                </div>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    // Update pagination controls
    updatePagination(totalPages);
}

// Function to update pagination controls based on total pages
function updatePagination(totalPages) {
    const paginationControls = document.getElementById('pagination-controls');
    const pageInfo = document.getElementById('page-info');

    // Display pagination controls only if there are multiple pages
    paginationControls.style.display = totalPages > 1 ? 'block' : 'none';

    // Update page info text
    pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;

    // Enable/disable prev/next buttons based on currentPage
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    prevButton.disabled = currentPage === 1;

    nextButton.disabled = currentPage === totalPages;
    
}

// Function to handle page change (Previous/Next)
function changePage(direction) {
    currentPage += direction;
    displayMenuItems();
}

// Setup filter links to change currentFilter and display menu items
function setupFilterLinks() {
    const filterLinks = document.querySelectorAll('.menu-dises-nav a');

    filterLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            currentFilter = event.currentTarget.dataset.filter;
            currentPage = 1;
            filterLinks.forEach(link => link.classList.remove('active-menu-dises'));
            event.currentTarget.classList.add('active-menu-dises');
            displayMenuItems();
        });
    });
}

// Setup pagination controls button click events
function setupPaginationControls() {
    document.getElementById('prev-page').addEventListener('click', () => changePage(-1));
    document.getElementById('next-page').addEventListener('click', () => changePage(1));
}




