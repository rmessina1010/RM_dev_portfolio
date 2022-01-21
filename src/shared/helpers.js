export const preventWidows = str => str.replace(/\s([^\s]+)$/,String.fromCharCode(160)+`$1`);
