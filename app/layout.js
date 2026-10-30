import "../app/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "मनवेंद्र भैया - जन-जन का संकल्प | सामाजिक कार्यकर्ता",
  description: "मथुरा, ग्राम तरौली और उत्तर प्रदेश के विकास हेतु एक समर्पित सामाजिक पहल।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between antialiased">
        {/* ग्लोबल हेडर / नेविगेशन बार */}
        <Navbar />

        {/* मुख्य कंटेंट एरिया जहां सारे पेजेस लोड होंगे */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ग्लोबल फुटर जिसमें कविताएं और राजनीतिज्ञों के कोट्स हैं */}
        <Footer />
      </body>
    </html>
  );
}
