import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
    return (
<section calssName={styles.Contact}>
<Title title="conatct" subtitle="us"/>
<div className={styles.center}>
<form  action="https://formspree.io/ankursingh.creative@gmail.com"
  method="POST"  className={styles.form}>
<div>
<label htmlFor="name">name</label>
    <input type="text" name="name" id="name" 
    className={styles.formControl}
        placeholder="mohan das"/>
</div>
<div>
<label htmlFor="email">email</label>
<input type="email" name="email" id="email" 
className={styles.formControl}
    placeholder="email@email.com"/>

</div>
<div>
<label htmlFor="name">Message</label>
<textarea  name="message" id="message" 
className={styles.formControl}
    placeholder="Hello theres!!"/>
</div>
<div>
<input type="submit" value="Submit Here" id="submit_Btn"
className={styles.submit}/>
</div>
</form>
</div>
</section>
)    
}

export default Contact