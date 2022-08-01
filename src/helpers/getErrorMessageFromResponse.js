import unprocessedApiErrors from '@/globals/unprocessedApiErrors';

export default (responseData) => {
  const responseErrorsEntries = Object.entries(responseData);
  const filteredErrors = responseErrorsEntries
    .filter(([errorKey]) => !unprocessedApiErrors.includes(errorKey));
  return filteredErrors.flatMap(([, message]) => message);
};
