export default function PropellLandingPage() {
  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#172B4D]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#E7E0D2] bg-[#F7F4ED]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="assets/propell-logo.png"
              alt="Propell Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight">
              Propell
            </span>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#how-it-works" className="hover:opacity-70">
              How It Works
            </a>
            <a href="#features" className="hover:opacity-70">
              Features
            </a>
            <a href="#security" className="hover:opacity-70">
              Security
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#D8C7A1] bg-[#EFE7D7] px-4 py-2 text-sm font-medium text-[#A88345]">
              Modern installment infrastructure for private and P2P transactions
            </div>

            <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Flexible access to money when timing matters.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#4B5D79]">
              Propell helps buyers and sellers structure private purchases
              with automated payments, standardized agreements, and installment
              management workflows — without involving banks or traditional
              lenders.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#how-it-works"
                className="rounded-2xl bg-[#A88345] px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                See How It Works
              </a>

              <a
                href="#features"
                className="rounded-2xl border border-[#D8C7A1] bg-white px-6 py-4 text-sm font-semibold text-[#172B4D] transition hover:bg-[#F5F1E8]"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -right-10 top-10 h-72 w-72 rounded-full bg-[#E8D9B8] blur-3xl opacity-40" />

            <img
              src="assets/propell-banner.png"
              alt="Propell Banner"
              className="relative w-full max-w-2xl rounded-[32px] border border-[#E7E0D2] bg-white shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="border-t border-[#E7E0D2] bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A88345]">
              How It Works
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Structured installment agreements made simple.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-[#EAE3D7] bg-[#FCFBF8] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE7D7] text-[#A88345] font-bold">
                1
              </div>

              <h3 className="text-2xl font-semibold">
                Seller creates an installment offer
              </h3>

              <p className="mt-4 leading-8 text-[#5C6C87]">
                Set the total amount, down payment, installment count, and
                payment frequency for the transaction.
              </p>

              <img
                src="assets/create-transaction.png"
                alt="Create Transaction"
                className="mt-8 w-full max-w-sm rounded-[28px] border border-[#E7E0D2] shadow-lg"
              />
            </div>

            <div className="rounded-3xl border border-[#EAE3D7] bg-[#FCFBF8] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE7D7] text-[#A88345] font-bold">
                2
              </div>

              <h3 className="text-2xl font-semibold">
                Buyer reviews and accepts terms
              </h3>

              <p className="mt-4 leading-8 text-[#5C6C87]">
                Both parties complete identity verification and review clear,
                standardized agreement terms before signing.
              </p>

              <img
                src="assets/agreement-preview.png"
                alt="Agreement Preview"
                className="mt-8 w-full max-w-sm rounded-[28px] border border-[#E7E0D2] shadow-lg"
              />
            </div>

            <div className="rounded-3xl border border-[#EAE3D7] bg-[#FCFBF8] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE7D7] text-[#A88345] font-bold">
                3
              </div>

              <h3 className="text-2xl font-semibold">
                Agreements are generated automatically
              </h3>

              <p className="mt-4 leading-8 text-[#5C6C87]">
                Propell generates a standardized installment agreement with risk
                disclosures, signatures, payment authorization, and transaction
                terms.
              </p>

              <img
                src="assets/review-terms.png"
                alt="Review Terms"
                className="mt-8 w-full max-w-sm rounded-[28px] border border-[#E7E0D2] shadow-lg"
              />
            </div>

            <div className="rounded-3xl border border-[#EAE3D7] bg-[#FCFBF8] p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFE7D7] text-[#A88345] font-bold">
                4
              </div>

              <h3 className="text-2xl font-semibold">
                Payments run automatically
              </h3>

              <p className="mt-4 leading-8 text-[#5C6C87]">
                Scheduled withdrawals, retry logic, grace periods, and backup
                payment methods help keep transactions on track.
              </p>

              <img
                src="assets/payment-setup.png"
                alt="Payment Setup"
                className="mt-8 w-full max-w-sm rounded-[28px] border border-[#E7E0D2] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-[#F7F4ED]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A88345]">
              Features
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Built for modern peer-to-peer installment transactions.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Automated Installments',
                description:
                  'Scheduled withdrawals reduce manual collection and missed payments.',
              },
              {
                title: 'Standardized Agreements',
                description:
                  'Clear installment contracts with disclosures and structured transaction terms.',
              },
              {
                title: 'Identity Verification',
                description:
                  'Both parties verify identity before agreements are finalized.',
              },
              {
                title: 'Flexible Payment Recovery',
                description:
                  'Retry logic, grace periods, and partial payment handling built into the workflow.',
              },
              {
                title: 'Multiple Payment Methods',
                description:
                  'Pre-authorized debit and backup payment options supported.',
              },
              {
                title: 'Transaction Transparency',
                description:
                  'Every installment, agreement, and payment event is clearly documented.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-[#E7E0D2] bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-4 leading-8 text-[#5C6C87]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section id="security" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A88345]">
            Trust & Transparency
          </p>

          <h2 className="text-4xl font-semibold tracking-tight">
            Designed for high-trust private transactions.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#5C6C87]">
            Propell provides structured agreements, identity verification
            workflows, secure payment authorization, and transparent installment
            tracking to help both parties transact with clarity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A88345] text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Structured payments for modern private transactions.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#F7F1E4]">
            Whether it’s used technology, vehicles, services, or large
            peer-to-peer purchases, Propell helps both sides manage installment
            agreements with confidence.
          </p>

          <div className="mt-10">
            <a
              href="mailto:propell.fin@gmail.com"
              className="inline-flex rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-[#172B4D] transition hover:opacity-90"
            >
              Contact Propell
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="bg-[#F7F4ED]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-[#E7E0D2] bg-white p-10">
              <h3 className="text-3xl font-semibold tracking-tight">
                What Propell Is
              </h3>

              <ul className="mt-8 space-y-5 text-lg text-[#4B5D79]">
                <li>• A transaction facilitation platform</li>
                <li>• A payment automation layer</li>
                <li>• A standardized agreement generator</li>
                <li>• A delinquency management workflow</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#E7E0D2] bg-white p-10">
              <h3 className="text-3xl font-semibold tracking-tight">
                What Propell Is Not
              </h3>

              <ul className="mt-8 space-y-5 text-lg text-[#4B5D79]">
                <li>• Not a lender</li>
                <li>• Not a guarantor</li>
                <li>• Not an insurer</li>
                <li>• Not a credit decision-maker</li>
                <li>• Not a custodian of funds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#E7E0D2] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[#6C7A92] md:flex-row">
          <p>© 2026 Propell. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:opacity-70">
              Privacy
            </a>
            <a href="#" className="hover:opacity-70">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
