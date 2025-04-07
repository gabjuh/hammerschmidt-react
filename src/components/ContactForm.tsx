import { useState } from 'react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Form submitted"); // Debugging
  
    setLoading(true);
    setMessage("");
  
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("recipient", "adgbe@yahoo.de"); // Set recipient email
    formData.append("secret", "6Lca4PkqAAAAAIAvEnpgSuSskqLQpnmQ6XQwIV8Z"); // Secure API with a secret key
  
    console.log("📩 Sending form data:", Object.fromEntries(formData.entries())); // Debugging
  
    try {
      const response = await fetch("https://email-forwarder.web4musicians.eu/email-server.php", {
        method: "POST",
        body: formData,
      });
  
      console.log("📡 Response received:", response); // Debugging
  
      const result = await response.json();
      if (response.ok) {
        setMessage("✅ Email sikeresen elküldve!");
        form.reset();
      } else {
        setMessage(`❌ Sikertelen küldés: ${result.error}`);
      }
    } catch (error) {
      console.error("❌ Hálózati hiba:", error); // Debugging
      setMessage("❌ Hálózati hiba. Próbáld újra később.");
    }
  
    setLoading(false);
  };
  

  return (
    <>
      <h2 id="kapcsolat" className="font-title text-4xl text-orange-300 text-center mb-6 mt-10">Kapcsolat</h2>
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-xl mb-10 pt-[50px]">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Név"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="E-mail cím"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Üzenet"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            rows={4}
          />

          {/* Honeypot (Invisible Field for Spam Protection) */}
          <input type="text" name="_gotcha" className="hidden" />

          {/* Google reCAPTCHA */}
          <div className="flex justify-center">
            <div className="g-recaptcha" data-sitekey="6Lca4PkqAAAAAF3cQ2zU7_9mYBOHtmDo3xBOhs8m"></div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 cursor-pointer bg-orange-300 text-white font-semibold rounded-md hover:bg-orange-400 transition"
          >
            {loading ? "Küldés..." : "Üzenet küldés"}
          </button>
        </form>

        {/* Success/Error Message */}
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </>
  );
};

export default ContactForm;
