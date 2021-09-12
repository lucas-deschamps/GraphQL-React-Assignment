export enum InsuranceType {
  Liability = "LIABILITY",
  Household = "HOUSEHOLD",
  Health = "HEALTH"
};

export enum PolicyStatus {
  Active = "ACTIVE",
  Pending = "PENDING",
  Cancelled = "CANCELLED",
  DroppedOut = "DROPPED_OUT"
};

export const policies = [
  {
    customer: "Kyle Eastwood",
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Active,
    startDate: "2017-03-03",
    endDate: "2022-03-03",
    createdAt: new Date(2017, 2, 3).toISOString(),
  },
  {
    customer: "Pedro Lopez",
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Pending,
    startDate: "2021-10-06",
    endDate: "2023-10-06",
    createdAt: new Date(2021, 9, 6).toISOString(),
  },
  {
    customer: "Angela Su",
    provider: "AXA",
    insuranceType: InsuranceType.Household,
    status: PolicyStatus.Active,
    startDate: "2000-11-27",
    endDate: "2030-11-27",
    createdAt: new Date(2000, 10, 27).toISOString(),
  },
  {
    customer: "Ngozi Anyanwu",
    provider: "AXA",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Active,
    startDate: "2019-06-23",
    endDate: "2022-06-23",
    createdAt: new Date(2019, 5, 23).toISOString(),
  },
  {
    customer: "Pieter Broek",
    provider: "Talanx",
    insuranceType: InsuranceType.Liability,
    status: PolicyStatus.DroppedOut,
    startDate: "2020-03-16",
    endDate: "2020-08-04",
    createdAt: new Date(2020, 2, 16).toISOString(),
  },
  {
    customer: "Kenji Yamada",
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Cancelled,
    startDate: "2018-02-08",
    endDate: "2018-11-09",
    createdAt: new Date(2018, 1, 8).toISOString(),
  },
  {
    customer: "Hans Müller",
    provider: "Talanx",
    insuranceType: InsuranceType.Liability,
    status: PolicyStatus.Pending,
    startDate: "2021-10-01",
    endDate: "2023-10-01",
    createdAt: new Date(2021, 9, 1).toISOString(),
  },
  {
    customer: "Gwen O'Donnell",
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Cancelled,
    startDate: "2020-06-01",
    endDate: "2021-01-01",
    createdAt: new Date(2020, 5, 1).toISOString(),
  },
];
