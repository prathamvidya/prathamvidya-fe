import { createClient } from 'prismicio';
import { PrismicDataPayloadType } from 'redux/types/ui.types';

class PrismicService {
  static getInstance(): PrismicService {
    return new PrismicService();
  }

  async fetchPrismicData(): Promise<PrismicDataPayloadType> {
    const client = createClient();

    const settings = (await client.getSingle('settings')).data;
    const notices = (await client.getAllByType('notice'))
      .map((notice) => ({
        uid: notice.uid,
        ...notice.data,
      }))
      .sort((a, b) => {
        if (a.date_time! < b.date_time!) return 1;
        if (a.date_time === b.date_time) {
          if (a.title! < b.title!) {
            return -1;
          }
          return 1;
        }
        return -1;
      });
    const aboutUs = (await client.getSingle('about_us')).data;

    return { settings, notices, aboutUs };
  }
}

export const prismicService = PrismicService.getInstance();
