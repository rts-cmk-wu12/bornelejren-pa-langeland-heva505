// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <section className="bg-gradient-to-br from-white to-[#ffeaea] text-gray-800 min-h-screen p-6 pt-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-[#d0000b] text-center mb-6">
          Om os
        </h2>

        <p>
          Børnelejren på Langeland er en velgørende, non-profit forening, som afholder finansierede lejre for dårligt
          stillede børn og unge fra hele landet. Børnelejrene bliver afholdt på foreningens bondegård, Søgård Hovedgård,
          som ligger i naturskønne omgivelser på sydspidsen af Langeland.
        </p>

        <p>
          Samtlige omkostninger til alle børns ophold og transport til/fra lejren bliver finansieret af foreningen, og det
          er et krav fra foreningens side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.
        </p>

        <p>
          Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen. Medarbejderne fra institutionerne
          på foreningens lejre får ikke kolonitillæg udbetalt af Foreningen.
        </p>

        <p>
          Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og aktiviteter. Vi har heldigvis
          erfaret, at rigtig mange virksomheder er villige til at bakke op omkring lejren, ligesom vi håber på endnu flere
          private, passive støttemedlemmer.
        </p>

        <p>
          Alle skriftlige henvendelser vedrørende Foreningen Børnelejren på Langeland og Søgård Hovedgård bedes venligst sendt
          til <strong>Knud Bro Alle 1, st. mf., 3660 Stenløse</strong>. Telefoniske henvendelser bedes ligeledes rettet til
          sekretariatet på telefon <strong>38711260</strong>. Foreningens formand er dagligt at træffe i sekretariatet.
        </p>

        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2262.8987270423315!2d10.721595877109895!3d54.760438672872215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDQ1JzM3LjYiTiAxMMKwNDMnMTYuOCJF!5e0!3m2!1sen!2sdk!4v1652723866466!5m2!1sen!2sdk"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-md border"
          ></iframe>
        </div>

      
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Knud+Bro+Alle+1%2C+3660+Stenl%C3%B8se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d0000b] hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Se adresse på kort
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
