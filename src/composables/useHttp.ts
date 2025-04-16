import { Capacitor } from '@capacitor/core';
import { Http } from '@capacitor-community/http';

const isNative = Capacitor.getPlatform() !== 'web'

export function useHttp() {
  async function get(
    url: string,
    options?: {
      headers?: Record<string, string>
      responseType?: 'json' | 'text' | 'xml'
    }
  ) {
    const responseType = options?.responseType || 'json'

    if (isNative) {
      const res = await Http.get({
        url,
        headers: options?.headers ?? {}
      })

      if (responseType === 'xml') {
        const parser = new DOMParser()
        return parser.parseFromString(res.data, 'application/xml')
      }

      return res.data
    } else {
      const res = await fetch(url, {
        method: 'GET',
        headers: options?.headers
      })

      if (!res.ok) throw new Error(await res.text())

      if (responseType === 'xml') {
        const text = await res.text()
        const parser = new DOMParser()
        return parser.parseFromString(text, 'application/xml')
      }

      return responseType === 'text' ? await res.text() : await res.json()
    }
  }

  return {
    get
  }
}