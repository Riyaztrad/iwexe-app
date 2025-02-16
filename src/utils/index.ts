import { IGetAdditionalLeadData } from "@/interfaces/additionalLead.types";
import { IDatetimeFormat } from "@/interfaces/global.types";
import dayjs from "dayjs";

export const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

export const tablePages = [5, 10, 25, 50, 75, 100];

export const rowTextColor = (bgColor?: any) => {
  const getColor = ["#ff0e40", "#0000ff", "rgb(159 51 45)", "#909090"].includes(
    bgColor || ""
  )
    ? "#FFFFFF"
    : "#000000";
  return getColor;
};

export function textEllipsis(
  str: string,
  maxLength: number,
  { ellipsis = "..." } = {}
) {
  if (!str) {
    return "";
  }
  if (str.length > maxLength) {
    return str.slice(0, maxLength - ellipsis.length) + ellipsis;
  }
  return str;
}

function extractContactNumbers(lead: any) {
  const contactNumbers: any[] = [];

  if (lead.mobile) {
    contactNumbers.push({ id: lead.mobile, value: lead.mobile });
  }
  if (lead.phone) {
    contactNumbers.push({ id: lead.phone, value: lead.phone });
  }
  if (lead.officeNumber) {
    contactNumbers.push({ id: lead.officeNumber, value: lead.officeNumber });
  }
  if (lead.phoneNumber) {
    contactNumbers.push({ id: lead.phoneNumber, value: lead.phoneNumber });
  }

  return contactNumbers;
}

export function combineSMSNumbers(
  additionalContacts: IGetAdditionalLeadData[],
  primaryContact: any,
  setSmsList: (contacts: any[]) => void
) {
  const storeAdditionalContact: any[] = [];

  storeAdditionalContact.push(...extractContactNumbers(primaryContact));

  additionalContacts.forEach((lead) => {
    storeAdditionalContact.push(...extractContactNumbers(lead));
  });

  setSmsList(storeAdditionalContact);
  return storeAdditionalContact;
}

export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode =
      phoneNumberString.charAt(0) !== "+" && match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return phoneNumberString;
}

export const dateFormatter = (
  d: any,
  dateOnly?: boolean,
  hasFancyFormat?: boolean,
  isSec?: boolean,
  noDefault?: boolean
) => {
  if (!d && noDefault) {
    return "";
  }
  if (dateOnly) {
    return `${dayjs(d).format("MM/DD/YYYY")}`;
  }

  if (hasFancyFormat) {
    return `${dayjs(d).format("MMM DD, YYYY")}`;
  }
  if (isSec) {
    return `${dayjs(d).format("MM/DD/YYYY, hh:mm:ss A")}`;
  }
  return `${dayjs(d).format("MM/DD/YYYY, hh:mm A")}`;
};

export function getFullName(params: { firstName: string; lastName: string }) {
  const firstName = params.firstName || "";
  const lastName = params.lastName || "";
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}
export const convertDateUtcToLocal = (
  params: IDatetimeFormat
): string | null => {
  if (!params?.utcDate) {
    return null;
  }
  const utcDateObject = new Date(params?.utcDate);

  // Format the local date as per your requirement

  let options: Intl.DateTimeFormatOptions;
  if (params.hasDateOnly) {
    options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // hour12: true, // Set to true for 12-hour format
      // timeZone: "America/New_York", // Adjust timezone as needed
      // timeZoneName: "short",
    };
  } else if (params.hasDatetime) {
    options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",

      hour12: true, // Set to true for 12-hour format
    };
  } else {
    options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Set to true for 12-hour format
    };
  }
  const formattedLocalDate = utcDateObject.toLocaleString("en-US", options);
  return formattedLocalDate;
};
