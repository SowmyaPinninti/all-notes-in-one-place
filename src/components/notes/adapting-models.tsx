import type { ReactNode } from "react";
import { BulletList, Callout, DataTable, Dropdown, MinorHeading, Question, SubHeading } from "./ui";

function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-4 rounded-xl border border-glass-border bg-glass-strong p-4">
          <span className="font-display text-2xl leading-none text-glow">{i + 1}</span>
          <span className="text-foreground/85">{it}</span>
        </li>
      ))}
    </ol>
  );
}

function Pair({ who, children }: { who: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-glass-border bg-glass-strong p-5">
      <p className="font-mono text-xs uppercase tracking-widest text-glow">{who}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{children}</p>
    </div>
  );
}

export function AdaptingModels() {
  return (
    <Dropdown title="Adapting AI Models: RAG, CAG & Fine-Tuning">
      <p>
        RAG and fine-tuning are techniques that help companies adapt an existing AI model to their
        product's requirements, instead of building a new model from scratch.
      </p>

      <DataTable
        caption="At a glance"
        head={["Technique", "What it does", "Needs a vector database?", "Changes the model?"]}
        rows={[
          ["RAG", "Finds relevant information in the company's documents and gives it to the model", "Yes", "No"],
          ["CAG", "Reuses information that has already been saved (cached) and sends it with the question", "No", "No"],
          ["Fine-tuning", "Trains the model further so it learns a behaviour, style or task", "No", "Yes, its weights are adjusted"],
        ]}
      />

      {/* ---------- RAG ---------- */}
      <SubHeading label="Technique 1">RAG (Retrieval-Augmented Generation)</SubHeading>
      <p>
        RAG is useful when you need specific information from a large set of data. It fetches the
        information that already exists in the company's documents, rather than making up new
        facts. The AI model then uses that information to write its answer.
      </p>

      <MinorHeading>Example: a bank's AI customer support app</MinorHeading>
      <p>
        Imagine a bank wants to build an AI customer support application. The bank has many
        documents covering interest rates, policies, insurance terms, customer FAQs and more.
      </p>
      <p>The bank can use RAG by storing all these internal documents in a searchable knowledge base:</p>
      <Steps
        items={[
          <>The company's documents are split into smaller sections called <strong>chunks</strong>.</>,
          <>Each chunk is converted into a list of numbers (a <strong>vector</strong>, also called an <strong>embedding</strong>) that represents its meaning.</>,
          "When a customer asks a question, the question is also converted into an embedding, using the same embedding model.",
          "RAG compares the question's vector with the stored chunk vectors to find information with a similar meaning.",
          "RAG retrieves the most relevant chunks and sends them, along with the customer's question, to GPT.",
          "GPT uses the retrieved information to generate an answer.",
        ]}
      />

      <Question>How are the chunks converted into numerical vectors?</Question>
      <p>
        The company stores the chunks in its own database and sends them to an{" "}
        <strong>embedding model API</strong>, which converts them into numerical vectors. These
        vectors are then stored in a <strong>vector database</strong>, such as Pinecone.
      </p>
      <p>
        When a customer asks a question, the bank sends the query to its RAG system. The query is
        converted into a numerical vector, and RAG retrieves the stored vectors that best match it.
      </p>
      <p>
        The retrieved information and the customer's query are then sent to the GPT API, which
        generates an answer. That answer is returned to the customer.
      </p>
      <Callout label="Key point:">
        The entire process is built in code. Calling each API with the right data, in the right
        order, is what makes RAG work.
      </Callout>

      <MinorHeading>Stakeholders involved in building RAG</MinorHeading>
      <DataTable
        head={["Stakeholder", "Responsibility"]}
        rows={[
          ["Business stakeholders", "Identify the business problem, such as reducing customer support calls."],
          ["Product Manager (PM)", "Defines the product vision, requirements, priorities, roadmap and success metrics."],
          ["Customer Support team", "Shares frequently asked customer questions and common problems."],
          ["Subject Matter Experts (SMEs)", "Provide accurate bank policies, loan rules, interest rates and product information."],
          ["Data Engineers", "Collect documents, extract text, clean data and split documents into chunks."],
          ["AI/ML Engineers", "Select embedding models, design retrieval logic and improve search relevance."],
          ["Backend Developers", "Write Python/API integration code connecting Pinecone, the embedding API and the GPT API."],
          ["Frontend Developers", "Build the chatbot interface that customers interact with."],
          ["Cloud/DevOps Engineers", "Configure AWS infrastructure, deployment, scaling and monitoring."],
          ["Security & Compliance teams", "Ensure customer data privacy, permissions, security and regulatory compliance."],
          ["QA/Test Engineers", "Test whether retrieval and GPT answers are accurate, reliable and secure."],
        ]}
      />

      <MinorHeading>How they work together</MinorHeading>
      <div className="grid gap-3 sm:grid-cols-2">
        <Pair who="Business stakeholders + PM">
          Define the problem: reduce the customer support workload and provide accurate answers.
        </Pair>
        <Pair who="SMEs + Data Engineers">
          Provide the bank's documents and prepare them for the RAG knowledge base.
        </Pair>
        <Pair who="AI/ML + Backend Developers">
          Build the embedding, retrieval and GPT API integration.
        </Pair>
        <Pair who="Frontend + Cloud/DevOps">Build the chatbot experience and deploy the system.</Pair>
        <Pair who="QA + Security + Compliance">
          Check accuracy, security, permissions and regulatory requirements before launch.
        </Pair>
        <Pair who="Customers">Use the chatbot to get answers about the bank's products and services.</Pair>
      </div>

      <MinorHeading>Drawback of RAG: latency</MinorHeading>
      <p>Depending on the amount of data, RAG can make responses slower.</p>
      <Question>Why?</Question>
      <p>When a customer asks a question, RAG performs several operations:</p>
      <Steps
        items={[
          "Convert the question into an embedding.",
          "Search the vector database (Pinecone).",
          "Retrieve the relevant document chunks.",
          "Send the question and the retrieved chunks to GPT.",
          "Wait for GPT to generate the answer.",
        ]}
      />
      <p>Each operation adds some processing time and network communication.</p>

      {/* ---------- CAG ---------- */}
      <SubHeading label="Technique 2">CAG (Cache-Augmented Generation)</SubHeading>
      <p>This is where CAG comes in. It does not need embeddings or a vector database. Instead, it uses caching.</p>
      <Callout label="Caching means">
        temporarily keeping information ready so it can be reused, instead of processing or
        retrieving it again every time.
      </Callout>
      <p>
        When a customer sends a query, the backend code sends it directly to the GPT API together
        with the information that has already been cached, and returns GPT's response.
      </p>
      <DataTable
        head={["", "RAG", "CAG"]}
        rows={[
          ["Embeddings", "Needed", "Not needed"],
          ["Vector database", "Needed (e.g. Pinecone)", "Not needed"],
          ["How information is found", "Searched and retrieved for every question", "Already saved and ready to reuse"],
          ["Speed", "Each step adds time", "Fewer steps, so less waiting"],
        ]}
      />

      {/* ---------- Fine-tuning ---------- */}
      <SubHeading label="Technique 3">Fine-Tuning</SubHeading>
      <p>
        Fine-tuning trains an existing AI model further so that it learns a desired behaviour,
        response style or task pattern.
      </p>
      <p>
        It means taking an AI model that has already been pre-trained and training it further on a
        carefully chosen set of task-specific examples.
      </p>
      <MinorHeading>How fine-tuning works</MinorHeading>
      <Steps
        items={[
          "The company prepares and formats the training data.",
          "It uploads the data through the AI provider's fine-tuning service or API.",
          <>The provider uses this data to adjust the model's internal parameters, called <strong>weights</strong>, so the model learns the required task, response patterns or behaviour.</>,
          "After training, the company tests the fine-tuned model on new data to check its accuracy and consistency.",
          "Once it meets the required performance, the company adds the fine-tuned model to its application and accesses it through an API.",
        ]}
      />

      <MinorHeading>PM takeaway on fine-tuning</MinorHeading>
      <p>
        Fine-tuning is not instant. A Product Manager should plan time for preparing and validating
        the training data, running the fine-tuning job, evaluating the model's performance, fixing
        issues and retesting before release.
      </p>
      <p>The PM should work with AI/ML engineers to:</p>
      <BulletList
        items={[
          "Define the task and the expected model behaviour.",
          "Make sure the training data is relevant, accurate and high quality.",
          "Agree on success metrics, such as accuracy and consistency.",
          "Track training time, cost and performance.",
          "Approve the release only after the model meets the agreed acceptance criteria.",
        ]}
      />
      <Callout label="Key point:">
        The PM doesn't need to do the fine-tuning, but must manage its requirements, timeline, cost,
        risks and business outcomes.
      </Callout>

      {/* ---------- ROI ---------- */}
      <SubHeading label="Measuring value">PM Takeaway on AI Models</SubHeading>
      <p>
        As a Product Manager, you need to measure whether the AI solution delivers a positive return
        on investment (ROI).
      </p>
      <DataTable
        head={["Important KPI", "What it tells you"]}
        rows={[
          ["Queries resolved by AI (%)", "How many questions the AI answers without human help"],
          ["Cost per customer query", "How much each answered question costs"],
          ["Reduction in human-agent workload", "How much work is taken off the support team"],
          ["Customer satisfaction (CSAT)", "Whether customers are happy with the answers"],
          ["First-contact resolution rate", "How often the problem is solved in the first conversation"],
          ["AI answer accuracy", "How often the AI's answers are correct"],
        ]}
      />
      <Callout label="Key business objective:">
        The goal is not simply to implement AI. It is to reduce operating costs while maintaining or
        improving the customer experience.
      </Callout>
    </Dropdown>
  );
}
