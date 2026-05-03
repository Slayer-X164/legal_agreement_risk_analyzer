import { Display } from '#/components/resultsPageComponents/Display'
import ResultNotFound from '#/components/resultsPageComponents/ResultNotFound'
import { ScoreCard } from '#/components/resultsPageComponents/ScoreCard'
import { TypeButtons } from '#/components/resultsPageComponents/TypeButtons'
import { useResultStore } from '#/store/useStore'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/results')({
  component: RouteComponent,
})

const result = {
  "overall_score": 30,
  "summary": "This offer letter contains several clauses that are heavily skewed in favor of the employer, presenting significant risks to the employee. Key concerns include the arbitrary modification of compensation, indefinite probation with at-will termination, and a broad waiver of rights. The lack of clarity and potential for unilateral changes create an unbalanced agreement.",
  "number_of_clauses": {
    "low": 2,
    "medium": 1,
    "high": 4
  },
  "clauses": [
    {
      "id": "c1",
      "text": "You will receive a Cost to Company (CTC) of ₹6,00,000 per annum. The structure of compensation, including bonuses, incentives, and reimbursements, shall be at the sole discretion of the Company and may be modified at any time without prior notice.",
      "risk": "high",
      "category": "Compensation",
      "reason": "This clause gives the company complete discretion to alter the compensation structure, including bonuses and incentives, without any notice. This creates significant financial uncertainty for the employee.",
      "suggestion": "The Company shall provide at least 30 days' written notice before making any modifications to the compensation structure, bonuses, or incentives. Specific criteria for bonus eligibility should be clearly defined."
    },
    {
      "id": "c2",
      "text": "You will be on probation for a period of 12 months, which may be extended indefinitely at the Company’s discretion. During this period, your employment may be terminated without notice or reason.",
      "risk": "high",
      "category": "Probation and Termination",
      "reason": "The indefinite extension of the probation period and the ability to terminate employment without notice or reason during this extended period create extreme job insecurity for the employee.",
      "suggestion": "The probation period shall be a maximum of 12 months. If extended, the extension shall be for a fixed period (e.g., 3 months) with clear performance improvement goals. Termination during probation should require a minimum notice period of 15 days or pay in lieu thereof, except in cases of gross misconduct."
    },
    {
      "id": "c3",
      "text": "By accepting this offer, you agree that this document supersedes any prior discussions or agreements, and that you waive any rights to dispute its terms in any jurisdiction.",
      "risk": "high",
      "category": "Binding Agreement and Waiver",
      "reason": "This clause is overly broad and potentially unenforceable. It attempts to waive all prior discussions and any future rights to dispute terms in any jurisdiction, which could prevent the employee from seeking legal recourse for unfair practices.",
      "suggestion": "By accepting this offer, you agree that this document constitutes the entire agreement between you and the Company regarding your employment. This clause shall not be interpreted to waive any statutory rights or protections afforded to employees under applicable law."
    },
    {
      "id": "c4",
      "text": "Unused leaves may be carried forward or encashed as per applicable rules",
      "risk": "medium",
      "category": "Paid Leave",
      "reason": "The phrase 'as per applicable rules' is vague. It leaves the decision of whether to carry forward or encash unused leave entirely to company policy, which might not be favorable to the employee.",
      "suggestion": "Unused paid annual leave shall be carried forward to the next year, up to a maximum of [Number] days. Any remaining unused leave at the end of the employment term shall be encashed at the employee's base salary rate."
    },
    {
      "id": "c5",
      "text": "The employee shall be entitled to 18 days of paid annual leave, 12 casual/sick leaves, and all public holidays as per Company policy.",
      "risk": "low",
      "category": "Paid Leave",
      "reason": "This clause clearly outlines the entitlement to paid leave and holidays, which is standard and fair.",
      "suggestion": ""
    },
    {
      "id": "c6",
      "text": "The Company shall provide comprehensive health insurance coverage for the employee and immediate family members. This includes hospitalization, emergency care, and annual health check-ups.",
      "risk": "low",
      "category": "Health & Insurance Benefits",
      "reason": "This clause clearly states the provision of health insurance benefits, which is a positive and standard term.",
      "suggestion": ""
    },
    {
      "id": "c7",
      "text": "Any work performed beyond standard working hours shall be compensated either through overtime pay or compensatory time off, as mutually agreed.",
      "risk": "medium",
      "category": "Overtime Compensation",
      "reason": "While it mentions compensation for overtime, the 'mutually agreed' aspect can lead to disputes if the company is unwilling to agree on terms favorable to the employee. The lack of defined overtime rates or calculation methods is also a concern.",
      "suggestion": "Overtime work shall be compensated at a rate of 1.5 times the employee's hourly rate, or through compensatory time off at a 1:1 ratio, subject to prior approval by the employee's manager. The specific rate and method of compensation shall be agreed upon in writing before the overtime is performed."
    }
  ]
}

function RouteComponent() {
  // const {result} = useResultStore()


  return (
    <>
      {result != null ? (
        <div className='flex flex-col gap-3 flex-1 w-full h-full  '>
          <ScoreCard result={result} />
          <TypeButtons />
          <Display/>
        </div>
      ) : (
        <ResultNotFound />
      )}
    </>
  )
}

