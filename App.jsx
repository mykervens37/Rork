import React, { useState } from "react";
import {
  Home, ShoppingBag, Users, MessageCircle, User, Rocket,
  Heart, MessageSquare, Share2, Copy, Wallet, ChevronRight,
  ChevronLeft, Check, Clock, X, Plus, Sparkles
} from "lucide-react";

const FONT_LINK = "Anton, JetBrains Mono, Inter";

const products = [
  { id: 1, name: "Tee Signature", price: 45, cat: "Vêtements", desc: "Coupe oversize, coton lourd 280g, broderie Rork sur la poitrine.", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80" },
  { id: 2, name: "Casquette Stamp", price: 32, cat: "Accessoires", desc: "Casquette structurée, patch cuir gravé au numéro de collection.", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80" },
  { id: 3, name: "Hoodie Ascension", price: 78, cat: "Vêtements", desc: "Molleton épais, poche kangourou, capuche doublée.", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80" },
  { id: 4, name: "Sac Utilitaire", price: 58, cat: "Accessoires", desc: "Toile balistique résistante, compartiment laptop.", img: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80" },
];

const posts = [
  { id: 1, name: "Marc-Endy", initials: "ME", city: "Port-au-Prince", text: "Premier mois avec le Tee Signature — déjà 3 personnes m'ont demandé où je l'ai eu. On avance ensemble.", likes: 24, comments: 5 },
  { id: 2, name: "Fabiola R.", initials: "FR", city: "Cap-Haïtien", text: "Mon projet d'atelier couture vient d'être publié sur Rork Projects. Si quelqu'un s'y connaît en logistique textile, je suis preneuse.", likes: 41, comments: 12 },
  { id: 3, name: "Jonas D.", initials: "JD", city: "Miami", text: "Casquette Stamp reçue aujourd'hui. Qualité au rendez-vous. Membre officiel depuis ce matin 🔥", likes: 18, comments: 3 },
];

const projects = [
  { id: 1, title: "Atelier Couture FR", cat: "Mode", author: "Fabiola R.", desc: "Petit atelier de confection locale cherchant à structurer sa production.", clarity: 8, potential: 7, ready: 5 },
  { id: 2, title: "App de covoiturage local", cat: "Technologie", author: "Jonas D.", desc: "Mise en relation de trajets courts entre quartiers.", clarity: 6, potential: 8, ready: 4 },
  { id: 3, title: "Ferme urbaine verticale", cat: "Agriculture", author: "Marc-Endy", desc: "Production de légumes en zone urbaine dense.", clarity: 7, potential: 9, ready: 3 },
];

function Stamp({ n = "00000247" }) {
  return (
    <div className="relative w-24 h-24 shrink-0">
      <div className="absolute inset-0 rounded-full border-2 border-[#C9A227] flex items-center justify-center rotate-[-8deg]" style={{ boxShadow: "0 0 0 3px #0B0B0D, 0 0 0 4px #C9A22755" }}>
        <div className="text-center leading-none">
          <div className="text-[9px] tracking-[0.2em] text-[#C9A227] font-mono">MEMBRE Nº</div>
          <div className="text-sm font-mono font-bold text-[#F2F1ED] mt-1">{n}</div>
        </div>
      </div>
    </div>
  );
}

function Logo({ size = "text-2xl" }) {
  return (
    <div className={`${size} tracking-tight text-[#F2F1ED]`} style={{ fontFamily: "Anton, sans-serif", letterSpacing: "0.02em" }}>
      RORK
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [purchaseStep, setPurchaseStep] = useState(0); // 0 none,1 pay,2 pending,3 confirmed
  const [isMember, setIsMember] = useState(false);
  const [copied, setCopied] = useState(false);

  const openProduct = (p) => { setSelectedProduct(p); setPurchaseStep(0); setTab("productDetail"); };

  const confirmPayment = () => {
    setPurchaseStep(2);
    setTimeout(() => { setPurchaseStep(3); setIsMember(true); }, 1600);
  };

  const NavItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setTab(id)}
      className={`flex flex-col items-center gap-1 flex-1 py-2 transition-colors ${tab === id ? "text-[#C9A227]" : "text-[#6B6B70]"}`}
    >
      <Icon size={20} strokeWidth={tab === id ? 2.4 : 1.8} />
      <span className="text-[10px] font-mono tracking-wide">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F2F1ED] flex justify-center">
      <div className="w-full max-w-md min-h-screen bg-[#0B0B0D] relative flex flex-col border-x border-[#1c1c1f]">

        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#0B0B0D]/95 backdrop-blur border-b border-[#1c1c1f] px-5 py-4 flex items-center justify-between">
          <Logo />
          {isMember ? (
            <div className="flex items-center gap-1.5 bg-[#C9A227]/10 border border-[#C9A227]/40 px-2.5 py-1 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span className="text-[10px] font-mono tracking-wider text-[#C9A227]">MEMBRE ACTIF</span>
            </div>
          ) : (
            <button className="text-[11px] font-mono tracking-wider text-[#6B6B70] border border-[#2a2a2e] px-3 py-1.5 rounded-full">
              CONNEXION
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto pb-20">

          {tab === "home" && (
            <div>
              <div className="px-5 pt-10 pb-8 border-b border-[#1c1c1f]">
                <div className="text-[11px] font-mono tracking-[0.25em] text-[#C9A227] mb-4">UNE COMMUNAUTÉ, UNE MARQUE</div>
                <h1 className="text-[38px] leading-[0.95] mb-4" style={{ fontFamily: "Anton, sans-serif" }}>
                  UN SEUL<br/>AVANCE,<br/>NOUS<br/>AVANÇONS<br/>TOUS.
                </h1>
                <p className="text-[#9a9a9f] text-sm leading-relaxed mb-6">
                  Achetez un produit Rork, devenez membre. Accédez à la communauté, publiez vos projets, gagnez sur vos parrainages.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => setTab("products")} className="flex-1 bg-[#F2F1ED] text-[#0B0B0D] font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-1.5">
                    Voir les produits <ChevronRight size={16} />
                  </button>
                  <button onClick={() => setTab("community")} className="flex-1 border border-[#2a2a2e] text-[#F2F1ED] font-semibold text-sm py-3 rounded-lg">
                    Communauté
                  </button>
                </div>
              </div>

              <div className="px-5 py-6 border-b border-[#1c1c1f]">
                <div className="text-[11px] font-mono tracking-[0.2em] text-[#6B6B70] mb-4">COMMENT ÇA MARCHE</div>
                <div className="space-y-3">
                  {[
                    ["Achetez un produit Rork", "Paiement MonCash ou NatCash"],
                    ["Devenez membre", "Activation après vérification du paiement"],
                    ["Rejoignez la communauté", "Feed, chat, projets, parrainage"],
                  ].map(([t, d], i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full border border-[#C9A227]/50 text-[#C9A227] text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                      <div>
                        <div className="text-sm font-medium">{t}</div>
                        <div className="text-xs text-[#6B6B70]">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-5 py-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[11px] font-mono tracking-[0.2em] text-[#6B6B70]">PRODUITS RÉCENTS</div>
                  <button onClick={() => setTab("products")} className="text-[11px] font-mono text-[#C9A227]">TOUT VOIR</button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {products.slice(0, 2).map(p => (
                    <button key={p.id} onClick={() => openProduct(p)} className="text-left">
                      <div className="aspect-square rounded-lg overflow-hidden bg-[#141416] mb-2">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs font-mono text-[#C9A227]">${p.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "products" && (
            <div className="px-5 py-6">
              <h2 className="text-2xl mb-1" style={{ fontFamily: "Anton, sans-serif" }}>PRODUITS</h2>
              <p className="text-xs text-[#6B6B70] mb-6">Chaque achat vous donne accès à la communauté Rork.</p>
              <div className="grid grid-cols-2 gap-4">
                {products.map(p => (
                  <button key={p.id} onClick={() => openProduct(p)} className="text-left group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-[#141416] mb-2 border border-[#1c1c1f]">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-active:scale-95 transition-transform" />
                    </div>
                    <div className="text-[10px] font-mono text-[#6B6B70] mb-0.5">{p.cat}</div>
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs font-mono text-[#C9A227] mt-0.5">${p.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "productDetail" && selectedProduct && (
            <div>
              <button onClick={() => setTab("products")} className="flex items-center gap-1 text-xs font-mono text-[#6B6B70] px-5 pt-5">
                <ChevronLeft size={14} /> RETOUR
              </button>
              <div className="aspect-square bg-[#141416] mx-5 mt-4 rounded-xl overflow-hidden">
                <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-5">
                <div className="text-[10px] font-mono text-[#6B6B70] mb-1">{selectedProduct.cat}</div>
                <h2 className="text-2xl mb-2" style={{ fontFamily: "Anton, sans-serif" }}>{selectedProduct.name.toUpperCase()}</h2>
                <div className="text-xl font-mono text-[#C9A227] mb-4">${selectedProduct.price}</div>
                <p className="text-sm text-[#9a9a9f] leading-relaxed mb-6">{selectedProduct.desc}</p>

                {purchaseStep === 0 && (
                  <button onClick={() => setPurchaseStep(1)} className="w-full bg-[#F2F1ED] text-[#0B0B0D] font-semibold text-sm py-3.5 rounded-lg">
                    ACHETER MAINTENANT
                  </button>
                )}

                {purchaseStep === 1 && (
                  <div className="border border-[#1c1c1f] rounded-xl p-4">
                    <div className="text-[11px] font-mono tracking-[0.15em] text-[#6B6B70] mb-4">CHOISIR UN MODE DE PAIEMENT</div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between border border-[#2a2a2e] rounded-lg px-4 py-3">
                        <span className="text-sm font-medium">MonCash</span>
                        <span className="text-xs font-mono text-[#6B6B70]">+509 3769 6963</span>
                      </div>
                      <div className="flex items-center justify-between border border-[#2a2a2e] rounded-lg px-4 py-3">
                        <span className="text-sm font-medium">NatCash</span>
                        <span className="text-xs font-mono text-[#6B6B70]">+509 5669 5163</span>
                      </div>
                    </div>
                    <input placeholder="Référence de transaction" className="w-full bg-[#141416] border border-[#2a2a2e] rounded-lg px-4 py-3 text-sm mb-3 outline-none focus:border-[#C9A227]" />
                    <button onClick={confirmPayment} className="w-full bg-[#C9A227] text-[#0B0B0D] font-semibold text-sm py-3 rounded-lg">
                      CONFIRMER MON PAIEMENT
                    </button>
                  </div>
                )}

                {purchaseStep === 2 && (
                  <div className="border border-[#2a2a2e] rounded-xl p-6 text-center">
                    <Clock className="mx-auto mb-3 text-[#C9A227] animate-pulse" size={28} />
                    <div className="text-sm font-medium mb-1">Paiement en attente</div>
                    <div className="text-xs text-[#6B6B70]">Vérification de la transaction en cours...</div>
                  </div>
                )}

                {purchaseStep === 3 && (
                  <div className="border border-[#C9A227]/40 bg-[#C9A227]/5 rounded-xl p-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center mx-auto mb-3">
                      <Check size={20} className="text-[#0B0B0D]" />
                    </div>
                    <div className="text-base font-semibold mb-1">Achat confirmé</div>
                    <div className="text-xs text-[#9a9a9f] mb-4">Membre Rork activé.</div>
                    <button onClick={() => setTab("community")} className="w-full bg-[#F2F1ED] text-[#0B0B0D] font-semibold text-sm py-3 rounded-lg">
                      ACCÉDER À LA COMMUNAUTÉ
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === "community" && (
            <div>
              <div className="px-5 pt-6 pb-4 flex items-center justify-between">
                <h2 className="text-2xl" style={{ fontFamily: "Anton, sans-serif" }}>COMMUNAUTÉ</h2>
                <button className="w-8 h-8 rounded-full border border-[#2a2a2e] flex items-center justify-center">
                  <Plus size={16} />
                </button>
              </div>
              <div className="divide-y divide-[#1c1c1f]">
                {posts.map(p => (
                  <div key={p.id} className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-[#1c1c1f] border border-[#2a2a2e] flex items-center justify-center text-xs font-mono">{p.initials}</div>
                      <div>
                        <div className="text-sm font-medium">{p.name}</div>
                        <div className="text-[11px] text-[#6B6B70]">{p.city}</div>
                      </div>
                    </div>
                    <p className="text-sm text-[#d5d5d8] leading-relaxed mb-3">{p.text}</p>
                    <div className="flex items-center gap-5 text-[#6B6B70]">
                      <button className="flex items-center gap-1.5 text-xs"><Heart size={15} /> {p.likes}</button>
                      <button className="flex items-center gap-1.5 text-xs"><MessageSquare size={15} /> {p.comments}</button>
                      <button className="flex items-center gap-1.5 text-xs"><Share2 size={15} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "projects" && (
            <div className="px-5 py-6">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-2xl" style={{ fontFamily: "Anton, sans-serif" }}>PROJETS</h2>
                <button className="text-[11px] font-mono text-[#C9A227] border border-[#C9A227]/40 px-3 py-1.5 rounded-full">+ PUBLIER</button>
              </div>
              <p className="text-xs text-[#6B6B70] mb-6">Analysés par IA · recommandations, pas de garantie de réussite.</p>
              <div className="space-y-3">
                {projects.map(pr => (
                  <div key={pr.id} className="border border-[#1c1c1f] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-wide text-[#C9A227] border border-[#C9A227]/30 px-2 py-0.5 rounded-full">{pr.cat}</span>
                      <span className="text-[11px] text-[#6B6B70]">{pr.author}</span>
                    </div>
                    <div className="text-base font-semibold mb-1">{pr.title}</div>
                    <p className="text-xs text-[#9a9a9f] mb-3">{pr.desc}</p>
                    <div className="flex items-center gap-1.5 mb-3 text-[10px] font-mono text-[#6B6B70]">
                      <Sparkles size={12} className="text-[#C9A227]" /> ANALYSE IA
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[["Clarté", pr.clarity], ["Potentiel", pr.potential], ["Préparation", pr.ready]].map(([l, v]) => (
                        <div key={l} className="bg-[#141416] rounded-lg px-2 py-2 text-center">
                          <div className="text-sm font-mono text-[#F2F1ED]">{v}/10</div>
                          <div className="text-[9px] text-[#6B6B70]">{l}</div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full border border-[#2a2a2e] text-xs font-medium py-2.5 rounded-lg">JE SUIS INTÉRESSÉ</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "profile" && (
            <div className="px-5 py-6">
              <div className="flex items-center gap-4 mb-6">
                <Stamp />
                <div>
                  <div className="text-lg font-semibold">Vous</div>
                  <div className={`text-[11px] font-mono ${isMember ? "text-[#C9A227]" : "text-[#6B6B70]"}`}>
                    {isMember ? "MEMBRE RORK" : "PAS ENCORE MEMBRE"}
                  </div>
                </div>
              </div>

              {!isMember && (
                <div className="border border-[#2a2a2e] rounded-xl p-4 mb-6 text-center">
                  <p className="text-xs text-[#9a9a9f] mb-3">Achetez un produit pour activer votre statut de membre.</p>
                  <button onClick={() => setTab("products")} className="text-xs font-mono text-[#0B0B0D] bg-[#F2F1ED] px-4 py-2 rounded-lg">VOIR LES PRODUITS</button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="border border-[#1c1c1f] rounded-xl p-4">
                  <div className="text-[10px] font-mono text-[#6B6B70] mb-1">FILLEULS DIRECTS</div>
                  <div className="text-xl font-mono">3</div>
                </div>
                <div className="border border-[#1c1c1f] rounded-xl p-4">
                  <div className="text-[10px] font-mono text-[#6B6B70] mb-1">COMMISSION TOTALE</div>
                  <div className="text-xl font-mono text-[#C9A227]">$4.20</div>
                </div>
              </div>

              <div className="border border-[#1c1c1f] rounded-xl p-4 mb-4">
                <div className="text-[11px] font-mono tracking-[0.15em] text-[#6B6B70] mb-3">MON PARRAINAGE</div>
                <div className="flex items-center justify-between bg-[#141416] rounded-lg px-3 py-2.5 mb-2">
                  <span className="text-xs font-mono text-[#F2F1ED]">rork.app/r/vous-4821</span>
                  <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}>
                    {copied ? <Check size={14} className="text-[#C9A227]" /> : <Copy size={14} className="text-[#6B6B70]" />}
                  </button>
                </div>
                <p className="text-[11px] text-[#6B6B70]">1% de commission sur les ventes directes de vos filleuls.</p>
              </div>

              <div className="border border-[#1c1c1f] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Wallet size={14} className="text-[#C9A227]" />
                  <div className="text-[11px] font-mono tracking-[0.15em] text-[#6B6B70]">PORTEFEUILLE</div>
                </div>
                <div className="text-2xl font-mono mb-3">$4.20</div>
                <button className="w-full border border-[#2a2a2e] text-xs font-medium py-2.5 rounded-lg">DEMANDER UN RETRAIT</button>
              </div>
            </div>
          )}

        </div>

        {/* Bottom nav */}
        <div className="sticky bottom-0 bg-[#0B0B0D]/95 backdrop-blur border-t border-[#1c1c1f] flex px-2">
          <NavItem id="home" icon={Home} label="ACCUEIL" />
          <NavItem id="products" icon={ShoppingBag} label="PRODUITS" />
          <NavItem id="community" icon={Users} label="COMM." />
          <NavItem id="projects" icon={Rocket} label="PROJETS" />
          <NavItem id="profile" icon={User} label="PROFIL" />
        </div>

      </div>
    </div>
  );
}
