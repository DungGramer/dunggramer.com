// const metaENV = import.meta.env;

const env = process.env;
console.log(`📕 env - 6:config.ts \n`, env);

export const apiVersion =
  env.NEXT_PUBLIC_SANITY_API_VERSION
  || `${new Date().toISOString().split('T')[0]}`

export const dataset = assertValue(
  env.NEXT_PUBLIC_SANITY_DATASET || 'development',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'n902zx7u',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

const token=`${env.SANITY_API_READ_TOKEN}`
export const previewToken= assertValue(token,'Missing environment variable:SANITY_API_READ_TOKEN')

export const useCdn =  typeof document !== 'undefined' && process.env.NODE_ENV === 'production'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}