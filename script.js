// Sweet Treats Bakery - Main JavaScript

function handleCakeClick(cakeType) {
  // Add visual feedback
  event.currentTarget.style.transform = 'scale(0.95)';
  setTimeout(() => {
    event.currentTarget.style.transform = 'scale(1.05)';
  }, 150);
  
  // Create detailed HTML content for each cake type
  let htmlContent = '';
  switch(cakeType) {
    case 'Baked Cakes':
      htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Baked Cakes - Sweet Treats Bakery</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="styles.css">
          <style>
            body { font-family: 'Poppins', sans-serif; background-color: #fff9f7; }
            .hero { background: linear-gradient(135deg, #ffb6b9, #ff9a9e); color: white; padding: 60px 20px; text-align: center; }
            .cake-item { background: white; border-radius: 15px; padding: 20px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: flex; align-items: center; }
            .cake-item img { width: 120px; height: 120px; object-fit: cover; border-radius: 10px; margin-right: 20px; }
            .cake-info { flex: 1; }
            .price { color: #ff6f61; font-weight: 700; font-size: 1.2em; }
            .hero-image { width: 200px; height: 200px; border-radius: 50%; margin: 20px auto; display: block; object-fit: cover; }
          </style>
        </head>
        <body>
          <div class="hero">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80" alt="Cupcakes" class="hero-image">
            <h1>🍰 Baked Cakes Collection</h1>
            <p>Delicious mini delights in every flavor imaginable!</p>
          </div>
          <div class="container mt-5">
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=300&q=80" alt="Vanilla Cupcakes">
              <div class="cake-info">
                <h3>Vanilla Cupcakes</h3>
                <p>Classic vanilla flavor with creamy frosting</p>
                <div class="price">₹50 each</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80" alt="Chocolate Cupcakes">
              <div class="cake-info">
                <h3>Chocolate Cupcakes</h3>
                <p>Rich chocolate cake with chocolate ganache</p>
                <div class="price">₹60 each</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=300&q=80" alt="Strawberry Cupcakes">
              <div class="cake-info">
                <h3>Strawberry Cupcakes</h3>
                <p>Fresh strawberry flavor with pink frosting</p>
                <div class="price">₹55 each</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=300&q=80" alt="Red Velvet Cupcakes">
              <div class="cake-info">
                <h3>Red Velvet Cupcakes</h3>
                <p>Signature red velvet with cream cheese frosting</p>
                <div class="price">₹70 each</div>
              </div>
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-primary btn-lg">Order Now</button>
            </div>
          </div>
        </body>
        </html>
      `;
      break;
    case 'Cakes':
      htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Signature Cakes - Sweet Treats Bakery</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="styles.css">
          <style>
            body { font-family: 'Poppins', sans-serif; background-color: #fff9f7; }
            .hero { background: linear-gradient(135deg, #ff6f61, #ff9a9e); color: white; padding: 60px 20px; text-align: center; }
            .cake-item { background: white; border-radius: 15px; padding: 20px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: flex; align-items: center; }
            .cake-item img { width: 120px; height: 120px; object-fit: cover; border-radius: 10px; margin-right: 20px; }
            .cake-info { flex: 1; }
            .price { color: #ff6f61; font-weight: 700; font-size: 1.2em; }
            .hero-image { width: 200px; height: 200px; border-radius: 50%; margin: 20px auto; display: block; object-fit: cover; }
          </style>
        </head>
        <body>
          <div class="hero">
            <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=400&q=80" alt="Signature Cakes" class="hero-image">
            <h1>🎂 Signature Cakes</h1>
            <p>Perfect for every celebration!</p>
          </div>
          <div class="container mt-5">
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&q=80" alt="Birthday Cake">
              <div class="cake-info">
                <h3>Birthday Cakes</h3>
                <p>Custom designed birthday cakes with your favorite flavors</p>
                <div class="price">Starting from ₹500</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=300&q=80" alt="Wedding Cake">
              <div class="cake-info">
                <h3>Wedding Cakes</h3>
                <p>Elegant multi-tier wedding cakes for your special day</p>
                <div class="price">Starting from ₹2000</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80" alt="Anniversary Cake">
              <div class="cake-info">
                <h3>Anniversary Cakes</h3>
                <p>Romantic cakes to celebrate your love story</p>
                <div class="price">Starting from ₹800</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=300&q=80" alt="Custom Cake">
              <div class="cake-info">
                <h3>Custom Designs</h3>
                <p>Personalized cakes made to your specifications</p>
                <div class="price">Starting from ₹600</div>
              </div>
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-primary btn-lg">Order Now</button>
            </div>
          </div>
        </body>
        </html>
      `;
      break;
    case 'Oreo Cake':
      htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Oreo Cake Collection - Sweet Treats Bakery</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="styles.css">
          <style>
            body { font-family: 'Poppins', sans-serif; background-color: #fff9f7; }
            .hero { background: linear-gradient(135deg, #4a4a4a, #6a6a6a); color: white; padding: 60px 20px; text-align: center; }
            .cake-item { background: white; border-radius: 15px; padding: 20px; margin: 15px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: flex; align-items: center; }
            .cake-item img { width: 120px; height: 120px; object-fit: cover; border-radius: 10px; margin-right: 20px; }
            .cake-info { flex: 1; }
            .price { color: #ff6f61; font-weight: 700; font-size: 1.2em; }
            .hero-image { width: 200px; height: 200px; border-radius: 50%; margin: 20px auto; display: block; object-fit: cover; }
          </style>
        </head>
        <body>
          <div class="hero">
            <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80" alt="Oreo Cake" class="hero-image">
            <h1>🍪 Oreo Cake Collection</h1>
            <p>Irresistibly sweet treats with Oreo magic!</p>
          </div>
          <div class="container mt-5">
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=300&q=80" alt="Oreo Cheesecake">
              <div class="cake-info">
                <h3>Oreo Cheesecake</h3>
                <p>Creamy cheesecake with crushed Oreo cookies</p>
                <div class="price">₹250</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80" alt="Oreo Chocolate Cake">
              <div class="cake-info">
                <h3>Oreo Chocolate Cake</h3>
                <p>Rich chocolate cake layered with Oreo cream</p>
                <div class="price">₹300</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=300&q=80" alt="Oreo Milkshake">
              <div class="cake-info">
                <h3>Oreo Milkshake</h3>
                <p>Thick and creamy Oreo milkshake</p>
                <div class="price">₹120</div>
              </div>
            </div>
            <div class="cake-item">
              <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80" alt="Oreo Cookies">
              <div class="cake-info">
                <h3>Oreo Cookies</h3>
                <p>Fresh baked Oreo-style cookies</p>
                <div class="price">₹80 per dozen</div>
              </div>
            </div>
            <div class="text-center mt-4">
              <button class="btn btn-primary btn-lg">Order Now</button>
            </div>
          </div>
        </body>
        </html>
      `;
      break;
  }
  
  // Open new tab with the cake details
  const newWindow = window.open('', '_blank');
  newWindow.document.write(htmlContent);
  newWindow.document.close();
}

// Add click event listeners to buttons as well
document.addEventListener('DOMContentLoaded', function() {
  const orderButtons = document.querySelectorAll('.btn-primary');
  orderButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent card click when button is clicked
      const card = this.closest('.clickable-card');
      const cakeType = card.getAttribute('onclick').match(/'([^']+)'/)[1];
      handleCakeClick(cakeType);
    });
  });
});
