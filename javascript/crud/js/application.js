'use strict';

var x = 20;

function saveBook() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;

	const book = {
		title,
		author
	};

	const books = insertToTable('books', book);

	// render the books
	renderTable('books', books);
}


/**
 * Renders an HTML table dinamically
 *
 * @param tableName
 * @param tableData
 */
function renderTable(tableName, tableData) {
	let table = jQuery(`#${tableName}_table`);
	// loop through all the items of table and generates the html
	let rows = "";
	tableData.forEach((book, index) => {
		let row = `<tr><td>${book.title}</td><td>${book.author}</td>`;
		row += `<td> <a onclick="editEntity(this)" data-id="${book.id}" data-entity="${tableName}" class="link edit">Edit</a>  |  <a  onclick="deleteEntity(this);" data-id="${book.id}" data-entity="${tableName}" class="link delete">Delete</a>  </td>`;
		rows += row + '</tr>';
	});
	table.html(rows);
}

function editEntity(element) {
	debugger;
	const dataObj = jQuery(element).data();
	editElement(dataObj.entity, dataObj.id);
}

function deleteEntity(element) {
	const dataObj = jQuery(element).data();
	const newEntities = deleteFromTable(dataObj.entity, dataObj.id);
	renderTable(dataObj.entity, newEntities);
}

function loadTableData(tableName) {
	renderTable(tableName, getTableData(tableName));
}


/**
 * Binds the different events to the different elements of the page
 */
function bindEvents() {
	jQuery('#add-book-button').bind('click', function (element) {
		saveBook();
	});

}

bindEvents();