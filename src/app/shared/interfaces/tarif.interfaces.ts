export interface ITariffs {
  totalResults: string;
  offers: IOffer[];
}

export interface IOffer {
  additionalOptions: IAdditionalOptions;
  campaign: ICampaign;
  contractTerm: IContractTerm;
  cost: ICost;
  files?: any;
  product: IProduct;
  provider: IProvider;
  rank: string;
  remarks: IRemark[];
  requiresAvailabilityCheck: string;
  signup: ISignup;
}

export interface IAdditionalOptions {
  additionalOptionsCostExplanation: IAdditionalOptionsCostExplanation;
  options: IOption[];
}

export interface IAdditionalOptionsCostExplanation {
  caption: IText;
  content: IText;
}

export interface IText {
  text: string;
}

export interface IOption {
  caption: IText;
  content: IText;
  contractTerms: IContractTerms[];
  costDetails: ICostDetails;
  costsIncluded: string;
  isMandatory: string;
  optionId: string;
  remark: string;
  shortRemark: string;
  subType: string;
  type: string;
}

export interface IContractTerms {
  baseFee: IBase;
  canBeCancelled: string;
  cancellationPeriod: IBase;
  timeFrame: ITimeFrame;
}

export interface IBase {
  amount: string;
  caption: IText;
  content: IText;
  unit: string;
}

export interface ITimeFrame {
  endMonth: string;
  startMonth: string;
}

export interface ICostDetails {
  oneTimeCost: IBase[];
  recurringCost: IRecurringCost[];
}

export interface IRecurringCost {
  amount: string;
  caption: IText;
  content: IText;
  unit: string;
  timeUnit: string;
  type: string;
}


export interface ICampaign {
  campaignEndDate: string;
  campaignId: string;
  campaignSavings: IBase;
  campaignSavingsTooltip: string;
}

export interface IContractTerm {
  cancellationPeriod: IBase;
  contractDuration: IBase;
  downloadSpeed: IBase;
  flatrates: IFlatrates;
  prolongationPeriod: IBase;
  uploadSpeed: IBase;
}

export interface IFlatrates {
  flatrates: IType[];
}

export interface IType {
  type: string;
}

export interface ICost {
  effectiveCost: IBase;
  calculationAfter24Months?: any;
  costDetails?: any;
  totalCostExplanation?: any;
}

export interface IProduct {
  accessModes: IAccessModes;
  caption: IText;
  content: IText;
  hasPhoneFlatrate: string;
  id: string;
  isForBusinessCustomers: string;
  isForStudents: string;
  isSpecialOffer: string;
  isTHomeAccess: string;
  numberOfPhoneLines: string;
  numberOfPhoneNumbers: string;
  positionZeroStatus: string;
}

export interface IAccessModes {
  accessMode: IType;
}

export interface IProvider {
  caption: IText;
  content: IText;
  id: string;
  logoUrl: string;
}

export interface IRemark {
  caption: IText;
  content: IRemarkContent;
  highlightMode: string;
  isOneTimeBonusType: string;
  printHeaderInBold: string;
  type: string;
}

export interface IRemarkContent {
  text: string;
  tooltip: ITooltip;
}

export interface ITooltip {
  body: string;
  header: string;
}

export interface ISignup {
  desktop: ISignupMurkup;
  responsive: ISignupMurkup;
}

export interface ISignupMurkup {
  caption: IText;
  content: IText;
  url: string;
}
