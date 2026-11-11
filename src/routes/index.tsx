import { createFileRoute } from "@tanstack/react-router";
import { Era, Panel } from "@/components/notes/ui";
import { MoreSections } from "@/components/notes/more-sections";
const bg = { url: "/ai-background.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI & the PM Role — My Notes" },
      { name: "description", content: "Personal notes on the history of AI and its impact on the product manager role." },
      { property: "og:title", content: "AI & the PM Role — My Notes" },
      { property: "og:description", content: "From Babbage's Analytical Engine to ChatGPT: a personal journey through AI history." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const milestones = [
  ["1956", "Birth of AI", "Scientists formally establish AI as a research field."],
  ["1958", "Perceptron", "Frank Rosenblatt develops an early artificial neural network capable of learning patterns."],
  ["1966", "ELIZA", "Joseph Weizenbaum creates an early conversational program that imitates human conversation."],
  ["1970s–80s", "Expert Systems", "AI systems begin using specialised knowledge and rules to solve problems in areas such as medicine and engineering."],
  ["1997", "Deep Blue", "IBM's chess computer defeats world champion Garry Kasparov."],
  ["2012", "Deep Learning Breakthrough", "AlexNet demonstrates the power of deep neural networks in image recognition."],
  ["2016", "AlphaGo", "Google DeepMind's system defeats Go champion Lee Sedol."],
  ["2017", "Transformer Architecture", "Researchers publish “Attention Is All You Need”, introducing the Transformer architecture that underpins modern LLMs."],
  ["2022", "ChatGPT", "OpenAI releases ChatGPT, bringing conversational generative AI to a huge mainstream audience."],
  ["2023+", "Generative AI Expansion", "Rapid growth in AI assistants, image generation, coding tools, AI agents and multimodal models."],
];

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-[position:80%_20%]"
        style={{ backgroundImage: `url(${bg.url})` }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-overlay/60 via-overlay/75 to-overlay/90" />

      <main className="mx-auto max-w-3xl space-y-10 px-5 py-16 md:py-24">
        <header className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-glow">My Notes</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">
            AI & the <em className="text-glow">PM</em> Role
          </h1>
          <p className="mt-4 text-lg text-foreground/75">How humanity reached the age of AI</p>
        </header>

        <Panel>
          <p className="leading-relaxed text-foreground/90">
            Hello! This section is simply where I share my understanding of AI and its impact on the
            product manager role. There are no case studies in these notes — my work on AI websites
            and case studies on what PMs can do will be uploaded in a separate section. Thanks for
            understanding.
          </p>
        </Panel>

        <Panel>
          <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-3xl md:text-4xl [&::-webkit-details-marker]:hidden">
            Introduction: How We Reached AI
            <span className="text-glow transition-transform duration-300 group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-8 space-y-10">
            <Era year="1830s" title="The Analytical Engine">
              <p>
                In the 1830s, Charles Babbage designed the Analytical Engine because he wanted a
                machine that could follow instructions and perform calculations without a human
                doing every step manually.
              </p>
              <p>
                Babbage's machine read patterns (input) from punched cards. Although the engine was
                mechanically complex and extremely expensive to build with the technology of the
                time, he proved that machines could, in principle, follow programmed instructions.
              </p>
            </Era>
            <Era year="1843" title="Ada Lovelace">
              <p>
                In 1843, Ada Lovelace recognised that a computing machine could potentially
                manipulate symbols beyond numerical calculations. However, she doubted whether a
                machine could create ideas independently. Generative AI now shows that machines can
                create content too, given proper training, models and prompts.
              </p>
            </Era>
            <Era year="1943" title="The First Artificial Neuron">
              <p>
                A century later, in 1943, Warren McCulloch and Walter Pitts tried to answer a
                fascinating question: <em>can we create a mathematical model of how the human brain
                thinks, using a machine?</em>
              </p>
              <p>
                By proposing a simplified mathematical representation of a neuron and its logical
                operations, they laid the foundation of neural networks. This work led to a key
                building block of modern machine learning: the Artificial Neural Network (ANN).
              </p>
            </Era>
            <Era year="1936 – 1950" title="Alan Turing">
              <p>
                Alan Turing explored machine intelligence before the term “AI” even existed. Before
                him, people used machines mainly to perform specific calculations. Turing imagined
                something far more powerful: what if one machine could perform many different kinds
                of calculations simply by following different instructions? In 1936 he introduced
                the theoretical concept of the Turing Machine — a mathematical model, not a physical
                computer.
              </p>
              <p>
                In 1950 he published the paper <em>Computing Machinery and Intelligence</em>, opening
                with a fascinating question: <strong>“Can machines think?”</strong> In it he proposed
                the Imitation Game, later known as the Turing Test, and discussed building a machine
                that could learn rather than simply follow instructions — an idea he called a
                <em> child machine</em>.
              </p>
              <p>His thinking was:</p>
              <ol className="list-decimal space-y-1 pl-6">
                <li>Instead of programming a machine with every possible piece of knowledge, create a basic learning system.</li>
                <li>Give it experiences, information and training.</li>
                <li>Allow it to improve through a learning process.</li>
                <li>Let its capabilities develop over time.</li>
              </ol>
              <p className="font-display text-xl italic text-glow">Does that sound familiar?</p>
              <p>
                It closely resembles how modern machine-learning systems are trained, although
                today's methods are far more sophisticated. Turing also speculated that machines
                might eventually become convincing conversational partners.
              </p>
            </Era>
            <Era year="Summer 1956" title="The Official Birth of AI">
              <p>
                In the summer of 1956, a workshop led by John McCarthy marked the official birth of
                Artificial Intelligence. Its main aim was to investigate whether machines could
                learn from experience, understand and use language, solve problems, make decisions
                and improve their own performance.
              </p>
            </Era>
          </div>

          <h3 className="mb-8 mt-14 font-display text-3xl">Historical Milestones</h3>
          <ol className="grid gap-4 sm:grid-cols-2">
            {milestones.map(([year, title, text], i) => (
              <li key={title} className="rounded-xl border border-glass-border bg-glass-strong p-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm text-glow">{year}</span>
                  <span className="font-mono text-xs text-foreground/50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-2 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-xl border border-glow/40 bg-glow/10 p-5 text-foreground/90">
            <strong className="text-glow">Point to note:</strong> AI was not widely used by everyday
            people until 2022.
          </p>
          </details>
        </Panel>

        <Panel>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-3xl md:text-4xl [&::-webkit-details-marker]:hidden">
              The GPT Journey & Generative AI
              <span className="text-glow transition-transform duration-300 group-open:rotate-180">▾</span>
            </summary>
            <div className="mt-8 space-y-10">
              <p className="leading-relaxed text-foreground/90">
                GPT did not happen overnight. It grew out of years of research in AI, machine
                learning, neural networks and natural language processing.
              </p>
              <Era year="December 2015" title="OpenAI Is Founded">
                <p>
                  OpenAI was founded as an artificial intelligence research organisation. Its broad
                  ambition was to develop artificial general intelligence (AGI).
                </p>
              </Era>
              <Era year="2017" title="The Transformer">
                <p>
                  One of the most important moments in GPT's history happened in 2017. The
                  Transformer architecture introduced a mechanism called <em>attention</em>, which
                  helps a model understand which words in a sentence matter most in relation to the
                  other words.
                </p>
                <p>
                  Transformers made it possible to process language more effectively and to train
                  much larger language models.
                </p>
              </Era>
              <Era year="2018" title="GPT-1">
                <p>
                  GPT-1 was released. GPT stands for <strong>Generative Pre-trained Transformer</strong>.
                </p>
                <p>
                  GPT-1 was trained on thousands of books from the BooksCorpus dataset and learned to
                  predict which word should come next. It had approximately 117 million parameters.
                </p>
              </Era>
              <Era year="2019" title="GPT-2">
                <p>
                  Compared with GPT-1, GPT-2 learned from far more text and could generate longer,
                  more coherent paragraphs, articles and stories. It had 1.5 billion parameters.
                </p>
              </Era>
              <Era year="2020" title="GPT-3">
                <p>
                  GPT-3 was a major milestone because it could perform many more language tasks:
                  answering questions, writing articles and stories, translating languages,
                  generating computer code and summarising information. GPT-3 was a language model
                  accessed through an API.
                </p>
              </Era>
              <Era year="30 November 2022" title="ChatGPT">
                <p>
                  ChatGPT was introduced. It is an application through which people interact with the
                  underlying AI model, which at launch was GPT-3.5.
                </p>
                <p>
                  OpenAI also used a training technique called <strong>RLHF</strong> (Reinforcement
                  Learning from Human Feedback).
                </p>
                <p className="font-display text-xl italic text-glow">How did it work?</p>
                <ol className="list-decimal space-y-1 pl-6">
                  <li>Human trainers prepared example conversations.</li>
                  <li>The AI learned how to respond to instructions.</li>
                  <li>Humans compared different AI responses.</li>
                  <li>Better responses were ranked more highly.</li>
                  <li>The model was further trained using this feedback.</li>
                </ol>
                <p>This helped ChatGPT become more conversational and useful.</p>
              </Era>
              <Era year="2023 onwards" title="More Powerful Models">
                <p>
                  From 2023, more powerful models were released. They could also understand image
                  inputs and handle more advanced reasoning.
                </p>
              </Era>
              <Era year="2026" title="Today">
                <p>As of 2026, we are using GPT-6.</p>
              </Era>
            </div>

            <h3 className="mb-6 mt-14 font-display text-3xl">What Is Generative AI?</h3>
            <div className="space-y-4 leading-relaxed text-foreground/85">
              <p>
                Generative AI (GenAI) is a category of AI that can create new content. GPT, which
                generates text, and DALL-E, which generates images, are both examples of GenAI.
              </p>
              <p>
                GenAI is no longer limited to generating text. Different organisations have developed
                models for different types of content.
              </p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-xl border border-glass-border bg-glass-strong">
              <table className="w-full text-left text-sm">
                <thead className="font-mono text-xs uppercase tracking-widest text-glow">
                  <tr>
                    <th className="p-4">Model</th>
                    <th className="p-4">Organisation</th>
                    <th className="p-4">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-foreground/85">
                  {[
                    ["GPT", "OpenAI", "Generates text"],
                    ["DALL-E", "OpenAI", "Generates images"],
                    ["Midjourney", "Midjourney", "Generates images"],
                    ["Stable Diffusion", "Stability AI and collaborators", "Generates images"],
                  ].map(([m, o, p]) => (
                    <tr key={m} className="border-t border-glass-border">
                      <td className="p-4 font-display text-lg text-foreground">{m}</td>
                      <td className="p-4">{o}</td>
                      <td className="p-4">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mb-2 mt-14 font-display text-3xl">How AI, GenAI and GPT Relate</h3>
            <p className="mb-6 text-foreground/75">This is the most important concept to remember.</p>
            <div className="rounded-xl border border-glow/40 bg-glow/10 p-5">
              <p className="font-display text-xl text-glow">Artificial Intelligence (AI)</p>
              <p className="mt-1 text-sm text-foreground/80">The broad field of making machines perform intelligent tasks.</p>
              <div className="mt-5 rounded-xl border border-glass-border bg-glass-strong p-5">
                <p className="font-display text-xl text-glow">Generative AI (GenAI)</p>
                <p className="mt-1 text-sm text-foreground/80">A branch of AI that creates new content.</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Text generation", "GPT"],
                    ["Image generation", "DALL-E"],
                    ["Video generation", "Sora"],
                    ["Audio generation", "Audio models"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-lg border border-glass-border bg-glass p-4">
                      <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">{k}</p>
                      <p className="mt-1 font-display text-lg">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </Panel>

        <MoreSections />
      </main>
    </div>
  );
}
