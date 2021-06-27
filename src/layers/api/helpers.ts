export const createURL = (filters: any) => {
    let params: string[] = [];

    Object.keys(filters).forEach((key: string) => { 
        params.push(`${key}=${filters[key]}`);
    })

    const paramLen = params.length;
    let url = "/api/deliveries";

    if (paramLen > 0) {
        let searchParams = '';
        for (let i = 0; i < paramLen ; i++) {
            if (i === (paramLen - 1))
                searchParams += params[i];
            else
                searchParams += params[i] + '&&';
        }

        url += `?${searchParams}`;
    }

    return url;
}