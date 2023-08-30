export interface CardsRequest {
  cards?: CardsEntity[] | null;
  accounts?: AccountsEntity[] | null;
  cardTokens?: null[] | null;
}

export interface CardsEntity {
  flags: number;
  paymentSystem: string;
  openDate: string;
  cardLayout: CardLayout;
  availableBalances?:
    | AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack[]
    | null;
  totalBlackCardAvailableBalance?: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack1 | null;
  cardHolder: CardHolder;
  productTitle: string;
  productName: string;
  bankName: string;
  maskedCardPan: string;
  cardState: string;
  expirationDate: string;
  accounts?: AccountsEntity1[] | null;
  isCardOwner: boolean;
  customerFullName: string;
  hasPremierLounge: boolean;
  cardExternalId: string;
  additionalCards?: null[] | null;
  isVisibleOnMain: boolean;
  productCode: string;
  isAccountOwner: boolean;
  balanceIsVisibleOnMain: boolean;
  plastType: string;
  isPinSet: boolean;
  cardIssueState: string;
  isDefaultProduct: boolean;
  capability: Capability;
}

export interface CardLayout {
  url: string;
  bgColor: string;
  eTag: string;
}

export interface AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack {
  amount: number;
  currency: string;
}

export interface AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack1 {
  amount: number;
  currency: string;
}

export interface CardHolder {
  firstName: string;
  lastName: string;
}

export interface AccountsEntity1 {
  iban: string;
  accountNumber: string;
}

export interface Capability {
  forDefaultProduct: boolean;
}

export interface AccountsEntity {
  blockedIncomeAmount: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  blockedOutcomeAmount: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  availableBalance: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  interestDebt: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  spentCreditLimit: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  iban: string;
  lastIncomeTransaction: LastIncomeTransactionOrLastOutcomeTransaction;
  lastOutcomeTransaction: LastIncomeTransactionOrLastOutcomeTransaction;
  creditLimitAmount: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  interestRate: number;
  minMonthPaymentAmount: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  openDate: string;
  accountNumber: string;
  accountState: string;
  closingStatus: string;
  currencyCode: string;
  availableOverLimit: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  minMonthPaymentDate: string;
  accountType: string;
  productTitle: string;
  isVisibleOnMain: boolean;
  cardLayout: CardLayout;
  monthlyCashBack: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  balanceIsVisibleOnMain: boolean;
  cardAccountType: string;
  isDefaultProduct: boolean;
  capability: Capability;
}

export interface LastIncomeTransactionOrLastOutcomeTransaction {
  balance: AvailableBalancesEntityOrTotalBlackCardAvailableBalanceOrBalanceOrBlockedIncomeAmountOrBlockedOutcomeAmountOrAvailableBalanceOrInterestDebtOrSpentCreditLimitOrCreditLimitAmountOrMinMonthPaymentAmountOrAvailableOverLimitOrMonthlyCashBack;
  date: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  session_state: string;
  scope: string;
}
