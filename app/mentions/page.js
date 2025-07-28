import React from 'react'

export default function page() {
  return (
       <main
      style={{
        maxWidth: 1000,
        margin: 'auto',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.6,
        backgroundColor: 'aliceblue',
        color: 'black',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}
    >
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          <strong>Klenn Couverture</strong>
          <br />
          Auto-entreprise
          <br />
          19 rue Johannes Gutenberg
          <br />
          44340 Bouguenais
          <br />
          SIRET : 981 560 386 00014
          <br />
          TVA intracommunautaire : FR81981560386
          <br />
          Directrice de la publication : Carla Gurtner
          <br />
          Contact :{' '}
          <a href="mailto:klenngurtner@gmail.com" style={{ color: 'black', textDecoration: 'underline' }}>
            klenngurtner@gmail.com
          </a>{' '}
          – 06 98 14 42 22
        </p>
      </section>

      <section>
        <h2>Hébergement du site</h2>
        <p>
          <strong>Codev</strong>
          <br />
          42 avenue Emile Roudayre
          <br />
          Perpignan
          <br />
          Téléphone : 06.66.67.27.09
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu présent sur ce site (textes, images, logos, vidéos) est la propriété exclusive de Klenn Couverture ou de ses partenaires et est protégé par le droit d’auteur. Toute
          reproduction, modification, distribution ou utilisation sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Klenn Couverture s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur ce site, mais ne peut garantir leur exhaustivité ni leur parfaite fiabilité.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les données collectées via ce site sont uniquement utilisées pour répondre aux demandes des utilisateurs. Conformément à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de
          modification et de suppression des données vous concernant en contactant Klenn Couverture.
        </p>
      </section>
    </main>
  );
}
  

