import { answer } from './answer.js'

export const paragraph = {
	name: "paragraph",
	label: "Paragraph",
	widget: "object",
	fields: [
		{ label: "Id", name: "id", widget: "string" },
		{ label: "Name", name: "Name", wiidget: "string" },
		{ label: "Created By", name: "CreatedBy", widget: "hidden" },
		{ label: "Created Date", name: "CreatedDate", widget: "hidden" },
		{ label: "Modified By", name: "ModifiedBy", widget: "hidden" },
		{ label: "Modified Date", name: "ModifiedDate", widget: "hidden" },

		{ label: "Is Active?", name: "IsActive", widget: "boolean", required: false },
		{ label: "Is Deleted?", name: "IsDeleted", widget: "boolean", required: false },
		{ label: "Skip Title Display in Headless?", name: "IsSkipHeadlessDisplay", widget: "boolean", required: false },
		
		{
			label: "Answers",
			name: "answers", 
			widget: "list",
			types: [
				answer
			]
		}
	]
}