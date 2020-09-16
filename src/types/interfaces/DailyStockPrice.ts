export interface DailyStockPrice {
	[key: string]: {
		'1. open': string
		'2. high': string
		'3. low': string
		'4. close': string
		'5. volume': string
	}
}

export interface CompanyStock {
	[key: string]: DailyStockPrice
}

