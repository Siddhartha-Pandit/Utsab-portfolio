const Social = () => {
    const socialLinks = [
      { icon: "fa-facebook", url: "https://facebook.com" },
      { icon: "fa-twitter", url: "https://twitter.com" },
      { icon: "fa-instagram", url: "https://instagram.com" },
      { icon: "fa-linkedin", url: "https://linkedin.com" },
      { icon: "fa-github", url: "https://github.com" },
    ];
  
    return (
      <div className="social-icons">
        
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${social.icon}`}
          >
            <i className={`fa-brands ${social.icon}`}></i>
          </a>
        ))}
      </div>
    );
  };
  
  export default Social;
  