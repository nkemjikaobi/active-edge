import IAddress from './IAddress';
import ICompany from './ICompany';

interface IArtists {
	id: number;
	name: string;
	username: string;
	email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany
}

export default IArtists;
