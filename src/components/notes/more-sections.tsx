import type { ReactNode } from "react";
import {
  BulletList,
  Callout,
  Chips,
  DataTable,
  Dropdown,
  MinorHeading,
  NumberedCards,
  Question,
  SubHeading,
} from "./ui";
import { AdaptingModels } from "./adapting-models";

const split = (s: string) => s.split("; ");

/* ---------- 3. Who builds the LLMs ---------- */

const globalLabs: [string, string, string, string, string][] = [
  ["OpenAI", "USA", "GPT", "ChatGPT", "Text, reasoning, coding and multimodal AI"],
  ["Google DeepMind", "USA / UK", "Gemini", "Gemini", "Text, images, audio, video and reasoning"],
  ["Anthropic", "USA", "Claude", "Claude", "Reasoning, coding and enterprise AI"],
  ["Meta", "USA", "Llama", "Meta AI", "Open-weight language models and multimodal AI"],
  ["xAI", "USA", "Grok", "Grok", "Conversational AI and reasoning"],
  ["Mistral AI", "France", "Mistral", "Le Chat", "Efficient language models and enterprise AI"],
  ["DeepSeek", "China", "DeepSeek", "DeepSeek", "Reasoning, mathematics and coding"],
  ["Alibaba", "China", "Qwen", "Qwen", "Language, coding and multimodal AI"],
  ["Cohere", "Canada", "Command", "Enterprise AI platform", "Business search, retrieval and enterprise language AI"],
  ["Amazon", "USA", "Nova", "Amazon Q and AWS AI services", "Business, text, image and multimodal AI"],
];

function LlmBuilders() {
  return (
    <Dropdown title="The Companies Building Today's LLMs">
      <p>
        The following companies develop their own LLMs, rather than buying access to another
        company's AI model and building applications on top of it.
      </p>
      <DataTable
        head={["Company", "Country", "LLM", "Application", "Focus"]}
        rows={globalLabs.map(([c, co, l, a, f]) => [
          c,
          co,
          <span className="font-mono text-glow">{l}</span>,
          a,
          f,
        ])}
      />
      <p className="text-foreground/75">
        There are also many other LLMs from China that I haven't listed here.
      </p>

      <SubHeading label="Made in India">LLMs from India</SubHeading>
      <DataTable
        head={["Indian developer", "Model", "Comparable international family"]}
        rows={[
          ["Sarvam AI", "Sarvam", "GPT / Claude"],
          ["BharatGen", "Param", "GPT / Gemini"],
          ["Krutrim", "Krutrim", "GPT / Gemini"],
          ["Gnani", "Evon", "Claude / GPT"],
          ["AI4Bharat", "Indic models", "Specialised language models"],
        ]}
      />
      <Callout label="Note:">
        Only BharatGen trained its model from scratch. The other Indian AI models took Llama or
        other freely available models as a foundation and then fine-tuned them on Indian data.
      </Callout>

      <MinorHeading>BharatGen: the Government of India invested ₹1,200+ crore</MinorHeading>
      <Question>What was this money used for?</Question>
      <DataTable
        head={["Expense", "What it pays for"]}
        rows={[
          ["GPUs", "Powerful computers to train the model"],
          ["Researchers and engineers", "People designing and training the AI"],
          ["Data collection", "Gathering Indian-language text and other data"],
          ["Tokeniser development", "Helping the model understand Indian scripts and words"],
          ["Training and testing", "Teaching the model and evaluating its performance"],
        ]}
      />

      <p>
        All the companies mentioned above have their own LLMs, and on top of them they build
        applications, such as chat interfaces for text, reasoning, coding and more.
      </p>
      <Question>How are AI applications created?</Question>
      <p>
        To answer this, let's look at the <strong className="text-glow">GenAI value stack</strong>{" "}
        in the next section.
      </p>
    </Dropdown>
  );
}

/* ---------- 4. GenAI value stack ---------- */

const stack: [string, string][] = [
  ["Service layer", "Delivers the actual service or outcome that the customer needs."],
  ["Application layer", "Provides the software people interact with."],
  ["Model layer", "Contains the LLMs and other models that provide the AI intelligence."],
  ["Infrastructure layer", "AI chips and GPUs (e.g. NVIDIA), cloud, data centres and databases (e.g. Pinecone)."],
];

const appCategories: [string, string, string][] = [
  ["AI chatbots and assistants", "Answer questions, explain concepts and help with everyday tasks.", "OpenAI – ChatGPT; Anthropic – Claude; Google – Gemini; xAI – Grok"],
  ["AI coding assistants", "Help developers write, debug and understand code.", "GitHub – Copilot; Cursor – Cursor; Replit – Replit AI"],
  ["AI image-generation applications", "Let users create images from text prompts.", "Midjourney – Midjourney; Leonardo AI – Leonardo; Canva – Magic Media"],
  ["AI video-generation applications", "Create or edit videos using AI.", "Runway – Runway; Synthesia – Synthesia; HeyGen – HeyGen"],
  ["AI writing applications", "Help users write emails, blogs, reports and marketing content.", "Jasper – Jasper; Grammarly – Grammarly; Copy.ai – Copy.ai"],
  ["AI research applications", "Search, analyse and summarise information from sources.", "Perplexity – Perplexity; Elicit – Elicit; Consensus – Consensus"],
  ["AI voice applications", "Generate voices, create voiceovers and convert text into speech.", "ElevenLabs – ElevenLabs; Murf AI – Murf; Speechify – Speechify"],
  ["AI productivity applications", "Help users manage documents, meetings, notes and workflows.", "Notion – Notion AI; Microsoft – Copilot; Zoom – AI Companion"],
];

const modelCategories: [string, string, string][] = [
  ["Large Language Models (LLMs)", "Understand and generate text, answer questions, write content and code.", "OpenAI – GPT; Google – Gemini; Anthropic – Claude; Meta – Llama; Mistral AI – Mistral; xAI – Grok"],
  ["Image-generation models", "Create images from text prompts or other images.", "OpenAI – GPT Image; Google – Imagen; Black Forest Labs – FLUX; Stability AI – Stable Diffusion; Midjourney – Midjourney models"],
  ["Video-generation models", "Generate videos from text, image or video inputs.", "OpenAI – Sora; Google – Veo; Runway – Gen models; Kling AI – Kling; Luma AI – Ray"],
  ["Audio and speech models", "Generate speech, convert speech to text, clone voices and process audio.", "ElevenLabs – ElevenLabs models; OpenAI – audio models; Google – Gemini audio models; Deepgram – speech models"],
  ["Music-generation models", "Generate music and sound from text or other inputs.", "Suno – Suno models; Udio – Udio models; Stability AI – Stable Audio"],
  ["Multimodal models", "Work with combinations of text, images, audio and video.", "OpenAI – GPT models; Google – Gemini; Anthropic – Claude; Meta – Llama multimodal models"],
];

const infra: { id: string; title: string; intro: string; head: string; rows: [string, string][] }[] = [
  {
    id: "A", title: "GPU and AI chip manufacturers", head: "Company",
    intro: "These companies build the powerful processors used to train and run LLMs.",
    rows: [
      ["NVIDIA", "GPUs such as H100 and Blackwell for AI training and inference."],
      ["AMD", "Instinct AI accelerators for AI data centres."],
      ["Intel", "CPUs and AI accelerator hardware."],
      ["Google", "Develops Tensor Processing Units (TPUs)."],
    ],
  },
  {
    id: "B", title: "Cloud computing providers", head: "Company",
    intro: "These companies rent computing infrastructure to AI developers.",
    rows: [
      ["Amazon Web Services (AWS)", "Cloud servers, GPUs and AI computing infrastructure."],
      ["Microsoft Azure", "Cloud infrastructure for training and running AI models."],
      ["Google Cloud", "Cloud computing, GPUs and TPUs."],
      ["Oracle Cloud Infrastructure (OCI)", "High-performance cloud computing and AI infrastructure."],
    ],
  },
  {
    id: "C", title: "GPU cloud providers", head: "Company",
    intro: "These companies specialise in providing GPU computing capacity through the cloud.",
    rows: [
      ["CoreWeave", "GPU cloud infrastructure for AI companies."],
      ["Lambda", "GPU cloud infrastructure and AI computing."],
      ["Nebius", "Cloud infrastructure designed for AI workloads."],
      ["Crusoe", "AI cloud computing and GPU infrastructure."],
    ],
  },
  {
    id: "D", title: "Data centre companies", head: "Company",
    intro: "These companies provide the physical facilities that house servers, GPUs and networking equipment.",
    rows: [
      ["Equinix", "Global data centre facilities and interconnection services."],
      ["Digital Realty", "Data centre infrastructure and colocation services."],
      ["NTT DATA", "Data centre and IT infrastructure services."],
      ["QTS", "Large-scale data centre facilities."],
      ["CyrusOne", "Enterprise and hyperscale data centres."],
    ],
  },
  {
    id: "E", title: "Networking and connectivity companies", head: "Company",
    intro: "These companies provide the networking hardware and connectivity that link thousands of AI processors.",
    rows: [
      ["Arista Networks", "High-speed data centre networking switches."],
      ["Broadcom", "Networking chips and semiconductor technology."],
      ["Cisco", "Networking equipment and data centre connectivity."],
      ["Marvell", "Data centre networking and connectivity semiconductors."],
      ["Nokia", "Networking and optical transport technologies."],
    ],
  },
  {
    id: "F", title: "Cooling and power companies", head: "Company",
    intro: "These companies provide electricity management, cooling and power systems for AI data centres.",
    rows: [
      ["Vertiv", "Data centre cooling and power management systems."],
      ["Schneider Electric", "Power distribution and data centre energy management."],
      ["Eaton", "Power management and electrical infrastructure."],
      ["ABB", "Electrical systems and power infrastructure."],
      ["Johnson Controls", "Building management and cooling systems."],
    ],
  },
  {
    id: "G", title: "Databases and data storage", head: "Company",
    intro: "These companies provide systems to store, organise and retrieve the large amounts of data used by AI applications and businesses.",
    rows: [
      ["Oracle", "Relational databases and enterprise data management."],
      ["MongoDB", "NoSQL database for storing application data."],
      ["PostgreSQL", "Open-source relational database."],
      ["Redis", "In-memory data storage and caching."],
      ["Snowflake", "Cloud data platform and data warehousing."],
      ["Databricks", "Data lakehouse and data engineering platform."],
      ["Pure Storage", "Enterprise data storage systems."],
    ],
  },
  {
    id: "H", title: "Vector databases and vector search", head: "Company",
    intro: "These companies provide databases that store and search numerical representations of information, called embeddings. They are particularly useful for Retrieval-Augmented Generation (RAG).",
    rows: [
      ["Pinecone", "Managed vector database for AI applications."],
      ["Weaviate", "Open-source and managed vector database."],
      ["Zilliz (Milvus)", "Vector database for large-scale similarity search."],
      ["Qdrant", "Vector database for similarity search and retrieval."],
      ["Chroma", "Open-source vector database for AI applications."],
      ["Elastic", "Search and vector search capabilities."],
      ["Redis", "Vector search alongside its other database capabilities."],
    ],
  },
  {
    id: "I", title: "AI development and deployment platforms", head: "Company / platform",
    intro: "These platforms provide tools for developers to build, customise, deploy and manage AI models.",
    rows: [
      ["Google Vertex AI", "AI model development, training, deployment and management."],
      ["Amazon SageMaker", "Building, training and deploying machine-learning models."],
      ["Microsoft Azure AI Foundry", "Building, evaluating and deploying AI applications and models."],
      ["IBM watsonx", "AI development, governance and deployment tools."],
      ["Databricks Mosaic AI", "Building and managing AI and machine-learning applications."],
      ["Hugging Face", "Model repositories, datasets and AI development tools."],
      ["NVIDIA AI Enterprise", "Software and tools for developing and deploying AI."],
    ],
  },
];

const infraSummary: [string, string][] = [
  ["AI chips and GPUs", "NVIDIA, AMD, Intel"],
  ["Custom AI chips", "Google, Amazon, Microsoft"],
  ["Cloud computing", "AWS, Microsoft Azure, Google Cloud, Oracle"],
  ["GPU cloud", "CoreWeave, Lambda, Nebius, Crusoe"],
  ["Data centres", "Equinix, Digital Realty, NTT DATA, QTS"],
  ["Networking and connectivity", "Arista, Broadcom, Cisco, Marvell"],
  ["Cooling and power", "Vertiv, Schneider Electric, Eaton, ABB"],
  ["Databases and data storage", "Oracle, MongoDB, PostgreSQL, Redis, Snowflake, Databricks"],
  ["Vector databases and vector search", "Pinecone, Weaviate, Milvus, Qdrant, Chroma, Elastic"],
  ["AI development and deployment platforms", "Google Vertex AI, Amazon SageMaker, Azure AI Foundry, IBM watsonx, Hugging Face"],
];

function ValueStack() {
  return (
    <Dropdown title="The GenAI Value Stack">
      <p className="text-foreground/75">Learnt from HelloPM resources.</p>

      <div className="space-y-2">
        {stack.map(([name, desc], i) => (
          <div
            key={name}
            className="flex items-center gap-4 rounded-xl border border-glass-border bg-glass-strong p-4"
            style={{ marginInline: `${(stack.length - 1 - i) * 4}%` }}
          >
            <span className="font-mono text-xs text-glow">L{stack.length - i}</span>
            <div>
              <p className="font-display text-xl text-foreground">{name}</p>
              <p className="text-sm text-foreground/75">{desc}</p>
            </div>
          </div>
        ))}
        <p className="pt-1 text-center font-mono text-xs uppercase tracking-widest text-foreground/50">
          Each layer is built on top of the one below it
        </p>
      </div>

      <SubHeading label="Layer 4">Service Layer</SubHeading>
      <p>Delivers the actual service or outcome that the customer needs.</p>

      <SubHeading label="Layer 3">Application Layer</SubHeading>
      <p>
        Provides the software people interact with. Different companies build applications for
        different purposes.
      </p>
      <DataTable
        head={["Application category", "What the application does", "Companies and examples"]}
        rows={appCategories.map(([c, d, e]) => [c, d, <Chips items={split(e)} />])}
      />

      <SubHeading label="Layer 2">Model Layer</SubHeading>
      <p>Contains the LLMs and other models that provide the AI intelligence.</p>
      <DataTable
        head={["Model category", "What it generates", "Examples"]}
        rows={[
          ["LLMs", "Text, answers, code and reasoning", <Chips items={["GPT", "Claude", "Gemini", "Llama"]} />],
          ["Image-generation models", "Images", <Chips items={["FLUX", "Stable Diffusion", "Imagen"]} />],
          ["Video-generation models", "Videos", <Chips items={["Sora", "Veo", "Kling"]} />],
          ["Audio-generation models", "Speech, music and sound", <Chips items={["ElevenLabs models", "MusicGen"]} />],
        ]}
      />
      <MinorHeading>Major categories and companies in the model layer</MinorHeading>
      <DataTable
        head={["Model category", "What the models do", "Companies and examples"]}
        rows={modelCategories.map(([c, d, e]) => [c, d, <Chips items={split(e)} />])}
      />

      <SubHeading label="Layer 1">Infrastructure Layer</SubHeading>
      <p>AI chips and GPUs (e.g. NVIDIA), databases (e.g. Pinecone) and everything that powers them.</p>
      <MinorHeading>Major companies in the infrastructure layer</MinorHeading>
      <div className="space-y-8">
        {infra.map((g) => (
          <div key={g.id} className="space-y-3">
            <p className="font-display text-xl text-foreground">
              <span className="mr-2 font-mono text-sm text-glow">{g.id}.</span>
              {g.title}
            </p>
            <p className="text-sm text-foreground/75">{g.intro}</p>
            <DataTable head={[g.head, "What it provides"]} rows={g.rows} />
          </div>
        ))}
      </div>

      <MinorHeading>Final summary: GenAI infrastructure layer</MinorHeading>
      <DataTable
        head={["No.", "Category", "Major companies"]}
        rows={infraSummary.map(([c, m], i) => [
          <span className="font-mono text-sm text-glow">{String(i + 1).padStart(2, "0")}</span>,
          c,
          <Chips items={m.split(", ")} />,
        ])}
      />

      <SubHeading>Service Layer vs Application Layer</SubHeading>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-glass-border bg-glass-strong p-5">
          <p className="font-display text-xl text-glow">Application layer</p>
          <p className="mt-2 text-sm">
            Companies use the AI LLMs from the model layer to build software products and
            applications.
          </p>
        </div>
        <div className="rounded-xl border border-glass-border bg-glass-strong p-5">
          <p className="font-display text-xl text-glow">Service layer</p>
          <p className="mt-2 text-sm">
            The business outcome these AI products and applications deliver.
          </p>
        </div>
      </div>

      <Callout label="Extra point:">
        Anthropic's and OpenAI's models respond differently partly because of how they were
        trained. OpenAI trained its LLMs using Reinforcement Learning from Human Feedback (RLHF),
        while Anthropic trained its LLMs using Constitutional AI (CAI), where the model learns to
        follow a written set of principles.
      </Callout>
    </Dropdown>
  );
}

/* ---------- 5. APIs vs self-hosting ---------- */

function Option({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-glass-border bg-glass-strong p-5">
      <p className="font-mono text-xs uppercase tracking-widest text-glow">Option {n}</p>
      <p className="mt-1 font-display text-2xl text-foreground">{title}</p>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

function NewAiCompanies() {
  return (
    <Dropdown title="How New AI Companies Evolve: APIs vs Self-Hosting">
      <Question>How will new AI companies evolve, and what could a PM do?</Question>
      <p>
        An AI startup doesn't need to build everything from scratch. It can rent infrastructure
        from AWS and either use open-source LLMs or buy access to models such as GPT or Claude
        versions, with <strong className="text-glow">token-based (usage-based) pricing</strong>.
        This charges for both the input tokens you send and the output tokens the model
        generates.
      </p>

      <Question>How can a company use AI models?</Question>
      <div className="grid gap-4 md:grid-cols-2">
        <Option n="1" title="Call a model through an API">
          <p>
            The company builds a website and communicates with an AI model, such as GPT or Claude
            Sonnet, through its API.
          </p>
          <p>
            The request sent through the API is processed by the model provider, which sends back
            a response.
          </p>
          <p>
            <strong className="text-glow">Concern: data privacy.</strong> The data sent through the
            API goes to the AI model company, such as OpenAI or Anthropic, and may be stored with them under their data policies.
          </p>
        </Option>
        <Option n="2" title="Self-host an open model">
          <p>
            The company builds a website, downloads the Llama model weights from Hugging Face and
            hosts the model on its own AWS GPU server.
          </p>
          <p>Any AI work that needs to be done is processed by this self-hosted model.</p>
          <p>
            <strong className="text-glow">Benefit: data privacy.</strong> No other company can see
            the company's data.
          </p>
        </Option>
      </div>

      <Question>Then, by doing this, how does Llama earn?</Question>
      <p>
        Choosing option 2 can save the company money, because it doesn't pay the model provider
        per token, and Meta's self-hosted models are free to use.
      </p>
      <DataTable
        head={["Cost", "Option 1: GPT API", "Option 2: Self-hosted Llama"]}
        rows={[
          ["Model usage", "Paid per token", "Free, no fee paid to Meta"],
          ["GPU servers", "Included in the API price, no separate fee", "You pay for GPU server rental"],
          ["Storage and maintenance", "You pay", "You pay, and it is a bit more"],
        ]}
      />
      <p>
        So the company saves money and doesn't need to pay Meta for using its LLMs. But Meta can
        still benefit in the following ways:
      </p>
      <DataTable
        head={["Benefit", "How Meta benefits"]}
        rows={[
          ["AI ecosystem growth", "More developers build applications using Llama, making it a widely adopted model family."],
          ["Brand recognition", "Developers and businesses become familiar with Meta's AI technology."],
          ["Technology improvement", "Developers report issues, share evaluations and contribute tools that help the ecosystem improve."],
          ["Competitive advantage", "More Llama adoption can make businesses less dependent on rival model providers."],
          ["Meta's own products", "Meta can use its AI research and technology across products such as Facebook, Instagram and WhatsApp."],
        ]}
      />
      <MinorHeading>Potential benefits to Meta</MinorHeading>
      <BulletList
        items={[
          "A stronger AI ecosystem.",
          "Greater influence in the AI market.",
          "More opportunities to integrate Meta AI into its own products.",
          "Less reliance on competing model ecosystems.",
        ]}
      />

      <Question>
        Then why didn't every company shift to Llama? Why are many still using GPT APIs?
      </Question>
      <p>Because adopting Llama has some disadvantages.</p>
      <MinorHeading>Disadvantages of using Llama</MinorHeading>
      <NumberedCards
        items={[
          ["High infrastructure costs", "Companies must pay for GPUs, cloud servers, electricity and storage when self-hosting Llama. They also need to maintain the infrastructure."],
          ["Technical expertise required", "Companies need engineers to install, configure, deploy, optimise and maintain the model. This can be difficult for small startups."],
          ["Model performance limitations", "Llama may not perform as well as competing models on certain tasks. Companies must test accuracy, reasoning, coding and language capabilities before choosing it."],
          ["Security and privacy responsibility", "Self-hosting gives companies more control over data, but they must manage access controls, encryption, monitoring, backups and security themselves."],
          ["Licence restrictions", "Llama is open-weight, not unrestricted open-source software. Companies must follow Meta's licence conditions and usage restrictions."],
          ["Maintenance and upgrades", "Companies are responsible for evaluating newer versions, upgrading deployments, testing compatibility and managing downtime."],
        ]}
      />
      <Callout label="Key insight:">
        This is a perfect example of how AI changes the way we work without eliminating the human
        workforce in companies.
      </Callout>
    </Dropdown>
  );
}

/* ---------- 6. PM takeaway (must stay last) ---------- */

function Lesson({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="border-l-2 border-glow/60 pl-5">
      <p className="font-mono text-sm tracking-widest text-glow">Lesson {String(n).padStart(2, "0")}</p>
      <h3 className="mt-1 font-display text-2xl text-foreground">{title}</h3>
      <div className="mt-3 space-y-4 leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

function PmTakeaway() {
  return (
    <Dropdown kicker="Final" title="PM Takeaway">
      <Question>What is the PM takeaway?</Question>
      <p>
        The overall Product Manager (PM) takeaway from understanding LLMs, GPT, Claude, Gemini,
        Llama, APIs and AI business models is that a PM must understand how AI technology works,
        how businesses use it and how it creates value for customers and the business.
      </p>
      <p>Here are the key lessons.</p>

      <div className="space-y-10 pt-2">
        <Lesson n={1} title="Understand the AI ecosystem">
          <p>A PM should understand the different layers of the AI industry.</p>
          <DataTable
            head={["Layer", "What a PM should understand"]}
            rows={[
              ["Infrastructure", "Where the computing power comes from and what it costs"],
              ["Model", "Which AI model is suitable for the product"],
              ["Application", "How the model becomes a usable software product"],
              ["Service", "What customer problem or business outcome it delivers"],
            ]}
          />
        </Lesson>

        <Lesson n={2} title="Different models have different strengths">
          <p>A PM should not automatically choose GPT just because it is popular. For example:</p>
          <DataTable
            head={["Model", "May be suitable for"]}
            rows={[
              ["GPT", "Complex reasoning and general-purpose tasks"],
              ["Claude", "Writing and working with lengthy documents"],
              ["Gemini", "Multimodal tasks and integration with Google's ecosystem"],
              ["Llama", "When a company wants more control over model hosting"],
            ]}
          />
          <p>The right choice depends on the use case and on actual evaluation.</p>
        </Lesson>

        <Lesson n={3} title="Understand the business model">
          <p>AI companies can generate revenue in different ways:</p>
          <Chips
            items={[
              "API usage charges",
              "Monthly or annual subscriptions",
              "Enterprise licences",
              "Cloud infrastructure and hosting",
              "AI-powered services and consulting",
            ]}
          />
          <p>
            A PM must understand how the product generates revenue and whether its costs allow it
            to become profitable.
          </p>
        </Lesson>

        <Lesson n={4} title="Build vs buy vs customise">
          <p>When introducing AI into a product, a PM should consider:</p>
          <DataTable
            head={["Approach", "Meaning"]}
            rows={[
              ["Build", "Train your own AI model"],
              ["Buy", "Use an existing model through an API"],
              ["Customise", "Adapt or fine-tune an existing model"],
              ["Self-host", "Run an available model on your own infrastructure"],
            ]}
          />
          <p>
            The decision depends on budget, technical expertise, privacy, performance and business
            requirements.
          </p>
        </Lesson>

        <Lesson n={5} title="Understand AI risks and limitations">
          <p>A PM must consider:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Hallucinations and incorrect answers",
              "Data privacy and security",
              "Bias and fairness",
              "Copyright and licensing",
              "Regulatory compliance",
              "Model reliability and maintenance",
            ].map((r) => (
              <div key={r} className="rounded-lg border border-glass-border bg-glass-strong p-3 text-sm">
                <span className="mr-2 text-glow">⚠</span>
                {r}
              </div>
            ))}
          </div>
          <p>AI output should not automatically be treated as correct.</p>
        </Lesson>

        <Lesson n={6} title="Connect AI technology to business outcomes">
          <p>This is perhaps the most important PM responsibility.</p>
          <p>
            For example, imagine a company building an AI-powered customer support application.
            The PM should ask:
          </p>
          <BulletList
            items={[
              "Will AI reduce customer waiting time?",
              "Will it improve first-contact resolution?",
              "Will it reduce support costs?",
              "Will customers trust the responses?",
              "How will we measure success?",
            ]}
          />
          <p>
            The goal is not simply to introduce AI. It is to <strong className="text-glow">solve a real customer problem</strong>.
          </p>
        </Lesson>

        <Lesson n={7} title="Measure product success">
          <p>A PM should identify measurable KPIs before launching an AI feature.</p>
          <DataTable
            head={["KPI", "What it measures"]}
            rows={[
              ["Response accuracy", "How often the AI provides correct answers"],
              ["Response time", "How quickly the AI responds"],
              ["Cost per request", "How much each AI interaction costs"],
              ["User adoption", "How many customers use the feature"],
              ["Customer satisfaction", "Whether customers find it useful"],
              ["Retention", "Whether customers keep using it"],
            ]}
          />
        </Lesson>
      </div>

      <div className="mt-6 rounded-2xl border border-glow/50 bg-glow/10 p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-glow">The final PM mindset</p>
        <p className="mt-2 font-display text-2xl text-foreground">
          Before introducing AI into a product, a PM should be able to answer five questions:
        </p>
        <ol className="mt-5 space-y-3">
          {[
            "What customer problem are we solving?",
            "Which AI technology or model should we use?",
            "What will it cost to build, operate and maintain?",
            "What risks could affect customers and the business?",
            "How will we measure whether it creates value?",
          ].map((q, i) => (
            <li key={q} className="flex items-baseline gap-4">
              <span className="font-display text-3xl text-glow">{i + 1}</span>
              <span className="text-lg text-foreground/90">{q}</span>
            </li>
          ))}
        </ol>
      </div>
    </Dropdown>
  );
}

export function MoreSections() {
  return (
    <>
      <LlmBuilders />
      <ValueStack />
      <NewAiCompanies />
      <AdaptingModels />
      <PmTakeaway />
    </>
  );
}
