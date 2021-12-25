import React from 'react';
import Carousel from 'react-elastic-carousel';
import './ClientSays.css';


const ClientSays = () => {
    return (
    
<Carousel  enableAutoPlay showArrows={false}>
<div className='reviews'>
          <p style={{fontSize:'16px'}}> <i class="fas fa-quote-left"></i> Best experience on the platform till now. Muhammad Asaraful is extremely good developer and has great product sense. he is very polite and great to work with. Very sincere and dedicated. Has great sense of coding capabilities and is a must go to seller on the platform. Already having repeat orders with him. <i class="fas fa-quote-right"></i>
          <h6> - Arnald David</h6>

</p> 

  </div>

        <div className='reviews'>
        
          <p style={{fontSize:'16px'}}><i class="fas fa-quote-left"></i>  This would be my second time working with Asraful, super trust worthy- calm collective and a reliable person to have your work trusted with.. Do not double think or compare to others, trust me I am picky enough- he is a A+ in my books. <i class="fas fa-quote-right"></i>
          <h6> - fioaste</h6>
</p>

        </div>
        <div className='reviews'>
        
          <p style={{fontSize:'16px'}}><i class="fas fa-quote-left"></i> Asraful was fantastic to work with, the communication was excellent and I hope we will work together again. I can highly recommend him! Good job and thanks, Asraful! <i class="fas fa-quote-right"></i>
          <h6> - Petrick Dharan</h6>
</p>

        </div>
</Carousel>
    );
};

export default ClientSays;

