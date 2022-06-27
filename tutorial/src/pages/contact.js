import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3>Want To Get In Touch?</h3>
              <p>
                Narwhal banjo blue bottle drinking vinegar migas. Air plant
                plaid snackwave vaporware XOXO iceland.
              </p>
              <p>
                Actually bushwick cloud bread, keffiyeh praxis umami shaman. +1
                lyft taiyaki vinyl sustainable. Distillery ennui artisan hashtag
                lomo kickstarter.
              </p>
              <p>
                Skateboard waistcoat single-origin coffee polaroid air plant
                mlkshk lyft, glossier offal yuccie prism taiyaki artisan
                listicle DIY.
              </p>
            </article>
            <article>
              <form className="form contact-form">
                <div className="form-row">
                  <label htmlFor="name">your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email">your email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </form>
            </article>
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Contact
