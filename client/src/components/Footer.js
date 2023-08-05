import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-value'>
          <div>
            <h5><i class="bi bi-coin"></i> Great value</h5>
            <p>We offer competitive prices on over 100 million items.</p>
          </div>
          <div>
            <h5><i class="bi bi-truck"></i> Worlwide shopping</h5>
            <p>We ship to over 200 countries and regions, and our site comes in 12 languages</p>
          </div>
          <div>
            <h5><i class="bi bi-credit-card-2-back"></i> Safe payment</h5>
            <p>Pay with the world’s most popular and secure payment methods.</p>
          </div>
          <div>
            <h5><i class="bi bi-shield-check"></i> Shop with confidence</h5>
            <p>Our Buyer Protection policy covers your entire purchase journey.</p>
          </div>
          <div>
            <h5><i class="bi bi-people-fill"></i> Help center</h5>
            <p>Round-the-clock assistance for a smooth shopping experience.</p>
          </div>
          <div>
            <h5><i class="bi bi-android2"></i><i class="bi bi-apple"></i> Shop better</h5>
            <p>Download the app for mobile-only features such as image search and discount games</p>
          </div>
        </div>
        <div className='footer-connect'>
          <h4>Stay connected</h4>
          <div className='footer-connect-icons'>
            <div><i class="bi bi-facebook"></i>Facebook</div>
            <div><i class="bi bi-instagram"></i>Instagram</div>
            <div><i class="bi bi-twitter"></i>Twitter</div>
            <div><i class="bi bi-whatsapp"></i>Whatsapp</div>
          </div>
         
        </div>
        <div className='footer-brand'>
          <h4>Shopcrawl &copy; 2023</h4>
        </div>
        
    </div>
  )
}

export default Footer