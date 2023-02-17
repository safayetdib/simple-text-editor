const getElement = (id) => {
	return document.getElementById(id);
};

const textStyle = (style) => {
	if (style === 'bold') {
		textArea.classList.toggle('bold');
		boldBtn.classList.toggle('btn-selected');
	} else if (style === 'italic') {
		textArea.classList.toggle('italic');
		italicBtn.classList.toggle('btn-selected');
	} else if (style === 'underline') {
		textArea.classList.toggle('underline');
		underlineBtn.classList.toggle('btn-selected');
	}

	textArea.focus();
};

const textAlign = (direction) => {
	const alignBtns = document.querySelectorAll('.text-align button');

	alignBtns.forEach((e) => e.classList.remove('btn-selected'));
	textArea.classList.remove(
		'align-left',
		'align-center',
		'align-right',
		'align-justify'
	);

	if (direction === 'left') {
		textArea.classList.toggle('align-left');
		alignLeftBtn.classList.add('btn-selected');
	} else if (direction === 'center') {
		textArea.classList.toggle('align-center');
		alignCenterBtn.classList.add('btn-selected');
	} else if (direction === 'right') {
		textArea.classList.toggle('align-right');
		alignRightBtn.classList.add('btn-selected');
	} else if (direction === 'justify') {
		textArea.classList.toggle('align-justify');
		alignJustifyBtn.classList.add('btn-selected');
	}
	textArea.focus();
};

const colorPalette = (color) => {
	textArea.style.color = color;

	textArea.focus();
};

const cancelBtnHandler = () => {
	textArea.innerText = '';
};

const saveBtnHandler = () => {
	const userInput = textArea.innerText;

	// Create element with <a> tag
	const link = document.createElement('a');
	// Create a blog object with the file content which you want to add to the file
	const file = new Blob([userInput], { type: 'text/plain' });
	// Add file content in the object URL
	link.href = URL.createObjectURL(file);
	// Add file name
	link.download = 'sample.txt';
	// Add click event to <a> tag to save file.
	link.click();
	URL.revokeObjectURL(link.href);
};
