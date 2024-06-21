export enum ErrorTypes {
  axios = 'AXIOS',
  fetch = 'FETCH',
  sessionStorage = 'SESSION STORAGE',
  typescriptError = 'TYPESCRIPT CODE ERROR',
}

export const consoleError = (
  errorType: ErrorTypes,
  errorCode: string | undefined,
  errorMessage: string
) => {
  let errorString = `${errorType} ERROR: `;

  if (errorCode) {
    errorString += `${errorCode} - `;
  }

  errorString += errorMessage;
  console.log(errorString);
};