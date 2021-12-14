import React from 'react';

const Contacts = ({ title, providers, icons }) => {

  return (
    <div className="contact__main--providers">
      <div className="header">
        <h2>{title}</h2>
      </div>
      
      <div className="main">
        {providers?.map((provider, index) => {
          return (
            <a 
              key={index} 
              className="wrapper" 
              href={provider.href} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" src={provider.logo} />
            </a>
          )
        }) || 
          icons?.map((icon, index) => {
            return (
              <a 
                key={index}
                className="wrapper" 
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.img}
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contacts;
