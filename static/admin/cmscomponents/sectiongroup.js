import { section } from './section.js'

export const sectiongroup = {
	name: "SectionGroups",
	label: "SectionGroups",
	widget: "object",
	fields: [
		{ label: "Id", name: "id", widget: "string" },
		{ label: "Name", name: "Name", wiidget: "string" },
		{ label: "Created By", name: "CreatedBy", widget: "hidden" },
		{ label: "Created Date", name: "CreatedDate", widget: "hidden" },
		{ label: "Modified By", name: "ModifiedBy", widget: "hidden" },
		{ label: "Modified Date", name: "ModifiedDate", widget: "hidden" },

		{
			label: "Sections",
			name: "sections", 
			widget: "list",
			types: [
				section
			]
		}
	]
}