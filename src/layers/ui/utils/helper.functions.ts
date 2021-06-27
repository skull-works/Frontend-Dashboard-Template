export const createSearchParams = (filters: any) => {
    let params: string[] = [];

    Object.keys(filters).forEach((key: string) => { 
        params.push(`${key}=${filters[key]}`);
    });

    const paramLen = params.length;
    let searchParams = '';

    if (paramLen > 0) {
        for (let i = 0; i < paramLen ; i++) {
            if (i === (paramLen - 1))
                searchParams += params[i];
            else
                searchParams += params[i] + '&&';
        }
    }

    return searchParams;
}