import { sectiongroup } from './cmscomponents/sectiongroup.js';

const config = {
	backend: {
		// name: "proxy",		
		// proxy_url: "http://localhost:8081/api/v1"
		name: "github",
		repo: "djqdos/templateeditor",
		branch: "master"
	},
	media_folder: 'static/img',
	public_folder: '/img',

	collections: [{
		name: "pages",
		label: "pages",
		format: "json",
		create: true,
		slug: "{{slug}}",
		folder: "content/pages",
		fields: [
			{ 
				label: "SectionsGroups",
				name: "SectionGroups",
				widget: "list",
				types: [
					sectiongroup
				]
			}
		]
	}]
}

window.CMS_CONFIGURATION = config;

CMS.init({ config });