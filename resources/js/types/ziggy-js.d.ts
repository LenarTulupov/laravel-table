declare module 'ziggy-js' {
    export function route(
        name: string,
        params?: Record<string, any>,
        absolute?: boolean,
        customZiggy?: Record<string, any>
    ): string;

    export function current(name?: string): boolean;
}
