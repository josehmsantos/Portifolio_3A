import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  FileText, 
  BookOpen, 
  Lightbulb, 
  ChevronRight, 
  MapPin,
  Trophy,
  Target,
  ArrowUpRight,
  Menu,
  X,
  Atom,
  Globe2,
  Calculator
} from 'lucide-react';

const STUDENT_INFO = {
  name: "José Henrico Menezes Dos Santos",
  grade: "3ª Série do Ensino Médio",
  school: "Escola Sesi/Senai",
  email: "jose_hm_santos@estudante.sesisenai.org.br",
  location: "Sua Cidade - UF",
  bio: " Sou um estudante de 16 anos com interesse por esportes e tecnologia, buscando aprender e evoluir ao longo da minha trajetória acadêmica, e esse é meu portifólio!",
  aboutMe: "Meu nome é José Henrico, tenho 16 anos e sou de Florianópolis (SC). Estou em uma fase de descoberta, buscando entender melhor minhas habilidades e interesses para construir meu futuro.\n\nAo longo da minha trajetória, procuro aprender um pouco de cada área e desenvolver novas competências. Tenho interesse por esportes, principalmente futebol e lutas, que contribuem para minha disciplina, foco e trabalho em equipe. Também valorizo meu tempo com amigos, pois faz parte do meu crescimento pessoal.\n\nEste portfólio foi criado para registrar meus projetos, aprendizados e evolução ao longo do tempo.",
  profilePic: "https://i.imgur.com/I4VSYVj.jpeg",
  cvLink: "https://canva.link/cxb9ts675yy319u",
  friendsPhotos: [
    "https://i.imgur.com/DJBGb1m.jpeg",
    "https://i.imgur.com/5sExy5w.jpeg",
    "https://i.imgur.com/fVLVSt0.jpeg",
    "https://i.imgur.com/oXcJcBJ.jpeg"
  ]
};

const AREAS = [
  {
    id: "linguagens",
    title: "Linguagens",
    icon: Globe2,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "Prof Claudia Prof Natali",
    trimestres: [
      { 
        id: 1, 
        activities: [
          {
            title: "Atividade Avaliativa - A Paixão de G.H",
            url: "https://canva.link/ux8hr2gdiy3d542",
            skills: "H4; H22",
            objective: "Analisar o comportamento de GH pela perspectiva da sociologia, relacionando classe social, invisibilidade, nojo e normas culturais presentes na obra.",
            subject: "Sociologia e literatura — classe social, construção do nojo e regras sociais em A Paixão Segundo GH",
            critique: "A atividade foi interessante porque mostrou como a sociedade influencia a forma de pensar e agir das pessoas, ajudando a entender melhor o conflito vívido por GH na obra."
          },
          {
            title: "Atividade de aula - Game literário",
            url: "https://wordwall.net/pt/resource/108612366/realismo",
            skills: "H4; H14",
            objective: "Revisar as escolas literárias brasileiras, do Quinhentismo ao Simbolismo, por meio da criação de um jogo digital, estimulando habilidades de pesquisa, síntese e criatividade.",
            subject: "Escolas literárias brasileiras — do Quinhentismo ao Simbolismo.",
            critique: "A atividade foi produtiva por permitir a revisão da literatura de maneira mais dinâmica e interativa. A criação do jogo ajudou a compreender melhor as características de cada escola literária."
          }
        ]
      },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  },
  {
    id: "matematica",
    title: "Matemática",
    icon: Calculator,
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "Prof Luciano",
    trimestres: [
      { 
        id: 1, 
        activities: [
          {
            title: "AV1 - Jogo Quebrando a Banca",
            url: "https://canva.link/nit8rloceoqdnk1",
            skills: "C5; H31; H32",
            objective: "Criar um jogo original utilizando conceitos de contagem, probabilidade e estratégias matemáticas para auxiliar na tomada de decisões.",
            subject: "Análise combinatória e probabilidade.",
            critique: "A atividade foi interessante por possibilitar a aplicação prática da matemática de forma criativa. Desenvolver o jogo contribuiu para uma melhor compreensão dos conceitos de probabilidade e do raciocínio combinatório."
          },
          {
            title: "Atividade Filme Quebrando a Banca",
            url: "https://docs.google.com/document/d/1zX4vKS1hHDAdTTagzRUDN6Gty_cQCI9QZ-Ntw63pCmQ/edit?usp=sharing",
            skills: "C5; H30; H31",
            objective: "Utilizar o pensamento probabilístico para reconhecer a aplicação da matemática em situações práticas, entendendo como probabilidade e estatística influenciam decisões e cálculos.",
            subject: "Probabilidade e estatística aplicadas ao filme Quebrando a Banca.",
            critique: "A atividade foi interessante por mostrar como a matemática pode ser aplicada além da sala de aula, em contextos reais como jogos e estratégias, facilitando a compreensão do conteúdo."
          }
        ]
      },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  },
  {
    id: "natureza",
    title: "Ciências da Natureza",
    icon: Atom,
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "Prof Romuel",
    trimestres: [
      { 
        id: 1, 
        activities: [
          {
            title: "Poder Calorífico e Eficiência",
            url: "https://canva.link/06tp7i0le3fixex",
            skills: "C1; H1; C2; H9; H11",
            objective: "Compreender por que os combustíveis fósseis ainda são amplamente utilizados, analisando seus impactos ambientais e sua importância econômica e tecnológica na sociedade atual.",
            subject: "Uso de combustíveis fósseis, impactos ambientais e alternativas energéticas.",
            critique: "A atividade foi interessante por mostrar a contradição entre o conhecimento dos impactos ambientais e a continuidade do uso desses combustíveis. A discussão ajudou a entender melhor a dependência da sociedade em relação a essas fontes de energia e a importância da busca por alternativas mais sustentáveis."
          },
          {
            title: "Meme Evolucionismo",
            url: "https://docs.google.com/document/d/1TudoeYw_0ObXSPt08yCJw-qE_yd42TckJA1q0fbDtEM/edit?usp=sharing",
            skills: "C3; H15; H18",
            objective: "Compreender o conceito de evolucionismo por meio da criação de um meme, utilizando o humor para representar as transformações ao longo do tempo.",
            subject: "Evolucionismo.",
            critique: "A atividade foi interessante por tornar o conteúdo mais leve e fácil de entender. A criação do meme ajudou a visualizar melhor o processo de evolução e suas mudanças ao longo do tempo."
          },
          {
            title: "Carga elétrica e eletrostática",
            url: "https://docs.google.com/document/d/1DFB3Slic5NYEzaNhUYCNGkRmIqnqE-sgE8bnjSQPjdQ/edit?usp=sharing",
            skills: "C1; H1; C2; H7; H9; H11; H12",
            objective: "Entender os processos de eletrização por atrito e indução, analisando como ocorre a transferência de cargas elétricas e a interação entre diferentes materiais.",
            subject: "Eletrização, atrito, indução e condução elétrica.",
            critique: "A atividade foi interessante por demonstrar de forma prática como ocorrem os processos de eletrização e como os materiais se comportam diante das cargas elétricas, tornando o conteúdo mais compreensível."
          }
        ]
      },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  },
  {
    id: "humanas",
    title: "Ciências Humanas",
    icon: Lightbulb,
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description: "Prof Lucas e Prof Bryan",
    trimestres: [
      { 
        id: 1, 
        activities: [
          {
            title: "Jornal",
            url: "https://canva.link/a08985gafsjnt7x",
            skills: "C3; H15; H16; H20; C6; H39",
            objective: "Analisar os meios de comunicação e os conflitos geopolíticos do início do século XX, por meio da elaboração de uma capa de jornal inspirada na época, com reportagens autorais sobre a Primeira Guerra Mundial e a Revolução Russa.",
            subject: "Primeira Guerra Mundial, Revolução Russa e o jornalismo no início do século XX.",
            critique: "A atividade foi relevante por possibilitar uma melhor compreensão do contexto histórico e da forma como as informações eram divulgadas nos jornais, além de incentivar a criatividade na construção da capa."
          },
          {
            title: "Tecnologias do final do século XIX",
            url: "https://canva.link/kdymmm9ra1w5jmg",
            skills: "Não mencionadas",
            objective: "Compreender a difusão das tecnologias da Segunda Revolução Industrial, analisando quando e onde foram implantadas, e relacionando esse processo com a expansão industrial, econômica e geopolítica do período.",
            subject: "Difusão tecnológica e industrial no século XIX, Segunda Revolução Industrial e seus impactos geopolíticos.",
            critique: "A atividade foi interessante por permitir visualizar como as tecnologias se espalharam pelo mundo e influenciaram diferentes regiões. O uso do mapa ajudou a entender melhor a relação entre industrialização, busca por recursos e expansão econômica, tornando o conteúdo mais claro e dinâmico."
          },
          {
            title: "Geopolítica",
            url: "https://canva.link/o8daatcq2tok5dt",
            skills: "C1; H1; H2; H3; H4; H5",
            objective: "Compreender o conceito de geopolítica e analisar as diferenças entre países, observando aspectos históricos, sociais, econômicos e políticos que influenciam suas posições no cenário mundial.",
            subject: "Geopolítica e análise comparativa entre nações.",
            critique: "A atividade foi interessante por permitir conhecer melhor diferentes países e suas características, facilitando a compreensão das desigualdades e relações de poder no mundo. A comparação entre nações ajudou a desenvolver uma visão mais crítica sobre o cenário geopolítico atual."
          }
        ]
      },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  }
];

const TECNICO_AREAS = [
  {
    id: "banco-de-dados",
    title: "Banco de dados",
    icon: Globe2,
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    description: "Prof Willer",
    trimestres: [
      { id: 1, activities: [] },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  },
  {
    id: "modelagem-sistemas",
    title: "Modelagem de sistemas",
    icon: Lightbulb,
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    description: "Prof Samuel",
    trimestres: [
      { 
        id: 1, 
        activities: [
          {
            title: "Grand Prix SENAI",
            url: "https://docs.google.com/document/d/1XZ36IKCO0JmeHmn7cmaVA0MYUjAaSGIJmMD-KrSTMaU/edit?usp=sharing",
            skills: "não mencionadas",
            objective: "o Grand Prix SENAI é uma competição onde equipes têm um tempo limitado (tipo uma maratona) pra resolver um desafio real da indústria",
            critique: "Uma maratona de inovação focada na resolução de desafios reais da indústria em ambiente colaborativo."
          }
        ] 
      },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  },
  {
    id: "iot",
    title: "IOT",
    icon: Atom,
    color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    description: "Prof João",
    trimestres: [
      { id: 1, activities: [] },
      { id: 2, activities: [] },
      { id: 3, activities: [] }
    ]
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'activities' | 'tecnico'>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: 'home' | 'activities' | 'tecnico') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30">
      <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-zinc-900 border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight cursor-pointer" onClick={() => navigateTo('home')}>
            <span className="italic capitalize">José</span><span className="text-blue-500">.</span>
          </div>
          <div className="flex gap-6">
            <button onClick={() => navigateTo('home')} className={`text-sm ${currentPage === 'home' ? 'text-blue-400 font-bold' : 'text-zinc-400 hover:text-white'}`}>Início</button>
            <button onClick={() => navigateTo('activities')} className={`text-sm ${currentPage === 'activities' ? 'text-blue-400 font-bold' : 'text-zinc-400 hover:text-white'}`}>Ensino Médio</button>
            <button onClick={() => navigateTo('tecnico')} className={`text-sm ${currentPage === 'tecnico' ? 'text-blue-400 font-bold' : 'text-zinc-400 hover:text-white'}`}>Técnico</button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {currentPage === 'home' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-24"
          >
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
                  Olá, eu sou o <br />
                  <span className="text-blue-500 italic">José Henrico.</span>
                </h1>
                <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                  {STUDENT_INFO.bio}
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => navigateTo('activities')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Ver Meus Trabalhos
                  </button>
                  <a 
                    href={STUDENT_INFO.cvLink} 
                    target="_blank" 
                    className="border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Meu Currículo
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={STUDENT_INFO.profilePic} 
                  alt="José Henrico" 
                  className="rounded-2xl w-full aspect-square object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-white">Um pouco sobre mim</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-zinc-400 leading-relaxed whitespace-pre-line text-lg">
                  {STUDENT_INFO.aboutMe}
                </div>
                <div className="space-y-6">
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <Trophy className="text-blue-500 mb-4" />
                    <h3 className="font-bold text-white mb-2">Interesses</h3>
                    <p className="text-sm">Futebol e lutas são as coisas que gosto.</p>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
                    <Target className="text-amber-500 mb-4" />
                    <h3 className="font-bold text-white mb-2">Foco Atual</h3>
                    <p className="text-sm">Explorando áreas da tecnologia e do conhecimento para definir meu futuro profissional.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8 text-center text-white">Momentos & Fotos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {STUDENT_INFO.friendsPhotos.map((photo, i) => (
                  <img key={i} src={photo} className="rounded-xl aspect-square object-cover border border-zinc-800" />
                ))}
                <img src="https://i.imgur.com/m4P7WFY.jpeg" className="rounded-xl aspect-square object-cover border border-zinc-800" />
              </div>
            </section>
          </motion.div>
        )}

        {(currentPage === 'activities' || currentPage === 'tecnico') && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-16"
          >
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                {currentPage === 'activities' ? 'Produções do Ensino Médio' : 'Produções do Técnico'}
              </h1>
              <p className="text-zinc-400 italic">
                Abaixo estão listadas as matérias e atividades que desenvolvi ao longo dos trimestres.
              </p>
            </header>

            {(currentPage === 'activities' ? AREAS : TECNICO_AREAS).map((area) => (
              <div key={area.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${area.color}`}>
                      <area.icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{area.title}</h2>
                      <p className="text-sm text-zinc-500 italic">{area.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-12">
                  {area.trimestres.map((tri) => (
                    <div key={tri.id} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="bg-blue-900/30 text-blue-400 text-xs font-bold px-2 py-1 rounded">
                          {tri.id}º TRIMESTRE
                        </span>
                        <div className="h-px bg-zinc-800 flex-grow"></div>
                      </div>

                      {tri.activities.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                          {tri.activities.map((act, idx) => (
                            <div key={idx} className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col h-full">
                              <h3 className="text-xl font-bold text-white mb-4">{act.title}</h3>
                              <div className="space-y-3 mb-6 text-sm flex-grow">
                                <p><span className="text-zinc-500 font-bold">HABILIDADES:</span> {act.skills}</p>
                                <p><span className="text-zinc-500 font-bold">OBJETIVO:</span> {act.objective}</p>
                                <p className="pt-4 border-t border-zinc-900 italic text-zinc-300">"{act.critique}"</p>
                              </div>
                              {act.url !== "#" ? (
                                <a 
                                  href={act.url} 
                                  target="_blank" 
                                  className="block w-full text-center bg-white text-zinc-950 py-3 rounded-lg font-bold text-sm hover:bg-zinc-200"
                                >
                                  Ver Atividade
                                </a>
                              ) : (
                                <div className="text-center text-zinc-600 py-3 text-sm">Sem link disponível</div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-center text-zinc-600 py-6 italic border border-dashed border-zinc-800 rounded-xl">Nenhuma atividade postada ainda.</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </main>

      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-zinc-600 text-xs font-bold tracking-widest mb-4 italic">© 2026 • José Henrico</div>
          <p className="text-zinc-700 text-[10px]">Portfólio Estudantil - SESI SENAI</p>
        </div>
      </footer>
    </div>
  );
}
