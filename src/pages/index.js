import React from "react"

export default function Home() {
  return( 
      <div>Hello world!


                    <button
                      //   className="btn"
                        class="btn snipcart-add-item"
                        data-item-id="starry-night"
                        data-item-price="79.99"
                        data-item-url="/paintings/starry-night"
                        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                        data-item-name="The Starry Night">
                          add to cart
                      </button>
      </div>
    )
  
}
