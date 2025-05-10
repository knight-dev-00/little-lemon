import React from 'react';

const Homepage = () => {
    return(
      <>
        <section className="main-hero">
          <div className='container'>
          <div className='col-6'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Reserve a Table</button>
          </div>
          <div className='col-6 img'>
            <img src='images/man-finos.jpg' alt='Man with finos' />
          </div>
          </div>
        </section>
        <section className="specials">
          <div className="container">
            <h2>Specials</h2>
            <button>Online Menu</button>
            <div className='col-4'>
              <div className="img">
                <img src="images/greek-salad.png" alt="greek salad" />
              </div>
              <h5>Greek Salad<span>$12.99</span></h5>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
              </p>
              <a href='#'>Order a delivery <img src="images/delivery-man.jpg" alt="delivery man" /></a>
            </div>
            <div   className='col-4'>
              <div className="img">
                <img src="images/bruchetta.png" alt="bruchetta" />
              </div>
              <h5>Bruchetta<span>$ 5.99</span></h5>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
              </p>
              <a href='#'>Order a delivery <img src="images/delivery-man.jpg" alt="delivery man" /></a>
            </div>
            <div className='col-4'>
              <div className="img">
                <img src="images/lemon-dessert.png" alt="lemon-dessert" />
              </div>
              <h5>Lemon Dessert<span>$ 5.00</span></h5>
              <p>
                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <a href='#'>Order a delivery <img src="images/delivery-man.jpg" alt="delivery man" /></a>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="comment">
              <h6>Rating</h6>
              <div className='persona'>
                <img src='images/character.png' alt='character' />
                <span>Name</span>
              </div>
              <p>Review Text</p>
            </div>
            <div className="comment">
              <h6>Rating</h6>
              <div className='persona'>
                <img src='images/character.png' alt='character' />
                <span>Name</span>
              </div>
              <p>Review Text</p>
            </div>
            <div className="comment">
              <h6>Rating</h6>
              <div className='persona'>
                <img src='images/character.png' alt='character' />
                <span>Name</span>
              </div>
              <p>Review Text</p>
            </div>
            <div className="comment">
              <h6>Rating</h6>
              <div className='persona'>
                <img src='images/character.png' alt='character' />
                <span>Name</span>
              </div>
              <p>Review Text</p>
            </div>
          </div>
        </section>
        <section className="description">
          <div className="container">
            <div className="col-4">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
              </p>
            </div>
            <div className='col-6 image-box'>
              <img src="images/description-img.jpg" alt="description-img" />
              <img src="images/description-img.jpg" alt="description-img" />
            </div>
          </div>
        </section>
      </>
    )
}

export default Homepage