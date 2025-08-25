export interface ProjectsProps {
	project: string;
	description1: string;
	description2?: string
	description3?: string
	gifPath?: string;
}

interface ProjectData {
	project: string;
	description1: string;
	description2?: string;
	description3?: string;
	gifPath: string;
}

export interface ProjectsCollection {
	[key: string]: ProjectData;
}

export interface TextProps {
	title: string;
	text1: string;
	text2?: string;
	text3?: string;
	image1?: string;
	image2?: string;
	side?: boolean;
}

export interface ContactProps {
	title: string;
	text?: string;
	external_url?: string;
	qr_code?: string;
}

let blushPink: string;

blushPink = "#F0DCDC"

export { blushPink }