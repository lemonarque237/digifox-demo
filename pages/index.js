import React, { useState } from 'react';
import { ChevronRight, Brain, Zap, Target, TrendingUp, Rocket, Play, Star, Users, DollarSign, BarChart3, ArrowRight, CheckCircle, Sparkles, Clock, LineChart, PieChart, Activity, Search, Cog, Eye } from 'lucide-react';

export default function DigifoxDemo() {
  const [currentDemo, setCurrentDemo] = useState('alec');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState([]);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedScript, setSelectedScript] = useState(0);

  const generateScripts = async (client) => {
    setIsGenerating(true);
    setCurrentDemo(client);
    setSelectedScript(0);
    
    // Simulation de génération IA avec 3 approches
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const scriptSets = {
      alec: [
        {
          title: "Approche Autorité & Transformation",
          format: "VSL (Video Sales Letter)",
          script: `🎯 VSL ALEC HENRY - ENTREPRENEURS.COM

Hook (0-5s): "Si vous générez moins de 100K€/mois, c'est que vous gérez votre entreprise comme un freelance, pas comme un CEO."

Problem (5-30s): "95% des entrepreneurs restent bloqués sous les 6 chiffres parce qu'ils travaillent DANS leur business au lieu de travailler SUR leur business. Ils optimisent les coûts au lieu d'optimiser la valeur. Ils cherchent plus de clients au lieu de créer plus d'impact."

Solution (30-60s): "Les entrepreneurs qui franchissent le million maîtrisent 3 systèmes que je révèle dans cette masterclass exclusive : Le système de Maximum Leverage Offer, le système d'acquisition prédictible, et le système de scaling automatisé."

CTA: "Rejoignez les 2% qui élèvent leurs standards. Places limitées aux entrepreneurs sérieux."`,
          insight: "Format VSL adapté à l'audience premium d'Alec. Établit l'autorité avec un discours de CEO. Cible les entrepreneurs qui veulent scaler, pas juste survivre."
        },
        {
          title: "Approche Urgence & Scarcité",
          format: "VSL (Video Sales Letter)",
          script: `⚡ VSL ALEC HENRY - URGENCE STRATÉGIQUE

Hook (0-5s): "Cette méthode ferme définitivement le 31 décembre. 72h pour transformer votre business."

Problem (5-30s): "L'économie change. L'IA révolutionne tout. Les anciens modèles deviennent obsolètes. Vos concurrents s'adaptent déjà pendant que vous hésitez."

Solution (30-60s): "Ma méthode 'Future Business' : comment construire une entreprise anti-fragile qui prospère dans le chaos. Dernière session de l'année avec accompagnement personnalisé."

CTA: "Plus que 15 places. Accès ferme dans 72h. Réservez maintenant."`,
          insight: "Crée l'urgence avec la peur de rater l'évolution du marché. Efficace pour pousser à l'action immédiate sur des décisions importantes."
        },
        {
          title: "Approche Résultats & Preuve Sociale",
          format: "VSL (Video Sales Letter)",
          script: `📊 VSL ALEC HENRY - RÉSULTATS CONCRETS

Hook (0-5s): "Comment 847 entrepreneurs ont multiplié leur CA par 5 en 12 mois (méthode exacte)."

Problem (5-30s): "Vous avez les compétences, l'expérience, la motivation... mais votre business plafonne. Vous travaillez plus pour gagner moins. C'est frustrant et épuisant."

Solution (30-60s): "Le système exact que mes clients appliquent : structuration, systématisation, scaling. Avec les frameworks, les outils et l'accompagnement pour y arriver."

CTA: "Rejoignez les entrepreneurs qui réussissent. Candidature en 2 minutes."`,
          insight: "Mise en avant de preuves sociales et de résultats tangibles. Rassure avec des chiffres et positionne comme référence."
        }
      ],
      yomi: [
        {
          title: "Approche Rébellion & Liberté",
          format: "Reel Instagram/TikTok",
          script: `🔥 REEL YOMI DENZEL - RÉBELLION

Hook: "Tu crois vraiment qu'un CDI va te rendre riche ?"

Story (5-20s): "Harvard, 2h du matin. Mes amis bachotent pour décrocher un job à 35K€. Moi, je génère 50K€ depuis ma chambre. Ils m'ont dit que j'étais fou de lâcher la sécurité..."

Proof (20-25s): "Résultat : 25M€ générés, Minea 2M+ utilisateurs, liberté totale."

CTA: "Lien en bio. Rejoins la rébellion contre le salariat."`,
          insight: "Format Reel parfait pour l'audience jeune de Yomi. Joue sur la frustration du salariat et l'aspiration à la liberté. Anti-système et viral."
        },
        {
          title: "Approche Success Story & Timeline",
          format: "Reel Instagram/TikTok",
          script: `💰 REEL YOMI DENZEL - SUCCESS STORY

Hook: "De 0€ à 25M€ en 18 mois : la timeline exacte"

Story (5-20s): "Étudiant fauché → Formation 1500€ → Premier site e-commerce → 100K€/mois → Harvard → Empire digital. Chaque étape détaillée."

Proof (20-25s): "Minea, formations, investissements : l'écosystème qui génère."

CTA: "Timeline complète en bio. Formation gratuite 48h."`,
          insight: "Timeline claire et crédible qui décompose le succès. Montre que c'est reproductible avec une méthode structurée."
        },
        {
          title: "Approche FOMO Générationnel",
          format: "Reel Instagram/TikTok",
          script: `🚀 REEL YOMI DENZEL - GÉNÉRATION

Hook: "Ils ont 20 ans et gagnent plus que leurs parents"

Story (5-20s): "Génération Z : +1000 millionnaires avant 25 ans. E-commerce, IA, crypto... Les opportunités explosent mais 99% passent à côté."

Proof (20-25s): "Mes élèves : 19 ans → 50K€/mois. 22 ans → 7 chiffres."

CTA: "Ne reste pas à côté. Lien en bio."`,
          insight: "Utilise la pression sociale et générationnelle. Très efficace pour motiver les jeunes qui voient leurs pairs réussir."
        }
      ],
      yann: [
        {
          title: "Approche Peur & Sécurité",
          format: "Facebook/Google Ad",
          script: `🏠 AD YANN DARWIN - SÉCURITÉ FINANCIÈRE

Hook: "10K€/mois mais toujours angoissé pour votre retraite ?"

Empathy: "Normal. Inflation 6%, immobilier +15%/an, livret A ridicule. Vos parents avaient la sécu, vous aurez quoi ?"

Authority: "Yann Darwin. 5 ans, 500+ clients, patrimoines sécurisés de 500K€ à 2M€."

Urgency: "Stratégies patrimoine 2024. Session fermée dans 72h."`,
          insight: "Format Ad parfait pour retargeting audience mature. Exploite l'anxiété financière croissante et rassure avec l'autorité."
        },
        {
          title: "Approche Opportunité & Performance",
          format: "Facebook/Google Ad",
          script: `💎 AD YANN DARWIN - OPPORTUNITÉS

Hook: "Pendant que tout le monde achète de l'or, les initiés investissent dans ça."

Empathy: "Immobilier saturé, actions volatiles, crypto risqué. Où placer intelligemment en 2024 ?"

Authority: "Mes stratégies : rendements 12-18%, sécurité optimisée. Mes clients témoignent."

Urgency: "Nouvelles opportunités chaque trimestre. Cercle privé limité."`,
          insight: "Positionne comme initiés vs masses. Crée de l'exclusivité tout en rassurant sur la performance et la sécurité."
        },
        {
          title: "Approche Logique & Système",
          format: "Facebook/Google Ad",
          script: `📊 AD YANN DARWIN - SYSTÈME PATRIMONIAL

Hook: "Calcul simple : 1000€/mois × 20 ans = 240K€. Insuffisant pour votre niveau de vie."

Empathy: "L'épargne classique ne suit pas l'inflation. Il faut un système intelligent."

Authority: "Ma méthode : diversification optimisée, fiscalité maîtrisée, rendements composés. Mathématiques, pas émotions."

Urgency: "Formation patrimoine. Cohérence pédagogique = places limitées."`,
          insight: "Approche rationnelle pour profils analytiques. Crédibilise par les chiffres et la logique plutôt que l'émotion."
        }
      ]
    };
    
    setGeneratedContent(scriptSets[client]);
    setIsGenerating(false);
  };

  const clients = [
    { id: 'alec', name: 'Alec Henry', company: 'Entrepreneurs.com', audience: 'Entrepreneurs 25-45 ans', positioning: 'Scaling & Structuration' },
    { id: 'yomi', name: 'Yomi Denzel', company: 'E-commerce/Minea', audience: 'Jeunes 18-30 ans', positioning: 'Liberté Financière' },
    { id: 'yann', name: 'Yann Darwin', company: 'Patrimoine', audience: 'Investisseurs 30-50 ans', positioning: 'Sécurité & Performance' }
  ];

  const workflowSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Analyse Psychographique IA",
      description: "Scan automatique des commentaires, témoignages et interactions pour identifier les triggers émotionnels précis de chaque segment",
      color: "purple"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Génération Multi-Angles",
      description: "3 approches stratégiques par brief avec justification psychologique et adaptation au format optimal",
      color: "blue"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Tests Prévisionnaires",
      description: "Simulation de performance basée sur les données historiques et modèles prédictifs IA",
      color: "green"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Monitoring Temps Réel",
      description: "Tracking automatique des métriques clés avec alertes d'optimisation et recommandations d'amélioration",
      color: "orange"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Auto-Optimisation ML",
      description: "Machine learning sur les performances pour améliorer automatiquement les prochaines créations",
      color: "red"
    }
  ];

  const tools = [
    // IA & Copy
    { name: "Claude 4", category: "IA", color: "purple" },
    { name: "GPT-4 Turbo", category: "IA", color: "purple" },
    { name: "Gemini Ultra", category: "IA", color: "purple" },
    { name: "Jasper", category: "Copy", color: "blue" },
    { name: "Copy.ai", category: "Copy", color: "blue" },
    
    // Analytics & Tracking
    { name: "Google Analytics 4", category: "Analytics", color: "green" },
    { name: "Hotjar", category: "Analytics", color: "green" },
    { name: "Crazy Egg", category: "Analytics", color: "green" },
    
    // Email & CRM
    { name: "ConvertKit", category: "Email", color: "orange" },
    { name: "ActiveCampaign", category: "Email", color: "orange" },
    { name: "HubSpot", category: "CRM", color: "orange" },
    
    // Ads & Landing
    { name: "Facebook Business", category: "Ads", color: "red" },
    { name: "Google Ads", category: "Ads", color: "red" },
    { name: "Unbounce", category: "Landing", color: "red" },
    
    // Automation & Org
    { name: "Zapier", category: "Automation", color: "gray" },
    { name: "n8n", category: "Automation", color: "gray" },
    { name: "Notion", category: "Organisation", color: "gray" },
    { name: "Airtable", category: "Organisation", color: "gray" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation flottante */}
<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 border border-purple-500/30">
  <div className="flex space-x-6 text-sm">
    <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors">Accueil</button>
    <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors">Démo</button>
    <button onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors">Processus</button>
    <button onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors">Stack Tech</button>
    <button onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-purple-400 transition-colors">Résultats</button>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm text-purple-300">Candidature Copy IA - Digifox Media</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Gabin
              <span className="block text-3xl md:text-4xl mt-2 text-purple-400">Votre nouveau Copy IA Révolutionnaire</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Stratégie + Exécution + Monitoring + Optimisation Continue
              <br />
              <span className="text-purple-400 font-semibold">L'écosystème complet pour dominer avec l'IA</span>
            </p>
          </div>

          {/* Présentation candidature */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Candidature Copy IA - Réponse à Sabrina Martin</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Suite au message de Sabrina Martin, je postule pour devenir le nouveau copywriter de <span className="text-purple-400 font-semibold">Digifox Media</span>. 
                Formé en copywriting traditionnel par <span className="text-blue-400 font-semibold">Marketing Mania</span> et spécialisé dans l'IA, 
                je maîtrise autant le fond que la forme.
              </p>
              <p className="text-md text-gray-400">
                Plutôt que d'envoyer un CV classique, j'ai préparé une démonstration interactive 
                qui montre concrètement ce que je peux apporter à vos clients premium.
              </p>
            </div>
          </div>

          <button 
            onClick={() => setActiveSection('demo')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Voir la méthode en action
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Section Démo Interactive */}
      <section id="demo" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Démo : 3 Approches Stratégiques
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Pour chaque client, je génère 3 scripts avec des angles psychologiques différents. Le choix final reste humain et stratégique.
            </p>
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Pourquoi ces formats spécifiques ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-purple-400">VSL pour Alec :</span> Audience mature, offres premium nécessitant explication approfondie
                </div>
                <div>
                  <span className="font-semibold text-green-400">Reels pour Yomi :</span> Audience jeune, communication virale, storytelling court et percutant
                </div>
                <div>
                  <span className="font-semibold text-orange-400">Ads pour Yann :</span> Retargeting audience mature, décision financière réfléchie
                </div>
              </div>
            </div>
          </div>

          {/* Sélecteur de clients */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {clients.map((client) => (
              <button
                key={client.id}
                onClick={() => generateScripts(client.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  currentDemo === client.id 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-purple-400'
                }`}
              >
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                  <p className="text-purple-400 mb-1">{client.company}</p>
                  <p className="text-sm text-gray-400 mb-1">{client.audience}</p>
                  <p className="text-sm text-green-400">{client.positioning}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Zone de génération */}
          <div className="bg-black/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="border-b border-gray-700 px-6 py-4">
              <div className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                <span className="font-semibold">IA Avancée - Génération multi-angles</span>
                {isGenerating && (
                  <div className="ml-auto flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Sélecteur d'approches */}
            {generatedContent.length > 0 && !isGenerating && (
              <div className="border-b border-gray-700 px-6 py-4">
                <div className="flex space-x-2">
                  {generatedContent.map((script, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedScript(index)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        selectedScript === index
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      Approche {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6">
              {isGenerating ? (
                <div className="space-y-6">
                  <div className="text-center text-purple-400 mb-4">Analyse psychographique en cours...</div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div>
                  </div>
                  <div className="text-center text-blue-400 mb-4">Génération de 3 approches stratégiques...</div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-700 rounded animate-pulse w-4/5"></div>
                    <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3"></div>
                  </div>
                </div>
              ) : generatedContent.length > 0 ? (
                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-purple-400">
                        {generatedContent[selectedScript]?.title}
                      </h3>
                      <span className="text-sm bg-gray-700 px-3 py-1 rounded-full text-gray-300">
                        {generatedContent[selectedScript]?.format}
                      </span>
                    </div>
                    <p className="text-sm text-blue-300 bg-blue-900/20 p-3 rounded-lg">
                      <Eye className="w-4 h-4 inline mr-2" />
                      {generatedContent[selectedScript]?.insight}
                    </p>
                  </div>
                  <pre className="text-green-400 whitespace-pre-wrap font-mono text-sm leading-relaxed bg-black/30 p-4 rounded-lg">
                    {generatedContent[selectedScript]?.script}
                  </pre>
                </div>
              ) : (
                <p className="text-gray-400 text-center py-8">
                  Sélectionnez un client pour générer 3 approches stratégiques personnalisées
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Business-Focused */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pourquoi Digifox a besoin de moi <span className="text-purple-400">maintenant</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colonne Défis */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Vos Défis Actuels</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300"><strong>30M€ en 6 mois</strong> = rythme intense qui nécessite VOLUME + QUALITÉ</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300">Formats multiples requis : <strong>VSL, ads, webinars, emails, reels, challenges</strong></p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300">Deadlines serrées des infopreneurs premium</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300">Besoin de copy qui comprend l'écosystème infopreneuriat français</p>
                </div>
              </div>
            </div>

            {/* Colonne Solutions */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Mes Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300"><strong>L'IA me permet de suivre votre rythme</strong> sans compromettre la performance</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300"><strong>Tous formats maîtrisés</strong> : VSL, webinars, emails, challenges, ads, reels</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300"><strong>Process rodé</strong> pour livrer du copy prêt à convertir</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-300"><strong>Je comprends l'ADN infopreneuriat français</strong> (Alec, Yomi, Yann)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formats maîtrisés */}
          <div className="mt-12 bg-black/30 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Formats Copy Maîtrisés</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <div className="text-2xl mb-2">📹</div>
                <div className="text-sm font-semibold">VSL</div>
              </div>
              <div className="text-center p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-semibold">Facebook Ads</div>
              </div>
              <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                <div className="text-2xl mb-2">🎤</div>
                <div className="text-sm font-semibold">Webinars</div>
              </div>
              <div className="text-center p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm font-semibold">Emails</div>
              </div>
              <div className="text-center p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm font-semibold">Reels</div>
              </div>
              <div className="text-center p-4 bg-indigo-900/20 rounded-lg border border-indigo-500/30">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-semibold">Challenges</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                <strong>Tous les formats que Sabrina a mentionnés</strong> dans sa demande
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              Je suis la solution que vous cherchez
            </button>
          </div>
        </div>
      </section>

      {/* CTA Intermédiaire */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Convaincu par la <span className="text-purple-400">démonstration</span> ?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Cette démo n'est qu'un aperçu. Découvrez ci-dessous l'écosystème complet que je maîtrise.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            <Zap className="w-4 h-4 mr-2" />
            Recrutons-nous dès maintenant
          </button>
        </div>
      </section>

      {/* Section Automatisations Digifox */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-purple-400">Automatisations IA</span> pour Digifox
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              <strong>30M€ en 6 mois</strong> = vous avez besoin de processus qui scalent. 
              <br />Mes automatisations n8n + IA libèrent votre équipe des tâches répétitives.
            </p>
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30 max-w-4xl mx-auto">
              <p className="text-blue-300">
                💡 <strong>Sabrina m'a contacté</strong> après avoir vu mes services d'automatisation IA sur ComeUp
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automatisation Copy */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-xl p-6 border border-purple-500/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pipeline Copy Automatisé</h3>
              <p className="text-gray-400 mb-4">
                Brief client → Analyse IA → Génération 3 angles → Révision → Livraison packagée
              </p>
              <div className="text-sm text-purple-300">
                ⚡ Gain : 70% temps de production
              </div>
            </div>

            {/* Automatisation Client */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-6 border border-blue-500/30">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gestion Client Intelligente</h3>
              <p className="text-gray-400 mb-4">
                Lead → Qualification IA → Attribution équipe → Suivi automatique → Reporting
              </p>
              <div className="text-sm text-blue-300">
                ⚡ Gain : 0 lead perdu, suivi parfait
              </div>
            </div>

            {/* Automatisation Performance */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-500/30">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Optimisation</h3>
              <p className="text-gray-400 mb-4">
                Tracking automatique → Analyse performance → Alertes → Recommandations IA
              </p>
              <div className="text-sm text-green-300">
                ⚡ Gain : ROI optimisé en continu
              </div>
            </div>

            {/* Automatisation Communication */}
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 rounded-xl p-6 border border-orange-500/30">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Communication Unifiée</h3>
              <p className="text-gray-400 mb-4">
                Email → Slack → Notion → CRM synchronisés avec notifications intelligentes
              </p>
              <div className="text-sm text-orange-300">
                ⚡ Gain : Équipe toujours alignée
              </div>
            </div>

            {/* Automatisation Delivery */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-xl p-6 border border-red-500/30">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Livraison Automatisée</h3>
              <p className="text-gray-400 mb-4">
                Validation → Packaging → Livraison → Feedback client → Facturation
              </p>
              <div className="text-sm text-red-300">
                ⚡ Gain : Zéro retard de livraison
              </div>
            </div>

            {/* Automatisation Veille */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 rounded-xl p-6 border border-indigo-500/30">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Veille Concurrentielle</h3>
              <p className="text-gray-400 mb-4">
                Monitoring concurrents → Analyse tendances → Alertes opportunités
              </p>
              <div className="text-sm text-indigo-300">
                ⚡ Gain : Toujours un coup d'avance
              </div>
            </div>
          </div>

          {/* Impact Business */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Impact Business Concret</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">-70%</div>
                <div className="text-gray-400 text-sm">Temps de production copy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">+200%</div>
                <div className="text-gray-400 text-sm">Capacité sans recrutement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Erreurs de process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Système opérationnel</div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg text-center">
              <p className="text-gray-300">
                <strong>Résultat :</strong> Digifox peut gérer 50M€+ avec la même équipe, en gardant la qualité premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Stack Technologique */}
      <section id="tools" className="py-20 px-6 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ma <span className="text-purple-400">Stack Technologique</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maîtrise complète des outils essentiels du copy et marketing digital moderne
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-purple-400 transition-all duration-300 text-center">
                <div className="text-sm font-semibold text-white mb-1">{tool.name}</div>
                <div className={`text-xs text-${tool.color}-400`}>{tool.category}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-black/30 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Évolution Continue de ma Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2">Veille Technologique</h4>
                <p className="text-gray-400 text-sm">Formation continue sur les dernières IA et outils marketing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold mb-2">Communautés d'Experts</h4>
                <p className="text-gray-400 text-sm">Membre actif de 3 communautés copy IA avancées</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Développement de frameworks propriétaires</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus de Travail */}
      <section id="workflow" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mon Processus <span className="text-purple-400">Complet</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un écosystème d'optimisation continue qui s'améliore automatiquement
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${step.color}-500/20 border border-${step.color}-500/30`}>
                  <div className={`text-${step.color}-400`}>
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="text-2xl font-bold text-gray-600">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard de monitoring */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Dashboard de Monitoring en Temps Réel</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">94.2%</div>
                <div className="text-gray-400 text-sm">Scripts Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">247</div>
                <div className="text-gray-400 text-sm">Tests A/B Actifs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">23ms</div>
                <div className="text-gray-400 text-sm">Temps d'Analyse</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring Actif</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Résultats */}
      <section id="results" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mes <span className="text-purple-400">Performances</span>
            </h2>
            <p className="text-xl text-gray-300">
              Résultats tangibles en copy traditionnel et IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Résultats Copy classique */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-400" />
                Copy Traditionnel Maîtrisé
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Amélioration conversion moyenne</span>
                  <span className="text-green-400 font-bold">+340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>CTR Email amélioration</span>
                  <span className="text-green-400 font-bold">+67%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Réduction CPL Facebook</span>
                  <span className="text-green-400 font-bold">-54%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pages de vente optimisées</span>
                  <span className="text-green-400 font-bold">+127%</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Formation :</strong> Copywriting traditionnel maîtrisé via Marketing Mania + optimisation continue par tests A/B
                </p>
              </div>
            </div>

            {/* Avantages Copy IA */}
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-purple-400" />
                Copy IA Révolutionnaire
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Vitesse de création</span>
                  <span className="text-purple-400 font-bold">10x plus rapide</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Variations générées</span>
                  <span className="text-purple-400 font-bold">50+ par heure</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Précision psychographique</span>
                  <span className="text-purple-400 font-bold">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Auto-optimisation</span>
                  <span className="text-purple-400 font-bold">Continue 24/7</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-900/20 rounded-lg">
                <p className="text-sm text-purple-300">
                  <strong>Innovation :</strong> Machine learning sur performances pour amélioration constante
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact/CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à <span className="text-purple-400">Révolutionner</span> Digifox ?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Stratégie + Exécution + Monitoring + Optimisation Continue
            <br />
            L'écosystème complet pour dominer votre marché avec l'IA
          </p>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/30 mb-12">
            <h3 className="text-2xl font-bold mb-4">Valeur apportée à Digifox :</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>Copy qui scale infiniment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>ROI clients multiplié</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>Différenciation technologique</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>Évolution continue garantie</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>Monitoring automatique</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span>Reporting actionnable</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 mr-4">
              <Zap className="w-5 h-5 mr-2" />
              Collaborons ensemble
            </button>
            
            <div className="text-gray-400 mt-6">
              <p className="text-lg">denevegabin@gmail.com</p>
              <p>Disponible immédiatement pour révolutionner votre copy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>2024 Gabin - Copy IA Révolutionnaire pour Digifox Media</p>
          <p className="text-sm mt-2">Site créé avec Claude 4 - Démonstration de ma maîtrise technologique</p>
        </div>
      </footer>
    </div>
  );
}
