import React from 'react'

function Map() {
  return (
    <div>
       <div>
        <h3></h3>

       </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.411279168653!2d75.33089380524565!3d11.866641683129139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422b9b2aca753%3A0x380605a11ce24f6c!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704275075751!5m2!1sen!2sin"
         width="600" height="450" 
         allowFullScreen loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade" title= "Customer location">    
         </iframe>
    </div>
  )
}

export default Map