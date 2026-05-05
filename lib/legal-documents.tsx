import type { ReactNode } from "react"
import { LegalCallout, LegalList, LegalSection, type LegalTocItem } from "@/components/legal/legal-page-shell"

const EFFECTIVE_DATE = "May 1, 2026"
const COMPANY_NAME = "RIKBA Rides Ltd."
const COMPANY_ADDRESS = "23, Triq Nofs in-Nhar, Valletta, VLT 1102, Malta"
const COMPANY_EMAIL = "info@rikba.eu"
const COMPANY_WEBSITE = "www.rikba.eu"
const COMPANY_WEBSITE_URL = "https://www.rikba.eu"

type LegalDocument = {
  slug: LegalSlug
  href: `/legal/${LegalSlug}`
  title: string
  shortTitle: string
  description: string
  effectiveDate: string
  toc: LegalTocItem[]
  body: ReactNode
}

export type LegalSlug =
  | "terms-for-riders"
  | "terms-for-drivers"
  | "privacy-policy"
  | "cookie-policy"
  | "account-deletion"
  | "community-guidelines"
  | "contact"

function ContactDetails() {
  return (
    <div className="rounded-2xl border border-border bg-background/70 p-6 text-foreground">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Contact</p>
      <div className="mt-4 space-y-1 text-base leading-7">
        <p className="font-semibold">{COMPANY_NAME}</p>
        <p>{COMPANY_ADDRESS}</p>
        <p>
          Website:{" "}
          <a href={COMPANY_WEBSITE_URL} className="font-semibold hover:text-primary">
            {COMPANY_WEBSITE}
          </a>
        </p>
        <p>
          Email:{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold hover:text-primary">
            {COMPANY_EMAIL}
          </a>
        </p>
      </div>
    </div>
  )
}

const riderTermsToc: LegalTocItem[] = [
  { id: "definitions", number: "1", title: "Definitions" },
  { id: "nature-of-service", number: "2", title: "Nature of the service" },
  { id: "account-registration", number: "3", title: "Account registration and eligibility" },
  { id: "booking-dispatch", number: "4", title: "Booking, dispatch, and acceptance" },
  { id: "scheduled-rides", number: "5", title: "Scheduled rides and pickup obligations" },
  { id: "pricing", number: "6", title: "Pricing, wait time, cancellation, and no-show" },
  { id: "payment-methods", number: "7", title: "Payment methods and authorisations" },
  { id: "refunds", number: "8", title: "Refunds, complaints, and chargebacks" },
  { id: "rider-conduct", number: "9", title: "Rider conduct and safety" },
  { id: "lost-property", number: "10", title: "Lost property, damage, and cleaning fees" },
  { id: "service-restrictions", number: "11", title: "Suspension, deactivation, and service restrictions" },
  { id: "liability-force-majeure", number: "12", title: "Liability and force majeure" },
  { id: "data-use", number: "13", title: "Data use and communications" },
  { id: "governing-law", number: "14", title: "Governing law and dispute resolution" },
  { id: "contact-amendments", number: "15", title: "Contact and amendments" },
  { id: "consumer-rights", number: "16", title: "Consumer rights and complaints" },
]

const driverTermsToc: LegalTocItem[] = [
  { id: "driver-definitions", number: "1", title: "Definitions and role" },
  { id: "independent-contractor", number: "2", title: "Independent contractor status" },
  { id: "driver-eligibility", number: "3", title: "Eligibility and onboarding requirements" },
  { id: "driver-app-use", number: "4", title: "Use of the app and acceptance of trips" },
  { id: "driver-service-standards", number: "5", title: "Driver service standards" },
  { id: "commission-fees", number: "6", title: "Commission, sticker programme, and fees" },
  { id: "earnings-settlement", number: "7", title: "Earnings, settlement, and deductions" },
  { id: "driver-cancellations", number: "8", title: "Cancellations, waiting time, and no-show" },
  { id: "driver-ratings", number: "9", title: "Ratings, audits, and quality controls" },
  { id: "maltese-compliance", number: "10", title: "Compliance with Maltese transport rules" },
  { id: "driver-data-protection", number: "11", title: "Data protection and confidentiality" },
  { id: "driver-suspension", number: "12", title: "Suspension and termination" },
  { id: "driver-liability", number: "13", title: "Liability and indemnity" },
  { id: "driver-governing-law", number: "14", title: "Governing law and notices" },
  { id: "driver-amendments", number: "15", title: "Amendments" },
  { id: "driver-insurance", number: "16", title: "Insurance and liability" },
]

const privacyPolicyToc: LegalTocItem[] = [
  { id: "privacy-scope", number: "1", title: "Scope of this notice" },
  { id: "controller-details", number: "2", title: "Controller details" },
  { id: "categories-of-data", number: "3", title: "Categories of personal data" },
  { id: "sources-of-data", number: "4", title: "Sources of data" },
  { id: "purposes-of-processing", number: "5", title: "Purposes of processing" },
  { id: "legal-bases", number: "6", title: "Legal bases" },
  { id: "sharing-personal-data", number: "7", title: "Sharing of personal data" },
  { id: "international-transfers", number: "8", title: "International transfers" },
  { id: "data-retention", number: "9", title: "Data retention" },
  { id: "security-measures", number: "10", title: "Security measures" },
  { id: "data-subject-rights", number: "11", title: "Data subject rights" },
  { id: "requests-response-times", number: "12", title: "Requests and response times" },
  { id: "children-marketing", number: "13", title: "Children and marketing" },
  { id: "automated-decisions", number: "14", title: "Automated decision-making and fraud systems" },
  { id: "cookies-tracking", number: "14A", title: "Cookies and tracking technologies" },
  { id: "privacy-updates-contact", number: "15", title: "Updates and contact" },
]

const cookiePolicyToc: LegalTocItem[] = [
  { id: "cookie-introduction", number: "1", title: "Introduction" },
  { id: "what-cookies-are", number: "2", title: "What cookies are" },
  { id: "types-of-cookies", number: "3", title: "Types of cookies we use" },
  { id: "cookie-legal-basis", number: "4", title: "Legal basis for using cookies" },
  { id: "cookie-consent", number: "5", title: "Consent management" },
  { id: "third-party-cookies", number: "6", title: "Third-party cookies" },
  { id: "cookie-data", number: "7", title: "Data collected through cookies" },
  { id: "cookie-retention", number: "8", title: "Retention of cookie data" },
  { id: "manage-cookies", number: "9", title: "Managing cookies through your browser" },
  { id: "cookie-transfers", number: "10", title: "International data transfers" },
  { id: "cookie-rights", number: "11", title: "Your rights" },
  { id: "cookie-changes", number: "12", title: "Updates to this Policy" },
  { id: "cookie-contact", number: "13", title: "Contact" },
]

const deleteAccountToc: LegalTocItem[] = [
  { id: "delete-my-account", number: "1", title: "Delete My Account" },
  { id: "account-deletion-info", number: "2", title: "Information we need" },
  { id: "account-deletion-retention", number: "3", title: "Verification and retention" },
]

const communityGuidelinesToc: LegalTocItem[] = [
  { id: "respect-others", number: "1", title: "Respect others" },
  { id: "follow-the-law", number: "2", title: "Follow the law" },
  { id: "prioritize-safety", number: "3", title: "Prioritize safety" },
  { id: "be-honest", number: "4", title: "Be honest" },
  { id: "keep-journeys-appropriate", number: "5", title: "Keep vehicles and journeys appropriate" },
  { id: "platform-integrity", number: "6", title: "Platform integrity" },
  { id: "guidelines-consequences", number: "7", title: "Consequences" },
  { id: "reporting-concerns", number: "8", title: "Reporting concerns" },
]

const contactToc: LegalTocItem[] = [
  { id: "contact-us", number: "1", title: "Contact us" },
  { id: "rider-support", number: "2", title: "Rider support" },
  { id: "driver-support", number: "3", title: "Driver support" },
  { id: "privacy-requests", number: "4", title: "Privacy requests" },
  { id: "contact-account-deletion", number: "5", title: "Account deletion" },
  { id: "complaints", number: "6", title: "Complaints" },
]

const riderTermsBody = (
  <>
    <LegalSection id="definitions" number="1" title="Definitions">
      <p>
        In these Terms, "RIKBA" means the digital platform operated by {COMPANY_NAME}; "Rider" means any
        individual or business user requesting services through the platform; "Driver" means an independent
        transport provider using the platform; "Trip" means any transportation service arranged through the
        platform; "Fare" means the amount payable for a Trip together with any additional charges properly
        disclosed in the app; and "Platform Services" means the digital intermediation, dispatch,
        communication, payment facilitation, support, and related technology functions made available by
        RIKBA.
      </p>
      <p>Words in the singular include the plural where appropriate, and headings are used for convenience only.</p>
    </LegalSection>

    <LegalSection id="nature-of-service" number="2" title="Nature of the service">
      <p>
        RIKBA provides a digital marketplace that allows Riders to locate, request, and pay for
        transportation services performed by independent Drivers. The transport service is provided by the
        Driver who accepts the Trip, while RIKBA provides the platform environment, app functionality,
        payment support, communication tools, safety reporting channels, and related support features.
      </p>
      <p>
        Availability depends on demand, supply, location, network connectivity, system health, weather, road
        conditions, and legal or operational constraints. RIKBA does not guarantee that a Trip request will
        always be accepted or completed.
      </p>
      <p>RIKBA does not provide transportation services and does not operate as a transport provider. All transportation services are provided by independent Drivers.</p>
      <p>
        RIKBA does not control the specific manner in which Drivers perform transportation services, except
        where necessary for platform functionality, safety standards, and compliance with applicable law.
      </p>
    </LegalSection>

    <LegalSection id="account-registration" number="3" title="Account registration and eligibility">
      <p>Users must be at least 18 years old and capable of entering into a legally binding agreement.</p>
      <p>Riders must register using accurate and complete information and must keep all details current at all times.</p>
      <p>
        RIKBA may require phone verification, email verification, identity checks, payment verification, or
        additional information where this is reasonably necessary for fraud prevention, safety, sanctions
        screening, dispute handling, or legal compliance.
      </p>
      <p>An account is personal to the registered Rider. Account sharing, impersonation, resale of account access, and unauthorized use are prohibited.</p>
    </LegalSection>

    <LegalSection id="booking-dispatch" number="4" title="Booking, dispatch, and acceptance">
      <p>
        A Trip request placed through the app is a request for matching and dispatch, not a direct acceptance
        by any specific Driver. A Driver may choose to accept or reject a request, subject to platform rules
        and applicable law.
      </p>
      <p>
        Estimated time of arrival, route, trip duration, and estimated Fare shown in the app are indicative
        and may change based on real-time conditions, including traffic, route deviations, rider delay,
        pickup point accuracy, tolls, road closures, or safety-related rerouting.
      </p>
    </LegalSection>

    <LegalSection id="scheduled-rides" number="5" title="Scheduled rides and pickup obligations">
      <p>
        Where scheduled rides are offered, the Rider must ensure that the pickup details are accurate and
        that the Rider or authorised passenger is present on time at the pickup location. Scheduled
        availability is subject to driver supply and operational conditions.
      </p>
      <p>
        The Rider is responsible for being reachable through the contact details associated with the booking.
        Failure to respond, arrive, or remain at the pickup point may result in cancellation or no-show
        charges in accordance with the app.
      </p>
    </LegalSection>

    <LegalSection id="pricing" number="6" title="Pricing, wait time, cancellation, and no-show">
      <p>
        Fares may be calculated dynamically using factors such as base fare, distance, time, category of
        vehicle, local demand, supply conditions, route complexity, waiting time, tolls, airport supplements
        where applicable, and promotional adjustments. The final Fare may differ from the estimate where the
        actual Trip materially differs from the expected Trip.
      </p>
      <p>
        If the Driver arrives and the Rider is not ready, a waiting-time charge may begin after the time
        specified in the app. This approach is consistent with ride-hailing industry practice, where wait time
        starts after arrival and compensates the Driver for time spent waiting.
      </p>
      <p>
        If a Rider cancels after the free cancellation window shown in the app, or fails to appear at the
        pickup point, a cancellation or no-show fee may be charged. If a cancellation fee is charged, a
        waiting-time fee should not additionally be charged for the same cancellation event unless expressly
        allowed and transparently disclosed.
      </p>
      <p>
        Prices displayed in the app may include or exclude applicable taxes depending on legal requirements.
        Where applicable, VAT or other indirect taxes may be included in the Fare or added separately. The
        Rider will always be informed of the total payable amount before confirming the booking.
      </p>
    </LegalSection>

    <LegalSection id="payment-methods" number="7" title="Payment methods and authorisations">
      <p>
        Rides may be paid by cash where available, or through card and other supported electronic payment
        methods integrated into the platform. By using an electronic payment method, the Rider authorises
        RIKBA and its payment processing partners to perform pre-authorisations, validity checks, holds,
        charges, reversals, and adjustments related to Trips, refunds, fees, and dispute resolution.
      </p>
      <p>Authorisation holds may appear temporarily on the Rider&apos;s payment account and may be released according to the issuing bank&apos;s processing schedule.</p>
    </LegalSection>

    <LegalSection id="refunds" number="8" title="Refunds, complaints, and chargebacks">
      <p>
        Refunds are assessed individually based on booking records, route data, timing information,
        communications, payment status, and any other relevant evidence. Refunds may be granted in full or in
        part where justified by platform error, duplicate charge, technical fault, pricing issue, or other
        valid reason.
      </p>
      <p>
        Riders must not misuse the complaints process or submit dishonest refund claims. Fraudulent claims,
        abusive chargebacks, repeated misuse of support, or attempts to circumvent payment obligations may
        result in collection efforts, payment restrictions, account suspension, or permanent deactivation.
      </p>
      <p>Nothing in this section affects any statutory rights of Riders to request a refund or compensation under applicable consumer protection laws.</p>
      <p>Where required by law, Riders may be entitled to refunds, price reductions, or other remedies in accordance with applicable regulations.</p>
    </LegalSection>

    <LegalSection id="rider-conduct" number="9" title="Rider conduct and safety">
      <p>Riders must treat Drivers, support staff, and other passengers respectfully and lawfully at all times.</p>
      <p>
        Riders must not smoke where prohibited, damage or contaminate the vehicle, distract the Driver,
        request illegal conduct, carry prohibited items, or create safety risks during the Trip.
      </p>
      <p>Violent, threatening, discriminatory, sexually inappropriate, fraudulent, or abusive conduct may result in immediate restriction or termination of access to the platform.</p>
    </LegalSection>

    <LegalSection id="lost-property" number="10" title="Lost property, damage, and cleaning fees">
      <p>
        Riders are responsible for their belongings. If an item is left in a vehicle, RIKBA may facilitate
        communication or a return arrangement as a support feature, but recovery is not guaranteed.
      </p>
      <p>
        Where a Rider causes damage to a vehicle or requires exceptional cleaning due to spillage, soiling,
        vomiting, smoking residue, or similar conduct, RIKBA may charge a reasonable fee based on evidence
        and the actual or estimated cost of remediation.
      </p>
    </LegalSection>

    <LegalSection id="service-restrictions" number="11" title="Suspension, deactivation, and service restrictions">
      <p>
        RIKBA may issue warnings, impose temporary restrictions, or deactivate accounts where necessary to
        protect the platform, Drivers, Riders, payment integrity, or legal compliance. Grounds may include
        non-payment, abuse, repeated cancellations, fake bookings, harassment, fraud, sanctions-related risk,
        or security threats.
      </p>
      <p>In urgent cases involving safety, illegal conduct, or severe abuse, action may be taken immediately.</p>
    </LegalSection>

    <LegalSection id="liability-force-majeure" number="12" title="Liability and force majeure">
      <p>
        To the fullest extent permitted by applicable law, and subject to mandatory consumer protection laws,
        RIKBA shall not be liable for indirect, incidental, special, or consequential damages, including but
        not limited to loss of profit, loss of data, or loss of opportunity.
      </p>
      <p>
        Nothing in these Terms shall limit or exclude liability where such limitation or exclusion is not
        permitted under applicable law, including liability for death or personal injury caused by negligence,
        fraud, or any other liability that cannot legally be excluded.
      </p>
    </LegalSection>

    <LegalSection id="data-use" number="13" title="Data use and communications">
      <p>
        RIKBA processes personal data in accordance with its Privacy Policy. By using the service, the Rider
        understands that trip-related data, contact details, location information, and transaction records may
        be used for dispatch, support, fraud prevention, safety, legal compliance, and service improvement.
      </p>
      <p>RIKBA may send operational communications by app notification, SMS, email, or phone where necessary for the service, security, legal notices, or account administration.</p>
    </LegalSection>

    <LegalSection id="governing-law" number="14" title="Governing law and dispute resolution">
      <p>These Terms are governed by Maltese law.</p>
      <p>
        Disputes should first be raised through customer support. If a matter remains unresolved, Riders may
        refer the dispute to the competent courts in Malta or pursue any alternative dispute resolution
        mechanisms available under applicable law.
      </p>
      <p>If any provision is found invalid, the remaining provisions continue to apply to the maximum extent permitted by law.</p>
    </LegalSection>

    <LegalSection id="contact-amendments" number="15" title="Contact and amendments">
      <p>RIKBA may amend these Terms from time to time to reflect legal, operational, commercial, or technical developments. The current version will be made available through the app or website.</p>
      <p>For notices, support, or legal correspondence, contact {COMPANY_EMAIL}.</p>
      <p>For formal legal notices, RIKBA may be contacted at its registered office address: {COMPANY_ADDRESS}.</p>
      <ContactDetails />
      <p>This Terms &amp; Conditions document constitutes the entire agreement between the Rider and RIKBA regarding the use of the platform and supersedes any prior agreements or understandings.</p>
      <p>Failure by RIKBA to enforce any provision of these Terms shall not constitute a waiver of that provision or any other rights.</p>
      <p>RIKBA may assign or transfer its rights and obligations under these Terms to another entity as part of a business transfer, merger, or restructuring, provided that this does not adversely affect Rider rights.</p>
    </LegalSection>

    <LegalSection id="consumer-rights" number="16" title="Consumer rights and complaints">
      <p>Nothing in these Terms limits or excludes any rights that Riders may have under applicable consumer protection laws.</p>
      <p>Riders have the right to submit complaints through RIKBA customer support. If a complaint is not resolved satisfactorily, Riders may refer the matter to the Malta Competition and Consumer Affairs Authority (MCCAA) or any other competent authority.</p>
      <p>Where applicable, Riders may also have access to alternative dispute resolution (ADR) mechanisms in accordance with EU consumer protection laws.</p>
      <p>If the Rider qualifies as a consumer under applicable law, mandatory consumer rights shall prevail over any conflicting provisions in these Terms.</p>
      <p>
        Riders may also use the European Commission&apos;s Online Dispute Resolution (ODR) platform, available at{" "}
        <a href="https://ec.europa.eu/consumers/odr" className="font-semibold text-foreground hover:text-primary">
          https://ec.europa.eu/consumers/odr
        </a>
        .
      </p>
    </LegalSection>
  </>
)

const driverTermsBody = (
  <>
    <LegalSection id="driver-definitions" number="1" title="Definitions and role">
      <p>
        In this Agreement, "Driver" means the independent service provider using the RIKBA platform to
        receive and complete Trip requests; "Platform Services" means the digital dispatch, payment
        facilitation, support, and related technology services provided by RIKBA; and "Commission" means the
        fee payable by the Driver for use of the platform in connection with completed Trips.
      </p>
      <p>The Driver provides transportation services independently and is responsible for the actual performance of each Trip.</p>
    </LegalSection>

    <LegalSection id="independent-contractor" number="2" title="Independent contractor status">
      <p>
        The Driver acts as an independent contractor and not as an employee, worker, partner, agent, joint
        venturer, or representative of RIKBA. The Driver is free to organise working time and acceptance of
        Trip requests, subject to platform functionality, legal obligations, and service standards reasonably
        applied through the platform.
      </p>
      <p>The Driver is solely responsible for taxes, insurance, permits, vehicle costs, fuel, mobile device, data connectivity, and all other expenses related to the Driver&apos;s business operations.</p>
      <p>The Driver retains full discretion over whether, when, and where to accept Trip requests and is not subject to fixed working hours or exclusivity requirements.</p>
      <p>Nothing in this Agreement shall be interpreted as creating an employment, worker, agency, or partnership relationship between RIKBA and the Driver.</p>
      <p>RIKBA does not exercise control over the manner in which the Driver performs transportation services beyond what is necessary for platform functionality, safety standards, and compliance with applicable law.</p>
    </LegalSection>

    <LegalSection id="driver-eligibility" number="3" title="Eligibility and onboarding requirements">
      <LegalList
        items={[
          "a valid driving licence recognised for the relevant passenger transport activity in Malta;",
          "a valid LPTV or any other permit, authorisation, or licence required by Maltese law or Transport Malta rules for the services provided;",
          "valid insurance and any commercial or passenger-carrying cover required for legal operation;",
          "clean police conduct or other fit-and-proper documentation where required by policy or law;",
          "a compliant, roadworthy, and properly registered vehicle together with accurate onboarding documentation.",
        ]}
      />
      <p>
        Drivers may be required to upload photographs or documents through the app, including driver profile
        photos, vehicle photos, driving licence images, LPTV or permit documents, insurance documents,
        vehicle registration or roadworthiness documents, police conduct or fit-and-proper documents where
        required, proof of RIKBA sticker or branding compliance, and incident, complaint, safety, support, or
        dispute evidence.
      </p>
      <p>Drivers are responsible for ensuring that all uploaded photos, documents, and related information are accurate, valid, current, complete, and legible.</p>
      <p>RIKBA may review, approve, reject, request re-upload of, or require updated photos or documents, and may refuse, suspend, or terminate onboarding or access if documentation is missing, incomplete, inaccurate, expired, invalid, or otherwise unsatisfactory.</p>
    </LegalSection>

    <LegalSection id="driver-app-use" number="4" title="Use of the app and acceptance of trips">
      <p>
        The Driver may receive Trip requests through the RIKBA app and may accept or reject such requests in
        accordance with platform functionality and reasonable usage standards. Repeated abuse of the
        acceptance, arrival, or cancellation system may lead to restrictions where necessary to protect Riders
        and platform integrity.
      </p>
      <p>The Driver must use the app personally unless fleet or substitute arrangements are expressly permitted through the platform and all required records and approvals are in place.</p>
      <p>Camera and photo uploads may be used through the app for onboarding, verification, sticker programme checks, safety incidents, complaints, disputes, and support workflows.</p>
    </LegalSection>

    <LegalSection id="driver-service-standards" number="5" title="Driver service standards">
      <LegalList
        items={[
          "The Driver must provide safe, lawful, professional, and courteous service to Riders.",
          "The Driver must comply with road traffic rules, licensing obligations, transport regulations, and safety instructions.",
          "The Driver must keep the vehicle clean, roadworthy, and suitable for the category of service offered.",
          "The Driver must not discriminate, harass, threaten, mislead, or endanger Riders or third parties.",
          "The Driver must not misuse rider data, manipulate fares, request unauthorised off-platform arrangements, or allow another person to use the Driver account without approval.",
        ]}
      />
    </LegalSection>

    <LegalSection id="commission-fees" number="6" title="Commission, sticker programme, and fees">
      <p>
        For each completed Trip, the Driver shall pay a Commission to RIKBA. Where the Driver&apos;s vehicle
        carries the official RIKBA sticker in the manner required by RIKBA and the Driver remains compliant
        with the sticker programme conditions, the Commission is 8% of the fare for each completed Trip.
      </p>
      <p>
        Where the Driver does not display the official RIKBA sticker, removes it, fails to maintain it
        properly, or is otherwise not eligible for the sticker programme, the Commission is 12% of the fare
        for each completed Trip.
      </p>
      <p>RIKBA may define technical, branding, placement, condition, inspection, and compliance rules for the sticker programme, including evidence requirements, replacement process, misuse rules, and the date from which the reduced 8% commission becomes applicable.</p>
      <p>Commission applies to completed Trips and may also apply to cancellation fees where this is stated in the driver earnings interface or fee schedule. Tips, tolls, taxes collected on behalf of public authorities, or specifically excluded amounts may be treated separately according to the app or statement details.</p>
      <p>The difference in commission rates reflects optional participation in branding, marketing, and visibility initiatives associated with the RIKBA platform and does not restrict access to the platform.</p>
    </LegalSection>

    <LegalSection id="earnings-settlement" number="7" title="Earnings, settlement, and deductions">
      <p>RIKBA may provide earnings statements, trip summaries, and settlement reports through the driver app, email, dashboard, or other digital tools. The Driver must review statements promptly and report discrepancies within a reasonable period.</p>
      <p>RIKBA may deduct Commission, agreed platform fees, verified refunds attributable to the Driver, chargeback-related losses caused by Driver misconduct, fraud-related adjustments, compensation offsets, or any other sums lawfully due under this Agreement.</p>
    </LegalSection>

    <LegalSection id="driver-cancellations" number="8" title="Cancellations, waiting time, and no-show">
      <p>Where the app allows, the Driver may become entitled to waiting-time or cancellation-related amounts if the Rider delays excessively, fails to appear, or cancels after the applicable grace period shown in the app. The Driver must be at the correct pickup point and follow the app process in order to qualify for such amounts.</p>
      <p>Improper use of arrival confirmation, false no-show claims, strategic cancellation, or manipulation of waiting time is prohibited and may result in forfeiture of fees, repayment obligations, suspension, or termination.</p>
    </LegalSection>

    <LegalSection id="driver-ratings" number="9" title="Ratings, audits, and quality controls">
      <p>RIKBA may monitor service quality through ratings, trip completion metrics, cancellation behaviour, rider complaints, incident reports, document expiry checks, mystery checks where lawful, and other operational indicators relevant to safety and service quality.</p>
      <p>RIKBA may require corrective action, additional training, updated documents, or temporary restrictions where performance or compliance concerns arise.</p>
    </LegalSection>

    <LegalSection id="maltese-compliance" number="10" title="Compliance with Maltese transport rules">
      <p>The Driver must comply with applicable Maltese transport, road, licensing, insurance, safety, and passenger service rules at all times. This includes maintaining all permits and documents required for lawful operation in the LPTV sector and complying with any operational requirements imposed by the competent authority.</p>
      <p>If any licence, permit, vehicle registration, insurance policy, or legal eligibility status expires, changes, is suspended, or is revoked, the Driver must immediately stop accepting Trips and notify RIKBA.</p>
    </LegalSection>

    <LegalSection id="driver-data-protection" number="11" title="Data protection and confidentiality">
      <p>The Driver may access rider information only to the extent necessary to complete a Trip and support related issues. The Driver must not copy, retain unnecessarily, disclose, sell, or use rider data for private marketing or unrelated purposes.</p>
      <p>All non-public business information relating to RIKBA, including pricing logic, support processes, driver metrics, technical materials, and platform documentation, is confidential and must be protected accordingly.</p>
    </LegalSection>

    <LegalSection id="driver-suspension" number="12" title="Suspension and termination">
      <p>RIKBA may warn, suspend, restrict, or terminate access where necessary for safety, compliance, service quality, fraud prevention, reputational protection, document deficiencies, misconduct, repeated low standards, abusive behaviour, fare manipulation, or breach of this Agreement.</p>
      <p>Upon termination, the Driver must cease use of platform branding and materials, stop representing any affiliation beyond completed lawful obligations, and settle outstanding amounts due.</p>
      <p>Termination of access to the platform shall not affect any accrued rights or obligations, including outstanding payments, liabilities, or legal claims.</p>
    </LegalSection>

    <LegalSection id="driver-liability" number="13" title="Liability and indemnity">
      <p>The Driver is fully responsible for the actual transportation service, driving conduct, vehicle condition, passenger treatment, traffic compliance, and legal operation of the vehicle. The Driver remains liable for the consequences of the Driver&apos;s acts or omissions in connection with Trips.</p>
      <p>The Driver shall indemnify RIKBA against claims, losses, penalties, costs, and liabilities arising from the Driver&apos;s breach of law, this Agreement, insurance obligations, confidentiality duties, data misuse, or negligent or unlawful conduct.</p>
      <p>This indemnity applies to the maximum extent permitted by applicable law and survives termination of this Agreement.</p>
    </LegalSection>

    <LegalSection id="driver-governing-law" number="14" title="Governing law and notices">
      <p>This Agreement is governed by Maltese law.</p>
      <p>Notices may be provided by app notification, dashboard message, email, or post to the address recorded by the Driver. Where appropriate, disputes may first be attempted to be resolved through mediation or alternative dispute resolution mechanisms before referral to courts, without prejudice to the right of either party to seek relief from competent courts in Malta.</p>
    </LegalSection>

    <LegalSection id="driver-amendments" number="15" title="Amendments">
      <p>RIKBA may update this Agreement, fee schedule, sticker programme rules, service standards, or operational requirements from time to time by publishing the updated version through the platform or otherwise communicating it to the Driver.</p>
      <p>This Agreement constitutes the entire agreement between the Driver and RIKBA and supersedes any prior agreements or understandings.</p>
      <p>Failure by RIKBA to enforce any provision of this Agreement shall not constitute a waiver of that provision or any other rights.</p>
      <p>RIKBA may assign or transfer its rights and obligations under this Agreement to another entity as part of a business transfer, merger, or restructuring, provided that this does not adversely affect the Driver&apos;s rights.</p>
    </LegalSection>

    <LegalSection id="driver-insurance" number="16" title="Insurance and liability">
      <p>The Driver is solely responsible for maintaining valid insurance coverage as required by applicable law, including any commercial or passenger transport insurance.</p>
    </LegalSection>
  </>
)

const privacyPolicyBody = (
  <>
    <LegalSection id="privacy-scope" number="1" title="Scope of this notice">
      <p>This Privacy Policy explains how RIKBA collects, uses, stores, shares, retains, and protects personal data relating to Riders, Drivers, website visitors, applicants, support users, and other persons who interact with the RIKBA platform and services.</p>
      <p>This notice applies to the website, mobile applications, support channels, marketing touchpoints, onboarding flows, and other interactions connected with the platform.</p>
    </LegalSection>

    <LegalSection id="controller-details" number="2" title="Controller details">
      <p>RIKBA Rides Ltd. is the controller of personal data processed for the core operation of the platform, except where a separate notice states otherwise.</p>
      <p>For privacy-related matters, users may contact RIKBA at {COMPANY_EMAIL}. Where required under applicable law, a data protection contact or representative may be appointed.</p>
      <ContactDetails />
    </LegalSection>

    <LegalSection id="categories-of-data" number="3" title="Categories of personal data">
      <p>Depending on how you use RIKBA, we may collect the following categories of personal data:</p>

      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-foreground">a. Identity data</h3>
          <div className="mt-3">
            <LegalList items={["full name;", "date of birth where required;", "profile information;", "account identifiers;", "verification-related information."]} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">b. Contact data</h3>
          <div className="mt-3">
            <LegalList items={["phone number;", "email address;", "support contact details."]} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">c. Location and trip data</h3>
          <div className="mt-3">
            <LegalList items={["pickup and drop-off information;", "GPS data during active use;", "route information;", "timestamps;", "ride history."]} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">d. Device and technical data</h3>
          <div className="mt-3">
            <LegalList items={["IP address;", "app version;", "device identifiers;", "browser details;", "operating system;", "cookies;", "logs;", "diagnostics."]} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">e. Payment and financial data</h3>
          <div className="mt-3">
            <LegalList items={["payment token data;", "transaction metadata;", "fare records;", "refund records;", "chargeback records."]} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">f. Compliance and safety data</h3>
          <div className="mt-3">
            <LegalList items={["complaints;", "incident reports;", "ratings;", "fraud indicators;", "verification results;", "communications records."]} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">g. Photographs, images, document scans, and evidence</h3>
          <div className="mt-3">
            <LegalList
              items={[
                "photographs or images uploaded through the app, including driver profile photos and vehicle photos;",
                "identity and onboarding document images, including driving licence, LPTV, permit, authorisation, insurance, vehicle registration, roadworthiness, police conduct, fit-and-proper, and similar verification documents;",
                "driver and vehicle verification documents and proof of RIKBA sticker or branding compliance;",
                "incident, complaint, safety, support, refund, damage, lost-property, or dispute evidence submitted through the platform.",
              ]}
            />
          </div>
        </div>
      </div>

      <LegalCallout title="Camera and media permissions">
        <p>Camera permission may be used to capture required photos or documents through the app.</p>
        <p>Photo or media library access may be used to select existing images or documents for upload.</p>
        <p>Photographs, images, and documents are collected only when the user chooses to capture or upload them, or where submission is required for onboarding, compliance, support, or safety workflows.</p>
        <p>You can deny these permissions, but some onboarding, verification, support, or evidence-upload features may not work properly if the required photo or document cannot be provided.</p>
      </LegalCallout>
    </LegalSection>

    <LegalSection id="sources-of-data" number="4" title="Sources of data">
      <p>RIKBA collects data directly from the user, automatically through app and website use, from payment partners, from verification and fraud-prevention vendors, from support interactions, and from authorities or third parties where legally permitted and operationally necessary.</p>
      <p>Some data is generated during platform use, such as trip history, timestamps, support logs, and app event records. Where available features allow it, data is also collected when a user captures or uploads images or documents through camera or media-library permissions.</p>
    </LegalSection>

    <LegalSection id="purposes-of-processing" number="5" title="Purposes of processing">
      <p>We process personal data for purposes including:</p>
      <LegalList
        items={[
          "account creation, login, verification, and identity management;",
          "onboarding and eligibility verification, driver and document approval, and vehicle, sticker, or branding verification;",
          "trip dispatch, matching, route coordination, navigation support, and ride history management;",
          "payment processing, refunds, accounting, fraud prevention, collections, and chargeback handling;",
          "customer support, safety and compliance checks, dispute handling, and communications;",
          "security, abuse detection, sanctions compliance, internal audit, legal defence, and regulatory cooperation;",
          "incident review and support or dispute evidence handling;",
          "product development, analytics, reliability improvements, and lawful marketing activities.",
        ]}
      />
    </LegalSection>

    <LegalSection id="legal-bases" number="6" title="Legal bases">
      <p>RIKBA relies on contractual necessity where data is required to provide bookings, trips, payments, and account functionality; on legal obligation where retention, reporting, and lawful disclosures are required; on legitimate interests for security, fraud prevention, service quality, and legal defence; and on consent where required for certain marketing or tracking activities.</p>
      <p>Where consent is used, it may be withdrawn at any time without affecting prior lawful processing. Where processing is based on legitimate interests, RIKBA ensures that such interests are balanced against the rights and freedoms of the data subject.</p>
    </LegalSection>

    <LegalSection id="sharing-personal-data" number="7" title="Sharing of personal data">
      <p>RIKBA may share personal data with Drivers for trip execution, with payment processors and banks for transaction handling, with cloud and software vendors for hosting and communications, with verification and fraud-prevention providers, with insurers and advisers, and with authorities or courts where required or appropriate under law.</p>
      <p>Only data necessary for the relevant purpose is intended to be shared. RIKBA ensures that all third-party service providers are contractually bound to process personal data in accordance with applicable data protection laws and only for specified purposes.</p>
    </LegalSection>

    <LegalSection id="international-transfers" number="8" title="International transfers">
      <p>Where personal data is transferred outside the European Economic Area, RIKBA will rely on an appropriate transfer mechanism recognised under applicable data protection law, such as adequacy decisions or standard contractual safeguards, together with supplementary measures where needed.</p>
      <p>Where required, RIKBA implements supplementary safeguards to ensure that personal data transferred outside the European Economic Area is adequately protected. Where applicable, individuals may request additional information regarding international data transfers and the safeguards applied.</p>
    </LegalSection>

    <LegalSection id="data-retention" number="9" title="Data retention">
      <p>Personal data is retained only for as long as necessary for the purposes for which it was collected and in accordance with applicable law.</p>
      <p>Typical retention periods include:</p>
      <LegalList
        items={[
          "account data: retained for the duration of the account and up to 5 years after closure;",
          "transaction and payment records: retained for up to 10 years to comply with tax and accounting obligations;",
          "support communications: retained for up to 24 months;",
          "location and trip data: retained for up to 12 months unless required for dispute resolution or legal claims;",
          "fraud and security data: retained as long as necessary to prevent abuse and comply with legal obligations.",
        ]}
      />
      <p>Data may be retained longer where required for legal claims, regulatory compliance, or safety investigations. When no longer required, data will be securely deleted, anonymised, or archived.</p>
    </LegalSection>

    <LegalSection id="security-measures" number="10" title="Security measures">
      <p>RIKBA applies technical and organisational measures designed to protect personal data, including access control, system monitoring, role-based restrictions, encrypted transmission where appropriate, vendor due diligence, and incident management procedures. No method of transmission or storage is entirely immune from risk, but RIKBA seeks to maintain safeguards proportionate to the nature of the data and the processing involved.</p>
    </LegalSection>

    <LegalSection id="data-subject-rights" number="11" title="Data subject rights">
      <LegalList
        items={[
          "the right to be informed about processing activities;",
          "the right of access to personal data;",
          "the right to rectification of inaccurate or incomplete data;",
          "the right to erasure in certain circumstances;",
          "the right to restrict processing in certain circumstances;",
          "the right to object where processing is based on legitimate interests or direct marketing;",
          "the right to data portability where applicable;",
          "the right to lodge a complaint with the competent supervisory authority, including the Office of the Information and Data Protection Commissioner (IDPC) in Malta.",
        ]}
      />
    </LegalSection>

    <LegalSection id="requests-response-times" number="12" title="Requests and response times">
      <p>Users may exercise their rights by contacting {COMPANY_EMAIL}. RIKBA may request verification before responding to a rights request where this is necessary to protect the data of the requester and others.</p>
      <p>RIKBA will respond within the timeframes required by applicable data protection law, subject to lawful extensions where complex requests justify additional time.</p>
    </LegalSection>

    <LegalSection id="children-marketing" number="13" title="Children and marketing">
      <p>The platform is not intended for independent use by children under the minimum age required by the service terms. Marketing communications will be sent only where there is a lawful basis, and recipients may opt out where applicable.</p>
    </LegalSection>

    <LegalSection id="automated-decisions" number="14" title="Automated decision-making and fraud systems">
      <p>RIKBA may use automated tools to help detect suspicious activity, payment risk, account misuse, spam, or fraud. Where such tools materially affect a user, additional review or safeguards may be applied in accordance with applicable law and internal procedures.</p>
      <p>Users have the right to request human review of decisions that significantly affect them and to contest such decisions where applicable under data protection law.</p>
    </LegalSection>

    <LegalSection id="cookies-tracking" number="14A" title="Cookies and tracking technologies">
      <p>RIKBA uses cookies and similar tracking technologies to operate and improve its website and services. Cookies may be used for authentication, security, analytics, and user experience purposes. Where required by law, users will be asked to provide consent before non-essential cookies are used. Users may manage or withdraw consent at any time through browser settings or consent tools.</p>
    </LegalSection>

    <LegalSection id="privacy-updates-contact" number="15" title="Updates and contact">
      <p>This Privacy Policy may be updated from time to time. The latest version will be published through the platform or website.</p>
      <p>Contact {COMPANY_EMAIL} for privacy-related matters.</p>
      <ContactDetails />
    </LegalSection>
  </>
)

const cookiePolicyBody = (
  <>
    <LegalSection id="cookie-introduction" number="1" title="Introduction">
      <p>This Cookie Policy explains how RIKBA Rides Ltd. ("RIKBA", "we", "us", or "our") uses cookies and similar technologies when you access or use our website, mobile applications, and related services (the "Platform").</p>
      <p>This Policy should be read together with our Privacy Policy, which explains how we process personal data.</p>
    </LegalSection>

    <LegalSection id="what-cookies-are" number="2" title="What cookies are">
      <p>Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website or use an application. Cookies are widely used to enable functionality, improve performance, enhance user experience, and provide analytics and insights.</p>
    </LegalSection>

    <LegalSection id="types-of-cookies" number="3" title="Types of cookies we use">
      <p>We use the following categories of cookies:</p>
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-foreground">3.1 Strictly Necessary Cookies</h3>
          <p className="mt-3">These cookies are essential for the operation of the Platform and cannot be switched off in our systems. They are usually set in response to actions made by you, such as logging in, requesting services, or setting privacy preferences. Without these cookies, the Platform may not function properly.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">3.2 Performance and Analytics Cookies</h3>
          <p className="mt-3">These cookies allow us to measure and improve the performance of our Platform. They help us understand how users interact with the Platform, which features are most used, and how to improve reliability and performance. All data collected through these cookies is aggregated and anonymised where possible.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">3.3 Functionality Cookies</h3>
          <p className="mt-3">These cookies enable the Platform to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our Platform. If these cookies are disabled, some features may not function properly.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">3.4 Targeting and Advertising Cookies</h3>
          <p className="mt-3">These cookies may be used to deliver relevant advertising, limit the number of times you see an advertisement, and measure the effectiveness of advertising campaigns. These cookies may be set through our Platform by advertising partners.</p>
        </div>
      </div>
    </LegalSection>

    <LegalSection id="cookie-legal-basis" number="4" title="Legal basis for using cookies">
      <p>We rely on the following legal bases: strictly necessary cookies are required for the performance of the service; other cookies (analytics, functionality, advertising) are based on your consent. Where required by law, we will request your consent before placing non-essential cookies on your device.</p>
    </LegalSection>

    <LegalSection id="cookie-consent" number="5" title="Consent management">
      <p>When you first access our Platform, you may be presented with a cookie banner allowing you to accept all cookies, reject non-essential cookies, or customise your preferences.</p>
      <p>You may withdraw or modify your consent at any time through your browser settings or cookie management tools where available. Users may also withdraw or update their cookie preferences at any time through the cookie banner or consent management tool available on the Platform, where applicable.</p>
    </LegalSection>

    <LegalSection id="third-party-cookies" number="6" title="Third-party cookies">
      <p>Some cookies may be placed by third-party service providers, including analytics providers, payment processors, security and fraud prevention services, and advertising partners. These third parties may process your data in accordance with their own privacy policies.</p>
      <p>RIKBA ensures that such providers are contractually bound to comply with applicable data protection laws. Where third-party cookies are used, users may be directed to the respective third party&apos;s privacy or cookie policies for further information.</p>
    </LegalSection>

    <LegalSection id="cookie-data" number="7" title="Data collected through cookies">
      <p>Cookies may collect information such as IP address, device type and identifiers, browser type, operating system, usage data and interactions, timestamps, and session data. Where such information constitutes personal data, it will be processed in accordance with our Privacy Policy.</p>
    </LegalSection>

    <LegalSection id="cookie-retention" number="8" title="Retention of cookie data">
      <p>Cookies are stored for different durations depending on their purpose: session cookies are deleted when you close your browser; persistent cookies are stored for a defined period or until manually deleted. Retention periods are limited to what is necessary for the purpose of the cookie.</p>
    </LegalSection>

    <LegalSection id="manage-cookies" number="9" title="Managing cookies through your browser">
      <p>You can control or disable cookies through your browser settings. Most browsers allow you to block cookies, delete cookies, or set preferences for specific websites. Please note that disabling certain cookies may affect the functionality of the Platform.</p>
    </LegalSection>

    <LegalSection id="cookie-transfers" number="10" title="International data transfers">
      <p>Where cookie data is transferred outside the European Economic Area (EEA), RIKBA ensures that appropriate safeguards are in place, such as adequacy decisions, standard contractual clauses, and supplementary technical and organisational measures.</p>
    </LegalSection>

    <LegalSection id="cookie-rights" number="11" title="Your rights">
      <p>You have rights under applicable data protection laws, including the right to access your data, rectification, erasure, restriction, objection, and withdrawal of consent at any time. You may also lodge a complaint with the relevant supervisory authority, including the Office of the Information and Data Protection Commissioner (IDPC), Malta.</p>
    </LegalSection>

    <LegalSection id="cookie-changes" number="12" title="Updates to this Policy">
      <p>We may update this Cookie Policy from time to time to reflect changes in legal, technical, or business developments. The latest version will always be available on our Platform.</p>
    </LegalSection>

    <LegalSection id="cookie-contact" number="13" title="Contact">
      <p>For any questions regarding this Cookie Policy, please contact {COMPANY_EMAIL} or write to {COMPANY_ADDRESS}.</p>
      <ContactDetails />
    </LegalSection>
  </>
)

const deleteAccountBody = (
  <>
    <LegalSection id="delete-my-account" number="1" title="Delete My Account">
      <p>Rikba provides a public web resource for users who want to request deletion of their account and associated personal data.</p>
      <p>If you would like to request deletion of your Rikba account and associated personal data, please contact us at <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
    </LegalSection>

    <LegalSection id="account-deletion-info" number="2" title="Information we need">
      <p>To help us process your request, please include:</p>
      <LegalList items={["your full name;", "the phone number linked to your Rikba account;", "whether the account is a rider or driver account."]} />
      <p>We may need to verify your identity before processing your request.</p>
      <LegalCallout title="Deletion requests">
        <p>Send your request to <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold hover:text-primary">{COMPANY_EMAIL}</a>.</p>
        <p>Once your request has been verified, we will process deletion within a reasonable timeframe.</p>
      </LegalCallout>
    </LegalSection>

    <LegalSection id="account-deletion-retention" number="3" title="Verification and retention">
      <p>Once your request has been verified, we will delete your account and associated personal data, except where we are required or permitted to retain certain information for legitimate reasons, such as:</p>
      <LegalList
        items={[
          "legal compliance;",
          "fraud prevention;",
          "safety and security;",
          "tax or accounting obligations;",
          "dispute resolution;",
          "regulatory retention requirements.",
        ]}
      />
      <p>For account deletion requests, please contact: <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
    </LegalSection>
  </>
)

const communityGuidelinesBody = (
  <>
    <LegalSection id="respect-others" number="1" title="Respect others">
      <p>Treat all users with courtesy and respect.</p>
      <p>Harassment, threats, abusive language, intimidation, discrimination, or unwanted physical contact are not allowed.</p>
    </LegalSection>

    <LegalSection id="follow-the-law" number="2" title="Follow the law">
      <p>Use Rikba only for lawful purposes.</p>
      <p>Do not engage in:</p>
      <LegalList items={["fraud;", "identity misuse;", "theft;", "violence;", "transport of prohibited or dangerous items;", "unlawful activity of any kind."]} />
    </LegalSection>

    <LegalSection id="prioritize-safety" number="3" title="Prioritize safety">
      <p>Drivers must operate vehicles safely and lawfully.</p>
      <p>Riders must not interfere with the safe operation of the vehicle.</p>
      <p>Any conduct that creates a safety risk may result in immediate suspension or permanent removal from the platform.</p>
    </LegalSection>

    <LegalSection id="be-honest" number="4" title="Be honest">
      <p>Do not provide false account details, false trip information, manipulated locations, false complaints, or dishonest payment claims.</p>
    </LegalSection>

    <LegalSection id="keep-journeys-appropriate" number="5" title="Keep vehicles and journeys appropriate">
      <p>Drivers are expected to keep vehicles clean, safe, and suitable for passenger transport.</p>
      <p>Riders should respect vehicles and avoid causing damage or unreasonable mess.</p>
    </LegalSection>

    <LegalSection id="platform-integrity" number="6" title="Platform integrity">
      <p>Do not misuse the app, attempt to bypass platform rules, tamper with platform systems, or engage in technical abuse, scraping, or fraud.</p>
    </LegalSection>

    <LegalSection id="guidelines-consequences" number="7" title="Consequences">
      <p>Rikba may investigate reports of misconduct and may take actions including:</p>
      <LegalList items={["warnings;", "temporary restrictions;", "suspension;", "permanent deactivation;", "referral to law enforcement or regulators where appropriate."]} />
    </LegalSection>

    <LegalSection id="reporting-concerns" number="8" title="Reporting concerns">
      <p>If you experience unsafe, abusive, or inappropriate behaviour, please report it through the app where available or by contacting <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
    </LegalSection>
  </>
)

const contactBody = (
  <>
    <LegalSection id="contact-us" number="1" title="Contact us">
      <p>If you need help with your Rikba account, a ride issue, a privacy request, or a legal or compliance matter, please contact us.</p>
      <ContactDetails />
    </LegalSection>

    <LegalSection id="rider-support" number="2" title="Rider support">
      <p>For questions relating to bookings, fares, ride issues, driver conduct, or lost property, please contact: <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
    </LegalSection>

    <LegalSection id="driver-support" number="3" title="Driver support">
      <p>For questions relating to onboarding, documents, payouts, trip issues, or account access, please contact: <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
    </LegalSection>

    <LegalSection id="privacy-requests" number="4" title="Privacy requests">
      <p>For privacy-related questions, access requests, correction requests, or deletion requests, please contact: <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
    </LegalSection>

    <LegalSection id="contact-account-deletion" number="5" title="Account deletion">
      <p>If you would like to request deletion of your Rikba account and associated personal data, please contact: <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a>.</p>
      <p>Please include your full name, phone number linked to the account, and whether the account is a rider or driver account.</p>
    </LegalSection>

    <LegalSection id="complaints" number="6" title="Complaints">
      <p>If you wish to submit a complaint regarding the Rikba platform or a service experience, please send your complaint to <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-foreground hover:text-primary">{COMPANY_EMAIL}</a> with sufficient detail for us to review the matter.</p>
      <LegalCallout title="Include this in your message">
        <LegalList
          items={[
            "your full name;",
            "the phone number linked to the account;",
            "whether the issue relates to a rider or driver account;",
            "the date, time, and details of the issue you want reviewed.",
          ]}
        />
      </LegalCallout>
    </LegalSection>
  </>
)

export const legalDocuments: Record<LegalSlug, LegalDocument> = {
  "terms-for-riders": {
    slug: "terms-for-riders",
    href: "/legal/terms-for-riders",
    title: "Rider Terms & Conditions",
    shortTitle: "Rider terms",
    description: "Terms governing the use of the RIKBA platform by riders requesting services through the platform.",
    effectiveDate: EFFECTIVE_DATE,
    toc: riderTermsToc,
    body: riderTermsBody,
  },
  "terms-for-drivers": {
    slug: "terms-for-drivers",
    href: "/legal/terms-for-drivers",
    title: "Driver Agreement",
    shortTitle: "Driver agreement",
    description: "Independent driver terms governing onboarding, access to, and use of the RIKBA platform.",
    effectiveDate: EFFECTIVE_DATE,
    toc: driverTermsToc,
    body: driverTermsBody,
  },
  "privacy-policy": {
    slug: "privacy-policy",
    href: "/legal/privacy-policy",
    title: "Privacy Policy",
    shortTitle: "Privacy policy",
    description: "How RIKBA collects, uses, stores, shares, retains, and protects personal data across the platform.",
    effectiveDate: EFFECTIVE_DATE,
    toc: privacyPolicyToc,
    body: privacyPolicyBody,
  },
  "cookie-policy": {
    slug: "cookie-policy",
    href: "/legal/cookie-policy",
    title: "Cookie Policy",
    shortTitle: "Cookie policy",
    description: "How RIKBA uses cookies and similar technologies across its website, apps, and related services.",
    effectiveDate: EFFECTIVE_DATE,
    toc: cookiePolicyToc,
    body: cookiePolicyBody,
  },
  "account-deletion": {
    slug: "account-deletion",
    href: "/legal/account-deletion",
    title: "Delete My Rikba Account",
    shortTitle: "Delete account",
    description: "How to request deletion of a Rikba account and associated personal data.",
    effectiveDate: EFFECTIVE_DATE,
    toc: deleteAccountToc,
    body: deleteAccountBody,
  },
  "community-guidelines": {
    slug: "community-guidelines",
    href: "/legal/community-guidelines",
    title: "Community Guidelines",
    shortTitle: "Community guidelines",
    description: "Platform conduct rules designed to support trust, safety, and respectful behaviour across Rikba.",
    effectiveDate: EFFECTIVE_DATE,
    toc: communityGuidelinesToc,
    body: communityGuidelinesBody,
  },
  contact: {
    slug: "contact",
    href: "/legal/contact",
    title: "Contact Rikba",
    shortTitle: "Contact and complaints",
    description: "Contact details for rider support, driver support, privacy requests, account deletion requests, and complaints.",
    effectiveDate: EFFECTIVE_DATE,
    toc: contactToc,
    body: contactBody,
  },
}

export const legalDocumentOrder: LegalSlug[] = [
  "terms-for-riders",
  "terms-for-drivers",
  "privacy-policy",
  "cookie-policy",
  "account-deletion",
  "community-guidelines",
  "contact",
]

export const legalGroups: Array<{
  title: string
  description: string
  slugs: LegalSlug[]
}> = [
  {
    title: "Platform terms",
    description: "Core contractual terms for passengers and independent drivers using Rikba.",
    slugs: ["terms-for-riders", "terms-for-drivers"],
  },
  {
    title: "Privacy and account controls",
    description: "How Rikba handles personal data, cookies, and verified account deletion requests.",
    slugs: ["privacy-policy", "cookie-policy", "account-deletion"],
  },
  {
    title: "Safety, conduct, and support",
    description: "Community standards and the main contact paths for legal, privacy, rider, and driver issues.",
    slugs: ["community-guidelines", "contact"],
  },
]

export function getLegalDocuments() {
  return legalDocumentOrder.map((slug) => legalDocuments[slug])
}

export function getLegalDocument(slug: string) {
  const normalizedSlug = slug === "delete-account" ? "account-deletion" : slug
  return legalDocuments[normalizedSlug as LegalSlug] ?? null
}

export function getCompanyDetails() {
  return {
    companyName: COMPANY_NAME,
    companyAddress: COMPANY_ADDRESS,
    companyEmail: COMPANY_EMAIL,
    companyWebsite: COMPANY_WEBSITE,
    effectiveDate: EFFECTIVE_DATE,
  }
}

export { COMPANY_EMAIL }