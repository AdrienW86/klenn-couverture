import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_KEY);

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // 1. Validation des champs
        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ message: 'INVALID_PARAMETER' }), {
                status: 400
            });
        }

        // 2. Validation de l'email
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!pattern.test(email)) {
            return new Response(JSON.stringify({ message: "EMAIL_SYNTAX_INCORRECT" }), {
                status: 400
            });
        }

        // 3. Nettoyage du message (protection basique contre injection HTML)
        const cleanMessage = message
            .replace(/<(?!br\s*\/?)[^>]+>/g, "")
            .replace(/\n/g, "<br>");

        // 4. Configuration du mail SendGrid
        const sendGridMail = {
            to: process.env.EMAIL_CLIENT, // L'adresse qui reçoit les devis (ex: klenngurtner@gmail.com)
            from: process.env.EMAIL_MASTER, // L'adresse vérifiée sur SendGrid (ex: contact@tonsite.fr)
            replyTo: email, // Permet de répondre directement au client en cliquant sur "Répondre"
            subject: `NOUVEAU DEVIS : Klenn Couverture - ${subject}`,
            text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
                    <h2 style="color: #2563eb;">Nouveau message depuis le site Klenn Couverture</h2>
                    <p><strong>Nom :</strong> ${name}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Type de travaux :</strong> ${subject}</p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message :</strong></p>
                    <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #2563eb;">${cleanMessage}</p>
                </div>
            `,
        };

        await sgMail.send(sendGridMail);

        return new Response(JSON.stringify({ message: "EMAIL_SENDED_SUCCESSFULLY" }), {
            status: 200
        });

    } catch (error) {
        console.error("Erreur SendGrid:", error.response?.body || error.message);
        return new Response(JSON.stringify({
            message: "ERROR_WITH_SENDGRID",
            error: error.message,
        }), {
            status: 500
        });
    }
}