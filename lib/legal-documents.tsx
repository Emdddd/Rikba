import type { ReactNode } from "react"
import { LegalCallout, LegalList, LegalSection, type LegalTocItem } from "@/components/legal/legal-page-shell"

const EFFECTIVE_DATE = "20 April 2026"
const COMPANY_NAME = "RIKBA Rides Ltd."
const COMPANY_ADDRESS = "23, Triq Nofs in-Nhar, Valletta, VLT 1102, Malta"
const COMPANY_EMAIL = "info@rikba.eu"

export type LegalSlug =
  | "terms-for-riders"
  | "terms-for-drivers"
  | "privacy-policy"
  | "cookie-policy"
  | "account-deletion"
  | "community-guidelines"
  | "contact"

export type LegalDocument = {
  slug: LegalSlug
  href: `/legal/${LegalSlug}`
  title: string
  shortTitle: string
  description: string
  effectiveDate: string
  toc: LegalTocItem[]
  body: ReactNode
}

function ContactDetails() {
  return (
    <div className="rounded-3xl border border-border bg-background/70 p-6 text-foreground">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Contact</p>
      <div className="mt-4 space-y-1 text-base leading-7">
        <p className="font-semibold">{COMPANY_NAME}</p>
        <p>{COMPANY_ADDRESS}</p>
        <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold hover:text-primary">
          {COMPANY_EMAIL}
        </a>
      </div>
    </div>
  )
}

const legalDocuments: LegalDocument[] = [
  {
    slug: "terms-for-riders",
    href: "/legal/terms-for-riders",
    title: "Terms and Conditions for Riders",
    shortTitle: "Rider Terms",
    description: "The terms that govern how riders use the Rikba platform and request transportation services.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "rider-about-rikba", number: "1", title: "About Rikba" },
      { id: "rider-service", number: "2", title: "Nature of the service" },
      { id: "rider-account", number: "3", title: "Accounts and eligibility" },
      { id: "rider-bookings", number: "4", title: "Ride requests and bookings" },
      { id: "rider-pricing", number: "5", title: "Pricing and payment" },
      { id: "rider-cancellations", number: "6", title: "Cancellations" },
      { id: "rider-conduct", number: "7", title: "Rider conduct" },
      { id: "rider-liability", number: "8", title: "Liability and platform role" },
      { id: "rider-changes", number: "9", title: "Changes and contact" },
    ],
    body: (
      <>
        <LegalSection id="rider-about-rikba" number="1" title="About Rikba">
          <p>
            These Terms and Conditions for Riders govern how riders access and use the Rikba website, app,
            and related rider-facing services.
          </p>
          <p>
            The Rikba platform is operated by {COMPANY_NAME}, with registered office at {COMPANY_ADDRESS}.
          </p>
        </LegalSection>

        <LegalSection id="rider-service" number="2" title="Nature of the service">
          <p>
            Rikba provides a digital platform that enables riders to connect with independent drivers for
            transportation services.
          </p>
          <p>
            Unless expressly stated otherwise, Rikba does not itself provide transportation services. The
            transportation contract is formed between the rider and the driver who accepts the ride.
          </p>
        </LegalSection>

        <LegalSection id="rider-account" number="3" title="Accounts and eligibility">
          <p>
            Riders may be required to create an account using accurate and up-to-date information. You are
            responsible for maintaining the security of your account and device.
          </p>
          <LegalList
            items={[
              "You must provide accurate information.",
              "You must not allow unauthorized use of your account.",
              "You must notify Rikba promptly if you suspect misuse or unauthorized access.",
            ]}
          />
        </LegalSection>

        <LegalSection id="rider-bookings" number="4" title="Ride requests and bookings">
          <p>
            A ride request becomes a confirmed booking only after a driver accepts it. Rikba does not guarantee
            driver availability for every request.
          </p>
          <p>
            Estimated pickup and arrival times are indicative only and may vary due to traffic, weather,
            service availability, and other operational conditions.
          </p>
        </LegalSection>

        <LegalSection id="rider-pricing" number="5" title="Pricing and payment">
          <p>
            Estimated fares shown before booking are indicative. Final pricing may vary based on route,
            time, traffic, waiting time, surcharges, taxes, or other properly disclosed charges.
          </p>
          <p>
            Where in-app or cashless payments are supported, you authorize Rikba and its payment providers to
            process the applicable charge.
          </p>
        </LegalSection>

        <LegalSection id="rider-cancellations" number="6" title="Cancellations">
          <p>
            Riders may cancel a request before the trip begins. A cancellation fee may apply if a driver has
            already spent time or distance reaching the pickup point or if repeated abusive cancellations occur.
          </p>
        </LegalSection>

        <LegalSection id="rider-conduct" number="7" title="Rider conduct">
          <p>Riders must use the platform lawfully, respectfully, and in good faith.</p>
          <LegalList
            items={[
              "Do not damage or soil a driver vehicle.",
              "Do not harass, threaten, or discriminate against drivers or other users.",
              "Do not transport unlawful or dangerous items.",
              "Do not use false booking details or engage in payment abuse.",
            ]}
          />
        </LegalSection>

        <LegalSection id="rider-liability" number="8" title="Liability and platform role">
          <p>
            Rikba acts as the platform intermediary. To the maximum extent permitted by law, Rikba is not
            liable for indirect or consequential losses arising from transportation services performed by
            independent drivers.
          </p>
          <LegalCallout title="Important">
            <p>
              Where required by law, Rikba may review service issues, complaints, or safety concerns and provide
              reasonable support without admitting liability for third-party transportation performance.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="rider-changes" number="9" title="Changes and contact">
          <p>
            Rikba may update these Terms from time to time. Continued use of the platform after an update takes
            effect means you accept the revised version.
          </p>
          <ContactDetails />
        </LegalSection>
      </>
    ),
  },
  {
    slug: "terms-for-drivers",
    href: "/legal/terms-for-drivers",
    title: "Terms and Conditions for Drivers",
    shortTitle: "Driver Terms",
    description: "The terms that govern how drivers use the Rikba platform and perform transportation services.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "driver-about-rikba", number: "1", title: "About Rikba" },
      { id: "driver-relationship", number: "2", title: "Platform relationship" },
      { id: "driver-eligibility", number: "3", title: "Eligibility and onboarding" },
      { id: "driver-obligations", number: "4", title: "Driver obligations" },
      { id: "driver-payments", number: "5", title: "Fees, commissions, and payouts" },
      { id: "driver-quality", number: "6", title: "Service quality" },
      { id: "driver-termination", number: "7", title: "Suspension and termination" },
      { id: "driver-contact", number: "8", title: "Contact" },
    ],
    body: (
      <>
        <LegalSection id="driver-about-rikba" number="1" title="About Rikba">
          <p>
            These Terms and Conditions for Drivers govern the use of the Rikba platform by drivers who onboard,
            accept rides, and use driver-facing Rikba services.
          </p>
          <p>{COMPANY_NAME} operates the Rikba platform from {COMPANY_ADDRESS}.</p>
        </LegalSection>

        <LegalSection id="driver-relationship" number="2" title="Platform relationship">
          <p>
            Drivers using the platform act as independent service providers unless applicable law states otherwise.
            Rikba provides the digital marketplace, rider demand surface, and operational tooling.
          </p>
        </LegalSection>

        <LegalSection id="driver-eligibility" number="3" title="Eligibility and onboarding">
          <p>
            Drivers must complete onboarding requirements, provide accurate personal and vehicle information,
            maintain all required licenses and permits, and comply with applicable transport and insurance rules.
          </p>
        </LegalSection>

        <LegalSection id="driver-obligations" number="4" title="Driver obligations">
          <LegalList
            items={[
              "Keep account, profile, and vehicle details accurate.",
              "Maintain lawful eligibility to provide transportation services.",
              "Treat riders respectfully and operate safely.",
              "Follow Rikba product and safety policies while using the platform.",
            ]}
          />
        </LegalSection>

        <LegalSection id="driver-payments" number="5" title="Fees, commissions, and payouts">
          <p>
            Rikba may charge service fees or commissions for use of the platform. Where applicable, payout timing,
            fee structure, and deductions will be communicated through the driver-facing product or onboarding flow.
          </p>
        </LegalSection>

        <LegalSection id="driver-quality" number="6" title="Service quality">
          <p>
            Rikba may use ratings, complaints, operational signals, and policy review to monitor service quality.
            Repeated safety issues, misconduct, fraud, or severe policy violations may result in suspension.
          </p>
        </LegalSection>

        <LegalSection id="driver-termination" number="7" title="Suspension and termination">
          <p>
            Rikba may restrict, suspend, or terminate access to the platform where there is fraud, safety risk,
            regulatory non-compliance, abusive conduct, or other material breach of these Terms.
          </p>
        </LegalSection>

        <LegalSection id="driver-contact" number="8" title="Contact">
          <ContactDetails />
        </LegalSection>
      </>
    ),
  },
  {
    slug: "privacy-policy",
    href: "/legal/privacy-policy",
    title: "Privacy Policy",
    shortTitle: "Privacy Policy",
    description: "How Rikba collects, uses, stores, and protects personal data across the platform.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "privacy-overview", number: "1", title: "Overview" },
      { id: "privacy-data", number: "2", title: "Personal data we collect" },
      { id: "privacy-use", number: "3", title: "How we use personal data" },
      { id: "privacy-sharing", number: "4", title: "Sharing and retention" },
      { id: "privacy-rights", number: "5", title: "Your rights" },
      { id: "privacy-contact", number: "6", title: "Contact" },
    ],
    body: (
      <>
        <LegalSection id="privacy-overview" number="1" title="Overview">
          <p>
            This Privacy Policy explains how {COMPANY_NAME} processes personal data when you visit the Rikba
            website or use related services.
          </p>
        </LegalSection>

        <LegalSection id="privacy-data" number="2" title="Personal data we collect">
          <LegalList
            items={[
              "Identity and account information you submit.",
              "Contact details such as phone numbers and email addresses.",
              "Operational and support information provided during platform use.",
              "Website interaction information required for analytics, product improvement, or security.",
            ]}
          />
        </LegalSection>

        <LegalSection id="privacy-use" number="3" title="How we use personal data">
          <LegalList
            items={[
              "To operate and improve Rikba services.",
              "To provide support and respond to requests.",
              "To maintain platform integrity and safety.",
              "To comply with legal and regulatory obligations.",
            ]}
          />
        </LegalSection>

        <LegalSection id="privacy-sharing" number="4" title="Sharing and retention">
          <p>
            Rikba may share personal data with payment providers, communications vendors, infrastructure vendors,
            legal advisors, or authorities where necessary and lawful.
          </p>
          <p>
            Personal data is retained only for as long as needed for the purpose collected, legal compliance,
            dispute handling, safety review, or legitimate operational needs.
          </p>
        </LegalSection>

        <LegalSection id="privacy-rights" number="5" title="Your rights">
          <p>
            Subject to applicable law, you may have the right to request access, correction, deletion,
            restriction, objection, or data portability in relation to your personal data.
          </p>
          <LegalCallout title="Data requests">
            <p>
              Rikba may need to verify your identity before responding to privacy-related requests.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="privacy-contact" number="6" title="Contact">
          <ContactDetails />
        </LegalSection>
      </>
    ),
  },
  {
    slug: "cookie-policy",
    href: "/legal/cookie-policy",
    title: "Cookie Policy",
    shortTitle: "Cookie Policy",
    description: "How the Rikba website may use cookies or similar technologies.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "cookie-overview", number: "1", title: "Overview" },
      { id: "cookie-types", number: "2", title: "Types of cookies" },
      { id: "cookie-controls", number: "3", title: "Managing cookies" },
      { id: "cookie-contact", number: "4", title: "Contact" },
    ],
    body: (
      <>
        <LegalSection id="cookie-overview" number="1" title="Overview">
          <p>
            The Rikba website may use cookies or similar technologies to support basic site functionality,
            analytics, and experience improvement.
          </p>
        </LegalSection>

        <LegalSection id="cookie-types" number="2" title="Types of cookies">
          <LegalList
            items={[
              "Essential cookies required for basic site behavior.",
              "Analytics cookies used to understand how the website is used.",
              "Preference cookies used to remember user-facing settings where applicable.",
            ]}
          />
        </LegalSection>

        <LegalSection id="cookie-controls" number="3" title="Managing cookies">
          <p>
            Most browsers allow you to manage cookies through browser settings. Disabling certain cookies may
            affect how parts of the website function.
          </p>
        </LegalSection>

        <LegalSection id="cookie-contact" number="4" title="Contact">
          <ContactDetails />
        </LegalSection>
      </>
    ),
  },
  {
    slug: "account-deletion",
    href: "/legal/account-deletion",
    title: "Account Deletion",
    shortTitle: "Account Deletion",
    description: "How to request deletion of your Rikba account and what information may still be retained.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "deletion-request", number: "1", title: "How to request deletion" },
      { id: "deletion-what-to-send", number: "2", title: "What to include" },
      { id: "deletion-retention", number: "3", title: "Retention and verification" },
    ],
    body: (
      <>
        <LegalSection id="deletion-request" number="1" title="How to request deletion">
          <p>
            To request deletion of your Rikba account, email {COMPANY_EMAIL}. Please use the email address or
            phone number associated with your account where possible.
          </p>
        </LegalSection>

        <LegalSection id="deletion-what-to-send" number="2" title="What to include">
          <LegalList
            items={[
              "Your full name.",
              "The phone number or email linked to your account.",
              "Whether the account is a rider or driver account.",
              "A clear request stating that you want your account deleted.",
            ]}
          />
        </LegalSection>

        <LegalSection id="deletion-retention" number="3" title="Retention and verification">
          <p>
            Rikba may need to verify identity before actioning an account deletion request. Some data may be
            retained where required by law, fraud prevention, dispute handling, or regulatory obligations.
          </p>
          <ContactDetails />
        </LegalSection>
      </>
    ),
  },
  {
    slug: "community-guidelines",
    href: "/legal/community-guidelines",
    title: "Community Guidelines",
    shortTitle: "Community Guidelines",
    description: "The conduct standards Rikba expects from users, drivers, and platform participants.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "guidelines-respect", number: "1", title: "Respect others" },
      { id: "guidelines-safety", number: "2", title: "Prioritize safety" },
      { id: "guidelines-integrity", number: "3", title: "Protect platform integrity" },
      { id: "guidelines-consequences", number: "4", title: "Consequences" },
      { id: "guidelines-contact", number: "5", title: "Contact" },
    ],
    body: (
      <>
        <LegalSection id="guidelines-respect" number="1" title="Respect others">
          <LegalList
            items={[
              "Do not harass, threaten, or discriminate against others.",
              "Do not use abusive or hateful language on the platform.",
              "Respect the safety and dignity of riders, drivers, and support staff.",
            ]}
          />
        </LegalSection>

        <LegalSection id="guidelines-safety" number="2" title="Prioritize safety">
          <LegalList
            items={[
              "Follow all applicable laws and safety rules.",
              "Do not create unsafe conditions for vehicles, people, or property.",
              "Report urgent safety concerns promptly through the available support path.",
            ]}
          />
        </LegalSection>

        <LegalSection id="guidelines-integrity" number="3" title="Protect platform integrity">
          <LegalList
            items={[
              "Do not engage in fraud, identity misuse, or dishonest payment behavior.",
              "Do not manipulate ratings, bookings, support workflows, or account identity.",
              "Do not misuse the website, launch forms, or public contact channels.",
            ]}
          />
        </LegalSection>

        <LegalSection id="guidelines-consequences" number="4" title="Consequences">
          <p>
            Rikba may review violations of these guidelines and may restrict access, suspend accounts, remove
            content, or take other reasonable measures where needed to protect users and the platform.
          </p>
        </LegalSection>

        <LegalSection id="guidelines-contact" number="5" title="Contact">
          <ContactDetails />
        </LegalSection>
      </>
    ),
  },
  {
    slug: "contact",
    href: "/legal/contact",
    title: "Contact Rikba",
    shortTitle: "Contact",
    description: "How to contact Rikba for support, legal requests, privacy requests, and account deletion.",
    effectiveDate: EFFECTIVE_DATE,
    toc: [
      { id: "contact-company", number: "1", title: "Company contact" },
      { id: "contact-rider", number: "2", title: "Rider support" },
      { id: "contact-driver", number: "3", title: "Driver support" },
      { id: "contact-privacy", number: "4", title: "Privacy requests" },
      { id: "contact-complaints", number: "5", title: "Complaints and deletion" },
    ],
    body: (
      <>
        <LegalSection id="contact-company" number="1" title="Company contact">
          <ContactDetails />
        </LegalSection>

        <LegalSection id="contact-rider" number="2" title="Rider support">
          <p>
            Use this route for rider account issues, booking questions, or general product support connected to
            the rider-facing experience.
          </p>
        </LegalSection>

        <LegalSection id="contact-driver" number="3" title="Driver support">
          <p>
            Use this route for driver onboarding questions, operational support, or product issues connected to
            driver-facing use of the platform.
          </p>
        </LegalSection>

        <LegalSection id="contact-privacy" number="4" title="Privacy requests">
          <p>
            Privacy-related requests, including access, correction, deletion, or objection requests, should be
            sent to {COMPANY_EMAIL}. Rikba may request identity verification before responding.
          </p>
        </LegalSection>

        <LegalSection id="contact-complaints" number="5" title="Complaints and deletion">
          <p>
            Account deletion requests and formal complaints should also be directed to {COMPANY_EMAIL}, with
            enough detail for Rikba to identify the affected account or event.
          </p>
        </LegalSection>
      </>
    ),
  },
]

export function getLegalDocuments() {
  return legalDocuments
}

export function getLegalDocument(slug: LegalSlug) {
  return legalDocuments.find((document) => document.slug === slug) ?? null
}

export function getCompanyDetails() {
  return {
    companyName: COMPANY_NAME,
    companyAddress: COMPANY_ADDRESS,
    companyEmail: COMPANY_EMAIL,
    effectiveDate: EFFECTIVE_DATE,
  }
}