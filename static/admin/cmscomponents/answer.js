export const answer = {
	name: "answer",
	label: "Answer",
	widget: "object",
	fields: [
		{ label: "Id", name: "id", widget: "string" },
		{ label: "Name", name: "Name", wiidget: "string" },
		{ label: "Created By", name: "CreatedBy", widget: "hidden" },
		{ label: "Created Date", name: "CreatedDate", widget: "hidden" },
		{ label: "Is Deleted?", name: "IsDeleted", widget: "boolean", required: false },
		{ label: "Is Warning?", name: "IsWarning", widget: "boolean", required: false },
		{ label: "Modified By", name: "ModifiedBy", widget: "hidden" },
		{ label: "Text", name: "Text", widget: "markdown" }
	]
}