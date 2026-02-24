export const FileType = {
  OrganizationalStructure: "organizational_structure",
  BusinessPlans: "business_plans",
  ShareCapital: "share_capital",
  Emission: "emission",
  Reports: "reports",
  ImportantFacts: "important_facts",
  CorporateCharter: "corporate_charter",
  LicensesAndCertificates: "licenses_and_certificates",
  DevelopmentStrategy: "development_strategy",
  AffiliatedIndividualsList: "affiliated_persons_list",
  CorporateGovernanceCode: "corporate_governance_code",
  CorporateRegulations: "corporate_regulations",
} as const;

export type TFileType = keyof typeof FileType[keyof typeof FileType];