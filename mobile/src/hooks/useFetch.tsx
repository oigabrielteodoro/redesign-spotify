import { AxiosRequestConfig } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

import api from '~/services/api';

export function useFetch<Data = any, Error = any>(
  url: string | null,
  config?: AxiosRequestConfig,
  options?: SWRConfiguration,
) {
  const { data, error, isValidating, mutate } = useSWR<Data, Error>(
    url,
    async route => {
      if (!route) return undefined;

      const response = await api.get(route, config);

      return response.data;
    },
    options,
  );

  return { data, error, isValidating, mutate };
}
