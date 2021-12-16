import IGeo from './IGeo';

interface IAddress {
	street: number;
	suite: string;
	city: string;
	zipcode: string;
	geo: IGeo;
}

export default IAddress;
