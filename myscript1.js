
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
        

        {  category: '1', name: 'Sweet Kuzhi Paniyaram', image: 'images/menu/category1/8.jpg' },
        { category: '1', name: 'Kara Kuzhi Paniyaram', image: 'images/menu/category1/9.jpg' },
        {  category: '1', name: 'Mysore Bonda', image: 'images/menu/category1/10.jpg' },
        
        {  category: '1', name: 'Coconut Chutney', image: 'images/menu/category1/11.jpg' },
        {  category: '1', name: 'Kara Chutney', image: 'images/menu/category1/12.jpg' },
        {  category: '1', name: 'Jalebi', image: 'images/menu/category1/36.jpg' },
        


        {  category: '6', name: 'Live Kumbakonam Degree Coffee', image: 'images/menu/category1/1.jpg' },
        {  category: '6', name: ' Assam Tea', image: 'images/menu/category5/49.jpg' },
        {  category: '6', name: 'Milk', image: 'images/menu/category1/2.jpg' },
        {  category: '6', name: 'Horlicks', image: 'images/menu/category1/6.jpg' },
        {  category: '6', name: 'Boost', image: 'images/menu/category1/4.jpg' },
        {  category: '6', name: 'Badam Milk', image: 'images/menu/category4/2.jpg' },
        
        { category: '6', name: 'Bournvita', image: 'images/menu/category1/7.jpg' },
        { category: '6', name: 'Ragimalt', image: 'images/menu/category1/5.jpg' },

        

  
        
        
       
        { category: '3', name: 'Panipuri', image: 'images/menu/category1/14.jpg' },
        {  category: '3', name: 'Dahipuri', image: 'images/menu/category2/14.jpg' },
        {  category: '3', name: 'Sevpuri', image: 'images/menu/category1/15.jpg' },
        {  category: '3', name: 'Bhelpuri', image: 'images/menu/category2/13.jpg' },
  
  


       
        {  category: '4', name: ' Venus Signature Fresh Mint Lime Juice ', image: 'images/menu/category7/1.jpg' },
  {  category: '4', name: 'Grape Juice', image: 'images/menu/category2/17.jpg' },
  {  category: '4', name: 'Pineapple Juice', image: 'images/menu/category2/18.jpg' },
  {  category: '4', name: 'Watermelon Juice', image: 'images/menu/category2/19.jpg' },
  {  category: '4', name: 'Mosambi Juice', image: 'images/menu/category1/16.jpg' },


        {  category: '5', name: 'Blue Curacao', image: 'images/menu/category1/17.jpg' },
        {  category: '5', name: 'Blue Currant', image: 'images/menu/category1/18.jpg' },
        {  category: '5', name: 'Butterscotch', image: 'images/menu/category1/101.jpg' },
       
        {  category: '5', name: 'Litchi', image: 'images/menu/category1/20.jpg' },
        {  category: '5', name: 'Kiwi', image: 'images/menu/category1/21.jpg' },
        {  category: '5', name: 'Green Apple', image: 'images/menu/category1/22.jpg' },
        {  category: '5', name: 'Strawberry', image: 'images/menu/category1/25.jpg' },
        {  category: '5', name: 'Pineapple', image: 'images/menu/category1/24.jpg' },
        {  category: '5', name: 'Grapes', image: 'images/menu/category1/23.jpg' },
        
        
        {  category: '5', name: 'Rosemilk', image: 'images/menu/category1/26.jpg' },
        {  category: '5', name: 'Orange', image: 'images/menu/category1/27.jpg' },
        {  category: '5', name: 'Mango', image: 'images/menu/category1/28.jpg' },
        {  category: '5', name: 'Kesar Elachi', image: 'images/menu/category1/29.jpg' },
        {  category: '5', name: 'Kesar Sarbath', image: 'images/menu/category1/30.jpg' },
        {  category: '5', name: 'Lemon', image: 'images/menu/category1/31.jpg' },
        {  category: '5', name: 'Lemon Soda', image: 'images/menu/category1/32.jpg' },
        {  category: '5', name: 'Jal-Jeera', image: 'images/menu/category1/33.jpg' },

        {  category: '7', name: 'Venus Signature Elaneer Payasam', image: 'images/menu/category3/3.jpg' },
        {  category: '7', name: 'Kaju Katli', image: 'images/menu/category2/101.jpg' },
        {  category: '7', name: 'Pure Ghee Badam Halwa', image: 'images/menu/category1/34.jpg' },
        {  category: '7', name: 'Rasmalai', image: 'images/menu/category1/35.jpg' },
  

        {  category: '8', name: 'Chennai No.1 Abu Gatta Ice Cream', image: 'images/menu/category2/45.jpg' },
        {  category: '8', name: 'Kulfi Stick', image: 'images/menu/category1/110.jpg' },
        
        {  category: '8', name: 'Pot Ice Cream', image: 'images/menu/category1/111.jpg' },
        {  category: '8', name: 'Cassata Ice Cream', image: 'images/menu/category1/37.jpg' },
        {  category: '8', name: 'Rajasthani Style Of Sweet Beeda', image: 'images/menu/category1/39.jpg' },


        {  category: '9', name: 'Papaya', image: 'images/menu/category1/40.jpg' },
        {  category: '9', name: 'Watermelon', image: 'images/menu/category1/41.jpg' },
        {  category: '9', name: 'Pineapple', image: 'images/menu/category1/42.jpg' },
        {  category: '9', name: 'Apple', image: 'images/menu/category1/43.jpg' },
        {  category: '9', name: 'Orange', image: 'images/menu/category1/44.jpg' },
        {  category: '9', name: 'Green Grapes', image: 'images/menu/category1/45.jpg' },


        {  category: '10', name: 'Paneer Tikka', image: 'images/menu/category1/112.jpg' },
        {  category: '10', name: 'Veg  Roll', image: 'images/menu/category12/6.jpg' },
        {  category: '10', name: 'Aloo Tikki', image: 'images/menu/category12/8.jpg' },
        {  category: '10', name: 'Chinese Spring Roll', image: 'images/menu/category1/46.jpg' },
        {  category: '10', name: 'Gobi-65', image: 'images/menu/category1/47.jpg' },
        {  category: '10', name: 'Tomato Sauce', image: 'images/menu/category1/48.jpg' },
        {  category: '10', name: 'Chilli Sauce', image: 'images/menu/category12/13.jpg' },


        {  category: '11', name: 'Sweetcorn Veg Soup', image: 'images/menu/category1/50.jpg' },
        {  category: '11', name: 'Cream of Tomato Soup', image: 'images/menu/category1/109.jpg' },
        {  category: '11', name: 'Mushroom Soup', image: 'images/menu/category1/107.jpg' },
        {  category: '11', name: 'Vazhaithandu Soup', image: 'images/menu/category1/108.jpg' },
        {  category: '13', name: 'Venus Signature Heartshape Idly', image: 'images/menu/category1/52.jpg' },
        {  category: '13', name: 'Live South Indian Dosa', image: 'images/menu/category1/51.jpg' },
        {  category: '13', name: 'South Indian Tiffin Sambar', image: 'images/menu/category1/62.jpg' },
        {  category: '13', name: 'Coconut Chutney', image: 'images/menu/category1/11.jpg' },
        {  category: '13', name: 'Kara Chutney', image: 'images/menu/category1/12.jpg' },
        {  category: '13', name: 'Podi Nallennai', image: 'images/menu/category1/61.jpg' },
        {  category: '13', name: 'Podi Ghee', image: 'images/menu/category1/54.jpg' },

        {  category: '12', name: 'Venus Signature 9.5 Inches Phulka', image: 'images/menu/category1/55.jpg' },
        {  category: '12', name: 'Cashew Ghee Panner Butter Masala', image: 'images/menu/category1/53.jpg' },




       
        
        {  category: '14', name: 'Mushroom Biryani', image: 'images/menu/category1/57.jpg' },
        {  category: '14', name: 'Cucumber White Onion Raita', image: 'images/menu/category1/56.jpg' },
        {  category: '14', name: 'Bisi-Bele-Bath', image: 'images/menu/category1/58.jpg' },
        
        
        {  category: '14', name: 'Spicy Chips', image: 'images/menu/category1/59.jpg' },
        {  category: '14', name: 'Appala Poo', image: 'images/menu/category1/60.jpg' },
        {  category: '14', name: 'Steamed Rice', image: 'images/menu/category1/63.jpg' },
        {  category: '14', name: 'Manathakkalli Vatha Kuzhambu', image: 'images/menu/category1/67.jpg' },
        {  category: '14', name: 'Tomato Rasam', image: 'images/menu/category1/64.jpg' },
  {  category: '14', name: 'Curd Rice', image: 'images/menu/category1/65.jpg' },
  {  category: '14', name: 'Potato Peas Curry', image: 'images/menu/category1/66.jpg' },
  
  {  category: '14', name: 'Carrot Beans Cabbage Poriyal (National Poriyal)', image: 'images/menu/category1/68.jpg' },
  {  category: '14', name: 'Pickle (Mango Thokku)', image: 'images/menu/category1/69.jpg' },
  {  category: '14', name: '500ml Bisleri Water Bottle', image: 'images/menu/category1/70.jpg' },
  
        



  {  category: '15', name: 'Live Kumbakonam Degree Coffee', image: 'images/menu/category1/1.jpg' },
        {  category: '15', name: ' Assam Tea', image: 'images/menu/category5/49.jpg' },
        {  category: '15', name: 'Milk', image: 'images/menu/category1/2.jpg' },
        {  category: '15', name: 'Horlicks', image: 'images/menu/category1/6.jpg' },
        {  category: '15', name: 'Boost', image: 'images/menu/category1/4.jpg' },
        {  category: '15', name: 'Badam Milk', image: 'images/menu/category4/2.jpg' },
        
        {  category: '15', name: 'Bournvita', image: 'images/menu/category1/7.jpg' },
        {  category: '15', name: 'Ragimalt', image: 'images/menu/category1/5.jpg' },

       
        
  { category: '16', name: 'Carrot Halwa', image: 'images/menu/category1/98.jpg' },
  { category: '16', name: 'Gulab Jamoon', image: 'images/menu/category1/99.jpg' },
  {  category: '16', name: 'Venus Signature Mallipoo Idly', image: 'images/menu/category4/8.jpg' },
  {  category: '16', name: 'Ghee Cashew Ven Pongal', image: 'images/menu/category1/100.jpg' },
  {  category: '16', name: 'Uthappam Varieties', image: 'images/menu/category1/73.jpg' },
  {  category: '16', name: 'Idiyappam', image: 'images/menu/category1/72.jpg' },

  
  {  category: '16', name: 'White Stew Idiyappam Kurma', image: 'images/menu/category1/74.jpg' },
  {  category: '16', name: 'Hot Poori', image: 'images/menu/category1/75.jpg' },
  {  category: '16', name: 'Poori Masala', image: 'images/menu/category2/89.jpg' },
  {  category: '16', name: 'Vadacurry', image: 'images/menu/category1/76.jpg' },
  
  {  category: '16', name: 'Medu Vada', image: 'images/menu/category1/77.jpg' },
  {  category: '16', name: 'South Indian Tiffin Sambar', image: 'images/menu/category1/62.jpg' },
        { category: '16', name: 'Coconut Chutney', image: 'images/menu/category1/11.jpg' },
        { category: '16', name: 'Kara Chutney', image: 'images/menu/category1/12.jpg' },
  {  category: '16', name: 'Mint Chutney', image: 'images/menu/category1/78.jpg' },
  { category: '16', name: 'Groundnut Chutney', image: 'images/menu/category4/12.jpg' },
  { category: '16', name: 'Podi With Nallennai', image: 'images/menu/category2/97.jpg' },
  { category: '16', name: '500ml Bisleri Water Bottle', image: 'images/menu/category1/70.jpg' },
  
  
  {  category: '17', name: 'Arcot Famous Sweet Makkan Peda', image: 'images/menu/category1/83.jpg' },
  {  category: '17', name: 'Milk Maid Payasam', image: 'images/menu/category1/82.jpg' },
  {  category: '17', name: 'Thair Vada', image: 'images/menu/category1/81.jpg' },
  {  category: '17', name: 'Steamed Rice', image: 'images/menu/category1/63.jpg' },
  {  category: '17', name: 'Yellow Dhal With Ghee', image: 'images/menu/category1/90.jpg' },
  {  category: '17', name: 'Paruppu Podi With Ghee', image: 'images/menu/category5/36.jpg' },
  {  category: '17', name: 'Drum Stick, Mango Sambar', image: 'images/menu/category1/86.jpg' },
  {  category: '17', name: 'Poricha Kuzhambu', image: 'images/menu/category1/91.jpg' },
  {  category: '17', name: 'Tomato Rasam', image: 'images/menu/category1/64.jpg' },
  {  category: '17', name: 'Mor Kuzhambu', image: 'images/menu/category1/89.jpg' },
  {  category: '17', name: 'Katti Mor Thalippu', image: 'images/menu/category1/88.jpg' },
  {  category: '17', name: 'Aviyal', image: 'images/menu/category1/93.jpg' },
  {  category: '17', name: 'Chow Chow Kootu', image: 'images/menu/category1/94.jpg' },
  {  category: '17', name: 'Vazhakkai Chops', image: 'images/menu/category1/95.jpg' },
  {  category: '17', name: 'Kalyana Appalam', image: 'images/menu/category2/111.jpg' },
  {  category: '17', name: 'Lemon Pickle', image: 'images/menu/category1/96.jpg' },
  {  category: '17', name: 'Salt', image: 'images/menu/category1/97.jpg' },
  
  
 
  {  category: '17', name: 'Thanjavur Banana Leaf', image: 'images/menu/category1/87.jpg' },
  {  category: '17', name: 'Special Abu Gatta Icecream', image: 'images/menu/category1/85.jpg' },
 { category: '17', name: '500ml Bisleri Water Bottle', image: 'images/menu/category1/70.jpg' },

 {  category: '17', name: 'Kalyana Beeda', image: 'images/menu/category1/84.jpg' },
{ category: '19', name: 'Thamboolam Bag', image: 'images/menu/category1/71.jpg' },


{ category: '18', name: 'Welcome Stalls/Welcome Sets / Welcome Girls', image: 'images/menu/category14/1.jpg' },
{ category: '18', name: 'Arthi Counters 31 Plates', image: 'images/menu/category14/2.jpg' },
{ category: '18', name: 'Bangles Stall', image: 'images/menu/category14/9.jpg' },
{ category: '18', name: 'Live Kumbakonam Degree Coffee Stall', image: 'images/menu/category15/1.jpg' },
{ category: '18', name: 'Live Sweet Paniyaram', image: 'images/menu/category15/8.jpg' },
{ category: '18', name: 'Live Kara Paniyaram', image: 'images/menu/category15/9.jpg' },
{ category: '18', name: 'Live Mysore Bonda Stall', image: 'images/menu/category15/10.jpg' },
{ category: '18', name: 'Live Uthappam Stall', image: 'images/menu/category15/5.jpg' },
{ category: '18', name: 'Live Dosa Stall', image: 'images/menu/category15/4.jpg' },
{ category: '18', name: 'Live Poori & Chola Poori Stall', image: 'images/menu/category15/6.jpg' },

{ category: '18', name: 'Live Phulka Stall', image: 'images/menu/category15/15.jpg' },
{ category: '18', name: 'Live Parotta Stall', image: 'images/menu/category15/14.jpg' },

{ category: '18', name: 'Live Chaat Counter', image: 'images/menu/category14/4.jpg' },
{ category: '18', name: 'Live Natural Fresh Juice Stall', image: 'images/menu/category14/14.jpg' },
{ category: '18', name: 'Live Mocktail Stall', image: 'images/menu/category14/6.jpg' },
{ category: '18', name: 'Live Fresh Fruti Cut  Stall', image: 'images/menu/category14/8.jpg' },

{ category: '18', name: 'Live Masala Badam Milk Stall', image: 'images/menu/category15/12.jpg' },
{ category: '18', name: 'Live Starter Stall', image: 'images/menu/category15/17.jpg' },
{ category: '18', name: 'Live Sweet Corn Stall', image: 'images/menu/category15/18.jpg' },
{ category: '18', name: 'Live Popcorn Stall', image: 'images/menu/category14/16.jpg' },
{ category: '18', name: 'Live Stone Ice Cream Stall', image: 'images/menu/category15/19.jpg' },
{ category: '18', name: 'Live Spring Potato Stall', image: 'images/menu/category15/16.jpg' },
{ category: '18', name: 'Live Bajji Stall', image: 'images/menu/category15/13.jpg' },

{ category: '18', name: 'Live Chocolate Fountain Stall', image: 'images/menu/category14/17.jpg' },

{ category: '18', name: 'Live Soup Stall', image: 'images/menu/category14/3.jpg' },
{ category: '18', name: 'Ice Cream Stall', image: 'images/menu/category14/19.jpg' },
{ category: '18', name: 'Live Jalebi Stall', image: 'images/menu/category1/13.jpg' },
{ category: '18', name: 'Rajasthani Style Of Sweet Beda Stall', image: 'images/menu/category14/20.jpg' },
{ category: '18', name: 'Thamboolam Stall', image: 'images/menu/category14/21.jpg' },
{ category: '18', name: 'Grand Reception Couple Service Dining', image: 'images/menu/category14/22.jpg' },

{ category: '18', name: 'Muhurtham Morning Tea Shop Stall', image: 'images/menu/category1/103.jpg' },
{ category: '18', name: 'All Dining Tables Flower Arrangements During Dinner, Breakfast & Lunch', image: 'images/menu/category14/23.jpg' },
{ category: '18', name: 'All Dining Chairs Covers With Bow Arrangements (During Dinner Breakfast & Lunch)', image: 'images/menu/category14/24.jpg' },
{ category: '18', name: 'Buffet Style Arrangements', image: 'images/menu/category13/20.jpg' }

  
  
  

  

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




