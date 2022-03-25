import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer} >
       


        <div>
            <h4>Opening hours</h4>
            <p>
                Monday: 17:00 - 00:30 <br/>
                Tuesday: 17:00 - 00:30 <br/>
                Wednesday: 17:00 - 00:30 <br/>
                Thursday: 17:00 - 00:30 <br/>
                Friday: 17:00 - 01:30 <br/>
                Saturday: 17:00 - 01:30 <br/>
                Sunday: 17:00 - 00:30 <br/>
             </p>
        </div>
        <div>
                    <h4>Location</h4>
                    <p>134a Domestic Street, <br/> Leeds, <br/> LS11 9SG</p>
                </div>

        <div>
        <h4>Contact Us</h4>
            <p>Call us: 0113 2440 639 <br/>
            Email: support@prestos.co.uk 
            </p>
            
        </div>
    
    </div>
  );
};

export default Footer;