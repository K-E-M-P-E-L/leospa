import contactImg from "../../Picture/appointment-img.jpg"
import "./contact.scss"
import React from 'react';
import { Formik } from 'formik';
// import axios from "axios"

 
 const Basic = () => (
   <div className="contactCon">
     <div>
         <img className="contactImg" src={contactImg} alt="" />
     </div>

        {/* valedirngs metode er fra https://formik.org/ */}

     <Formik

       initialValues={{ email: "", name: "" , phone: "", date: "", time: "", notes: "" }}

       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = "Required";
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = "Invalid email address";
         }
         if (!values.name) {
            errors.name = "Required";
        } else if (
            !/^[A-Za-z-]/i.test(values.name)
        ) {
            errors.name = "Name has to be letters"
        }
        if (!values.phone) {
            errors.phone = "Required";
        } else if (
            !/^\(?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/i.test(values.phone)
        ) {
            errors.phone = "Not a phone number";
        }
        if (!values.date) {
            errors.date = "Required";
        }
        if (!values.time) {
            errors.time = "Required";
        }
        if (!values.notes) {
          errors.notes = "Required"
        }
         return errors;
       }}


       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          // axios.post("http://localhost:5029/appointment/", values).then(res => console.log(res)).catch(err => console.log(err));
          console.log(JSON.stringify(values, null, 2))
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}


     >

       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (

         <form onSubmit={handleSubmit} className="contactInput">
            <div>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                <input type="name" name="name"  placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                <div className="contactFlex">
                    <div className="contactErrorBox">
                        <p>{errors.email && touched.email && errors.email}</p>
                    </div>
                    <div className="contactErrorBox">
                        <p>{errors.name && touched.name && errors.name}</p> 
                    </div>
                </div>
            </div>
            <div>
                <select>
                    <option value="">Select Service</option>
                    <option value="normal">Normal Service</option>
                    <option value="vip">VIP Serevice</option>
                </select>

                <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                <div className="contactFlex">
                    <div className="phoneErrorBox">
                        <p>{errors.phone && touched.phone && errors.phone}</p>
                    </div>
                </div>
            </div>
            <div>
                <input type="date" name="date" onChange={handleChange} onBlur={handleBlur} value={values.date} />
                <input type="time" name="time" onChange={handleChange} onBlur={handleBlur} value={values.time} />

                <div className="contactFlex">
                    <div className="contactErrorBox">
                        <p>{errors.date && touched.date && errors.date}</p>
                    </div>
                    <div className="contactErrorBox">
                        <p>{errors.time && touched.time && errors.time}</p>
                    </div>
                </div>
            </div>
            <div>
                <textarea type="notes" name="notes" placeholder="notes" onChange={handleChange} onBlur={handleBlur} value={values.notes} />

                <div className="contactFlex">
                    <div className="contactErrorBox">
                        <p>{errors.notes && touched.notes && errors.notes}</p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>

         </form>

       )}
     </Formik>
   </div>
 );
 
 export default Basic;
