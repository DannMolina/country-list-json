declare module 'country-list-json' {
	export type CountryListItemType = {
		dial_code: string;
		code: string;
		flag: string;
		name: string;
	};
	export const countries: CountryListItemType[];
}