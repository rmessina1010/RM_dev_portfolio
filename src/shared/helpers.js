export const NBSP = String.fromCharCode(160);

export const preventWidows = str => str.replace(/\s([^\s]+)$/,NBSP+`$1`);
