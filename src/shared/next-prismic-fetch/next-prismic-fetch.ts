import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Store } from 'redux';
import { fetchPrismicDataCompletedAction } from 'redux/actions/ui.action';
// store
import { AppState } from 'redux/reducers';
// helper
import { PrismicDataPayloadType } from 'redux/types/ui.types';
import { prismicService } from 'services/api-services/PrismicService';
import { Utils } from 'utils/Utils';

export interface ServerSideDataProps {
  query: ParsedUrlQuery;
  params: Partial<any>;
  prismicData?: PrismicDataPayloadType;
  data?: any;
}

export interface NextPageProps {
  serverData: ServerSideDataProps;
}

const nextPrismicFetch =
  (
    store?: Store<AppState>,
    doFetchPrismicData?: boolean,
    callback?: null | ((context: GetServerSidePropsContext) => Promise<any>),
    config?: {
      dataKey?: string;
    }
  ): GetServerSideProps =>
  async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<any>> => {
    try {
      let serverData: ServerSideDataProps = {
        query: context.query,
        params: Utils.sanitizeObject(context.params),
      };

      if (doFetchPrismicData && store) {
        const { prismicData } = store.getState().ui;
        if (!prismicData) {
          const fetchedData = await prismicService.fetchPrismicData();
          serverData = {
            ...serverData,
            prismicData: fetchedData,
          };
          store.dispatch(fetchPrismicDataCompletedAction(fetchedData));
        }
      }

      if (callback) {
        serverData = {
          ...serverData,
          [config?.dataKey || 'data']: await callback?.(context),
        };
      }

      return {
        props: {
          serverData,
        },
      };
    } catch (e: any) {
      return {
        props: {
          error: e.message,
        },
      };
    }
  };

export default nextPrismicFetch;
