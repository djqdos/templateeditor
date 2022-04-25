import { paragraph } from './paragraph.js'

export const section = {
	name: "section",
	label: "Section",
	widget: "object",
	fields: [
		{ label: "Id", name: "id", widget: "string" },
		{ label: "Name", name: "Name", wiidget: "string" },
		{ label: "Created By", name: "CreatedBy", widget: "hidden" },
		{ label: "Created Date", name: "CreatedDate", widget: "hidden" },
		{ label: "Modified By", name: "ModifiedBy", widget: "hidden" },
		{ label: "Modified Date", name: "ModifiedDate", widget: "hidden" },

		{
			label: "Paragraphs",
			name: "paragraphs", 
			widget: "list",
			types: [
				paragraph
			]
		}
	]
}