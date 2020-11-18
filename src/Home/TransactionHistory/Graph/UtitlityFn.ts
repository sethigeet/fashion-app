export const lerp = (v0: number, v1: number, t: number) =>
    (1 - t) * v0 + t * v1;

import "intl";
import "intl/locale-data/jsonp/en";
export const getMonthName = (date: number) =>
    new Intl.DateTimeFormat("en", { month: "short" }).format(new Date(date));

export const getFullDate = (date: number) =>
    new Intl.DateTimeFormat("en", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

export const getNumberOfMonths = (prevDate: number, newDate: number) => {
    const newMonths =
        new Date(newDate).getFullYear() * 12 + new Date(newDate).getMonth();
    const prevMonths =
        new Date(prevDate).getFullYear() * 12 + new Date(prevDate).getMonth();

    return newMonths - prevMonths;
};

export const changeDateMonth = (date: number, monthsToAdd: number) =>
    new Date(
        new Date(date).setMonth(new Date(date).getMonth() + monthsToAdd)
    ).getTime();
