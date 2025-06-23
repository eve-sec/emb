/**
 * The goal of this page :
 * 1. Link the github page
 * 2. Allow users to report a bug
 * 3. Share contact information
 * 4. Add legal mentions and rgpd stuff
 */

import { MetaFunction } from "@remix-run/node"
import Header from "./region/header"
import "@scss/about.scss"

export const meta: MetaFunction = () => {
  return [
    { title: "About - Jita.Market" },
    { name: "description", content: "Contact informations and Github repository" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://jita.market/thumbnail.png" }
  ]
}

export default function About() {
  
  return (
    <>
      <Header/>
      <main className="about">
        <section className="about__feedback">
          <p>This site is currently under active development. If you have any feedback, please let me know.</p>
          <p>I created a telegram group <a href="https://t.me/+M96uaH6JzBI4Njgy">jita_market</a> for feedback and bug reports.</p>
        </section>
        <section className="about__contact">
          <h2>Contact Informations</h2>
          <p>
            In-game name : Jita 4-4 Citizen<br/>
            Email : <a href="mailto:vv@x07.it">x07.it</a><br/>
            My killboard 😛 : <a href="https://zkillboard.com/character/2117906432/">zkillborad</a>
          </p>
        </section>

        <section className="about__github">
          <h2>Based on</h2>
          <p>
            The project is based on EMB sources codes at <a href="https://github.com/raph5/eve-market-browser">github</a>.
          </p>
        </section>

        <section className="about__legal">
          <p>
            EVE Online, the EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf. EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. All other trademarks are the property of their respective owners. CCP is in no way responsible for the content on or functioning of this website, nor can it be liable for any damage arising from the use of this website.
          </p>
        </section>
      </main>
    </>
  )
}
