"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSended, setIsSended] = useState(false);
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error();

        reset();
        setIsSended(true);
      } catch (err) {
        alert("Le formulaire n'a pas pu être envoyé. Veuillez nous contacter par téléphone.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        
        {/* EN-TÊTE DU FORMULAIRE */}
        <div className="bg-slate-900 p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold">Demandez votre devis gratuit</h3>
          <p className="text-slate-400 mt-2">Réponse rapide garantie sous 24/48h</p>
        </div>

        <div className="p-8 md:p-12">
          {isSended ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="text-6xl mb-4">✅</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h4>
              <p className="text-slate-600">
                Merci pour votre confiance. Klenn Couverture vous recontactera dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setIsSended(false)}
                className="mt-6 text-blue-600 font-semibold hover:underline"
              >
                Envoyer une autre demande
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* NOM */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Nom complet</label>
                  <input 
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                    placeholder='Ex: Jean Dupont' 
                    {...register('name', { required: "Ce champ est requis" })} 
                  />
                  {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                  <input 
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border transition-all outline-none ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                    placeholder='email@exemple.fr' 
                    {...register('email', { 
                      required: "Email requis",
                      pattern: { value: /^\S+@\S+$/i, message: "Email invalide" }
                    })} 
                  />
                  {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>}
                </div>
              </div>

              {/* SUJET */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Type de travaux</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  {...register('subject', { required: true })}
                >
                  <option value="Couverture">Couverture / Toiture</option>
                  <option value="Peinture">Peinture / Ravalement</option>
                  <option value="Maçonnerie">Maçonnerie</option>
                  <option value="Autre">Autre demande</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Détails de votre projet</label>
                <textarea 
                  rows="4"
                  className={`w-full px-4 py-3 rounded-xl border transition-all outline-none resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}`}
                  placeholder='Décrivez vos besoins...'  
                  {...register('message', { required: "Veuillez décrire votre projet" })} 
                />
                {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message.message}</span>}
              </div>

              {/* BOUTON SUBMIT */}
              <button 
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                type="submit"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : "Envoyer ma demande gratuitement"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}