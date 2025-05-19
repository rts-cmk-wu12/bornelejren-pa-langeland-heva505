import React from "react";

function ThankYou() {
  return (
    <section className="bg-gradient-to-br from-white to-[#ffeaea] min-h-screen text-gray-800 p-6 pt-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#d0000b]">Børnelejren takker</h1>

        <p className="text-lg">
          Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
          foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård –
          det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
          virksomhedssponsorer og donationer fra fonde.
        </p>

        <h2 className="text-2xl font-semibold text-[#d0000b] mt-10">En særlig tak til:</h2>

       
        <ul className="list-disc list-inside text-left mt-4 mx-auto max-w-md text-gray-700">
          <li>Virksomhed A/S</li>
          <li>Fond X</li>
          <li>Privat sponsor – Anna J.</li>
        
        </ul>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-[#d0000b] hover:bg-red-700 text-white px-6 py-2 rounded-full transition"
          >
            Tilbage til forsiden
          </a>
        </div>
      </div>
    </section>
  );
}

export default ThankYou;
