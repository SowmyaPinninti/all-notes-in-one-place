import { createFileRoute } from "@tanstack/react-router";
import bg from "@/assets/ai_image.jpg.asset.json";

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

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-glass-border bg-glass p-6 shadow-2xl backdrop-blur-xl md:p-10">
      {children}
    </section>
  );
}

function Era({ year, title, children }: { year: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-glow/60 pl-5">
      <p className="font-mono text-sm tracking-widest text-glow">{year}</p>
      <h3 className="mt-1 font-display text-2xl text-foreground">{title}</h3>
      <div className="mt-3 space-y-3 leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
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
          <h2 className="mb-8 font-display text-3xl md:text-4xl">Introduction: How We Reached AI</h2>
          <div className="space-y-10">
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
        </Panel>

        <Panel>
          <h2 className="mb-8 font-display text-3xl md:text-4xl">Historical Milestones</h2>
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
        </Panel>
      </main>
    </div>
  );
}
