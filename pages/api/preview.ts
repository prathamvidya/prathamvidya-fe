import { redirectToPreviewURL, setPreviewData } from '@prismicio/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'prismicio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createClient({ req });

  await setPreviewData({ req, res });

  // eslint-disable-next-line @typescript-eslint/return-await
  return await redirectToPreviewURL({ req, res, client });
}
