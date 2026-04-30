import { useResultStore } from '#/store/useResultStore'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/results')({
  component: RouteComponent,
})
const result = {
  "overall_score": 20,
  "summary": "This lease agreement is heavily skewed in favor of the Owner, with several clauses presenting significant risks to the Tenant. Key areas of concern include the arbitrary use of the security deposit, unlimited rent revision power, and the Owner's unfettered discretion in reclaiming possession.",
  "clauses": [
    {
      "id": "c1",
      "text": "The Tenant shall pay a security deposit of n________ prior to occupying the premises. The deposit shall be returned within 15 days of vacating the premises, subject to deductions for damages, if any.",
      "risk": "medium",
      "category": "Security Deposit",
      "reason": "While it mentions return within 15 days, it's vague about what constitutes 'damages' and doesn't specify a process for itemizing deductions.",
      "suggestion": "The security deposit of [Amount] shall be returned to the Tenant within 15 days of vacating the premises, less any deductions for actual damages beyond normal wear and tear. The Owner shall provide an itemized list of any deductions within 7 days of vacating."
    },
    {
      "id": "c2",
      "text": "The Owner shall be responsible for major structural repairs, including plumbing and electrical systems. The Tenant shall maintain the premises in good condition and handle minor repairs.",
      "risk": "medium",
      "category": "Maintenance",
      "reason": "The definition of 'major structural repairs' and 'minor repairs' is subjective and could lead to disputes. The Tenant might be held responsible for repairs that are arguably the Owner's responsibility.",
      "suggestion": "The Owner shall be responsible for all repairs to the structural integrity of the building, including the roof, foundation, walls, and all plumbing, electrical, and HVAC systems. The Tenant shall be responsible for keeping the premises clean and in good condition, and for minor cosmetic repairs such as changing light bulbs and unclogging drains."
    },
    {
      "id": "c3",
      "text": "Either party may terminate this agreement by providing a written notice of 30 days in advance.",
      "risk": "low",
      "category": "Termination",
      "reason": "This clause is generally fair, allowing both parties a reasonable notice period for termination.",
      "suggestion": "Either party may terminate this agreement by providing a written notice of 30 days in advance. However, termination by the Owner may be subject to applicable laws regarding tenant rights."
    },
    {
      "id": "c4",
      "text": "The Owner reserves the right to reclaim possession of the premises at their discretion.",
      "risk": "high",
      "category": "Possession and Eviction",
      "reason": "This clause is extremely risky for the Tenant as it allows the Owner to evict the Tenant at any time for any reason, without due process or legal grounds, which is likely illegal and unfair.",
      "suggestion": "The Owner may only reclaim possession of the premises in accordance with applicable landlord-tenant laws and for legally recognized reasons, such as non-payment of rent or breach of lease terms, and only after providing the legally required notice and obtaining a court order if necessary."
    },
    {
      "id": "c5",
      "text": "The security deposit shall not be refunded under any circumstances, unless otherwise decided by the Owner.",
      "risk": "high",
      "category": "Security Deposit",
      "reason": "This clause completely negates the purpose of a security deposit and gives the Owner absolute power to withhold it, which is unfair and likely illegal.",
      "suggestion": "The security deposit shall be returned to the Tenant within 15 days of vacating the premises, less any deductions for actual damages beyond normal wear and tear. The Owner shall provide an itemized list of any deductions within 7 days of vacating."
    },
    {
      "id": "c6",
      "text": "The Owner may revise the monthly rent at any time, with or without prior notice.",
      "risk": "high",
      "category": "Rent Revision",
      "reason": "This clause allows for arbitrary and potentially excessive rent increases without any notice, creating significant financial instability for the Tenant.",
      "suggestion": "The Owner may revise the monthly rent upon renewal of this lease agreement, or at any time during the lease term by providing the Tenant with at least 60 days' written notice. Rent increases shall be reasonable and in accordance with local rent control laws, if applicable."
    },
    {
      "id": "c7",
      "text": "Delay in rent payment may result in penalties.",
      "risk": "medium",
      "category": "Rent Payment",
      "reason": "The clause is vague about the nature and amount of penalties, which could be excessive or unfair.",
      "suggestion": "A late fee of [Specify Amount or Percentage] shall be charged for rent payments received more than [Number] days after the due date. This late fee shall not exceed the maximum amount permitted by law."
    }
  ]
}

function RouteComponent() {
  const {result} = useResultStore()
  return <div>
    <h1>{result?.overall_score}</h1>
    <h3>{result?.summary}</h3>
  </div>
}
