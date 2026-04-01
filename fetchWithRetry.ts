export interface FetchWithRetryOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
}

export async function fetchWithRetry(
  url: string,
  options: FetchWithRetryOptions = {}
): Promise<Response> {
  const { retries = 3, retryDelay = 1000, ...fetchOptions } = options;

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      // Retry for 5xx server errors or 429 Too Many Requests
      if ((response.status >= 500 && response.status < 600) || response.status === 429) {
        throw new Error(`Server returned ${response.status}`);
      }
    }

    return response;
  } catch (error) {
    if (retries > 0) {
      console.warn(`Fetch failed. Retrying in ${retryDelay}ms... (${retries} retries left)`);
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
      return fetchWithRetry(url, {
        ...options,
        retries: retries - 1,
      });
    } else {
      throw error;
    }
  }
}
