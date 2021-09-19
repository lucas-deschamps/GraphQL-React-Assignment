import { v4 as uuidv4 } from 'uuid';

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
    customer: {
      id: uuidv4(),
      firstName: "Kyle",
      lastName: "Eastwood",
      dateOfBirth: "1967-01-01"
    },
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Active,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2017-03-03",
    endDate: "2022-03-03",
    createdAt: new Date(2017, 2, 3).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Pedro",
      lastName: "Lopez",
      dateOfBirth: "1996-02-05"
    },
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Pending,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2021-10-06",
    endDate: "2023-10-06",
    createdAt: new Date(2021, 9, 6).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Angela",
      lastName: "Su",
      dateOfBirth: "1967-01-01"
    },
    provider: "AXA",
    insuranceType: InsuranceType.Household,
    status: PolicyStatus.Active,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2000-11-27",
    endDate: "2030-11-27",
    createdAt: new Date(2000, 10, 27).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Ngozi",
      lastName: "Anyanwu",
      dateOfBirth: "1986-07-23"
    },
    provider: "AXA",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Active,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2019-06-23",
    endDate: "2022-06-23",
    createdAt: new Date(2019, 5, 23).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Pieter",
      lastName: "Broek",
      dateOfBirth: "1987-06-11"
    },
    provider: "Talanx",
    insuranceType: InsuranceType.Liability,
    status: PolicyStatus.DroppedOut,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2020-03-16",
    endDate: "2020-08-04",
    createdAt: new Date(2020, 2, 16).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Kenji",
      lastName: "Yamada",
      dateOfBirth: "1992-04-22"
    },
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Cancelled,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2018-02-08",
    endDate: "2018-11-09",
    createdAt: new Date(2018, 1, 8).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Hans",
      lastName: "Müller",
      dateOfBirth: "1955-10-03"
    },
    provider: "Talanx",
    insuranceType: InsuranceType.Liability,
    status: PolicyStatus.Pending,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2021-10-01",
    endDate: "2023-10-01",
    createdAt: new Date(2021, 9, 1).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Gwen",
      lastName: "O'Donnell",
      dateOfBirth: "1983-03-10"
    },
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Cancelled,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2020-06-01",
    endDate: "2021-01-01",
    createdAt: new Date(2020, 5, 1).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Sergei",
      lastName: "Asimov",
      dateOfBirth: "1975-02-01"
    },
    provider: "Allianz",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.DroppedOut,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2005-02-01",
    endDate: "2005-06-01",
    createdAt: new Date(2005, 1, 1).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Amélie",
      lastName: "Perrin",
      dateOfBirth: "1985-03-30"
    },
    provider: "AXA",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Active,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2019-03-02",
    endDate: "2024-03-02",
    createdAt: new Date(2019, 2, 2).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Jonathan",
      lastName: "Davis",
      dateOfBirth: "1971-01-18"
    },
    provider: "Talanx",
    insuranceType: InsuranceType.Liability,
    status: PolicyStatus.Active,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2020-03-16",
    endDate: "2022-03-16",
    createdAt: new Date(2020, 2, 16).toISOString(),
  },
  {
    customer: {
      id: uuidv4(),
      firstName: "Nelson",
      lastName: "Santos",
      dateOfBirth: "1989-07-04"
    },
    provider: "AXA",
    insuranceType: InsuranceType.Health,
    status: PolicyStatus.Active,
    policyNumber: uuidv4().split('').filter(el => el.match(/\d/)).slice(0, 6).join(''),
    startDate: "2020-01-18",
    endDate: "2022-07-18",
    createdAt: new Date(2020, 0, 18).toISOString(),
  },
];
