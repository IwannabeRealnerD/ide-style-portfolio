import { usePathname, useRouter } from "next/navigation";

export const useGlobalRouterPush = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routerPush = (query: Record<string, string | string[]>) => {
    const url = new URL(pathname, window.location.origin);
    const params = new URLSearchParams(url.search);

    Object.entries(query).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          params.append(key, v);
        });
      } else {
        params.set(key, value);
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  return { routerPush };
};
