import { Resend } from 'resend';

// Forcer la vérification de la clé API au démarrage
if (!process.env.RESEND_API_KEY) {
  console.error("❌ ERREUR : La variable RESEND_API_KEY est manquante dans le fichier .env.local !");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Champs manquants' }), { status: 400 });
    }

    const cleanMessage = message.replace(/\n/g, '<br>');

    // On stocke la réponse de Resend pour vérifier s'il y a une erreur masquée
    const { data, error } = await resend.emails.send({
      // ... dans ton resend.emails.send :
      from: `Message de votre site web | ${name} <site@klenn-couverture.fr>`, // 👈 On change "contact" par "site" ici
      to: process.env.EMAIL_RECEPTION || 'contact@klenn-couverture.fr', // 👈 Ça arrive toujours sur la boîte principale
      replyTo: email,
      subject: `Nouveau Devis - ${subject} (${name})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Demande de devis - Klenn Couverture</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Travaux :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${cleanMessage}</p>
        </div>
      `,
    });

    // Si Resend renvoie une erreur interne (ex: mauvaise clé, domaine non validé)
    if (error) {
      console.error("❌ Erreur retournée par Resend :", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    console.log("✅ Email envoyé avec succès, ID Resend :", data.id);
    return new Response(JSON.stringify({ message: "SUCCESS" }), { status: 200 });

  } catch (err) {
    console.error("❌ Erreur critique serveur API :", err);
    return new Response(JSON.stringify({ error: "Erreur interne" }), { status: 500 });
  }
}