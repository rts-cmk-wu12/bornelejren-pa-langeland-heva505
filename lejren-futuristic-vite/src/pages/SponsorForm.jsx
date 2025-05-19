import React from "react";
import { useNavigate } from "react-router-dom"; 

function SponsorForm() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    navigate("/tak"); // Redirect to the Thank You page
  };

  return (
    <section className="bg-gradient-to-br from-white to-[#ffeaea] text-gray-800 min-h-screen p-6 pt-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center text-[#d0000b] mb-6">
          Tilmelding som Sponsor
        </h2>

        <div className="space-y-4">
          <p>
            Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med,
            har vi opdelt støttemulighederne i 3 kategorier:
          </p>

          <div className="bg-white shadow-md rounded-lg p-4 border">
            <h3 className="text-xl font-semibold text-[#d0000b]">Børnesponsorat</h3>
            <p>
              Dækker ophold og transport for ét barn til kr. 4.000,- inkl. alt: transport, forplejning,
              forsikring, udflugter og smågaver.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border">
            <h3 className="text-xl font-semibold text-[#d0000b]">Lejrsponsorat</h3>
            <p>
              Kr. 2.000,- hjælper med at dække drifts- og vedligeholdelsesomkostninger samt
              udgifter til specialuddannet personale.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border">
            <h3 className="text-xl font-semibold text-[#d0000b]">Støtte til foreningen</h3>
            <p>
              Minimum kr. 1.000,- giver diplom til ophængning. Alle beløb er velkomne.
            </p>
          </div>
        </div>

        {/* FORMULAREN */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl shadow p-6 border mt-8">
          <h3 className="text-2xl font-semibold text-center text-[#d0000b] mb-4">
            Udfyld formularen
          </h3>

          <input
            type="text"
            placeholder="Firmanavn"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Adresse"
            className="w-full border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Telefon"
            className="w-full border p-2 rounded"
          />

          <select className="w-full border p-2 rounded" required>
            <option value="">Vælg støtte-type</option>
            <option value="barn">Børnesponsor</option>
            <option value="lejr">Lejrsponsor</option>
            <option value="diplom">Diplomsponsor</option>
          </select>

          <input
            type="number"
            placeholder="Beløb i kr."
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-[#d0000b] hover:bg-red-700 text-white py-2 px-6 rounded-full transition"
          >
            Send tilmelding
          </button>
        </form>
      </div>
    </section>
  );
}

export default SponsorForm;
