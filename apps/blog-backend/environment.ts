// const metaENV = import.meta.env;


// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || `${new Date().toISOString().split('T')[0]}`;

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || 'development',
  'Missing environment variable: SANITY_STUDIO_DATASET'
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || 'n902zx7u',
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
);

const token = `${process.env.SANITY_API_READ_TOKEN}`;
export const previewToken = assertValue(
  token,
  'Missing environment variable:SANITY_API_READ_TOKEN'
);

export const useCdn = typeof document !== 'undefined' && process.env.NODE_ENV === 'production';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}